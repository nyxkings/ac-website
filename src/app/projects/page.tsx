import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { Container } from "@/components/layout/Container";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllProjects } from "@/lib/projects";
import { site } from "@/content/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: `Projects by ${site.name}: data science, analytics, machine learning, and academic work — including Prophet forecasting for portfolio optimisation.`,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `Projects · ${site.name}`,
    description:
      "Data science, analytics, machine learning, and academic projects — including Prophet forecasting for portfolio optimisation.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <section className="border-b border-line py-14 sm:py-20">
          <Container>
            <SectionHeading
              eyebrow="Projects"
              title="Work that connects data, modelling, and usable interfaces"
              description="Browse by category. Featured case studies lead with process and tooling — verified metrics are added only when available."
            />
            <div className="mt-12">
              <ProjectBrowser projects={projects} />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
