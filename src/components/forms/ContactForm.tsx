"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/projects";
import { site } from "@/content/site";
import { useState, type FormEvent, type ReactNode } from "react";

type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;
type FormStatus = "idle" | "loading" | "success" | "error";

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function ContactForm({
  initialStatus,
}: {
  initialStatus?: "success" | "error" | null;
}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<FormStatus>(
    initialStatus === "success"
      ? "success"
      : initialStatus === "error"
        ? "error"
        : "idle",
  );
  const [serverError, setServerError] = useState<string | null>(
    initialStatus === "error"
      ? "Could not send your message. Please try again or email me directly."
      : null,
  );

  function validateClient(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2)
      next.name = "Please enter your name (at least 2 characters).";
    if (!email.trim()) next.email = "Please enter your email address.";
    else if (!isValidEmail(email.trim()))
      next.email = "Please enter a valid email address.";
    if (message.trim().length < 10)
      next.message = "Please enter a message (at least 10 characters).";
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateClient();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }

    setStatus("loading");
    setServerError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "x-requested-with": "fetch",
        },
        body: JSON.stringify({ name, email, message, website }),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
        errors?: FieldErrors;
      } | null;

      if (response.ok && data?.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setErrors({});
        return;
      }

      if (data?.errors) setErrors(data.errors);
      setServerError(
        data?.error ??
          "Could not send your message. Please try again or email me directly.",
      );
      setStatus("error");
    } catch {
      setServerError(
        "Network error — your message was not sent. Check your connection or email me directly.",
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        className="rounded-[var(--radius-card)] border border-accent/40 bg-accent-soft/40 p-6 sm:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
          Message sent
        </p>
        <h3 className="font-display mt-2 text-xl font-semibold text-ink">
          Thanks — I&apos;ll get back to you soon.
        </h3>
        <p className="mt-3 text-sm text-muted">
          If you need a faster reply, email{" "}
          <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          .
        </p>
        <Button
          type="button"
          variant="secondary"
          className="mt-6"
          onClick={() => setStatus("idle")}
        >
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form
      action="/api/contact"
      method="post"
      onSubmit={onSubmit}
      noValidate
      className="space-y-5"
      aria-busy={status === "loading"}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="contact-name"
          label="Name"
          error={errors.name}
        >
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={name}
            disabled={status === "loading"}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={inputClass(Boolean(errors.name))}
          />
        </Field>

        <Field
          id="contact-email"
          label="Email"
          error={errors.email}
        >
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            disabled={status === "loading"}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={inputClass(Boolean(errors.email))}
          />
        </Field>
      </div>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={6}
          value={message}
          disabled={status === "loading"}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={cn(inputClass(Boolean(errors.message)), "resize-y min-h-[140px]")}
        />
      </Field>

      {/* Honeypot — hidden from users */}
      <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {status === "error" && serverError ? (
        <div
          className="rounded-[var(--radius-control)] border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-ink"
          role="alert"
        >
          <p>{serverError}</p>
          <p className="mt-2 text-muted">
            Fallback:{" "}
            <a
              className="text-accent hover:underline"
              href={`mailto:${site.email}?subject=${encodeURIComponent("Portfolio enquiry")}`}
            >
              {site.email}
            </a>
          </p>
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending…" : "Send message"}
        </Button>
        <p className="text-xs text-muted">
          Or email{" "}
          <a className="text-accent hover:underline" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-ink">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-signal" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return cn(
    "w-full rounded-[var(--radius-control)] border bg-bg px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70",
    "focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/30",
    hasError ? "border-signal" : "border-line",
  );
}
