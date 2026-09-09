import { getAllProjects } from "@/lib/projects";
import { site } from "@/content/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl;
  const staticRoutes = ["", "/about", "/projects", "/contact", "/resume"].map(
    (path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/projects" ? 0.9 : 0.8,
    }),
  );

  const projectRoutes = getAllProjects()
    .filter((p) => !p.placeholder)
    .map((p) => ({
      url: `${base}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  return [...staticRoutes, ...projectRoutes];
}
