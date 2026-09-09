import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function ProjectNotFound() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1 border-b border-line py-20">
        <Container className="max-w-xl text-center">
          <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
            404
          </p>
          <h1 className="font-display mt-3 text-3xl font-semibold text-ink">
            Project not found
          </h1>
          <p className="mt-4 text-muted">
            That project slug doesn&apos;t exist yet. Browse the project index
            instead.
          </p>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/projects">All projects</ButtonLink>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
