import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you requested could not be found.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 border-b border-line py-20">
        <Container className="max-w-xl text-center">
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            404
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold text-ink">
            Page not found
          </h1>
          <p className="mt-4 text-muted text-pretty">
            That URL doesn&apos;t match anything on this site. Head home or
            browse projects.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/">Home</ButtonLink>
            <ButtonLink href="/projects" variant="secondary">
              Projects
            </ButtonLink>
            <ButtonLink href="/contact" variant="tertiary">
              Contact
            </ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
