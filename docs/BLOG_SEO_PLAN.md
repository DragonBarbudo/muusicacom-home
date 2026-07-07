# Plan SEO/GEO del Blog MUUSICA — Julio a Octubre 2026

## Análisis de posicionamiento

### Situación actual
- 8 artículos publicados (último: enero 2024) → el blog lleva más de 2 años sin contenido nuevo, lo que penaliza el "freshness" en Google.
- Sin sitemap, sin robots.txt, sin canonical, sin datos estructurados → corregido en esta iteración.
- Sin mecanismo de publicación programada → corregido: los posts con fecha futura se ocultan en build y el cron diario de GitHub Actions (12:00 UTC / 06:00 CDMX) reconstruye el sitio para publicarlos automáticamente.

### Estrategia de keywords
El negocio: música legal para negocios en México ($175 MXN/mes, prueba de 7 días, plan gratis con anuncios cada 8 minutos, playlists por giro en play.muusica.com).

Tres clústeres de intención:

1. **Legal / miedo a multas** (mayor intención de compra): "música libre de regalías", "multas por música en negocios", "licencia música comercial México", "cuánto cuesta música legal". Competencia baja en español, alto valor.
2. **Por giro de negocio** (long-tail, conecta con las páginas /negocios/): "música para cafeterías", "música para tiendas de ropa", "música para hoteles", "música para bares", "música para spas", "música para consultorios", "música para oficinas".
3. **Psicología / autoridad** (atrae enlaces y citas de IA): volumen ideal, horas pico, audio branding, tendencias.

### GEO (Generative Engine Optimization)
Para que ChatGPT, Gemini y Perplexity citen a MUUSICA:
- **Respuesta directa** en el primer párrafo de cada artículo (formato "featured snippet").
- **JSON-LD** `Article` + `FAQPage` en cada post (el schema `faq` del frontmatter lo genera automáticamente).
- **Estadísticas citables** con fuente (StatsGrid) y estructura H2/H3 clara.
- **Sección de preguntas frecuentes** visible al final de cada artículo, espejo del JSON-LD.

### Cadencia
1 artículo cada 5 días (6 por mes). Google indexa mejor la publicación constante que los lotes. El cron diario publica cada post en su fecha sin intervención manual.

## Calendario editorial (18 artículos)

| # | Fecha | Slug | Categoría | Clúster |
|---|-------|------|-----------|---------|
| 1 | 2026-07-11 | que-es-musica-libre-de-regalias | Guías Legales | Legal |
| 2 | 2026-07-16 | musica-para-cafeterias-guia-completa | Tips de Negocio | Giro |
| 3 | 2026-07-21 | derechos-de-autor-musica-negocios-mexico | Guías Legales | Legal |
| 4 | 2026-07-26 | musica-para-tiendas-de-ropa | Tips de Negocio | Giro |
| 5 | 2026-07-31 | volumen-ideal-musica-negocio | Música y Psicología | Autoridad |
| 6 | 2026-08-05 | cuanto-cuesta-musica-legal-mexico | Guías Legales | Legal |
| 7 | 2026-08-10 | musica-para-hoteles | Tips de Negocio | Giro |
| 8 | 2026-08-15 | hilo-musical-alternativas-modernas | Industria Musical | Autoridad |
| 9 | 2026-08-20 | musica-para-oficinas-productividad | Música y Psicología | Giro |
| 10 | 2026-08-25 | boutique-lunaria-caso-exito | Casos de Éxito | Prueba social |
| 11 | 2026-08-30 | musica-para-bares | Tips de Negocio | Giro |
| 12 | 2026-09-04 | errores-al-elegir-musica-para-tu-negocio | Tips de Negocio | Autoridad |
| 13 | 2026-09-09 | musica-para-spas | Tips de Negocio | Giro |
| 14 | 2026-09-14 | identidad-sonora-audio-branding | Industria Musical | Autoridad |
| 15 | 2026-09-19 | musica-en-horas-pico-ventas | Música y Psicología | Autoridad |
| 16 | 2026-09-24 | musica-para-consultorios-clinicas | Tips de Negocio | Giro |
| 17 | 2026-09-29 | gimnasio-fuerza-norte-caso-exito | Casos de Éxito | Prueba social |
| 18 | 2026-10-04 | tendencias-musica-comercial-2027 | Industria Musical | Autoridad |

## Mecánica de publicación programada

1. Cada post lleva `date:` futura en el frontmatter.
2. `src/data/blog.js` filtra posts con fecha > hoy en build (también en `getStaticPaths`, así la URL no existe antes de tiempo).
3. `.github/workflows/deploy.yml` corre un cron diario a las 12:00 UTC que reconstruye y despliega: el post cuya fecha ya llegó aparece ese día.

Para adelantar un post: cambia su `date` y haz push (o corre el workflow manualmente con `workflow_dispatch`).

## Portadas

Todos los artículos usan animaciones CSS (`AudioVisualizer`, sin imágenes externas). Se agregaron 2 tipos nuevos: `6` vinilo giratorio y `7` lluvia de píxeles (total 0-7). Cada post elige el suyo con `vizType:` en el frontmatter.
