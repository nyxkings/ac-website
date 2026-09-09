import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const featured = getFeaturedProjects(3);

  return (
    <section
      id="projects"
      className="scroll-mt-24 border-b border-line py-12 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Featured case studies from documented work. Browse all projects for additional entries still being written."
          />
          <ButtonLink
            href="/projects"
            variant="tertiary"
            className="self-start sm:self-auto"
          >
            All projects
            <ArrowRight className="h-4 w-4" aria-hidden />
          </ButtonLink>
        </div>

        <ul className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug} className="min-w-0">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        {featured.length === 0 ? (
          <p className="mt-10 text-muted">
            Featured case studies will appear here once documented.
          </p>
        ) : null}
      </Container>
    </section>
  );
}
