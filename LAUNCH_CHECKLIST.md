# Framework X Flow — Launch Checklist

The website is visually complete without these values. Provide them to go fully live.
Edit `frontend/src/config/site.js` unless noted otherwise. Empty values stay hidden.

## Required to go live
- [ ] **DOMAIN** — your live domain (also update `public/robots.txt` + `public/sitemap.xml`).
- [ ] **CONTACT_EMAIL (recipient)** — set in `backend/.env` as `CONTACT_EMAIL`. Currently a
      test inbox; replace with the owner's real email so contact submissions are received.
- [ ] **CONTACT_EMAIL (public display)** — `contactEmail` in `config/site.js` for the footer/contact line.

## Booking (TidyCal)
- [ ] **TIDYCAL_FIT_CALL_URL** → `tidyCal.fitCallUrl`
- [ ] **TIDYCAL_FIT_CALL_EMBED (path)** → `tidyCal.fitCallPath` (e.g. `username/systems-fit-call`)
- [ ] **TIDYCAL_ASSESSMENT_URL** → `tidyCal.assessmentUrl`
- [ ] **TIDYCAL_ASSESSMENT_EMBED (path)** → `tidyCal.assessmentPath`
  - Recommended booking types to create in TidyCal:
    1. **20-Minute Systems Fit Call** (intro/qualification)
    2. **75-Minute Systems Clarity Assessment** (paid working session)

## Content & social (optional — hidden when blank)
- [ ] **SUBSTACK_URL** → `substackUrl` (enables the Insights + Thank-You Substack buttons)
- [ ] **LINKEDIN_URL** → `linkedinUrl`
- [ ] **YOUTUBE_URL** → `youtubeUrl`
- [ ] **FOUNDER_IMAGE** → `founderImage` (real professional photo; replaces the branded placeholder)
- [ ] **SOCIAL_IMAGE** → `socialImage` (Open Graph share image, 1200×630)

## Pricing (hidden unless both set)
- [ ] **SHOW_PRICING** → `showPricing: true`
- [ ] **ASSESSMENT_PRICE** → `assessmentPrice` (e.g. `"$450"`)

## Analytics
- [ ] **ANALYTICS_ID** → `analyticsId` (wire to your analytics provider when ready)

## Notes
- No fake testimonials, client logos, stats, or credentials are used anywhere.
- Legal pages (Privacy, Terms) are editable templates — have them professionally reviewed.
