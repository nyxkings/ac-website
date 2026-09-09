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
3. Intro  
4. Featured projects  
5. Skills  
6. Experience & education  
7. CTA  
8. Contact  
9. Footer  

### Hero

- Name as the main brand signal
- Role line + one short sentence + two CTAs
- Background: restrained abstract motif — data points → trend line → forecast band (not a dashboard)

### Project data model

Each project lives in `content/projects.ts` and supports:

- title, slug, description, category, technologies  
- coverImage, gallery, architectureImage  
- problem, solution, methodology, features, results  
- githubUrl, liveUrl, featured, year, order  

### Folder structure (planned)

```
content/          # projects, skills, experience, site meta
src/app/          # routes
src/components/   # layout, sections, ui, projects
src/lib/          # helpers
public/           # images, resume, og
```

### Later phases (not started)

2. Scaffold  
3. Content model  
4. Home  
5. Projects pages  
6. About + Resume  
7. Polish (a11y, SEO, motion)  
8. Launch (Vercel)

---

Implementation starts after Phase 1. Do not treat this README as a feature dump — keep content and copy in `content/` when building.
