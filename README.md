# Personal Portfolio Website

Computer Science student building data-driven solutions through analytics, machine learning, and financial modelling.

**Role line:** Data Science · Analytics · Machine Learning

---

## Phase 1 — Plan (approved)

### Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Typed content files (no CMS)
- Framer Motion (sparingly)
- Lucide icons
- Deploy on Vercel

### Design system — Atlas Signal

- Style: editorial-technical, minimal, professional
- Fonts: Syne (display), Source Sans 3 (body), IBM Plex Mono (labels/code)
- Accent: teal; amber only for result metrics
- Light-first + dark mode (system default, toggle persisted)
- Spacing: 4px base; content max width 1120px
- Radius: 6px controls, 10px cards
- Cards only where useful (e.g. projects); no hero cards
- Motion: subtle, purposeful; respect `prefers-reduced-motion`

### Site structure

| Route | Purpose |
|-------|---------|
| `/` | Home narrative |
| `/about` | Full bio, education, experience |
| `/projects` | All projects |
| `/projects/[slug]` | Case study |
| `/resume` | Resume + PDF |
| Contact | Section on home |

### Homepage order

1. Nav  
2. Hero (name-led)  
3. Intro / about preview  
4. Featured projects  
5. Skills  
6. Experience & education  
7. CTA  
8. Footer  

### Hero

- Name as the main brand signal
- Role line + one short sentence + CTAs
- Background: restrained abstract motif — data points → trend line → forecast band

### Project data model

Each project in `src/content/projects.ts` supports:

- title, slug, description, category, technologies  
- coverImage, gallery, architectureImage  
- overview, problem, motivation, objectives, solution  
- dataSource, preprocessing, forecasting & optimisation methods  
- pipeline, architecture, dashboard, features  
- results (with optional `placeholder: true`), challenges, lessons, future  
- githubUrl, liveUrl, featured, year, order  

---

## Phase 2 — Homepage shell (done)

Implemented:

- Global tokens, typography, theme toggle (light/dark)
- Navbar (desktop + mobile) with section active state
- Hero with forecast motif
- About, featured projects, skills, experience previews
- Main CTA + footer
- Content driven from `src/content/*`
- Minimal `/resume` stub (full resume page later)

Run locally:

```bash
npm install
npm run dev
```

### Personal information needed

Replace placeholders in `src/content/` (especially `site.ts` and `experience.ts`) with:

| Field | Where | Status |
|-------|--------|--------|
| Full name | `site.ts` | Ada Chinda |
| Email | `site.ts` | chindaada63@gmail.com |
| GitHub | `site.ts` | github.com/nyxkings |
| LinkedIn | `site.ts` | linkedin.com/in/ada-chinda-455466264 |
| SIWES / intern dates | `experience.ts` | May 2025 – Oct 2025 |
| Education dates | `experience.ts` | Sep 2021 – Present |
| Phone / street address | optional | On resume; not shown on site by default |
| Resume PDF | `public/resume/` | Still to add |

---

## Phase 3 — Projects system (done)

Implemented:

- `/projects` index with category filters
- `/projects/[slug]` case-study pages (SEO-friendly slugs)
- Expanded centralized model in `src/content/projects.ts`
- Full Prophet case study (pipeline, methods, placeholders for results/URLs/screenshots)
- Prev/next project navigation
- Homepage featured cards link into the project system

Add a new project: append an object in `src/content/projects.ts` and optional images under `public/images/projects/`.

---

## Phase 4 — About, skills, experience, education (done)

Implemented:

- `/about` with full narrative, skills matrix, SIWES timeline, education card
- Skill groups with relative comfort dots (Core / Working / Familiar — no % bars)
- SIWES at Living Faith Church Worldwide (Excel, SQL, Tableau; cleaning & raw data)
- Education at FUTA, Computer Science, with empty slots for coursework / certs / achievements
- Homepage previews updated to match; link through to `/about`

Note: Resume details imported from Canva (Ada Chinda) after login — name, contact links, SIWES, research, education, certifications, and awards.

---

## Phase 5 — Contact & Resume (done)

### Contact

- `/contact` page + homepage contact section with the same form
- Links: email, phone, GitHub, LinkedIn (+ placeholder portfolio URL)
- Form: Name, Email, Message — validation, loading / success / error states
- Accessible labels, field errors, honeypot
- API route `POST /api/contact` → Formspree (server-only env)
- Works without Formspree configured (clear error + mailto fallback)
- Native form POST still works if JavaScript is disabled (redirect query params)

**Setup Formspree**

1. Create a form at [formspree.io](https://formspree.io)
2. Copy `.env.example` → `.env.local`
3. Set `FORMSPREE_FORM_ID=your_form_id` (from `https://formspree.io/f/xxxx`)
4. Restart `npm run dev`
5. Never commit `.env.local` or use `NEXT_PUBLIC_` for this secret/id if you want it server-only (current setup uses server env)

### Resume

- Full `/resume` page: summary, education, skills, experience, featured projects
- **Download resume** → `/resume/Ada-Chinda-Resume.pdf`
- Replace PDF: drop your Canva export at `public/resume/Ada-Chinda-Resume.pdf` (same name), or change `resumePdfPath` in `src/content/site.ts`

---

## Later phases

6. Polish / launch (Vercel)
