import { projects } from "@/content/projects";
import type { Project, ProjectCategory } from "@/types";

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getFeaturedProjects(limit = 3): Project[] {
  return getAllProjects()
    .filter((p) => p.featured && !p.placeholder)
    .slice(0, limit);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return getAllProjects().filter((p) => p.category === category);
}

export function getAdjacentProjects(slug: string): {
  prev?: Project;
  next?: Project;
} {
  const list = getAllProjects();
  const index = list.findIndex((p) => p.slug === slug);
  if (index === -1) return {};
  return {
    prev: index > 0 ? list[index - 1] : undefined,
    next: index < list.length - 1 ? list[index + 1] : undefined,
  };
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}
