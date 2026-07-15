# Legacy Pages Modernization — ExecPlan

## Repository context

Static site for Viejo Barrio / Asador Argentino, a restaurant in Benimaclet, Valencia.

**Source-of-truth pages** (the only visual and UX reference):

| Page | Path | Status |
|------|------|--------|
| Home | `index.html` | Modern reference |
| Asador landing | `asador-argentino-valencia/index.html` | Modern reference |
| Groups landing | `grupos-valencia/index.html` | Modern reference |

These three pages define the desired modern standard for design, metadata, schema, navigation, footer, mobile UX, CTAs, image handling, and content structure.

**Other pages' status must not be assumed modern unless explicitly validated against the references above.**

---

## Available skills

| Skill | Purpose |
|-------|---------|
| `frontend-design` | Visual design, layout, CTA hierarchy, responsive refactors |
| `accessibility` | WCAG 2.2 audits, keyboard nav, focus, contrast, semantics |
| `seo` | Metadata, canonical, redirects, sitemap, structured data |
| `modern-web-guidance` | Native HTML APIs, performance, CSS modern patterns, JS reduction |

Each page phase must consult the relevant skills at their corresponding audit gates.

---

## Active migration scope (strict order)

```
Phase 1: pages/menu.html  →  /carta/
  ↓ (must pass all gates)
Phase 2: /menus/  →  /menus/
  ↓ (must pass all gates)
Phase 3: pages/wines.html  →  /vinos-y-cavas/ (TBC)
```

Each phase must be completed, validated, and committed before the next phase begins.

---

## Future backlog (not in active scope)

- `pages/contact.html` — refactor to `/contacto/` (future)
- `pages/aviso-legal.html` — slug migration (future)
- `pages/politica-privacidad.html` — slug migration (future)
- `pages/politica-cookies.html` — slug migration (future)

These pages are explicitly excluded from the active phases. They must not be worked on during the current migration.

---

## Mandatory page-by-page workflow

Every page must follow these stages in order. The next page cannot begin until the current page passes all stages.

### Stage 1 — Current-state audit

- Inspect the page file, its slug, and all internal references to it.
- Identify what is already modern (matching reference pages).
- Identify what is partial or legacy.
- Identify content that must be preserved as-is (menu items, prices, descriptions, business facts).
- Identify migration risks.
- Document the audit inline as a checklist.

### Stage 2 — Page-specific implementation plan

- Define the target URL slug (confirm with user).
- Define the page topic, H1, title, meta description.
- Define the sections and their order.
- Define what content stays, what gets restructured, what gets replaced.
- Define the CTA hierarchy (primary conversion).
- Define the schema types needed.
- List the reference page sections to reuse.

### Stage 3 — Build

- Create or edit the page at the target URL.
- Follow the reference page patterns exactly for: header, footer, mobile quick actions, hero, trust section, story rows, CTAs, FAQ, final CTA.
- Preserve all verified content (dishes, prices, descriptions, wine DOs, etc.).
- Do not add unverified claims, fake reviews, invented data.
- Use the shared CSS (`css/styles.css`); add minimal page-specific styles if necessary.

### Stage 4 — Visual and responsive audit

Validate against the three source-of-truth pages at **375px, 768px, 1440px**.

Review checklist:

- [ ] Visual hierarchy matches reference pages (eyebrow → H1 → subtitle → lead → CTA → sections)
- [ ] Typography is consistent (headings: Libre Baskerville; body: Roboto Slab; script: Satisfy)
- [ ] Spacing between sections matches reference rhythm
- [ ] Image treatment: correct aspect ratio, no distortion, useful alt text
- [ ] Layout: full-width sections, constrained inner content, alternating dark/light
- [ ] CTA prominence: primary CTA is the most visible action on the page
- [ ] Mobile navigation: header works, quick actions appear on scroll after 240px
- [ ] No horizontal overflow on any viewport width
- [ ] No excessive card usage — avoid monotony, vary section patterns
- [ ] No visual monotony — alternating dark/light, varied section types
- [ ] Footer matches reference layout exactly

### Stage 5 — Accessibility audit

Use the `accessibility` skill. Validate:

- [ ] Semantic HTML: `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>` in correct order
- [ ] Heading hierarchy: exactly one `<h1>`, logical h2/h3 nesting, no skipped levels
- [ ] Keyboard navigation: all interactive elements reachable and operable via Tab/Enter/Space
- [ ] Focus visibility: `:focus-visible` outlines present, not removed
- [ ] Color contrast: text meets 4.5:1 AA minimum, large text meets 3:1
- [ ] Link and button names: descriptive, `aria-label` on icon-only controls
- [ ] Image alternatives: useful `alt` on content images, `alt=""` on decorative
- [ ] Accordion behavior: native `<details>`/`<summary>` used, keyboard operable
- [ ] Reduced motion: `prefers-reduced-motion: reduce` respected if animations added
- [ ] Skip link: provided if navigation is long

### Stage 6 — SEO audit

Use the `seo` skill. Validate:

- [ ] `<title>` is unique, descriptive, under 60 chars, includes target keyword
- [ ] `<meta name="description">` is unique, compelling, 150–160 chars
- [ ] `<link rel="canonical">` points to the target public URL
- [ ] Open Graph and Twitter metadata are present and accurate
- [ ] Exactly one `<h1>` describing the page topic
- [ ] Internal links use descriptive anchor text
- [ ] Structured data: `Restaurant` + `BreadcrumbList` + `FAQPage` (if FAQ is visible) — valid JSON-LD
- [ ] Target URL is clean (no `.html`, lowercase, hyphenated)
- [ ] Legacy URL redirect (301 via `.htaccess`) is in place before deployment
- [ ] Sitemap includes the new URL
- [ ] Legacy URL is handled: `noindex, follow` meta + `<meta http-equiv="refresh">` on old file
- [ ] No duplicate content: self-referencing canonical, no two pages with same topic
- [ ] `lang="es"`

### Stage 7 — Functional and migration validation

- [ ] All internal links on the new page point to existing real URLs (check nav, CTAs, footer)
- [ ] External links (TheFork, WhatsApp, Google Maps, Instagram, Facebook) are correct
- [ ] Mobile quick actions work: Llamar (tel:), Cómo llegar (Maps), Reservar (TheFork)
- [ ] Floating WhatsApp button opens correct pre-filled message
- [ ] Footer contact info is consistent: phone, address, reservation, hours
- [ ] Legacy page file: meta refresh + noindex present
- [ ] `.htaccess` has 301 redirect from legacy URL to new URL
- [ ] Post-deployment checklist completed (see section below)

### Stage 8 — Corrections

- Fix all issues found during Stages 4–7.
- Re-run relevant audits for corrected items.
- Document any remaining deferred issues.

### Stage 9 — Final acceptance checklist

- [ ] All Stage 4 checklist items pass
- [ ] All Stage 5 checklist items pass
- [ ] All Stage 6 checklist items pass
- [ ] All Stage 7 checklist items pass
- [ ] No unverified business claims added
- [ ] No content lost from the original page (all verified facts preserved)
- [ ] Git status reviewed — only intended files staged

### Stage 10 — Commit and phase closure

- Commit with conventional commit message, e.g. `refactor: improve carta layout and remove legacy patterns`
- Mark phase as complete in this document
- Begin next phase

---

## Post-deployment (per phase)

After each phase is committed and deployed, complete the following:

- [ ] Submit updated sitemap to Google Search Console
- [ ] Request indexing for the new URL via Search Console
- [ ] Monitor legacy URLs for 404s after redirect activation
- [ ] Check for indexation drops on legacy URLs 7 days post-deployment

---

## Phase 1 — Carta

### Current state

| Item | Status |
|------|--------|
| Slug | `/carta/index.html` — already clean |
| Legacy slug | `pages/menu.html` — redirect 301 in `.htaccess` + soft redirect |
| Header/nav | Modern (matches reference) |
| Footer | Modern |
| Mobile quick actions | Present |
| Hero | `landing-hero` with real image, eyebrow, H1, subtitle, lead, CTA |
| Metadata | Correct title, description, OG, Twitter, canonical |
| Schema | Restaurant + BreadcrumbList + FAQPage |
| FAQ | Native `<details>`, visible + schema-aligned |
| Featured dishes | `carta-feature-grid` for first-time visitors |
| Chef suggestions | Section with PDF download link |
| Menu content | Preserve all dishes, descriptions, prices, allergen icons |
| Allergen legend | Full table |

### Legacy items to replace

- **Section separators**: `section-break background-img-*` (decorative image dividers) — listed as antipattern in DESIGN.md. Replace with actual content sections or remove.
- **Asterisk decorators**: `<p class="decorator-line">` with asterisk SVG icons between menu sections — antipattern. Remove.
- **Product list classes**: `.product-text`, `.product-name`, `.product-description`, `.product-price` — legacy classes. Evaluate whether to refactor to modern patterns or keep (low risk, shared CSS).

### Content to preserve (do not alter)

- All dish names, descriptions, prices
- All allergen icons and associations
- PDF link to chef suggestions menu
- Allergen legend table

### CTA hierarchy

1. **Primary**: Reserve via TheFork (hero + final CTA)
2. **Secondary**: Skip to carnes a la brasa, view group menus

### Target URL

`/carta/` — already deployed. No additional redirect needed beyond existing `pages/menu.html` → `/carta/`.

### Implementation scope

Refactor the existing `/carta/` page. Remove antipattern decorative elements. Preserve all content. Does not require structural rebuild.

---

## Phase 2 — Menús

### Current state

| Item | Status |
|------|--------|
| Target slug | `/menus/` — TBC whether page exists, directory exists, or nothing exists |
| Legacy slug | `/menus/` — redirect needed in `.htaccess` + soft redirect |
| Header/nav | TBC after audit |
| Footer | TBC after audit |
| Mobile quick actions | TBC after audit |
| Hero | TBC after audit |
| Metadata | TBC after audit |
| Schema | TBC after audit |
| Content | Set-menu details from `/menus/` |

### Required audit (Stage 1)

Before any implementation plan, audit the following:

- **Legacy page**: `/menus/` — inspect structure, content, styling, metadata, schema, internal links
- **Target path**: `/menus/` — check whether `menus/index.html` exists, whether the directory exists but is empty, or neither
- **CSS**: Check `css/styles.css` for classes used by `/menus/` that could break if the legacy page is decommissioned
- **Redirects**: Check `.htaccess` for any existing redirect involving `/menus/`
- **Sitemap**: Check `sitemap.xml` for any existing `/menus/` entry
- **Internal references**: Grep for `/menus/` across all HTML files
- **Prior work**: Check git log for any prior attempts at a `/menus/` page or tasting page refactor

### Content to preserve (do not alter)

- All three menu options (Tradicional 49.90€, Viejo Barrio 59.90€, Bife Argentino 59.90€)
- Kids menu (17.50€)
- Conditions (same menu for table, drink included, IVA included)
- All FAQ text from legacy

### Implementation approach

- Audit first; do not assume the target is empty or that a full rebuild is needed
- Preserve any useful existing implementation found at `/menus/`
- Rebuild only the parts proven to be legacy, inadequate, or missing
- Hero must use `landing-hero` pattern with real image if hero is being rebuilt
- Remove decorative separators and antipatterns if found

### CTA hierarchy

1. **Primary**: Reserve via TheFork — this page serves all diners, not just groups
2. **Secondary**: View groups page `/grupos-valencia/`, view carta, view asador

### Implementation scope

TBD after audit. May range from minor refactor to full build depending on what exists at `/menus/`. After implementation, pass all audit gates (visual, responsive, accessibility, SEO, functional).

### Related page (not merged)

| Page | Path | Purpose |
|------|------|---------|
| Groups landing | `/grupos-valencia/` | Group occasions, celebrations, company meals, reserved spaces — separate intent, do not merge |

Internal links between `/menus/` and `/grupos-valencia/` are encouraged where natural.

---

## Phase 3 — Vinos y cavas

### Current state

| Item | Status |
|------|--------|
| Current slug | `pages/wines.html` — legacy |
| Target slug | **To be confirmed** with user |
| HTML lang | `en` — must be `es` |
| Hero | Legacy `winepage-bannertop` — no real image background |
| Header/nav | Modern (matches reference) |
| Footer | Modern |
| Mobile quick actions | Present |
| Metadata | Present but points to legacy slug |
| Canonical | Points to `pages/wines.html` |
| Schema | Restaurant only — missing BreadcrumbList, FAQPage |
| Content | Red, white, and sparkling wines organized by DO |
| Product list | Legacy `.product-text` classes |
| Section separators | `section-break background-img-*` — antipattern |
| Asterisk decorators | Present — antipattern |
| Final CTA | TheFork reservation |

### Content to preserve (do not alter)

- All wine names, DO classifications, descriptions, prices
- All verified wine details (grape varieties, barrel aging, tasting notes)

### Known issues to fix

- `lang="en"` → `lang="es"`
- Hero: replace `winepage-bannertop` with `landing-hero` + real image
- Add BreadcrumbList + FAQPage schema
- Add FAQ section if useful content exists
- Remove decorative separators and asterisk decorators
- No requirement to use card grids — content structure should match the data (wine list)
- Update canonical, OG, Twitter metadata for new slug

### CTA hierarchy

1. **Primary**: Reserve via TheFork (hero + final CTA)
2. **Secondary**: View carta

### Redirect required

- `pages/wines.html` → `/vinos-y-cavas/` (slug TBC) 301 in `.htaccess`
- Soft redirect (`<meta http-equiv="refresh">` + `noindex`) on legacy file

---

## Shared patterns reference

Use these patterns from the three source-of-truth pages (`index.html`, `asador-argentino-valencia/index.html`, `grupos-valencia/index.html`). The `carta/index.html` page also demonstrates the modern pattern set post-migration.

| Pattern | Reference file(s) |
|---------|-------------------|
| `landing-hero` with `hero-media` `<picture>` | All three |
| `landing-eyebrow` + `secondarypage-title` H1 + `page-subtitle` + `hero-lead` | All three |
| `landing-cta-group` with `btn-primary-cta` + `btn-outline-light` | All three |
| `landing-trust-section` + `landing-trust-layout` + `landing-trust-point` | All three |
| `landing-dish-grid` + `landing-dish-card` | asador, grupos, carta |
| `landing-usecase-grid` + `landing-usecase-card` | asador, grupos |
| `landing-story-section` + `landing-story-row` / `landing-story-row-reverse` | asador, grupos |
| `landing-final-cta` section | All three |
| `faq-section` + `faq-accordion` (native `<details>`) | All three |
| SVG sprite for icons (first element after `<body>`) | All three |
| Header: `site-header sticky-top home-transparent-header` | All three |
| Mobile quick actions: `.mobile-quick-actions` inside header | All three |
| Floating WhatsApp: `.floating-whatsapp` | All three |
| Footer: `.footer-section` with 4-column grid | All three |
| Schema: `Restaurant` + `BreadcrumbList` + `FAQPage` | asador, grupos, carta |

---

## Risks and unknowns

1. **Wine images**: Verify whether real wine/restaurant photos are available for hero and section backgrounds. Do not use generic stock photos.
2. **Wine content accuracy**: The current `pages/wines.html` has commented-out entries (Nodus Bobal, Pasión de Bobal, Equilibrio 9). Decide whether to uncomment, remove, or confirm current availability.
3. **FAQ content for vinos**: Determine whether FAQ content exists or needs to be written from verified facts.
4. **CSS changes**: Pages that remove `section-break` or `winepage-bannertop` CSS classes must verify the shared stylesheet does not break. Those classes may be referenced only by the legacy page, but this must be confirmed.
5. **Post-deployment monitoring**: After each redirect activation, monitor for 404 spikes and indexation drops (see post-deployment checklist).

---

## Commit boundaries

```
Phase 1 commit: "refactor: improve carta layout and remove legacy patterns"
  (refactors existing /carta/ page, removes antipattern decorative elements, preserves all verified data)

Phase 2 commit: "feat: migrate tasting menus to /menus/ with modern patterns"
  (new or refactored page at /menus/, preserves all verified set-menu content, scope determined by audit)

Phase 3 commit: "feat: migrate wines to /vinos-y-cavas/ with modern patterns"
  (new slug, new hero, preserved wine content, full schema, redirect)
```

Each commit is a self-contained, reviewable unit. No phase depends on a future phase.

---

## Phase status

| Phase | Page | Slug | Status |
|-------|------|------|--------|
| 1 | Carta | `/carta/` | Pending |
| 2 | Menús | `/menus/` | Pending |
| 3 | Vinos y cavas | TBC | Pending |
