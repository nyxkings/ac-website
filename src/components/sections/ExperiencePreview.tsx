import { EducationCard } from "@/components/experience/EducationCard";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { education, experience } from "@/content/experience";
import { ArrowRight } from "lucide-react";

export function ExperiencePreview() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-line py-16 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Path"
            title="Experience & education"
            description="SIWES industrial training and Computer Science at FUTA — details and skill matrix on About."
          />
          <ButtonLink
            href="/about#experience"
            variant="tertiary"
            className="self-start sm:self-auto"
          >
            Full background
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
              Experience
            </h3>
            <div className="mt-6">
              <ExperienceTimeline items={experience} compact />
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
              Education
            </h3>
            <ul className="mt-6 space-y-6">
              {education.map((item) => (
                <li key={item.id}>
                  <EducationCard item={item} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
