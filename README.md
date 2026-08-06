# Framework X Flow — Website

A production-ready marketing website for **Framework X Flow**, a Business Systems and Operations Studio.

- **Tagline:** Build the framework. Create the flow.
- **Stack:** React (CRA) + Tailwind CSS + Framer Motion + Lenis (frontend), FastAPI (backend, contact email only), served on the Emergent platform.

> The brief referenced Next.js/TypeScript. This project is delivered on Emergent's supported **React + FastAPI** stack (confirmed with the owner), which provides the same functionality (routing, SEO metadata, reusable components, server-side email).

## Project structure

```
frontend/src/
  config/site.js          ← EDIT ALL BUSINESS DETAILS HERE (central config)
  data/content.js         ← all page copy
  components/
    layout/               ← Navbar, Footer, Layout (skip link, smooth scroll)
    shared/               ← Method diagram, service cards, FAQ, CTA band, page header
    booking/TidyCalEmbed  ← inline TidyCal widget + fallback
    motion/               ← kinetic headline, scroll reveals
    brand/                ← Wordmark, Monogram, Marquee
    Seo.jsx               ← per-page title/meta/OG + JSON-LD
    Cta.jsx               ← unified, always-functional CTA
  pages/                  ← Home, Services, Approach, About, Insights, Book,
                            Contact, ThankYou, Legal (Privacy+Terms), NotFound
backend/
  server.py               ← /api/contact (Resend via Emergent) + /api/contact/config
public/                   ← favicon.svg, robots.txt, sitemap.xml
```

## Editing content
- **Business details, links, pricing, TidyCal, social:** `frontend/src/config/site.js`.
- **Page copy:** `frontend/src/data/content.js`.
- Any config value left as `""` (empty string) automatically **hides** the related UI (social links, pricing, Substack button, contact email line, etc.).

## Contact form (email)
- Uses Emergent-managed **Resend**. No Resend API key needed.
- Backend env (`backend/.env`):
  - `EMERGENT_EMAIL_KEY` — provisioned by the platform.
  - `EMAIL_FROM_NAME` — sender display name ("Framework X Flow").
  - `CONTACT_EMAIL` — **recipient** of contact submissions. Currently set to a
    deliverable test inbox (`delivered@resend.dev`). **Replace with the owner's
    real email before launch.**
- If `CONTACT_EMAIL` is blank, the contact form is hidden and a fallback message is shown.

## Booking (TidyCal)
- Configure `tidyCal` values in `config/site.js`. When empty, the Book page shows a
  graceful "booking is being set up" state that routes to Contact.
- The inline embed loads TidyCal's script and falls back to an external button if it
  cannot render.

## Local development
Services run under supervisor (no manual start needed on Emergent):
```
sudo supervisorctl restart frontend
sudo supervisorctl restart backend   # after editing backend/.env
```

## Deployment
1. Fill in `frontend/src/config/site.js` (domain, contact email, TidyCal, Substack, LinkedIn, YouTube, pricing).
2. Set `backend/.env` → `CONTACT_EMAIL` to the owner's real inbox.
3. Update the domain in `public/robots.txt` and `public/sitemap.xml`.
4. Deploy via the Emergent **Deploy** button, then connect a custom domain in project settings.
5. See `LAUNCH_CHECKLIST.md` for the values still needed from the owner.

## Accessibility & SEO
- Skip-to-content link, keyboard-accessible nav + mobile menu (Escape to close, focus trapped), visible focus states, reduced-motion support.
- Per-page titles, meta descriptions, canonical + Open Graph tags, Organization/ProfessionalService and FAQ JSON-LD, sitemap, robots.txt.
