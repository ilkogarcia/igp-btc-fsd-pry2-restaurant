# AGENTS.md

## Project Context

This repository contains the static website for Viejo Barrio / Asador Argentino, a restaurant in Benimaclet, Valencia.

The site is local SEO and conversion focused. Google Business Profile and Google Maps are critical for discovery, but the website must support that presence with accurate local signals, useful content, strong UX, and clear reservation paths.

The current quality standard is defined by these newer pages:

- `index.html`
- `grupos-valencia/index.html`
- `asador-argentino-valencia/index.html`

Legacy pages should be refactored toward the patterns, tone, structure, metadata, navigation, footer, mobile UX, and conversion flows used by those newer pages.

## Main Business Objective

Help potential guests quickly decide that Viejo Barrio is the right restaurant and take action.

Primary conversions:

- Reserve a table through TheFork.
- Call the restaurant.
- Open Google Maps directions.
- Contact via WhatsApp, especially for group availability.

Secondary goals:

- Strengthen local relevance for Benimaclet and Valencia searches.
- Improve trust through clear, accurate restaurant information.
- Keep the experience fast, mobile-friendly, accessible, and consistent.

## Source Of Truth And Content Safety

Accuracy matters more than persuasive copy.

Do not invent or embellish:

- Dishes or ingredients.
- Prices or menu availability.
- Services or event formats.
- Group capacities.
- Opening hours.
- Awards, rankings, ratings, reviews, or press mentions.
- Claims like "best", "number one", "most authentic", or "award-winning".
- Accessibility, dietary, private-room, delivery, parking, or child-friendly claims unless verified.

Use only facts already present in the repository, supplied by the user, or verified from an approved source. If a fact is uncertain, either omit it or phrase it as a question for the user.

Be especially careful with structured data. Do not add fake `aggregateRating`, review counts, awards, price ranges, opening hours, or menu data. Existing claims that look unverified should be flagged during audits rather than expanded.

Keep the brand voice grounded, local, warm, and direct. Avoid generic marketing filler.

## Local SEO Priorities

Every important page should support local restaurant discovery without keyword stuffing.

Prioritize:

- Clear page topic targeting, such as "asador argentino en Valencia", "restaurante para grupos en Valencia", "Benimaclet", and relevant dish/category terms.
- Consistent NAP details where present: Viejo Barrio, phone, address, locality, and map links.
- Self-referencing canonical URLs.
- Unique titles and meta descriptions that match the page content.
- Open Graph and Twitter metadata for share previews.
- `Restaurant`, `BreadcrumbList`, and, where appropriate, `FAQPage` JSON-LD.
- Internal links between home, carta, menús, vinos, contacto, grupos, and asador landing pages.
- Google Maps links using the established Google Maps CID/place/directions patterns already present in the newer pages.
- Sitemap and robots consistency when URLs are added, removed, or redirected.

Google Business Profile and Google Maps are business-critical. Do not change map links, coordinates, place IDs, phone numbers, or address wording casually. If they appear inconsistent, audit and ask before changing.

## UX And Conversion Priorities

Mobile users are the priority.

Preserve and extend these conversion patterns from the newer pages:

- Header navigation with clear primary routes.
- Mobile quick actions for `Llamar`, `Cómo llegar`, and `Reservar`.
- Visible TheFork reservation CTAs.
- WhatsApp contact for reservation or group availability where appropriate.
- Footer contact block with reservation, phone, address, and key internal links.
- Clear hero messaging with immediate CTAs.
- Sections that answer practical visitor questions before asking for conversion.
- Real restaurant imagery whenever possible.

Mobile UX rules:

- CTAs must be easy to tap and not overlap fixed UI.
- Text must remain readable without zooming.
- Sticky headers and quick actions must not hide content or focused elements.
- Images need stable dimensions, useful `alt`, and lazy loading unless they are LCP/hero images.
- Do not add decorative UI that slows the site or distracts from booking, calling, or directions.

## Skill Usage

Use the local skills when the task matches their purpose.

Use the `frontend-design` skill when:

- Creating or substantially redesigning pages, sections, landing pages, components, CTAs, or visual layout.
- Refactoring legacy pages toward the newer visual standard.
- Improving responsive layout, visual hierarchy, or conversion-focused UI.

When using it, keep the design consistent with the existing Viejo Barrio standard. Do not introduce an unrelated visual identity.

Use the `accessibility` skill when:

- Auditing or changing navigation, buttons, forms, links, images, modals, accordions, menus, or interactive behavior.
- Fixing keyboard navigation, focus states, labels, contrast, heading order, alt text, or screen reader issues.
- Before finalizing significant frontend changes.

Use the `seo` skill when:

- Creating or refactoring metadata, headings, canonical URLs, sitemap, robots, structured data, internal links, redirects, or local landing page copy.
- Auditing local SEO quality.
- Adding or removing public URLs.

Use the `modern-web-guidance` skill when:

- Implementing or refactoring HTML, CSS, and client-side JavaScript.
- Using modern browser APIs such as dialogs, popovers, anchor positioning, container queries, view transitions, or scroll-driven animations.
- Improving responsive layout, performance (CWV, content-visibility, Fetch Priority, image optimization), or accessibility with native UI patterns.
- Replacing legacy JavaScript dependencies with simpler native platform features.

The `modern-web-guidance` skill complements `frontend-design`, `accessibility`, and `seo` but does not replace them. Consult it early in frontend tasks, especially when evaluating whether a native browser API can replace a library dependency.

Do not use cutting-edge browser features blindly:

- Verify browser compatibility against the project's expected audience using the compatibility data returned by the skill.
- Preserve graceful fallbacks for features that are not Baseline Widely Available.
- Avoid unnecessary complexity: prefer simpler, well-supported solutions over novel APIs that add maintenance cost.

Before using a skill, read its `SKILL.md` and follow its instructions.

## Expected Workflow

Follow this sequence for meaningful repository changes:

1. Audit
   - Inspect the relevant pages, shared CSS, metadata, schema, links, and current git status.
   - Identify whether the target page is newer-standard or legacy.
   - Check for existing user changes and avoid overwriting them.

2. Plan
   - Explain the intended changes, affected files, SEO/UX impact, and validation steps.
   - Separate confirmed facts from assumptions.
   - Call out risky claims or missing source data.

3. Approval
   - Wait for user approval before implementing when the user requested planning or when the change affects public content, SEO, redirects, schema, or business facts.

4. Build
   - Keep edits scoped.
   - Preserve existing patterns unless there is a clear reason to change them.
   - Prefer static HTML/CSS conventions already used in the repo.
   - Avoid broad refactors unrelated to the requested task.

5. Validate
   - Run relevant checks.
   - Inspect mobile and desktop behavior when frontend changes are made.
   - Verify SEO, accessibility, links, and conversion paths before the final answer.

## Implementation Rules

### Consistency With Newer Pages

Use `index.html`, `grupos-valencia/index.html`, and `asador-argentino-valencia/index.html` as the implementation standard.

When refactoring legacy pages:

- Align header, footer, mobile quick actions, CTA hierarchy, metadata, schema style, image handling, and internal links with the newer pages.
- Preserve valid existing content, but improve structure and clarity.
- Do not copy page-specific claims from one page to another unless they apply.

### Redirects And URLs

- Keep public URLs stable unless the user explicitly approves a URL change.
- If removing or replacing a public page, plan the redirect before editing links.
- Prefer clean, lowercase, hyphenated URLs.
- Update internal links, canonical URLs, sitemap entries, and redirects together.
- Do not leave important pages orphaned.

### Internal Links

- Use descriptive anchor text.
- Link between related conversion pages naturally:
  - Home
  - Carta
  - Menús
  - Vinos
  - Contacto
  - Asador argentino en Valencia
  - Restaurante para grupos en Valencia
- Keep navigation and footer links consistent across pages.
- Check that relative and absolute paths work from nested directories.

### Metadata And Structured Data

Each indexable page should have:

- One clear `<title>`.
- One matching meta description.
- One canonical URL.
- Appropriate Open Graph and Twitter metadata.
- A single clear `<h1>`.
- Structured data only when it matches visible, verified page content.

Do not add schema that claims unavailable services, unverified ratings, fake reviews, or invented menu data.

### Mobile UX

Before finalizing frontend work:

- Check the page at mobile and desktop widths.
- Confirm header, sticky elements, quick actions, floating WhatsApp, and CTAs do not overlap.
- Confirm tap targets are comfortable.
- Confirm hero content fits and the next section remains reachable.
- Confirm images load with correct aspect ratio and do not cause layout shift.

## Validation Checklist Before Final Answer

Before reporting completion, verify the relevant items:

- Git status reviewed; unrelated user changes preserved.
- Page renders on desktop and mobile.
- Header, footer, mobile quick actions, TheFork, phone, WhatsApp, and Google Maps links work.
- Internal links point to existing URLs.
- Metadata is unique, accurate, and aligned with page content.
- Canonical URL matches the intended public URL.
- JSON-LD is valid JSON and does not include unverified claims.
- Exactly one main `<h1>` unless there is a documented reason.
- Images have useful `alt`, width/height, and appropriate loading behavior.
- Keyboard focus is visible and logical.
- No text or CTA overlap on mobile.
- Sitemap/robots/redirects are updated if public URLs changed.
- Final answer summarizes changed files, validation performed, and any remaining risks.

## Repository Hygiene

Do not ignore or delete project documentation such as `AGENTS.md`, `README.md`, `DESIGN.md`, SEO docs, or planning docs.

Do not commit local-only files, caches, logs, secrets, screenshots from ad hoc testing, or editor state unless the user explicitly wants them tracked.

## Assumptions

- Spanish is the primary language for public site content.
- The newer pages are the source for current design and SEO direction.
- The website should support Google Business Profile and Google Maps rather than replace them.
- The static site is deployed from repository files, so linked public assets should remain trackable.
