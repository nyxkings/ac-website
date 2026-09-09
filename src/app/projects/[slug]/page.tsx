import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { ProjectCaseStudy } from "@/components/projects/ProjectCaseStudy";
import {
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project" };

  return {
    title: project.title,
    description: project.description,
    robots: project.placeholder
      ? { index: false, follow: true }
      : { index: true, follow: true },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: `/projects/${project.slug}`,
      images: project.coverImage
        ? [{ url: project.coverImage, alt: `${project.title} cover visual` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: project.coverImage ? [project.coverImage] : undefined,
    },
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main id="main" className="flex-1">
        <ProjectCaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}
