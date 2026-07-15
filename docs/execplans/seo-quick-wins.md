# SEO Quick Wins — Plan de mejoras

**Auditoría:** 2026-07-15 | **Modo:** solo lectura | **Proyecto:** Viejo Barrio

## Resumen de hallazgos

| # | Prioridad | Página | Elemento | Cambio mínimo | Riesgo visual |
|---|-----------|--------|----------|---------------|---------------|
| 1 | P0 | `grupos-valencia/index.html` | JSON-LD `aggregateRating` + `foundingDate` | Eliminar datos no verificados | Ninguno |
| 2 | P0 | `grupos-valencia/index.html` | JSON-LD `priceRange: "€€"` | Unificar a `"€€€"` como el resto del sitio | Ninguno |
| 3 | P1 | `grupos-valencia/index.html` | `og:title` y `twitter:title` discrepantes con `<title>` | Alinear con `<title>` | Ninguno |
| 4 | P1 | 7 páginas con schema Restaurant | `servesCuisine` inconsistente | Normalizar a `["Argentine", "Grill"]` en todas | Ninguno |
| 5 | P2 | 7 páginas publicables | `og:locale` y `og:site_name` ausentes | Añadir siguiendo el patrón de `grupos-valencia` | Ninguno |
| 6 | P2 | 6 páginas | `og:image:width`, `og:image:height`, `og:image:alt` ausentes | Añadir metadatos OG de imagen | Ninguno |
| 7 | P2 | `sitemap.xml` | Sin `lastmod` | Añadir `lastmod` con fecha de la última modificación real | Ninguno |
| 8 | P2 | 5 páginas con schema Restaurant | JSON-LD sin `hasMap` ni `geo` | Añadir coordenadas y enlace al mapa | Ninguno |

---

## Tarea 1 · Eliminar aggregateRating y foundingDate no verificados en grupos

- **Prioridad:** P0
- **Página:** `grupos-valencia/index.html`
- **Archivo:** `grupos-valencia/index.html`
- **Elemento actual:** JSON-LD bloque 1 (Restaurant), líneas 144-151
  ```json
  "foundingDate": "2006-11-06",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "reviewCount": "560",
    "bestRating": "5",
    "worstRating": "1"
  }
  ```
- **Cambio exacto:** Eliminar las propiedades `foundingDate` y `aggregateRating` del bloque JSON-LD Restaurant. No se dispone de fuente verificada para estos datos. Las directrices del proyecto prohíben incluir claims no verificados en schema.
- **Keyword / intención:** Sin impacto directo en ranking. Evita riesgo de penalización por datos engañosos en rich snippets.
- **Riesgo visual:** Ninguno (cambia solo JSON-LD).
- **Tiempo estimado:** 2 minutos.
- **Criterio verificable:** Ejecutar `grep -c 'aggregateRating' grupos-valencia/index.html` → 0; `grep -c 'foundingDate' grupos-valencia/index.html` → 0. Validar con [Rich Results Test](https://search.google.com/test/rich-results) que el schema Restaurant sigue siendo válido.

---

## Tarea 2 · Unificar priceRange a €€€ en grupos-valencia

- **Prioridad:** P0
- **Página:** `grupos-valencia/index.html`
- **Archivo:** `grupos-valencia/index.html`
- **Elemento actual:** Línea 141: `"priceRange": "€€"`
- **Cambio exacto:** Cambiar a `"priceRange": "€€€"` para que coincida con el resto de páginas del sitio (home, carta, menus, vinos, contacto, asador).
- **Keyword / intención:** Consistencia del schema Restaurant. Precios reales del restaurante.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 1 minuto.
- **Criterio verificable:** `grep 'priceRange' grupos-valencia/index.html` → `"priceRange": "€€€"`.

---

## Tarea 3 · Alinear og:title y twitter:title con el title en grupos-valencia

- **Prioridad:** P1
- **Página:** `grupos-valencia/index.html`
- **Archivo:** `grupos-valencia/index.html`
- **Elemento actual:**
  - `<title>`: `Restaurante con Reservado para Grupos en Valencia | Viejo Barrio Asador Argentino`
  - `og:title` (línea 40): `Salón Reservado para Grupos en Valencia | Viejo Barrio Asador Argentino`
  - `twitter:title` (línea 51): `Salón Reservado para Grupos en Valencia | Viejo Barrio Asador Argentino`
- **Cambio exacto:** Cambiar el `og:title` y `twitter:title` para que coincidan exactamente con el `<title>`. Es la práctica recomendada (el title es la fuente de verdad para SEO). Las 6 páginas restantes ya mantienen esta coherencia.
- **Keyword / intención:** Evita señales contradictorias entre el title indexado y el que ven Facebook/Twitter al compartir.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 1 minuto.
- **Criterio verificable:** `grep 'og:title' grupos-valencia/index.html` contiene el mismo texto que `<title>`.

---

## Tarea 4 · Normalizar servesCuisine en todas las páginas

- **Prioridad:** P1
- **Páginas:** `index.html`, `carta/index.html`, `vinos-y-cavas/index.html`, `menus/index.html`, `asador-argentino-valencia/index.html`, `contacto/index.html`, `grupos-valencia/index.html`
- **Archivos:** 7 archivos HTML
- **Elemento actual:** Valores inconsistentes:
  - `["Argentinian", "Grill"]` — index, carta, vinos, contacto, asador
  - `["Argentina", "Parrilla", "Carne a la brasa"]` — grupos
  - `["Argentine", "Grill"]` — menus
- **Cambio exacto:** Unificar a `["Argentine", "Grill"]` en las 7 páginas. Schema.org usa `Argentine` como cuisine estándar; `Grill` describe el método de cocina.
- **Keyword / intención:** Consistencia del schema Restaurant. Evita confusión a motores sobre la categoría culinaria.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 5 minutos (7 archivos, un valor cada uno).
- **Criterio verificable:** `grep -rn 'servesCuisine' *.html */index.html` → las 7 ocurrencias con `["Argentine", "Grill"]`.

---

## Tarea 5 · Añadir og:locale y og:site_name a las páginas que faltan

- **Prioridad:** P2
- **Páginas:** `index.html`, `carta/index.html`, `vinos-y-cavas/index.html`, `menus/index.html`, `asador-argentino-valencia/index.html`, `contacto/index.html` (y las 3 páginas legales, opcional)
- **Archivos:** 6-9 archivos HTML
- **Elemento actual:** Ausente. Solo `grupos-valencia/index.html` lo tiene.
- **Cambio exacto:** Añadir tras la línea `og:image` en cada página:
  ```html
  <meta property="og:locale" content="es_ES" />
  <meta property="og:site_name" content="Viejo Barrio Asador Argentino" />
  ```
- **Keyword / intención:** Mejora la presentación en Facebook/compartidores. Señal de idioma consistente.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 5 minutos (6 páginas principales, 2 líneas cada una).
- **Criterio verificable:** `grep -c 'og:locale' *.html */index.html` cubre las 6 páginas principales.

---

## Tarea 6 · Añadir og:image:width, og:image:height y og:image:alt a páginas principales

- **Prioridad:** P2
- **Páginas:** `index.html`, `carta/index.html`, `vinos-y-cavas/index.html`, `menus/index.html`, `asador-argentino-valencia/index.html`, `contacto/index.html`
- **Archivos:** 6 archivos HTML
- **Elemento actual:** Ausente. Solo `grupos-valencia/index.html` lo tiene.
- **Cambio exacto:** Añadir tras la línea `og:image` en cada página:
  ```html
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Viejo Barrio – Asador Argentino en Benimaclet, Valencia" />
  ```
  (El `alt` puede variar ligeramente por página.)
- **Keyword / intención:** Mejora la carga y presentación de la imagen al compartir en redes. Reduce incertidumbre del crawler de Facebook.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 5 minutos.
- **Criterio verificable:** `grep 'og:image:width' index.html` → presente.

---

## Tarea 7 · Añadir lastmod al sitemap.xml

- **Prioridad:** P2
- **Página:** `sitemap.xml`
- **Archivo:** `sitemap.xml`
- **Elemento actual:** Sin etiquetas `<lastmod>` en ninguna URL.
- **Cambio exacto:** Añadir `<lastmod>2026-07-15</lastmod>` a cada entrada del sitemap, reflejando la fecha de la última actualización significativa de cada página.
- **Keyword / intención:** Ayuda a Google a priorizar el rastreo de páginas actualizadas.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 3 minutos.
- **Criterio verificable:** `grep -c 'lastmod' sitemap.xml` → 10 (una por cada URL).

---

## Tarea 8 · Añadir hasMap y geo al JSON-LD Restaurant donde falten

- **Prioridad:** P2
- **Páginas:** `index.html`, `carta/index.html`, `vinos-y-cavas/index.html`, `menus/index.html`, `asador-argentino-valencia/index.html`
- **Archivos:** 5 archivos HTML
- **Elemento actual:** `hasMap` y `geo` solo presentes en `contacto/index.html` y `grupos-valencia/index.html`. Faltan en el resto.
- **Cambio exacto:** Añadir dentro del JSON-LD Restaurant de cada página, antes de `sameAs`:
  ```json
  "hasMap": "https://www.google.com/maps?cid=11418522565425404756",
  "geo": {
      "@type": "GeoCoordinates",
      "latitude": "39.48528142228976",
      "longitude": "-0.3614879265096769"
  }
  ```
  Usar las coordenadas exactas ya presentes en `contacto/index.html`.
- **Keyword / intención:** Señal de localización precisa para búsquedas locales. Google valora tener coordenadas en schema para resultados de restaurante.
- **Riesgo visual:** Ninguno.
- **Tiempo estimado:** 8 minutos (5 archivos).
- **Criterio verificable:** `grep -c 'hasMap' index.html carta/index.html vinos-y-cavas/index.html menus/index.html asador-argentino-valencia/index.html` → 5.

---

## Páginas correctamente optimizadas (sin cambios necesarios)

| Página | Estado |
|--------|--------|
| `index.html` | Título, description, H1, canonical, OG, JSON-LD correctos. Sin cambios. |
| `carta/index.html` | Igual. |
| `vinos-y-cavas/index.html` | Igual. |
| `menus/index.html` | Igual. |
| `asador-argentino-valencia/index.html` | Igual. |
| `contacto/index.html` | Igual. |
| `pages/aviso-legal.html` | Legal, mínimo SEO requerido. Correcto. |
| `pages/politica-privacidad.html` | Legal, correcto. |
| `pages/politica-cookies.html` | Legal, correcto. |
| `menus-grupos-valencia/index.html` | Redirección. No indexar. Correcto. |

---

## Las 3 mejoras para ejecutar primero

1. **Tarea 1** (P0 · aggregateRating/foundingDate) — Riesgo real de datos no verificados en schema. Impacta rich snippets y confianza Google.
2. **Tarea 2** (P0 · priceRange) — Inconsistencia entre páginas del mismo negocio. Confunde al motor.
3. **Tarea 3** (P1 · og:title discrepante) — Afecta la presentación en redes y la coherencia entre title/OG. Rápido de corregir.

Estas 3 tareas suman ~4 minutos y cubren los únicos defectos con impacto real en indexación y rich results.
