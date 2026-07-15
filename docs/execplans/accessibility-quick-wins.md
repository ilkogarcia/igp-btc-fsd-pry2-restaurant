# Accessibility Quick Wins

**Goal:** Fix the highest-impact accessibility issues across the 7 priority pages with minimal code changes.

**Pages audited:** `index.html`, `grupos-valencia/index.html`, `asador-argentino-valencia/index.html`, `carta/index.html`, `vinos-y-cavas/index.html`, `menus/index.html`, `contacto/index.html`

---

## Findings (priority order)

### 1. P0 — Skip navigation link missing (all pages)
**WCAG:** 2.4.1 (A)  
**Issue:** No mechanism to skip repetitive header/navigation. Keyboard users must tab through every nav link before reaching main content.  
**Fix:** Add `.visually-hidden` utility class to `css/styles.css` and a skip link as the first focusable element in `<body>`:

```css
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.skip-link {
  position: absolute;
  top: -100%;
  left: 0;
  z-index: 10000;
  padding: 0.5rem 1rem;
  background: #fff;
  color: #000;
  font-size: 1rem;
}

.skip-link:focus {
  top: 0;
}
```

```html
<a href="#main-content" class="skip-link visually-hidden skip-link">Saltar al contenido principal</a>
```

Add `id="main-content"` to the `<main>` element on each page.  
**Affected:** All 7 pages.

---

### 2. P0 — Contact form lacks `<label>` elements (contacto/index.html)
**WCAG:** 3.3.2 (A), 4.1.2 (A)  
**Issue:** Name, email, and message fields use `placeholder` only. Placeholders disappear on input and fail SC 3.3.2.  
**Fix:** Add `<label>` for each input, visually hidden if the design intends placeholder-only appearance:

```html
<label for="inputName" class="visually-hidden">Nombre y apellidos</label>
<input type="text" class="form-control form-control-dark mb-3" id="inputName" name="name" placeholder="Nombre y apellidos" required>
```

**Affected:** `contacto/index.html` lines 525–527.

---

### 3. P1 — Navbar toggler `aria-label` in English (all pages)
**WCAG:** 3.1.1 (A) — language of page  
**Issue:** `aria-label="Toggle navigation"` is English on a Spanish site.  
**Fix:** Replace with `aria-label="Abrir menú de navegación"`.  
**Affected:** All 7 pages.

---

### 4. P1 — Message popup missing `role="alert"` (index.html)
**WCAG:** 4.1.3 (AA)  
**Issue:** The popup div at line 562 lacks `role="alert"` or `aria-live`, so dynamically shown content won't be announced.  
**Fix:** Change to `<div class="MessagePopUp" id="message-popup" role="alert" aria-live="polite">`.  
**Affected:** `index.html` line 562 (contacto/index.html already has the correct attributes).

---

### 5. P1 — Wine names not in heading hierarchy (vinos-y-cavas/index.html)
**WCAG:** 1.3.1 (A)  
**Issue:** Wine names like "Norton 1895 Malbec" are `<p>` elements. Screen reader navigation by heading skips all wines.  
**Fix:** Change `<p class="product-text product-name">` to `<h3 class="product-text product-name">` for wine names, and wrap the price in a `<p>`:

```html
<article class="carta-paper-item">
  <div class="carta-paper-item-header">
    <h3 class="product-text product-name">Norton 1895 Malbec</h3>
    <p class="product-text product-price">€17,50</p>
  </div>
  ...
</article>
```

**Affected:** `vinos-y-cavas/index.html` (~32 wine items across 6 DO sections).

---

### 6. P2 — Section-break decorative `div`s contain readable `&nbsp;` (carta/index.html, vinos-y-cavas/index.html)
**WCAG:** 4.1.2 (A)  
**Issue:** Section separators use `<div class="col col-xl-12">&nbsp;</div>` — the `&nbsp;` is rendered and may be announced.  
**Fix:** Remove the `&nbsp;` and set a minimum height via CSS on `.section-break`, or add `aria-hidden="true"` to the row:

```html
<div class="container-fluid section-break background-img-2 text-center" aria-hidden="true">
  <div class="row d-flex align-items-center justify-content-center">
    <div class="col col-xl-12"></div>
  </div>
</div>
```

**Affected:** `carta/index.html` lines 471–475, 536–540; `vinos-y-cavas/index.html` lines 563–567.

---

### 7. P2 — Footer "NAVEGACIÓN" all-caps heading text (all pages)
**WCAG:** 3.1.4 (AAA), readability  
**Issue:** The heading text content is `NAVEGACIÓN` in all caps. Some screen readers may spell it out.  
**Fix:** Use normal-case text in HTML and `text-transform: uppercase` in CSS:

```html
<h2 class="footer-column-title" id="footer-links-title">Navegación</h2>
```

```css
.footer-column-title {
  text-transform: uppercase;
}
```

**Affected:** All 7 pages, footer navigation column heading.

---

### 8. P2 — PDF link lacks file-type indicator (carta/index.html)
**WCAG:** 2.4.4 (A), 3.2.2 (A)  
**Issue:** The link to `menu-sugerencias-chef-...pdf` opens a PDF without warning. Users on screen readers or slow connections may be surprised.  
**Fix:** Add "(PDF)" to the link text:

```html
<a href="/menu/menu-sugerencias-chef-asador-argentino-valencia-viejo-barrio.pdf"
   target="_blank" rel="noopener"
   class="btn btn-primary-cta mt-2 mb-3"
   role="button">
  VER SUGERENCIAS DEL CHEF (PDF)
</a>
```

**Affected:** `carta/index.html` lines 300–309.

---

### 9. P2 — Mobile quick-actions `div` with orphan `aria-label` (all pages)
**WCAG:** 4.1.2 (A)  
**Issue:** `<div class="mobile-quick-actions" aria-label="Acciones rápidas">` — `aria-label` on a generic `<div>` without a role is ignored by most screen readers.  
**Fix:** Add `role="group"`:

```html
<div class="mobile-quick-actions d-lg-none" role="group" aria-label="Acciones rápidas">
```

**Affected:** All 7 pages.

---

### 10. P2 — Allergen images use `alt="Gluten"` etc. — duplicated context (carta/index.html)
**WCAG:** 1.1.1 (A)  
**Issue:** Allergen icon images have alt text like `alt="Gluten"`, `alt="Lácteos"`. Since these repeat the same information already present in the ingredient lists, they create redundant announcements.  
**Fix:** Mark them as decorative with `alt=""` and `role="presentation"`, and add a visually hidden legend explaining the allergen system at the top of each menu section.

```html
<img src="/img/allergens/2/gluten.png" alt="" class="allergen-icon" loading="lazy" decoding="async">
```

**Affected:** `carta/index.html` — all allergen icons (~70 occurrences across menu items).

---

## Summary of effort

| # | Finding | Pages | Est. time | Complexity |
|---|---------|-------|-----------|------------|
| 1 | Skip navigation link | 7 | 30 min | Low |
| 2 | Contact form labels | 1 | 10 min | Low |
| 3 | Navbar toggler label | 7 | 5 min | Low |
| 4 | Message popup role | 1 | 2 min | Low |
| 5 | Wine headings | 1 | 20 min | Low |
| 6 | Section-break `&nbsp;` | 2 | 5 min | Low |
| 7 | Footer heading text | 7 | 5 min | Low |
| 8 | PDF link indicator | 1 | 2 min | Low |
| 9 | Quick-actions role | 7 | 5 min | Low |
| 10 | Allergen alt text | 1 | 15 min | Low |

**Total estimated time:** ~1.5 hours.

All fixes are low-complexity, low-risk, and do not require visual redesign or content changes.

---

## Implementation status (2026-07-15)

| # | Finding | Status | Notes |
|---|---------|--------|-------|
| 1 | Skip navigation link | **Implementado** | `.skip-link` añadido a CSS; enlace como primer elemento del `<body>` + `id="main-content"` en `<main>` en 7 páginas. El enlace se mantiene fuera de pantalla hasta recibir foco. |
| 2 | Contact form labels | **Implementado** | 3 `<label>` con `class="visually-hidden"` y `for` coincidente con cada `id`. Placeholders conservados. |
| 3 | Navbar toggler `aria-label` | **Implementado** | `"Toggle navigation"` → `"Abrir menú de navegación"` en 7 páginas. |
| 4 | Message popup role | **Implementado** | `role="status" aria-live="polite" aria-atomic="true"` en `index.html` (contacto ya lo tenía). |
| 5 | Wine heading hierarchy | **No implementado** | Aplazado por decisión del propietario (no indicado en el prompt aprobado). Requiere cambios estructurales en ~32 items de vino. |
| 6 | Section-break `&nbsp;` | **Implementado** | `&nbsp;` eliminado y `aria-hidden="true"` añadido en 4 separadores (3 carta + 1 vinos). La altura visual se mantiene gracias al `padding` de `.section-break`. |
| 7 | Footer heading all-caps | **No implementado** | Aplazado por decisión del propietario (no indicado en el prompt aprobado). |
| 8 | PDF link indicator | **Implementado** | Texto cambiado a `"VER SUGERENCIAS DEL CHEF (PDF)"` en `carta/index.html`. |
| 9 | Quick-actions role | **Implementado** | `<div>` → `<nav>` en 7 páginas, conservando `aria-label="Acciones rápidas"`. |
| 10 | Allergen alt text | **No implementado** | Aplazado por decisión del propietario (no indicado en el prompt aprobado). |

### Clases CSS añadidas

- **`.skip-link`**: enlace de salto — oculto por defecto, visible al recibir foco.
- **`.visually-hidden`**: utilidad estándar screen-reader-only.
