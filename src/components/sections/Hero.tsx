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

      {/* Decorative motif — quieter on small screens so type stays primary */}
      <ForecastMotif className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-[38%] w-[115%] max-w-none opacity-40 sm:right-0 sm:left-auto sm:mx-0 sm:h-[65%] sm:w-[70%] sm:max-w-3xl sm:opacity-80 lg:w-[58%] lg:opacity-90" />

      <Container className="relative flex min-h-[min(100svh-4rem,44rem)] flex-col justify-center py-12 sm:min-h-[calc(100svh-4rem)] sm:py-20">
        <p className="font-mono text-[11px] tracking-[0.14em] text-accent uppercase sm:text-xs sm:tracking-[0.16em]">
          <span className="sm:hidden">Computer Science · FUTA</span>
          <span className="hidden sm:inline">
            Computer Science · {site.university.split("(")[0].trim()}
          </span>
        </p>

        <h1
          id="hero-heading"
          className="font-display mt-4 max-w-3xl text-[2.25rem] leading-[1.12] font-bold tracking-tight text-ink sm:mt-5 sm:text-6xl lg:text-7xl text-balance"
        >
          {site.name}
        </h1>

        <p className="mt-4 font-mono text-sm tracking-wide text-muted sm:mt-5 sm:text-base">
          {site.roleLine}
        </p>

        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted text-pretty sm:mt-6 sm:text-xl">
          Building data-driven and intelligent technology solutions — from
          analysis and forecasting to clear, usable insights.
        </p>

        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href="/projects" className="w-full sm:w-auto">
            View projects
          </ButtonLink>
          <ButtonLink
            href="/contact"
            variant="secondary"
            className="w-full sm:w-auto"
          >
            Contact
          </ButtonLink>
          <ButtonLink
            href={site.resumeUrl}
            variant="tertiary"
            className="justify-center sm:justify-start"
          >
            Resume
            <ArrowDownRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
