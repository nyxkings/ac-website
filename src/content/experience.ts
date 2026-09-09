import type { EducationItem, ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "research-futa",
    role: "Undergraduate Researcher",
    organization:
      "Computer Science Department, Federal University of Technology, Akure",
    location: "Akure, Nigeria",
    start: "May 2026",
    end: "Present",
    description:
      "Undergraduate research supervised by Dr. Akinwonmi, focused on machine learning workflows for financial forecasting and portfolio construction.",
    highlights: [
      "Developing a stock market forecasting system using Facebook Prophet to model time-series price movements from historical financial data",
      "Applying Modern Portfolio Theory (MPT) to optimise asset allocation by balancing expected return and risk",
    ],
    technologies: ["Python", "Prophet", "yfinance", "Portfolio optimisation"],
  },
  {
    id: "siwes-lfcw",
    role: "Data Science Intern (SIWES)",
    organization: "Living Faith Church Worldwide",
    location: "Nigeria",
    start: "May 2025",
    end: "October 2025",
    description:
      "Industrial training focused on data science workflows — from raw organisational data through cleaning, querying, analysis, and visualization.",
    highlights: [
      "Built end-to-end data preprocessing pipelines in Python to clean, transform, and prepare datasets for analysis and modelling",
      "Designed and executed SQL queries in MySQL to extract structured data and support analytical workflows",
      "Applied exploratory data analysis (EDA) to identify patterns, correlations, and insights relevant to modelling",
      "Developed interactive dashboards and visual analytics in Tableau to communicate data-driven findings",
      "Used LibreOffice Calc for initial data inspection, validation, and reporting",
      "Prepared datasets suitable for machine learning experimentation and statistical analysis",
    ],
    technologies: [
      "Python",
      "MySQL",
      "SQL",
      "Tableau",
      "LibreOffice Calc",
      "EDA",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "edu-futa",
    institution: "Federal University of Technology, Akure (FUTA)",
    program: "B.Tech in Computer Science",
    location: "Akure, Nigeria",
    start: "September 2021",
    end: "Present",
    detail:
      "Undergraduate Computer Science programme with growing focus on data science, analytics, and machine learning. Final-year / research project: Prophet Forecasting for Portfolio Optimisation (supervisor: Dr. Akinwonmi).",
    coursework: [],
    certifications: [
      {
        name: "Sololearn — C Programming, HTML, and JavaScript",
      },
      { name: "Canva Certificate" },
      { name: "Professional Design Engineer (PDE) License" },
      { name: "Project Management Tech (PMT)" },
    ],
    achievements: [
      { text: "Overall Best Computer Science Student (2019)" },
      { text: "Participant, Google Developer Groups (2023)" },
      { text: "Hernovators member" },
    ],
  },
  {
    id: "edu-csharp",
    institution: "CSharp InfoTech",
    program: "Diploma in Data Processing",
    location: "Nigeria",
    start: "May 2017",
    end: "August 2017",
    detail: "Foundational training in data processing.",
    coursework: [],
    certifications: [],
    achievements: [],
  },
];
