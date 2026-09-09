import { AboutNarrative } from "@/components/about/AboutNarrative";
import { EducationCard } from "@/components/experience/EducationCard";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SkillsGrid } from "@/components/skills/SkillsGrid";
import { ButtonLink } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/content/about";
import { education, experience } from "@/content/experience";
import { skillGroups } from "@/content/skills";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: `${site.name} — Computer Science student at FUTA focused on data science, analytics, and machine learning. Background, skills, experience, and education.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About · ${site.name}`,
    description: site.tagline,
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-line py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              description="A concise profile for recruiters — specific interests, honest skill levels, and experience I can stand behind."
            />
            <div className="mt-12">
              <AboutNarrative />
            </div>
          </Container>
        </section>

        <section
          id="skills"
          className="scroll-mt-24 border-b border-line py-14 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Skills"
              title="Tools grouped by how I use them"
              description="Relative comfort indicators only — not percentage bars or expert claims."
            />
            <div className="mt-10">
              <SkillsGrid groups={skillGroups} />
            </div>
          </Container>
        </section>

        <section
          id="experience"
          className="scroll-mt-24 border-b border-line py-14 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Experience"
              title="Industrial training & applied data work"
              description="Roles documented from real placements — dates can be filled from the resume when confirmed."
            />
            <div className="mt-10 max-w-3xl">
              <ExperienceTimeline items={experience} />
            </div>
          </Container>
        </section>

        <section
          id="education"
          className="scroll-mt-24 border-b border-line py-14 sm:py-20"
        >
          <Container>
            <SectionHeading
              eyebrow="Education"
              title="Academic foundation"
              description="Structured so coursework, certifications, and achievements can be added later — without inventing them now."
            />
            <div className="mt-10 max-w-4xl space-y-6">
              {education.map((item) => (
                <EducationCard key={item.id} item={item} showExtensions />
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              <ButtonLink href="/projects">View projects</ButtonLink>
              <ButtonLink href="/contact" variant="secondary">
                Contact
              </ButtonLink>
              <ButtonLink href={site.resumeUrl} variant="tertiary">
                Resume
              </ButtonLink>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
