# BetterOlongapo.org

A community transparency portal for **Olongapo City, Zambales, Philippines** — built to give residents fast, clear, and modern access to government services, officials, budgets, planning documents, and public information.

Live site: **[betterolongapo.org](https://www.betterolongapo.org)**

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite |
| Styling | Tailwind CSS v4 + @tailwindcss/typography |
| Routing | React Router v6 |
| i18n | i18next + react-i18next (EN / FIL) |
| Content | Markdown (remark-gfm) + YAML |
| Charts | Recharts |
| Icons | Lucide React |
| Weather | Open-Meteo API (free, no key) |
| Visit Counter | CounterAPI (free, no database) |
| Deployment | Vercel (auto-deploy on push to `main`) |

---

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

---

## Deployment

Configured for Vercel via [`vercel.json`](vercel.json). All routes fall back to `index.html` for client-side routing.

1. Push to `main` on GitHub
2. Vercel auto-deploys — build command `npm run build`, output `dist/`

---

## Content Structure

```
content/
├── services/
│   ├── health-services/          # Markdown pages + index.yaml
│   ├── education/
│   ├── business/
│   ├── social-welfare/
│   ├── agriculture-fisheries/
│   ├── infrastructure-public-works/
│   ├── garbage-waste-disposal/
│   ├── environment/
│   ├── disaster-preparedness/
│   ├── housing-land-use/
│   └── tourism/
└── government/
    ├── departments/
    ├── legislative/
    ├── transparency-documents/
    ├── reports-and-statistics/
    └── guides-and-regulations/

src/data/
├── services.yaml       # Service category definitions (slug, icon, description)
├── government.yaml     # Government category definitions
└── navigation.ts       # Navbar + footer link structure

public/locales/
├── en/common.json      # English UI strings
└── fil/common.json     # Filipino UI strings
```

Each category folder contains:
- **`index.yaml`** — lists all pages with `name`, `slug`, `description`, and optional `updatedAt`
- **`[slug].md`** — markdown content for each page, split into `##` sections

---

## Adding or Editing Content

### Add a new service page

1. Add an entry to the category's `index.yaml`:
```yaml
pages:
  - name: 'Your Service Name'
    slug: 'your-service-slug'
    description: 'One-line description shown in the hero.'
    updatedAt: 'April 2026'
```

2. Create the markdown file at `content/services/[category]/your-service-slug.md`:
```markdown
# Your Service Name

Brief intro paragraph.

---

## Section One

Content here...

## Section Two

| Column A | Column B |
| -------- | -------- |
| Value 1  | Value 2  |
```

Each `##` heading becomes its own colored card on the page. Tables render as cards by default (with a "Table view" toggle).

### Add a Filipino translation

Create `[slug].fil.md` alongside the English file. The app will serve it automatically when the user switches to FIL; falls back to English with a banner if the translation is missing.

### Update "Last Updated" on a page

Add `updatedAt: 'Month Year'` to the page entry in `index.yaml`. If omitted, the page footer shows a site-wide default.

---

## Project Structure

```
src/
├── components/
│   ├── layout/         Navbar, Footer (with visit counter), InfoBar (hotlines ticker)
│   ├── home/           Hero, ServicesSection, StatsSection (weather+stats), GovernmentQuickLinks, etc.
│   ├── ui/             Breadcrumbs, Section, ScrollToTop, DisclaimerBar
│   └── SEO.tsx
├── context/
│   └── ThemeContext.tsx
├── data/
│   ├── services.yaml
│   ├── government.yaml
│   ├── navigation.ts
│   └── yamlLoader.ts
├── lib/
│   ├── markdownLoader.ts       Load + interpolate .md files
│   ├── markdownComponents.tsx  ReactMarkdown element overrides
│   ├── TableWithToggle.tsx     Card-view table component
│   └── typographyThemes.ts     Typography configuration
├── pages/
│   ├── Home.tsx
│   ├── Services.tsx            All 11 categories listing page
│   ├── Government.tsx          Government section listing
│   ├── Document.tsx            Markdown + nested index renderer
│   ├── TouristSpots.tsx        Must-see places (custom card UI)
│   ├── WhereToStay.tsx         Hotels & resorts (custom card UI)
│   ├── Officials.tsx           Officials directory
│   ├── CityProfile.tsx         Stats, charts, weather, map, barangays, awards
│   ├── AnnualBudget.tsx        Budget sources, allocations, cycle
│   ├── AnnualReport.tsx        Program areas & SOCA
│   ├── InfrastructureProjects.tsx
│   ├── FullDisclosure.tsx      FDP portal links
│   ├── SALN.tsx
│   ├── FOIReleases.tsx
│   ├── Downloads.tsx           CLUP, CDP, ELA, maps
│   └── DevelopmentProjects.tsx Upcoming major projects
└── App.tsx
```

## SEO

All pages use `react-helmet-async` via `src/components/SEO.tsx`:
- Unique title, description, keywords per page
- Open Graph + Twitter Card meta tags
- `robots: index, follow`
- `theme-color: #16643c`

---

## License

MIT · All information is provided for transparency and civic use.
