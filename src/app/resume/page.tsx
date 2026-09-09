import { EducationCard } from "@/components/experience/EducationCard";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag } from "@/components/ui/Tag";
import { education, experience } from "@/content/experience";
import { resumeSummary, site } from "@/content/site";
import { skillGroups } from "@/content/skills";
import { getFeaturedProjects } from "@/lib/projects";
import { Download } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.name} — ${site.roleLine}. Download PDF or browse the online summary.`,
};

export default function ResumePage() {
  const featured = getFeaturedProjects(3);

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-line py-14 sm:py-20">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                  Resume
                </p>
                <h1 className="font-display mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
                  {site.name}
                </h1>
                <p className="mt-3 font-mono text-sm text-muted sm:text-base">
                  {site.roleLine}
                </p>
                <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
                  {resumeSummary}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <ButtonLink
                  href={site.resumePdfPath}
                  download="Ada-Chinda-Resume.pdf"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download resume
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <p className="mt-6 max-w-2xl text-xs text-muted">
              PDF path:{" "}
              <code className="text-ink">{site.resumePdfPath}</code>
              {" — "}
              replace the file in{" "}
              <code className="text-ink">public/resume/</code> to update the
              download (keep the same filename, or change{" "}
              <code className="text-ink">resumePdfPath</code> in{" "}
              <code className="text-ink">src/content/site.ts</code>).
            </p>
          </Container>
        </section>

        <section className="border-b border-line py-14 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Summary"
              title="Professional summary"
              description="A concise snapshot aligned with my About page and live experience."
            />
            <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
              {resumeSummary}
            </p>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">
                  Email
                </dt>
                <dd className="mt-2 text-sm text-ink break-all">
                  <a className="hover:text-accent" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">
                  Phone
                </dt>
                <dd className="mt-2 text-sm text-ink">
                  <a className="hover:text-accent" href={site.phoneHref}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div className="rounded-[var(--radius-card)] border border-line bg-surface p-5">
                <dt className="font-mono text-[11px] tracking-wide text-muted uppercase">
                  Location
                </dt>
                <dd className="mt-2 text-sm text-ink">{site.location}</dd>
              </div>
            </dl>
          </Container>
        </section>

        <section className="border-b border-line py-14 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Education" title="Academic background" />
            <div className="mt-8 max-w-4xl space-y-6">
              {education.map((item) => (
                <EducationCard key={item.id} item={item} showExtensions />
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-line py-14 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Skills"
              title="Technical skills"
              description="Grouped for scanning — see About for relative comfort levels."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.id}
                  className="rounded-[var(--radius-card)] border border-line bg-surface p-5"
                >
                  <h3 className="font-display text-base font-semibold text-ink">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Tag key={skill.name}>{skill.name}</Tag>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="border-b border-line py-14 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Experience" title="Work & research" />
            <div className="mt-8 max-w-3xl">
              <ExperienceTimeline items={experience} />
            </div>
          </Container>
        </section>

        <section className="border-b border-line py-14 sm:py-16">
          <Container>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <SectionHeading
                eyebrow="Projects"
                title="Selected projects"
                description="Featured case studies from the portfolio."
              />
              <ButtonLink href="/projects" variant="tertiary">
                All projects
              </ButtonLink>
            </div>
            <ul className="mt-10 grid gap-6 lg:grid-cols-3">
              {featured.map((project) => (
                <li key={project.slug}>
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </Container>
        </section>

        <section className="py-14 sm:py-16">
          <Container>
            <div className="flex flex-col items-start justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-surface px-6 py-8 sm:flex-row sm:items-center sm:px-8">
              <div>
                <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                  PDF
                </p>
                <h2 className="font-display mt-2 text-2xl font-semibold text-ink">
                  Prefer a printable copy?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted">
                  Download the resume PDF. When you export a fresh file from
                  Canva, drop it in{" "}
                  <code className="text-ink">public/resume/</code> using the
                  same filename.
                </p>
              </div>
              <ButtonLink
                href={site.resumePdfPath}
                download="Ada-Chinda-Resume.pdf"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download resume
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
