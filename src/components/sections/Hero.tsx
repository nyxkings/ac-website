import { Container } from "@/components/layout/Container";
import { ForecastMotif } from "@/components/sections/ForecastMotif";
import { ButtonLink } from "@/components/ui/Button";
import { site } from "@/content/site";
import { ArrowDownRight } from "lucide-react";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-line"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 85% 20%, color-mix(in srgb, var(--accent) 10%, transparent), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, color-mix(in srgb, var(--accent) 6%, transparent), transparent 50%)",
        }}
      />

      <ForecastMotif className="pointer-events-none absolute -right-8 bottom-0 h-[55%] w-[90%] max-w-3xl opacity-90 sm:right-0 sm:h-[70%] sm:w-[70%] lg:w-[60%]" />

      <Container className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-16 sm:py-20">
        <p className="font-mono text-xs tracking-[0.16em] text-accent uppercase">
          Computer Science · {site.university.split("(")[0].trim()}
        </p>

        <h1
          id="hero-heading"
          className="font-display mt-5 max-w-3xl text-5xl font-bold tracking-tight text-ink sm:text-6xl lg:text-7xl text-balance"
        >
          {site.name}
        </h1>

        <p className="mt-5 font-mono text-sm tracking-wide text-muted sm:text-base">
          {site.roleLine}
        </p>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          Building data-driven and intelligent technology solutions — from
          analysis and forecasting to clear, usable insights.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <ButtonLink href="/projects">View projects</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact
          </ButtonLink>
          <ButtonLink href={site.resumeUrl} variant="tertiary">
            Resume
            <ArrowDownRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
