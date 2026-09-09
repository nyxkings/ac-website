import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${site.name} — email, phone, LinkedIn, GitHub, or send a message about data science, analytics, or machine learning opportunities.`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: `Contact · ${site.name}`,
    description: `Get in touch with ${site.name} for data science and analytics opportunities.`,
    url: "/contact",
  },
};

type PageProps = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function ContactPage({ searchParams }: PageProps) {
  const params = await searchParams;
  const sent = params.sent === "1";
  const error = typeof params.error === "string" ? params.error : null;

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <ContactSection
          initialStatus={sent ? "success" : error ? "error" : null}
        />
      </main>
      <Footer />
    </>
  );
}
