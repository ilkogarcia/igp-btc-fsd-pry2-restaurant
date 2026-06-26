# DESIGN.md

## Purpose

This document defines the visual and UX rules for the Viejo Barrio / Asador Argentino static website.

Future refactors, especially legacy pages, should make every page feel like the same restaurant website: local, warm, direct, mobile-first, conversion-focused, and consistent with the newer page standard.

## Source Of Truth

Use these pages as the current design standard:

- `index.html`
- `grupos-valencia/index.html`
- `asador-argentino-valencia/index.html`

Use `css/styles.css` as the shared style source. Avoid adding page-specific one-off styles unless a pattern is genuinely unique and cannot be expressed with existing shared classes.

## Visual Principles

- The site should feel like an Argentine grill in Benimaclet: warm, grounded, confident, and local.
- Use real food, dining room, exterior, and group imagery whenever possible.
- Favor strong editorial composition over generic restaurant templates.
- Keep decorative effects restrained. The user goal is to reserve, call, get directions, or understand the offer.
- Keep visual density moderate: generous vertical sections, clear headings, short copy blocks, and obvious CTAs.

## Layout Principles

- Build pages from full-width sections with constrained inner content.
- Use alternating dark and light sections to create rhythm.
- Prefer these section families:
  - `.landing-hero`
  - `.landing-section`
  - `.landing-trust-section`
  - `.landing-dishes-section`
  - `.landing-sharing-section`
  - `.landing-story-section`
  - `.landing-final-cta`
  - `.faq-section`
- Use `width: min(100%, 1120px)` style containers for custom layouts.
- Use responsive CSS grid for cards and story layouts.
- On mobile, collapse all multi-column grids to one column and left-align story copy.

## Typography

Current font system:

- Headings: `Libre Baskerville`
- Body copy: `Roboto Slab`
- Script subtitles/eyebrows: `Satisfy`
- Small uppercase landing eyebrows: `Roboto Slab`

Rules:

- Use `.title` for main display headings.
- Use `.page-title` for homepage-level hero titles.
- Use `.secondarypage-title` for landing page hero titles.
- Use `.section-title` for section headings.
- Use `.subtitle`, `.page-subtitle`, and `.section-subtitle` for supporting lines.
- Use `.text`, `.text-content`, and `.landing-copy` for body copy.
- Keep section headings short, uppercase where the current pattern does so, and avoid cramped long headings.
- Keep body copy readable and practical. Prefer short paragraphs over dense blocks.

## Colors

Use the existing CSS variables:

```css
--black-bg-color: #000;
--almost-bg-color: rgb(45, 45, 45);
--darkes-bg-color: #404258;
--dark-bg-color: rgb(71, 79, 105);
--light-bg-color: rgb(81, 88, 123);
--lighter-bg-color: #6B728E;
--white-bg-color: #fff;
--white-color: #fff;
--almostwhite-color: #faf9f6;
--gold-color: rgb(201, 171, 129);
```

Rules:

- Dark sections use `--dark-bg-color` or `--almost-bg-color`.
- Light sections use `--almostwhite-color` or white.
- Gold is the main accent for eyebrows, small headings, borders, and highlights.
- Primary CTA uses gold background with dark text.
- Light-section CTAs use dark outline and dark hover fill.
- Avoid introducing unrelated brand colors. WhatsApp green is allowed only for the floating WhatsApp CTA.

## Buttons And CTAs

Use `.landing-cta-group` for CTA clusters.

Primary CTA rules:

- Use `.btn.btn-primary-cta` for the main conversion action.
- Main actions are usually `Reservar mesa`, `Consultar disponibilidad`, `Llamar`, or `Cómo llegar`.
- Use uppercase labels where the current page pattern does.
- Keep button text short.

Secondary CTA rules:

- Use `.btn.btn-outline-light` or `.btn-secondary-cta`.
- Secondary actions should support exploration: `Ver carta`, `Ver grupos`, `Ver menús`, `Cómo llegar`.

Mobile rules:

- CTA groups stack vertically on small screens.
- Buttons should fill the available width on mobile.
- CTAs must not be hidden behind sticky header, quick actions, or floating WhatsApp.

## Mobile-First Rules

Mobile users are the priority.

- Preserve `.mobile-quick-actions` with `Llamar`, `Cómo llegar`, and `Reservar`.
- Use comfortable tap targets.
- Avoid horizontal scrolling.
- Keep hero text and CTAs within the viewport.
- Ensure fixed header states do not cover content.
- Do not place critical CTAs too close to the floating WhatsApp button.
- Check all pages at phone width before finalizing frontend work.

## Hero Section Pattern

Preferred hero structure:

```html
<section class="container-fluid topbanner-section text-center landing-hero">
  <picture class="hero-media">
    <source media="(min-width: 768px)" type="image/webp" srcset="/img/example-desktop.webp">
    <source media="(max-width: 767px)" type="image/webp" srcset="/img/example-mobile.webp">
    <img src="/img/example-mobile.webp" width="640" height="480" alt="..." fetchpriority="high" loading="eager" decoding="async">
  </picture>
  <div class="row d-flex align-items-center justify-content-center hero-content">
    <div class="col-11 col-md-9 col-lg-8">
      <p class="landing-eyebrow">Viejo Barrio · Benimaclet</p>
      <h1 class="title secondarypage-title">Page topic</h1>
      <p class="subtitle page-subtitle">Supporting line</p>
      <p class="text page-text hero-lead">Practical value proposition.</p>
      <div class="landing-cta-group">...</div>
    </div>
  </div>
</section>
```

Rules:

- Hero image should be real and relevant.
- Use `fetchpriority="high"` and `loading="eager"` only for the hero/LCP image.
- Add width and height.
- Use a useful `alt`.
- Keep the H1 literal and SEO-aligned.
- Include an immediate conversion CTA.

## Cards And Content Blocks

Preferred card patterns:

- `.landing-dish-card` for image + dish/service cards.
- `.landing-usecase-card` for text-only use cases, plans, prices, or grouped options.
- `.landing-trust-point` for icon/number + short proof point.
- `.landing-story-row` for image/copy narrative sections.

Rules:

- Cards use `border-radius: 8px`.
- Avoid cards inside cards.
- Avoid inline styles; add reusable classes in CSS when a pattern repeats.
- Use real headings inside cards, usually `<h3>`.
- Keep copy short and scannable.
- Images in dish cards should use consistent aspect and `object-fit: cover`.

## FAQ Pattern

Use native `<details>` and `<summary>` with `.faq-accordion`.

Preferred structure:

```html
<section class="container-fluid content-section-dark landing-section faq-section">
  <div class="faq-header">
    <p class="subtitle section-subtitle faq-eyebrow">dudas frecuentes</p>
    <h2 class="title section-title">PREGUNTAS FRECUENTES</h2>
  </div>
  <div class="faq-grid">
    <div class="faq-column">
      <details class="faq-accordion">
        <summary>Question?</summary>
        <p>Answer.</p>
      </details>
    </div>
  </div>
</section>
```

Rules:

- FAQ content must match visible page content and verified facts.
- If adding FAQ schema, visible FAQ and JSON-LD must stay aligned.
- Do not invent business claims in FAQs.

## Image Usage

- Prefer real Viejo Barrio imagery over generic stock-like images.
- Use WebP where available.
- Use `<picture>` for hero images when mobile/desktop crops differ.
- Always include `width`, `height`, `alt`, and `decoding`.
- Lazy load below-fold images.
- Use `srcset`/`sizes` for large responsive assets when helpful.
- Use `object-fit: cover` for fixed-ratio card and hero images.
- Avoid dark, blurry, decorative-only images when the user needs to inspect food, room, or location.

## Navbar And Footer

Navbar rules:

- Preserve the fixed `.site-header`.
- Preserve the current nav routes: Carta, Menús, Grupos, Vinos y Cavas, Contacto.
- Keep desktop reservation and phone actions.
- Preserve scroll states: transparent over hero, solid after scroll.
- Preserve `.mobile-quick-actions` on mobile.

Footer rules:

- Use the current four-column footer pattern on desktop.
- Collapse footer to one centered column on mobile.
- Include logo, hours, reservation link, phone, address, key navigation, legal links, and social links.
- Keep footer NAP details consistent across pages.

Floating WhatsApp:

- Use `.floating-whatsapp`.
- Keep accessible `aria-label`.
- Hide tooltip on touch devices as currently done.
- Do not let it obscure primary mobile CTAs.

## Accessibility Considerations

- Use one clear `<h1>` per page.
- Keep heading hierarchy logical.
- Use descriptive link text.
- Buttons and links need visible focus states.
- Icons inside links/buttons should be `aria-hidden="true"` unless they carry meaning.
- Use accessible names for icon-only links.
- Maintain contrast between text and backgrounds.
- Avoid text over images unless an overlay makes it readable.
- Keep native `<details>` for FAQs unless a custom accordion is justified.
- Validate keyboard navigation on header, CTAs, FAQ, footer, and forms.

## SEO-Friendly Structure Guidelines

- Use semantic sections with descriptive IDs.
- Hero H1 should describe the page topic.
- Section H2s should be meaningful and keyword-aligned without stuffing.
- Keep internal links descriptive.
- Preserve canonical metadata, Open Graph metadata, and structured data consistency.
- Do not add visual copy that conflicts with schema or metadata.
- If a public URL changes, update internal links, sitemap, canonical, and redirects together.

## Reusable Existing Patterns

Hero:

- `index.html` home hero.
- `asador-argentino-valencia/index.html` landing hero.
- `grupos-valencia/index.html` group availability hero.

Trust section:

- `.landing-trust-layout`
- `.landing-trust-point`

Cards:

- `.landing-dish-grid`
- `.landing-dish-card`
- `.landing-usecase-grid`
- `.landing-usecase-card`

Story rows:

- `.landing-story-section`
- `.landing-story-row`
- `.landing-story-row-reverse`
- `.landing-feature-image`

Final CTA:

- `.landing-final-cta`
- `.landing-cta-group`

FAQ:

- `.faq-section`
- `.faq-grid`
- `.faq-accordion`

## Legacy Anti-Patterns To Avoid

Avoid carrying these patterns forward during refactors:

- Older background-only top banners such as `menupage-bannertop`, `winepage-bannertop`, `tastingpage-bannertop`, and `contactpage-bannertop` when a full `.landing-hero` would be clearer.
- Decorative `section-break` image separators that interrupt scanning without adding conversion value.
- Large menu/product lists styled only with centered `product-text` blocks when a more scannable card/list pattern is possible.
- Inline styles for repeated cards, review blocks, or section backgrounds.
- Duplicated page-level header CSS and scroll JS.
- Old popup UI patterns that are not aligned with the current mobile-first conversion flow.
- Long paragraphs inside narrow cards.
- Unverified review/rating claims used as decorative proof.
- Inconsistent language metadata such as Spanish pages using `lang="en"`.

## Validation Checklist

Before finishing a design or legacy page refactor:

- Compare against `index.html`, `grupos-valencia/index.html`, and `asador-argentino-valencia/index.html`.
- Check desktop and mobile layouts.
- Confirm header scroll state works.
- Confirm mobile quick actions appear correctly and do not overlap content.
- Confirm floating WhatsApp does not hide CTAs.
- Confirm CTA hierarchy is clear.
- Confirm cards collapse cleanly on mobile.
- Confirm image ratios, alt text, width/height, and loading behavior.
- Confirm FAQ is keyboard accessible.
- Confirm one H1 and logical H2/H3 structure.
- Confirm internal links and footer links are consistent.
- Confirm no unsupported business claims were added.
