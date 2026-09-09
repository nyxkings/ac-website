import { AboutNarrative } from "@/components/about/AboutNarrative";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";
import { ArrowRight } from "lucide-react";

export function AboutPreview() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-line py-12 sm:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={about.eyebrow}
            title="A CS student focused on data, not demos."
            description="Turning messy information into decisions — with analysis, careful modelling, and visualization people can use."
          />
          <ButtonLink
            href="/about"
            variant="tertiary"
            className="self-start sm:self-auto"
          >
            Full about
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-10">
          <AboutNarrative compact />
        </div>
      </Container>
    </section>
  );
}
