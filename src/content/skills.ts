import type { SkillGroup } from "@/types";

/**
 * Skill levels are relative comfort indicators — not expertise claims or percentages.
 * - core: used regularly in projects / coursework
 * - working: applied in training or projects with guidance/docs as needed
 * - familiar: used or explored; still building depth
 */
export const skillGroups: SkillGroup[] = [
  {
    id: "programming",
    title: "Programming",
    description: "Languages I use to analyse data and build workflows.",
    skills: [
      { name: "Python", level: "core" },
      { name: "SQL", level: "working" },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    description: "Libraries for preparation, modelling, and numerical work.",
    skills: [
      { name: "Pandas", level: "core" },
      { name: "NumPy", level: "working" },
      { name: "Matplotlib", level: "working" },
      { name: "Seaborn", level: "working" },
      { name: "Prophet", level: "working" },
      { name: "SciPy", level: "working" },
      { name: "scikit-learn", level: "working" },
      { name: "Excel / LibreOffice Calc", level: "working" },
    ],
  },
  {
    id: "visualization",
    title: "Visualization",
    description: "Tools for charts, dashboards, and interactive delivery.",
    skills: [
      { name: "Tableau", level: "working" },
      { name: "Streamlit", level: "working" },
      { name: "Plotly", level: "working" },
      { name: "Metabase", level: "familiar" },
    ],
  },
  {
    id: "database",
    title: "Database",
    description: "Storing and querying structured data.",
    skills: [
      { name: "MySQL", level: "working" },
      { name: "Supabase", level: "working" },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "Everyday tooling for writing and sharing work.",
    skills: [
      { name: "GitHub", level: "core" },
      { name: "Git", level: "working" },
      { name: "VS Code", level: "core" },
      { name: "Cursor", level: "working" },
      { name: "Jupyter Notebook", level: "working" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    description: "Automation and delivery — growing with project needs.",
    skills: [
      { name: "CircleCI", level: "familiar" },
      { name: "CI/CD", level: "familiar" },
      { name: "Deployment", level: "familiar" },
    ],
  },
];

/** Condensed groups for homepage preview */
export const skillPreviewGroupIds = [
  "programming",
  "data-science",
  "visualization",
] as const;
