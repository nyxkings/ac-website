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
  description: `Resume for ${site.name} — ${site.roleLine}. Online summary and PDF download.`,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `Resume · ${site.name}`,
    description: `Resume for ${site.name} — ${site.roleLine}.`,
    url: "/resume",
  },
};

export default function ResumePage() {
  const featured = getFeaturedProjects(3);

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-line py-10 sm:py-20">
          <Container>
            <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl min-w-0">
                <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                  Resume
                </p>
                <h1 className="font-display mt-3 text-[1.85rem] font-bold tracking-tight text-ink sm:text-5xl text-balance">
                  {site.name}
                </h1>
                <p className="mt-3 font-mono text-sm text-muted sm:text-base">
                  {site.roleLine}
                </p>
                <p className="mt-5 text-[0.95rem] leading-relaxed text-muted text-pretty sm:text-lg">
                  {resumeSummary}
                </p>
              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                <ButtonLink
                  href={site.resumePdfPath}
                  download="Ada-Chinda-Resume.pdf"
                  className="w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download resume
                </ButtonLink>
                <ButtonLink href="/contact" variant="secondary" className="w-full sm:w-auto">
                  Contact
                </ButtonLink>
              </div>
            </div>

            <p
              className="mt-6 max-w-2xl rounded-[var(--radius-control)] border border-signal/40 bg-signal/10 px-4 py-3 text-sm text-ink text-pretty"
              role="status"
            >
              The downloadable PDF is still a{" "}
              <strong className="font-medium">placeholder file</strong>. Replace{" "}
              <code className="text-sm">public/resume/Ada-Chinda-Resume.pdf</code>{" "}
              with your Canva/export PDF (same filename) before sharing with
              recruiters.
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
            <div className="flex flex-col items-stretch justify-between gap-6 rounded-[var(--radius-card)] border border-line bg-surface px-5 py-7 sm:flex-row sm:items-center sm:px-8 sm:py-8">
              <div className="min-w-0">
                <p className="font-mono text-xs tracking-[0.14em] text-accent uppercase">
                  PDF
                </p>
                <h2 className="font-display mt-2 text-xl font-semibold text-ink sm:text-2xl text-balance">
                  Prefer a printable copy?
                </h2>
                <p className="mt-2 max-w-xl text-sm text-muted text-pretty">
                  Download the resume PDF. When you export a fresh file from
                  Canva, drop it in{" "}
                  <code className="break-all text-ink">public/resume/</code> using the
                  same filename.
                </p>
              </div>
              <ButtonLink
                href={site.resumePdfPath}
                download="Ada-Chinda-Resume.pdf"
                className="w-full shrink-0 sm:w-auto"
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
