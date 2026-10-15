# Pratham Wankhade — Portfolio

Premium editorial-minimalist personal portfolio. Next.js App Router + React + strict TypeScript + Tailwind v4 + Lucide icons. Dark/light themes, accessible, responsive, evidence-driven content.

## Stack

- Next.js 16 (App Router), React 19, TypeScript strict
- Tailwind CSS v4 with design tokens in `src/styles/tokens.css`
- Lucide icons (`lucide-react`), no other component libraries
- Fonts via `next/font`: Manrope (display), Inter (body), Fraunces italic (rare accent), JetBrains Mono (technical labels)

## Routes

- `/` — hero, introduction, selected work, about, experience, skills, education & recognition, contact
- `/work/facesnap`
- `/work/phishing-detection`
- `/work/aipfl-ids`
- `/work/onebit`

## Prerequisites

- Node.js 20+ and npm

## Commands

```bash
npm install
npm run dev        # local dev at http://localhost:3000
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
npm run build      # production build
npm run smoke      # production smoke test (requires a build first)
npm start          # serve production build
```

Set the production domain before deploying:

```bash
# .env.local
NEXT_PUBLIC_SITE_URL=https://your-production-domain
```

## Content editing

All copy is centralized and typed — no duplicated content across components:

- `src/data/profile.ts` — hero, about, contact copy
- `src/data/projects.ts` — the 4 flagship projects, ordering, stack, case-study fields. Reorder the array to change display order (e.g. phishing/AIPFL-IDS first for security-focused applications).
- `src/data/experience.ts` — internships + leadership note
- `src/data/education.ts` — degree, recognition, research note
- `src/data/skills.ts` — grouped skills
- `src/lib/metadata.ts` — title, description, email, social URLs, resume path, base URL

## Image / visual replacement

Project visuals are original inline SVG (`src/components/projects/ProjectVisual.tsx`), labeled as illustrative with fictional data. To use real repository screenshots:

1. Add files to `public/images/` (e.g. `public/images/facesnap-dashboard.png`)
2. Replace the corresponding branch in `ProjectVisual.tsx` with `next/image`, keeping meaningful `alt` text
3. Never use private student, biometric, or real threat data in visuals

Hero artwork is original geometry in `src/components/home/Hero.tsx`. Replace with an approved portrait only — never label artwork as a photograph.

## Résumé replacement

Required before deployment:

1. Choose ONE final, current résumé PDF
2. Overwrite `public/files/pratham-wankhade-resume.pdf` (same path — header, hero and contact all reference it)
3. The committed file is a placeholder PDF marked as such

Do not publish the provisional degree certificate by default. Never expose roll numbers, signatures, or internal certificate identifiers.

## Deployment

- Static-friendly: `npm run build` produces an optimized Next.js build
- Hosting: Vercel recommended; also works on any Node host or static export host
- Confirm `NEXT_PUBLIC_SITE_URL` for canonical metadata, OG tags, `robots.txt` and `sitemap.xml`

## Facts needing approval (do not guess)

1. **Résumé version** — pick the single current résumé; confirm internship titles (SS Infotech Jul–Oct 2025, AD Infocom Dec 2024–Jan 2025 vary across drafts)
2. **CGPA** — a draft lists 9.10; withheld from public UI (only "First Class with Distinction" from the provisional certificate is shown). Confirm CGPA vs semester SGPA before publishing any number.
3. **Positioning priority** — balanced by default; reorder `projects` array for AI/ML vs cybersecurity vs systems emphasis
4. **Theme** — dual dark/light fully implemented with persisted toggle; confirm preference
5. **Portrait vs abstract** — abstract geometric artwork shipped; swap in approved portrait if preferred
6. **FaceSnap publication** — presented as "project research" until title, authors, venue, date and URL are verified; no journal/DOI/conference claimed
7. **Metrics** — no fabricated users/stars/benchmarks; phishing results labeled as reported evaluation, AIPFL-IDS federation labeled simulated, OneBit delivery labeled best-effort, FaceSnap reliability not claimed

## Verification

- `npm run lint` — must pass
- `npx tsc --noEmit` — must pass
- `npm run build` — must succeed
- Manual: 360/390/768/1024/1440/1920px, keyboard-only navigation, résumé download, copy-email + fallback, theme persistence, no console errors, no broken images
