import type { Project } from "@/types";

/**
 * Central project registry. Add new projects here — UI reads from this file only.
 */
export const projects: Project[] = [
  {
    title: "Prophet Forecasting for Portfolio Optimisation",
    slug: "prophet-forecasting-portfolio-optimisation",
    description:
      "An end-to-end system that forecasts financial time series with Prophet and feeds those signals into portfolio optimisation, delivered through a Streamlit dashboard backed by Supabase.",
    category: "academic",
    technologies: [
      "Python",
      "Prophet",
      "Pandas",
      "NumPy",
      "SciPy",
      "yfinance",
      "Streamlit",
      "Supabase",
      "Plotly",
      "SQL",
      "CircleCI",
    ],
    coverImage: "/images/projects/prophet-cover.svg",
    gallery: [],
    architectureImage: undefined,
    overview:
      "This final-year project connects time-series forecasting with portfolio construction. Historical market data is prepared, modelled with Facebook Prophet, and used as input to an optimisation step that produces portfolio weights. Results are stored in a database and explored through an interactive Streamlit application with Plotly visualizations.",
    problem:
      "Forecasting and portfolio allocation are often handled in separate tools — spreadsheets, notebooks, or one-off scripts — which makes it hard to move from a forecast signal to a transparent, repeatable allocation decision.",
    motivation:
      "As a Computer Science student focused on data science and financial modelling, I wanted a single, inspectable pipeline that demonstrates how forecasting outputs can inform portfolio weights, and how that workflow can be packaged for interactive use.",
    objectives: [
      "Build a reproducible pipeline from historical data extraction to portfolio weights",
      "Apply Prophet for univariate time-series forecasting on financial series",
      "Translate forecast outputs into a portfolio optimisation workflow",
      "Persist key artefacts in a structured database (Supabase)",
      "Expose the workflow through a Streamlit dashboard with clear visualizations",
      "Support continuous integration with CircleCI",
    ],
    solution:
      "A modular Python pipeline: extract data (yfinance), preprocess with Pandas/NumPy, forecast with Prophet, optimise allocations (SciPy-backed workflow), store results in Supabase, and present everything in Streamlit with Plotly charts.",
    dataSource:
      "Market data is retrieved using yfinance for selected tickers / instruments used in the study.",
    dataSourcePlaceholder: false,
    dataPreprocessing: [
      "Clean and align historical price series for the selected assets",
      "Handle missing values and irregular trading-day gaps as appropriate",
      "Transform series into the format expected by Prophet (e.g. datetime + value)",
      "Prepare returns or related features required by the optimisation stage",
    ],
    forecastingMethodology: [
      "Fit Prophet models to historical series to capture trend and seasonality patterns",
      "Generate forward-looking forecasts for the modelling horizon used in the project",
      "Use forecast outputs as inputs to the portfolio optimisation stage",
      "Visualize historical fit and forecast paths in the dashboard (Plotly)",
    ],
    portfolioOptimisationMethodology: [
      "Consume forecast-informed inputs alongside historical risk/return structure",
      "Formulate an optimisation problem to derive portfolio weights",
      "Solve using SciPy-based numerical optimisation routines",
      "Output optimal (or constrained) weights for downstream storage and display",
    ],
    pipeline: [
      "Historical Data Extraction",
      "Data Preprocessing",
      "Prophet Forecasting",
      "Portfolio Optimisation",
      "Optimal Portfolio Weights",
      "Database Storage",
      "Streamlit Dashboard",
    ],
    architecture:
      "The system is organised as a linear pipeline with a presentation layer. Data flows from extraction and preprocessing into forecasting and optimisation; artefacts are written to Supabase (SQL), then read by a Streamlit app that renders Plotly charts and portfolio summaries. CircleCI supports automated checks for the repository.",
    dashboard:
      "The Streamlit interface is intended to surface forecasts, portfolio weights, and supporting charts so the pipeline can be explored without reading notebooks. Screenshots can be added to the gallery when available.",
    features: [
      "End-to-end forecasting → optimisation pipeline",
      "yfinance-based historical data extraction",
      "Prophet time-series modelling",
      "SciPy-backed portfolio weight optimisation",
      "Supabase / SQL persistence",
      "Streamlit + Plotly interactive dashboard",
      "CircleCI continuous integration",
    ],
    results: [
      {
        text: "Placeholder — add qualitative outcomes (e.g. what the dashboard demonstrates) when ready.",
        placeholder: true,
      },
      {
        text: "Placeholder — add verified evaluation notes or backtest commentary only when available. Do not invent metrics.",
        placeholder: true,
      },
    ],
    challenges: [
      "Aligning forecast outputs with the inputs expected by the optimisation formulation",
      "Keeping preprocessing consistent across assets and date ranges",
      "Designing a dashboard that communicates uncertainty without overclaiming precision",
      "Placeholder — add additional project-specific challenges as they are documented",
    ],
    lessonsLearned: [
      "Separating pipeline stages (extract → forecast → optimise → store → present) keeps the system easier to test and explain",
      "Interactive delivery (Streamlit) helps communicate modelling work beyond notebooks",
      "Placeholder — refine lessons after final evaluation and write-up",
    ],
    futureImprovements: [
      "Add richer evaluation visuals and documented validation protocol",
      "Expand asset universe and scenario analysis in the dashboard",
      "Publish architecture diagram and annotated screenshots in this case study",
      "Placeholder — list further improvements after supervisor / peer feedback",
    ],
    githubUrl: undefined,
    liveUrl: undefined,
    featured: true,
    year: 2025,
    order: 1,
  },
  {
    title: "[Data Analytics Project]",
    slug: "data-analytics-project",
    description:
      "Placeholder — replace with a real analytics case study (SQL, Excel, Tableau, or Python analysis).",
    category: "data-analytics",
    technologies: ["Python", "SQL", "Tableau"],
    coverImage: "/images/projects/placeholder-cover.svg",
    gallery: [],
    overview:
      "Placeholder overview. Summarise the business or research question and your analytical approach.",
    problem: "Placeholder — state the problem this analysis addressed.",
    motivation: "Placeholder — why this project mattered.",
    objectives: ["Placeholder objective"],
    pipeline: ["Data collection", "Analysis", "Visualization", "Insights"],
    results: [
      {
        text: "Placeholder — add outcomes when the project is documented.",
        placeholder: true,
      },
    ],
    featured: true,
    placeholder: true,
    year: 2024,
    order: 2,
  },
  {
    title: "[Machine Learning Project]",
    slug: "machine-learning-project",
    description:
      "Placeholder — replace with a supervised/unsupervised ML project summary.",
    category: "machine-learning",
    technologies: ["Python", "scikit-learn", "Pandas"],
    coverImage: "/images/projects/placeholder-cover.svg",
    gallery: [],
    overview:
      "Placeholder overview. Describe the modelling task, data, and evaluation approach without inventing metrics.",
    problem: "Placeholder — define the prediction or learning problem.",
    pipeline: [
      "Data preparation",
      "Feature engineering",
      "Model training",
      "Evaluation",
    ],
    results: [
      {
        text: "Placeholder — add verified results only.",
        placeholder: true,
      },
    ],
    featured: true,
    placeholder: true,
    year: 2024,
    order: 3,
  },
  {
    title: "[Data Science Project]",
    slug: "data-science-project",
    description:
      "Placeholder — replace with an end-to-end data science workflow (exploration through delivery).",
    category: "data-science",
    technologies: ["Python", "Pandas", "Plotly"],
    coverImage: "/images/projects/placeholder-cover.svg",
    gallery: [],
    overview: "Placeholder overview for a future data science project.",
    problem: "Placeholder — problem statement.",
    pipeline: ["Explore", "Model", "Communicate"],
    results: [
      {
        text: "Placeholder — results pending.",
        placeholder: true,
      },
    ],
    featured: false,
    placeholder: true,
    year: 2024,
    order: 4,
  },
  {
    title: "[Software Development Project]",
    slug: "software-development-project",
    description:
      "Placeholder — replace with a software or tooling project relevant to your data work.",
    category: "software-development",
    technologies: ["Python", "Git"],
    coverImage: "/images/projects/placeholder-cover.svg",
    gallery: [],
    overview: "Placeholder overview for a future software project.",
    problem: "Placeholder — problem statement.",
    pipeline: ["Design", "Build", "Test", "Deploy"],
    results: [
      {
        text: "Placeholder — results pending.",
        placeholder: true,
      },
    ],
    featured: false,
    placeholder: true,
    year: 2024,
    order: 5,
  },
];
