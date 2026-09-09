export type ProjectCategory =
  | "data-science"
  | "data-analytics"
  | "machine-learning"
  | "software-development"
  | "academic";

export const PROJECT_CATEGORY_LABELS: Record<ProjectCategory, string> = {
  "data-science": "Data Science",
  "data-analytics": "Data Analytics",
  "machine-learning": "Machine Learning",
  "software-development": "Software Development",
  academic: "Academic Projects",
};

export const PROJECT_CATEGORIES = Object.entries(PROJECT_CATEGORY_LABELS).map(
  ([id, label]) => ({ id: id as ProjectCategory, label }),
);

export interface ProjectResult {
  text: string;
  /** When true, shown as an explicit placeholder — not a verified claim */
  placeholder?: boolean;
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  coverImage: string;
  gallery: string[];
  architectureImage?: string;
  overview: string;
  problem: string;
  motivation?: string;
  objectives?: string[];
  solution?: string;
  dataSource?: string;
  dataSourcePlaceholder?: boolean;
  dataPreprocessing?: string[];
  forecastingMethodology?: string[];
  portfolioOptimisationMethodology?: string[];
  pipeline: string[];
  architecture?: string;
  dashboard?: string;
  features?: string[];
  results: ProjectResult[];
  challenges?: string[];
  lessonsLearned?: string[];
  futureImprovements?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  placeholder?: boolean;
  year?: number;
  order?: number;
}

/** Relative comfort — not years of experience or percentage skill */
export type SkillLevel = "familiar" | "working" | "core";

export const SKILL_LEVEL_LABELS: Record<SkillLevel, string> = {
  core: "Core",
  working: "Working knowledge",
  familiar: "Familiar",
};

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillGroup {
  id: string;
  title: string;
  description?: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location?: string;
  start: string;
  end: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
  placeholder?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  program: string;
  location?: string;
  start: string;
  end: string;
  detail?: string;
  /** Optional — leave empty until documented */
  coursework?: string[];
  certifications?: Array<{ name: string; placeholder?: boolean }>;
  achievements?: Array<{ text: string; placeholder?: boolean }>;
}

export interface SiteConfig {
  name: string;
  shortName: string;
  roleLine: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  /** Public path to the downloadable PDF — replace file in public/resume/ */
  resumePdfPath: string;
  university: string;
  /**
   * Absolute site origin for SEO (canonical, OG, sitemap).
   * Override with NEXT_PUBLIC_SITE_URL in production (e.g. https://adachinda.com).
   */
  siteUrl: string;
}

export interface ProfessionalLink {
  id: string;
  label: string;
  href: string;
  /** When true, shown as pending / not a live link */
  placeholder?: boolean;
}
