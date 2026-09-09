import { Container } from "@/components/layout/Container";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillGroups, skillPreviewGroupIds } from "@/content/skills";
import { ArrowRight } from "lucide-react";

export function SkillsPreview() {
  const previewGroups = skillGroups.filter((g) =>
    (skillPreviewGroupIds as readonly string[]).includes(g.id),
  );

  return (
    <section
      id="skills"
      className="scroll-mt-24 border-b border-line py-12 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Skills"
            title="Tools I use to turn data into decisions"
            description="Programming, data science libraries, and visualization — with fuller groupings on the About page."
          />
          <ButtonLink
            href="/about#skills"
            variant="tertiary"
            className="self-start sm:self-auto"
          >
            All skills
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <div className="mt-12">
          <SkillsGrid groups={previewGroups} compact />
        </div>
      </Container>
    </section>
  );
}
