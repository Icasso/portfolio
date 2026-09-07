# Repository Guidelines

## Project Overview

Personal portfolio for Isaac Tsui (`isaactsui.xyz`): a static Next.js site with a professional resume at `/` and a playful bilingual Studio showcase at `/studio`. Visual system is **editorial / brutalist-lite** (paper/ink tokens, Instrument Serif display type, sharp edges, indexed sections). Stack is Next.js 15 App Router, React 19, TypeScript (strict), Tailwind 4, shadcn/ui, Framer Motion, and next-themes. Deployed on Vercel from `main`.

## Architecture & Data Flow

- **App Router** under `app/` — routes are `/` and `/studio` only; in-page sections use hash anchors (`#experience`, etc.) with IntersectionObserver nav.
- **Content → UI:** typed modules in `data/*` are imported at compile time into section components in `app/components/*`. No CMS, fetch layer, API routes, or global store.
- **Shell:** `app/layout.tsx` owns fonts, SEO metadata, schema.org Person JSON-LD, `ThemeProvider`, Vercel Analytics, and Sonner.
- **UI split:** portfolio-specific chrome in `app/components/`; reusable shadcn primitives in `components/ui/`; `cn()` in `lib/utils.ts`.
- **State:** local `useState`/`useEffect` only (nav, scroll, theme mount). Theme via next-themes context.
- **Assets:** `public/` (`companies/`, `education/`, `projects/`, OG images).

```text
data/*.ts(x)  →  app/components/*  →  app/page.tsx
                                      app/studio/page.tsx (inline + Framer Motion)
components/ui + lib/utils  →  shared primitives
```

**Do not invent** API routes, CMS, SWR/React Query, Redux/Zustand, or DI — this site is static content plus local UI state.

## Key Directories

| Path | Purpose |
|------|---------|
| `app/` | Routes, layouts, metadata, `globals.css`, `robots.ts`, `sitemap.ts` |
| `app/components/` | Resume sections and chrome (`Navigation`, `Header`, `Experience`, …) |
| `app/studio/` | Studio page + SEO layout |
| `data/` | Typed CV content (`experience`, `education`, `skills`, `projects`, `volunteering`) |
| `components/ui/` | shadcn/ui primitives |
| `lib/` | `cn()` helper |
| `public/` | Static images |
| `.github/workflows/` | CodeQL only |

## Development Commands

```bash
npm install
npm run dev      # next dev --turbopack
npm run build    # next build
npm run start    # next start
npm run lint     # next lint
```

No `test`, `format`, or `typecheck` scripts. Local quality gates: `lint` + `build`. Push to `main` deploys via Vercel; CI is CodeQL only (`.github/workflows/code-analysis.yml`).

## Code Conventions & Common Patterns

- **Naming:** PascalCase components (`Experience.tsx`); camelCase data exports (`experiences`, `skillCategories`); path alias `@/*` → repo root.
- **Imports:** prefer `@/data/...`, `@/components/ui/...`, `@/lib/utils` over deep relatives.
- **Content edits:** change `data/*`, not hardcode into section components (Studio may keep inline lists).
- **Section recipe:** `data/foo.ts` (interface + array) → `app/components/Foo.tsx` (memo map) → wire into `app/page.tsx` + `Navigation` `navItems`.
- **Lazy sections:** `Projects` / `Volunteering` use named `memo` export plus default `{ Component }` for `.then(m => m.X)` — preserve both when editing.
- **Client boundaries:** `"use client"` on interactive pages/components; sections may omit it when under a client parent.
- **Styling:** Editorial / brutalist-lite design system in `app/globals.css` — warm paper/ink tokens, real muted hierarchy, `--radius: 0`, vermillion `--accent`, utilities `.editorial-container`, `.eyebrow`, `.display`, `.rule`.
- **Typography:** Instrument Serif (`font-display` / `.display`) for headlines; Inter (`font-sans`) body; JetBrains Mono for indexes/eyebrows. Font CSS vars: `--font-inter`, `--font-jetbrains`, `--font-instrument`.
- **UI primitives:** Sharp (no radius) Button/Badge/Card in `components/ui/`; prefer outline/secondary over soft fills; avoid glassmorphism/heavy blur.
- **Section pattern:** indexed `SectionHeader` (`index="01"`) + numbered timeline rows (`md:grid-cols-[5rem_1fr]`) + hairline dividers.
- **shadcn:** style `new-york`, Lucide icons; add primitives under `components/ui/` per `components.json`.
- **Errors:** minimal — `app/not-found.tsx` redirects home after 5s; no app-wide error boundaries on content paths.
- **SEO:** canonicals hardcode `https://isaactsui.xyz` in layout/robots/sitemap — keep consistent when adding routes.
- **Performance:** prefer CSS transitions over heavy Framer Motion on `/`; keep Studio motion restrained (`whileInView`, no scale bounce); honor `prefers-reduced-motion`.
- **Tailwind utilities + CVA:** merge with `cn()`. Dark mode is `class`-based via next-themes.

Example section pattern:

```ts
// data/experience.ts
export interface Experience { title: string; /* ... */ }
export const experiences: Experience[] = [ /* ... */ ];

// app/components/Experience.tsx
import { experiences } from "@/data/experience";
export const Experience = memo(ExperienceBase);
export default { Experience };
```

## Important Files

| File | Role |
|------|------|
| `app/layout.tsx` | Root shell, fonts, metadata, theme, analytics |
| `app/page.tsx` | Resume page composition |
| `app/studio/page.tsx` | Studio showcase |
| `data/*.ts(x)` | CV content source of truth (`projects.tsx` holds JSX icons) |
| `lib/utils.ts` | `cn()` |
| `components.json` | shadcn aliases / style |
| `next.config.ts` | Image formats, CSS/package import opts, prod `removeConsole` |
| `tsconfig.json` | Strict TS, `@/*` paths |
| `eslint.config.mjs` | Flat ESLint → `next/core-web-vitals` + `next/typescript` |
| `package.json` | Scripts and deps |

## Runtime/Tooling Preferences

- **Runtime:** Node.js + Next.js (not Bun/Deno).
- **Package manager:** npm-oriented; `package-lock.json` is **gitignored** — no committed lockfile.
- **TypeScript:** `strict: true`, `moduleResolution: "bundler"`, `jsx: "preserve"`.
- **CSS:** Tailwind v4 via `@tailwindcss/postcss` + `app/globals.css` oklch tokens; keep `tailwind.config.js` coherent when changing styles.
- **No** Prettier/Biome, Docker, `.env.example`, or husky — do not invent a formatter/env/lockfile pipeline unless asked.
- **Dev:** keep Turbopack (`npm run dev`). Preserve Vercel Analytics / Speed Insights wiring in layout/pages.

## Testing & QA

No automated test suite (no Vitest/Jest/Playwright, no `*.test.*` / `__tests__` / e2e).

- Local: `npm run lint`, `npm run build`
- CI: CodeQL on push/PR to `main` (+ weekly cron); does not run lint/build/tests
- Coverage: not configured (`.gitignore` still lists `/coverage` as template leftover)

Do not invent test commands. Prefer lint/build as smoke checks until a runner is added.
