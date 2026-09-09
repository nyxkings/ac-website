import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  website?: string; // honeypot
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validate(payload: ContactPayload) {
  const errors: Record<string, string> = {};
  const name = payload.name?.trim() ?? "";
  const email = payload.email?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 2) errors.name = "Please enter your name (at least 2 characters).";
  if (!email) errors.email = "Please enter your email address.";
  else if (!isValidEmail(email)) errors.email = "Please enter a valid email address.";
  if (message.length < 10)
    errors.message = "Please enter a message (at least 10 characters).";

  return { name, email, message, website: payload.website?.trim() ?? "", errors };
}

async function parseBody(req: Request): Promise<ContactPayload> {
  const contentType = req.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const json = (await req.json()) as ContactPayload;
    return {
      name: String(json.name ?? ""),
      email: String(json.email ?? ""),
      message: String(json.message ?? ""),
      website: String(json.website ?? ""),
    };
  }

  const form = await req.formData();
  return {
    name: String(form.get("name") ?? ""),
    email: String(form.get("email") ?? ""),
    message: String(form.get("message") ?? ""),
    website: String(form.get("website") ?? ""),
  };
}

function wantsJson(req: Request) {
  const accept = req.headers.get("accept") ?? "";
  const contentType = req.headers.get("content-type") ?? "";
  return (
    contentType.includes("application/json") ||
    accept.includes("application/json") ||
    req.headers.get("x-requested-with") === "fetch"
  );
}

export async function POST(req: Request) {
  try {
    const payload = await parseBody(req);
    const { name, email, message, website, errors } = validate(payload);

    // Honeypot filled → pretend success (bots)
    if (website) {
      if (wantsJson(req)) {
        return NextResponse.json({ ok: true });
      }
      return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
    }

    if (Object.keys(errors).length > 0) {
      if (wantsJson(req)) {
        return NextResponse.json({ ok: false, errors }, { status: 400 });
      }
      return NextResponse.redirect(new URL("/contact?error=validation", req.url), 303);
    }

    const formId = process.env.FORMSPREE_FORM_ID?.trim();
    if (!formId) {
      if (wantsJson(req)) {
        return NextResponse.json(
          {
            ok: false,
            error:
              "The contact form is not configured yet. Please email me directly instead.",
            code: "NOT_CONFIGURED",
          },
          { status: 503 },
        );
      }
      return NextResponse.redirect(
        new URL("/contact?error=not_configured", req.url),
        303,
      );
    }

    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        _replyto: email,
        _subject: `Portfolio contact from ${name}`,
      }),
    });

    if (!response.ok) {
      if (wantsJson(req)) {
        return NextResponse.json(
          {
            ok: false,
            error: "Could not send your message. Please try again or email me directly.",
            code: "UPSTREAM",
          },
          { status: 502 },
        );
      }
      return NextResponse.redirect(new URL("/contact?error=send", req.url), 303);
    }

    if (wantsJson(req)) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.redirect(new URL("/contact?sent=1", req.url), 303);
  } catch {
    if (wantsJson(req)) {
      return NextResponse.json(
        {
          ok: false,
          error: "Something went wrong. Please try again or email me directly.",
          code: "UNEXPECTED",
        },
        { status: 500 },
      );
    }
    return NextResponse.redirect(new URL("/contact?error=send", req.url), 303);
  }
}
