# Framework X Flow — PRD

## Original problem statement
Build a complete, polished, production-ready consulting website for **Framework X Flow**, a
Business Systems and Operations Studio helping owner-led service businesses turn scattered
operations into clear, repeatable systems. Primary goal: book a 20-minute Systems Fit Call.
Business name must always be exactly "Framework X Flow"; "Framework Xplore" must never appear.
No fake testimonials/logos/stats/credentials. All CTAs/forms/nav must be functional. No
placeholder/lorem text on public pages.

## Architecture
- **Frontend:** React (CRA) + Tailwind + Framer Motion + Lenis smooth scroll. Central config
  (`config/site.js`) + content (`data/content.js`). Reusable components (layout, shared, motion,
  brand, booking). Per-page SEO (`Seo.jsx`) with title/meta/OG + JSON-LD.
- **Backend:** FastAPI, single purpose — `/api/contact` (Emergent-managed Resend email) and
  `/api/contact/config`. No DB, no auth (per brief).
- **User choices:** React+FastAPI stack, Emergent Resend for email, launch variables left blank
  (hidden gracefully), AI-generated abstract brand visuals, branded founder placeholder.

## User personas
- Owner-led service business (2–20 people) with growing operational complexity, no ops manager.
- Established solopreneur with recurring clients/contractors preparing to delegate.

## Core requirements (static)
- 11 pages: Home, Services, Approach, About, Insights, Book, Contact, Privacy, Terms, Thank You, 404.
- Three offers with full descriptions + hidden-when-blank pricing.
- Map → Frame → Build → Flow method.
- TidyCal inline booking with fallback; Resend contact form with validation + spam honeypot.
- WCAG 2.2 AA: skip link, keyboard nav, focus states, reduced-motion, accessible mobile menu.
- SEO: unique titles/descriptions, canonical, OG, sitemap, robots, Organization/ProfessionalService/FAQ JSON-LD.
- Brand palette (ivory/ink/teal/sage/terracotta), Sora + Inter, subtle X motif.

## Implemented (2026-06)
- All 11 pages built and routed; navbar + distinct Book CTA + accessible mobile sheet menu.
- Award-level motion: kinetic line-by-line hero reveal, Lenis smooth scroll, scroll reveals,
  editorial marquee, hero parallax, custom AI-generated abstract workflow/X visuals.
- Backend contact endpoint verified via curl (valid 200, missing-privacy 422, invalid-email 422,
  honeypot silent 200). Frontend E2E tested — 100% pass, no functional issues.
- README, LAUNCH_CHECKLIST, test_credentials, favicon, sitemap, robots.

## Backlog (P1/P2 — needs owner input or optional)
- **P1:** Owner to supply launch variables (domain, real CONTACT_EMAIL, TidyCal URLs, Substack,
  LinkedIn, YouTube, founder photo, pricing) via `config/site.js` + `backend/.env`.
- **P2:** Optional Substack RSS feed to display real Field Notes posts.
- **P2:** Wire analytics provider to `analyticsId`.
- **P2:** Connect repo to GitHub + deploy + custom domain (platform actions).

## Next tasks
- Collect launch credentials from owner and populate config.
- Deploy and connect custom domain.
