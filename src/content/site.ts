import type { ProfessionalLink, SiteConfig } from "@/types";

/** Production origin — set NEXT_PUBLIC_SITE_URL on Vercel (no trailing slash). */
function resolveSiteUrl() {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  return "http://localhost:3000";
}

export const site: SiteConfig = {
  name: "Ada Chinda",
  shortName: "Ada Chinda",
  roleLine: "Data Science · Machine Learning",
  tagline:
    "Computer Science student building data-driven solutions through analytics, machine learning, and financial modelling.",
  location: "Akure, Nigeria",
  email: "chindaada63@gmail.com",
  phone: "07066440160",
  phoneHref: "tel:+2347066440160",
  githubUrl: "https://github.com/nyxkings",
  linkedinUrl: "https://www.linkedin.com/in/ada-chinda-455466264/",
  resumeUrl: "/resume",
  resumePdfPath: "/resume/Ada-Chinda-Resume.pdf",
  university: "Federal University of Technology, Akure (FUTA)",
  siteUrl: resolveSiteUrl(),
};

/**
 * Professional contact links. Add more entries when you have them;
 * set placeholder: true until the URL is ready.
 */
export const professionalLinks: ProfessionalLink[] = [
  {
    id: "email",
    label: "Email",
    href: `mailto:${site.email}`,
  },
  {
    id: "phone",
    label: "Phone",
    href: site.phoneHref,
  },
  {
    id: "github",
    label: "GitHub",
    href: site.githubUrl,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: site.linkedinUrl,
  },
  {
    id: "portfolio",
    label: "Portfolio site",
    href: "[Add your live site URL]",
    placeholder: true,
  },
];

export const navLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
] as const;

/** Short summary used on the Resume page */
export const resumeSummary =
  "Data science/ML–oriented Computer Science student at FUTA with hands-on experience in Python data workflows, SQL/MySQL, Tableau dashboards, and machine learning research on time-series forecasting and portfolio optimisation. Seeking internships and junior roles in data science, analytics, and ML-adjacent work.";

/** SEO keywords — factual identity terms only, not ranking claims */
export const seoKeywords = [
  "Ada Chinda",
  "Ada Chinda data science",
  "Ada Chinda FUTA",
  "data science portfolio",
  "machine learning student Nigeria",
  "analytics portfolio",
  "Prophet forecasting",
  "Federal University of Technology Akure",
] as const;
