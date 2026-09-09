import { ArchitecturePanel } from "@/components/projects/ArchitecturePanel";
import {
  BulletList,
  CaseStudySection,
} from "@/components/projects/CaseStudySection";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { ProjectPager } from "@/components/projects/ProjectPager";
import { ProjectPipeline } from "@/components/projects/ProjectPipeline";
import { Container } from "@/components/layout/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import { getAdjacentProjects } from "@/lib/projects";
import { PROJECT_CATEGORY_LABELS, type Project } from "@/types";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Link from "next/link";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.367 6.839 9.72.5.094.682-.222.682-.482 0-.237-.009-.866-.013-1.7-2.782.617-3.369-1.37-3.369-1.37-.454-1.18-1.11-1.494-1.11-1.494-.908-.635.069-.622.069-.622 1.003.072 1.53 1.056 1.53 1.056.892 1.566 2.341 1.114 2.91.852.092-.662.35-1.114.636-1.37-2.22-.259-4.555-1.14-4.555-5.077 0-1.121.39-2.038 1.029-2.757-.103-.258-.446-1.297.098-2.703 0 0 .84-.274 2.75 1.053A9.35 9.35 0 0 1 12 6.84a9.35 9.35 0 0 1 2.504.345c1.909-1.327 2.748-1.053 2.748-1.053.546 1.406.203 2.445.1 2.703.64.719 1.028 1.636 1.028 2.757 0 3.948-2.339 4.815-4.566 5.068.359.317.679.943.679 1.901 0 1.371-.012 2.477-.012 2.814 0 .263.18.58.688.481A10.02 10.02 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.slug);

  return (
    <article>
      <header className="relative overflow-hidden border-b border-line">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 90% 10%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 55%)",
          }}
          aria-hidden
        />
        <Container className="relative py-10 sm:py-14">
          <Link
            href="/projects"
            className="inline-flex min-h-11 items-center gap-2 text-sm text-muted transition-colors touch-manipulation hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            Back to projects
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                  {PROJECT_CATEGORY_LABELS[project.category]}
                  {project.year ? ` · ${project.year}` : null}
                </p>
                {project.placeholder ? (
                  <span className="rounded-[var(--radius-control)] border border-line px-2 py-0.5 font-mono text-[10px] tracking-wide text-signal uppercase">
                    Placeholder project
                  </span>
                ) : null}
              </div>

              <h1 className="font-display mt-4 text-[1.85rem] leading-tight font-bold tracking-tight text-ink sm:text-5xl text-balance">
                {project.title}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted text-pretty sm:mt-5 sm:text-lg">
                {project.description}
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
                {project.githubUrl ? (
                  <ButtonLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </ButtonLink>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-control)] border border-dashed border-line px-5 text-center text-sm text-muted sm:justify-start">
                    GitHub — link pending
                  </span>
                )}
                {project.liveUrl ? (
                  <ButtonLink
                    href={project.liveUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Live application
                  </ButtonLink>
                ) : (
                  <span className="inline-flex min-h-11 items-center justify-center rounded-[var(--radius-control)] border border-dashed border-line px-5 text-center text-sm text-muted sm:justify-start">
                    Live demo — link pending
                  </span>
                )}
              </div>
            </div>

            <div className="overflow-hidden rounded-[var(--radius-card)] border border-line bg-bg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.coverImage}
                alt={`${project.title} cover visual`}
                width={960}
                height={600}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>

          <div className="chip-scroll mt-10 sm:flex-wrap sm:overflow-visible">
            {project.technologies.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        </Container>
      </header>

      <Container className="max-w-3xl py-4 lg:max-w-[70rem]">
        <div className="min-w-0 lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[220px_minmax(0,1fr)] xl:gap-14">
          <aside className="hidden lg:block">
            <nav
              className="sticky top-24 space-y-2 py-10"
              aria-label="On this page"
            >
              <p className="mb-4 font-mono text-[11px] tracking-[0.14em] text-muted uppercase">
                On this page
              </p>
              {tocFor(project).map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-muted transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>

          <div>
            <CaseStudySection id="overview" title="Project overview">
              <p>{project.overview}</p>
            </CaseStudySection>

            <CaseStudySection id="problem" title="Problem statement">
              <p>{project.problem}</p>
            </CaseStudySection>

            {project.motivation ? (
              <CaseStudySection id="motivation" title="Motivation">
                <p>{project.motivation}</p>
              </CaseStudySection>
            ) : null}

            {project.objectives?.length ? (
              <CaseStudySection id="objectives" title="Objectives">
                <BulletList items={project.objectives} />
              </CaseStudySection>
            ) : null}

            <CaseStudySection id="technologies" title="Technologies">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </div>
            </CaseStudySection>

            {project.dataSource ? (
              <CaseStudySection id="data-source" title="Data source">
                <p>{project.dataSource}</p>
                {project.dataSourcePlaceholder ? (
                  <p className="font-mono text-xs text-signal uppercase">
                    Placeholder — refine data provenance details when ready
                  </p>
                ) : null}
              </CaseStudySection>
            ) : null}

            {project.dataPreprocessing?.length ? (
              <CaseStudySection id="preprocessing" title="Data preprocessing">
                <BulletList items={project.dataPreprocessing} />
              </CaseStudySection>
            ) : null}

            {project.forecastingMethodology?.length ? (
              <CaseStudySection
                id="forecasting"
                title="Forecasting methodology"
              >
                <BulletList items={project.forecastingMethodology} />
              </CaseStudySection>
            ) : null}

            {project.portfolioOptimisationMethodology?.length ? (
              <CaseStudySection
                id="optimisation"
                title="Portfolio optimisation methodology"
              >
                <BulletList items={project.portfolioOptimisationMethodology} />
              </CaseStudySection>
            ) : null}

            <CaseStudySection id="pipeline" title="System pipeline">
              <p className="mb-6">
                Data moves through the following stages end to end:
              </p>
              <ProjectPipeline steps={project.pipeline} />
              <p className="mt-6 font-mono text-xs leading-relaxed text-muted text-pretty break-words sm:text-sm">
                {project.pipeline.join(" → ")}
              </p>
            </CaseStudySection>

            <CaseStudySection id="architecture" title="Architecture">
              {project.architecture ? <p>{project.architecture}</p> : null}
              <div className="mt-6">
                <ArchitecturePanel project={project} />
              </div>
            </CaseStudySection>

            <CaseStudySection id="dashboard" title="Dashboard">
              {project.dashboard ? <p>{project.dashboard}</p> : null}
              <div className="mt-6">
                <ProjectGallery project={project} />
              </div>
            </CaseStudySection>

            {project.features?.length ? (
              <CaseStudySection id="features" title="Key capabilities">
                <BulletList items={project.features} />
              </CaseStudySection>
            ) : null}

            <CaseStudySection id="results" title="Results">
              <ul className="grid gap-4 sm:grid-cols-2">
                {project.results.map((result) => (
                  <li
                    key={result.text}
                    className="rounded-[var(--radius-card)] border border-line bg-surface p-5"
                  >
                    {result.placeholder ? (
                      <p className="mb-2 font-mono text-[10px] tracking-wide text-signal uppercase">
                        Placeholder — not a verified metric
                      </p>
                    ) : null}
                    <p className="text-sm leading-relaxed text-muted">
                      {result.text}
                    </p>
                  </li>
                ))}
              </ul>
            </CaseStudySection>

            {project.challenges?.length ? (
              <CaseStudySection id="challenges" title="Challenges">
                <BulletList items={project.challenges} />
              </CaseStudySection>
            ) : null}

            {project.lessonsLearned?.length ? (
              <CaseStudySection id="lessons" title="Lessons learned">
                <BulletList items={project.lessonsLearned} />
              </CaseStudySection>
            ) : null}

            {project.futureImprovements?.length ? (
              <CaseStudySection
                id="future"
                title="Future improvements"
              >
                <BulletList items={project.futureImprovements} />
              </CaseStudySection>
            ) : null}

            <CaseStudySection id="links" title="Repository & live app">
              <div className="flex flex-wrap gap-3">
                {project.githubUrl ? (
                  <ButtonLink
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    View on GitHub
                  </ButtonLink>
                ) : (
                  <p className="text-sm text-muted">
                    GitHub URL not added yet — set{" "}
                    <code className="text-ink">githubUrl</code> in{" "}
                    <code className="text-ink">src/content/projects.ts</code>.
                  </p>
                )}
                {project.liveUrl ? (
                  <ButtonLink
                    href={project.liveUrl}
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-4 w-4" aria-hidden />
                    Open live application
                  </ButtonLink>
                ) : (
                  <p className="text-sm text-muted">
                    Live application URL not added yet — set{" "}
                    <code className="text-ink">liveUrl</code> when deployed.
                  </p>
                )}
              </div>
            </CaseStudySection>

            <div className="py-10">
              <ProjectPager prev={prev} next={next} />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

function tocFor(project: Project) {
  const items: { id: string; label: string }[] = [
    { id: "overview", label: "Overview" },
    { id: "problem", label: "Problem" },
  ];
  if (project.motivation) items.push({ id: "motivation", label: "Motivation" });
  if (project.objectives?.length)
    items.push({ id: "objectives", label: "Objectives" });
  items.push({ id: "technologies", label: "Technologies" });
  if (project.dataSource)
    items.push({ id: "data-source", label: "Data source" });
  if (project.dataPreprocessing?.length)
    items.push({ id: "preprocessing", label: "Preprocessing" });
  if (project.forecastingMethodology?.length)
    items.push({ id: "forecasting", label: "Forecasting" });
  if (project.portfolioOptimisationMethodology?.length)
    items.push({ id: "optimisation", label: "Optimisation" });
  items.push(
    { id: "pipeline", label: "Pipeline" },
    { id: "architecture", label: "Architecture" },
    { id: "dashboard", label: "Dashboard" },
  );
  if (project.features?.length)
    items.push({ id: "features", label: "Capabilities" });
  items.push({ id: "results", label: "Results" });
  if (project.challenges?.length)
    items.push({ id: "challenges", label: "Challenges" });
  if (project.lessonsLearned?.length)
    items.push({ id: "lessons", label: "Lessons" });
  if (project.futureImprovements?.length)
    items.push({ id: "future", label: "Future" });
  items.push({ id: "links", label: "Links" });
  return items;
}
