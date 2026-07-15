# Frontend Design Quick Wins

**Goal:** Corregir pequeños defectos visuales y de consistencia en las 7 páginas prioritarias, sin rediseñar ni cambiar la identidad visual aprobada.

**Páginas auditadas:** `/`, `/carta/`, `/menus/`, `/grupos-valencia/`, `/asador-argentino-valencia/`, `/vinos-y-cavas/`, `/contacto/`

**Ficheros auditados:** `css/styles.css`, los 7 HTML con sus bloques `<style>` inline

---

## Summary

No se encontraron defectos visuales graves ni rupturas (layout breaks, imágenes deformadas, texto invisible, overlap de CTAs, jerarquía rota). Se detectaron 3 tareas de consistencia menor, enumeradas abajo.

---

## Tasks

### 1. P1 — Botones de sección de acciones (`#acciones`) en contacto carecen de `min-width` y `text-transform`

**Página y viewport:** `/contacto/`, todos los viewports ≥768px.

**Defecto:** Los 3 botones (`Llamar`, `Abrir WhatsApp`, `Reservar`) dentro de `.contact-action-item` no están envueltos en `.landing-cta-group` y por tanto no reciben `min-width: 150px`, `letter-spacing: 1px`, ni `text-transform: uppercase`. Son visualmente más estrechos que los mismos `.btn-outline-light btn-secondary-cta` usados en el hero de otras páginas.

**Evidencia:**
- `contacto/index.html` líneas 499, 505, 511 — botones dentro de `<article class="contact-action-item">`, sin `.landing-cta-group` padre.
- `css/styles.css` línea 650 — `.landing-cta-group .btn` define `min-width: 150px; letter-spacing: 1px; text-transform: uppercase;`.

**Archivo y selector implicados:**
- `contacto/index.html` inline `<style>`: añadir regla para `.page-contacto .contact-action-item .btn`.

**Solución mínima recomendada:**
Añadir en el bloque `<style>` inline de `contacto/index.html`:

```css
.page-contacto .contact-action-item .btn {
    min-width: 150px;
    letter-spacing: 1px;
    text-transform: uppercase;
}
```

**Riesgo de regresión:** Bajo. Los botones en contacto tienen todos la misma clase `.btn-outline-light btn-secondary-cta`. La regla es scoped a `.page-contacto .contact-action-item`.

**Tiempo estimado:** 5 min.

**Criterio verificable:** Botones de las 3 action cards en `/contacto/` tienen al menos 150px de ancho y texto en mayúsculas con tracking (≥768px).

---

### 2. P1 — Hover de botón primario en sección story de menús difiere del estándar del sitio

**Página y viewport:** `/menus/` sección `#planificar`, todos los viewports.

**Defecto:** `.page-menus-grupos .landing-story-copy .btn:hover` (línea 2246-2250 de `styles.css`) sobreescribe el hover del botón primario (`Ver Grupos`) a `background-color: transparent; color: var(--gold-color)`. El estándar del sitio para `.btn-primary-cta:hover` es `background-color: var(--almostwhite-color); color: var(--almost-bg-color)`. La diferencia es visible al pasar el ratón.

**Evidencia:**
- `css/styles.css` línea 2246-2250 — hover universal para cualquier `.btn` dentro de `.page-menus-grupos .landing-story-copy`.
- `css/styles.css` línea 662-667 — hover estándar de `.btn-primary-cta`.

**Archivo y selector implicados:**
- `css/styles.css` líneas 2240-2250: `.page-menus-grupos .landing-story-copy .btn`.

**Solución mínima recomendada:**
Excluir `.btn-primary-cta` del override inline, o reemplazar las líneas 2240-2250 por una regla que solo afecte a botones secundarios:

```css
.page-menus-grupos .landing-story-copy .btn:not(.btn-primary-cta) {
    background-color: var(--gold-color);
    color: var(--almost-bg-color);
    border-color: var(--gold-color);
}
.page-menus-grupos .landing-story-copy .btn:not(.btn-primary-cta):hover,
.page-menus-grupos .landing-story-copy .btn:not(.btn-primary-cta):focus {
    background-color: transparent;
    color: var(--gold-color);
}
```

(Alternativa más segura: eliminar el bloque `.page-menus-grupos .landing-story-copy .btn` completo, ya que los botones en esa sección ya llevan `.btn-primary-cta` y `.btn-outline-dark` con sus estilos definidos por separado en líneas 2252-2262.)

**Riesgo de regresión:** Bajo. Los botónes en `#planificar` son 1 `.btn-primary-cta` + 2 `.btn-outline-dark`. Todos tienen estilos explícitos.

**Tiempo estimado:** 10 min.

**Criterio verificable:** Al hacer hover sobre "Ver Grupos" en `/menus/#planificar`, el botón se vuelve blanco (estándar), no transparente.

---

### 3. P2 — Duplicado CSS de `background` en `.page-carta .carta-first-section .landing-dish-card`

**Página:** `/carta/`.

**Defecto:** La propiedad `background: rgba(255, 255, 255, 0.82);` se declara dos veces para el mismo selector (líneas 932-938 y 964-966 de `styles.css`). No cambia el valor visual, pero es CSS muerto que añade ruido.

**Archivo y selector implicados:**
- `css/styles.css` líneas 964-966 — segundo bloque redundante.

**Solución mínima recomendada:**
Eliminar las líneas 964-966:

```css
.page-carta .carta-first-section .landing-dish-card {
    background: rgba(255, 255, 255, 0.82);
}
```

**Riesgo de regresión:** Cero. El primer bloque (líneas 932-938) ya asigna el mismo valor.

**Tiempo estimado:** 2 min.

**Criterio verificable:** Regla eliminada; `grep` de la clase no muestra duplicado.

---

## No propuestos

- **Paleta, tipografías, layouts, secciones, animaciones:** no hay cambios de identidad.
- **Secciones hero híbridas (`topbanner-section` + `landing-hero`):** producen el mismo resultado visual (`.landing-hero::before` añade la barra dorada que `topbanner-section` pondría con `border-bottom`).
- **Diferencias de padding entre páginas:** son intencionales (secciones de landing tienen distinta densidad según el contexto).
- **Estilos de FAQ divergentes:** FAQ oscuro en páginas con fondo oscuro (`page-home`, `page-asador-argentino`) vs claro en fondo claro (`page-menus-grupos`) — elección de diseño válida.
- **Componentes de página de contacto:** están correctamente definidos en el bloque `<style>` inline y siguen el mismo lenguaje visual que el resto del sitio (cards con borde, fondo semitransparente, tipografía consistente).
- **Alergenos e iconos sin width/height:** ya identificados en auditoría de accesibilidad previa.

---

## Implementation status (2026-07-15)

| # | Tarea | Estado | Notas |
|---|-------|--------|-------|
| 1 | Botones de acción en Contacto (min-width, letter-spacing, text-transform) | **✓ Implementado** | Regla añadida en `<style>` inline de `contacto/index.html` fuera del media query. `width: 100%` móvil se conserva. |
| 2 | Hover de botón primario en Menús (#planificar) | **✓ Implementado** | Bloques `.page-menus-grupos .landing-story-copy .btn` y `.btn:hover` eliminados de `css/styles.css`. Primario hereda hover estándar de `.landing-cta-group .btn-primary-cta:hover`. Outline-dark hereda hover de su propia regla. |
| 3 | CSS duplicado en Carta | **✓ Implementado** | Segunda declaración `.page-carta .carta-first-section .landing-dish-card { background: ... }` eliminada de `css/styles.css`. |

### Validación

- **Contacto:** botones tienen `min-width: 150px`, `letter-spacing: 1px`, `text-transform: uppercase` en desktop. Añadido antes del `@media (max-width: 767.98px)`, por lo que `width: 100%` móvil prevalece para ese breakpoint.
- **Menús hover:** `grep -n "landing-story-copy .btn" css/styles.css` confirma que no queda ningún `.page-menus-grupos .landing-story-copy .btn` (solo la regla `.btn-outline-dark`). Las reglas de `.page-home` y `.page-asador-argentino` no se modificaron.
- **Carta duplicado:** `grep -n "carta-first-section .landing-dish-card" css/styles.css` confirma una sola ocurrencia del bloque principal (línea 932), sin duplicado.
- **Overflow:** no se introdujo `overflow-x: hidden`.
- **Archivos modificados:** solo `contacto/index.html` y `css/styles.css`. Sin cambios en otras páginas, contenido, layout, imágenes ni metadatos.
- **Sin commits.**
