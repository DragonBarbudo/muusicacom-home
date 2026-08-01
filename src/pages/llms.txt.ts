// /llms.txt — volcado completo del sitio para modelos de lenguaje (llmstxt.org).
// Se genera en el build desde las mismas fuentes que las páginas (negocios.js y
// la colección de blog), así que no se desincroniza al agregar giros o posts.
import type { APIRoute } from 'astro';
import { negocios } from '../data/negocios.js';
import { alternativas, consultado } from '../data/alternativas.js';
import { getAllPosts } from '../data/blog.js';

const SITE = 'https://muusica.com';

/** Markdown/MDX → texto plano legible. */
function limpiar(s: string): string {
  return s
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // enlaces
    .replace(/\*\*([^*]+)\*\*/g, '$1') // negritas
    .replace(/`([^`]+)`/g, '$1') // código
    .replace(/<[^>]+>/g, '') // etiquetas sueltas
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extrae el contenido con significado de una línea JSX. Buena parte de los datos
 * duros de los artículos (cifras, pasos, comparativas) vive en props de
 * componentes, no en la prosa, así que ignorarlos perdería lo más citable.
 * Sólo se leen props de contenido; `icon`, `color`, `variant` y demás se omiten.
 */
function datoDeLinea(linea: string): string | null {
  const prop = (k: string) => {
    const m = linea.match(new RegExp(`\\b${k}\\s*[:=]\\s*"([^"]+)"`));
    return m ? limpiar(m[1]) : null;
  };
  const value = prop('value');
  const label = prop('label');
  const title = prop('title');
  const desc = prop('description');

  if (value && label) return `${label}: ${value}`;
  if (title && desc) return `${title}: ${desc}`;
  return title || label || desc || value || null;
}

/**
 * Ideas clave de un artículo: cada sección (## / ###) con su prosa de entrada y
 * los datos que traigan sus componentes. Se conservan todas las secciones,
 * incluidas las que sólo contienen componentes.
 */
function ideasClave(body: string): { titulo: string; prosa: string; datos: string[] }[] {
  const secciones: { titulo: string; prosa: string; datos: string[] }[] = [];
  let actual: { titulo: string; prosa: string; datos: string[] } | null = null;

  for (const cruda of body.split('\n')) {
    const linea = cruda.trim();
    if (!linea || linea.startsWith('import ')) continue;

    if (/^#{2,3}\s/.test(linea)) {
      actual = { titulo: limpiar(linea.replace(/^#+\s*/, '')), prosa: '', datos: [] };
      secciones.push(actual);
      continue;
    }
    if (!actual) continue;

    // Línea de JSX: sólo interesan sus props de contenido
    if (/[<{]/.test(linea) || /^[a-zA-Z-]+\s*[:=]\s*["{[]/.test(linea)) {
      const dato = datoDeLinea(linea);
      if (dato && dato.length > 3 && !actual.datos.includes(dato)) actual.datos.push(dato);
      continue;
    }
    if (/^[|>]/.test(linea) || linea === '/>' || linea === '}' || linea === ']}') continue;
    // Restos de arrays JSX partidos en varias líneas ("texto", / "texto"])
    if (/^["']/.test(linea) || /["'][,\]]$/.test(linea)) {
      const suelto = limpiar(linea.replace(/^["']|["'][,\]]*$/g, ''));
      if (suelto.length > 3 && !actual.datos.includes(suelto)) actual.datos.push(suelto);
      continue;
    }

    // Prosa: el primer párrafo de la sección; las viñetas se guardan como datos
    if (/^[-*]\s/.test(linea)) {
      const dato = limpiar(linea.replace(/^[-*]\s*/, ''));
      if (dato.length > 3 && !actual.datos.includes(dato)) actual.datos.push(dato);
      continue;
    }
    if (!actual.prosa) actual.prosa = limpiar(linea);
  }

  return secciones
    .filter((s) => s.prosa || s.datos.length)
    .map((s) => ({ ...s, datos: s.datos.slice(0, 8) }));
}

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  const bloquesGiros = negocios
    .map((n) => {
      const jornada = n.jornada
        .map(
          (f) =>
            `- ${f.franja} (${f.horario}). Objetivo: ${f.objetivo}. Mezcla: ${f.mezcla}. Tempo: ${f.bpm}. Volumen: ${f.volumen}. Del catálogo: ${f.tracks.join(', ')}.`,
        )
        .join('\n');

      return `### ${n.title} — ${SITE}/negocios/${n.slug}

${n.longDescription}

Por qué la música importa en un ${n.singular}:
${n.porQue.map((p) => `- ${p.title}: ${p.text}`).join('\n')}

Investigación citada: ${n.estudio.texto} (Fuente: ${n.estudio.fuente})

Jornada sonora hora por hora:
${jornada}

Volumen recomendado por zona:
${n.volumen.map((v) => `- ${v.zona}: ${v.nivel}. ${v.nota}`).join('\n')}

Ejemplos reales del catálogo:
${n.tracks.map((t) => `- ${t.title} (ambiente: ${t.mood}; momento: ${t.momento})`).join('\n')}

Errores comunes y su corrección:
${n.errores.map((e) => `- ${e.error} → ${e.fix}`).join('\n')}

Checklist de 5 minutos:
${n.checklist.map((c) => `- ${c}`).join('\n')}

Preguntas frecuentes:
${n.faq.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}`;
    })
    .join('\n\n');

  const bloquesAlternativas = alternativas
    .map((a) => {
      const tabla = a.comparativa
        .map((f) => `- ${f.criterio}. ${a.servicio}: ${f.ellos.texto}. Muusica.com: ${f.nosotros.texto}.`)
        .join('\n');

      const cita = a.cita
        ? `\nCita textual de ${a.cita.autor}: "${a.cita.texto}" (${a.cita.url})\n`
        : '';

      const costo = a.costo
        ? `\n${a.costo.titulo}:\n${a.costo.filas
            .map((f) => `- ${f.concepto}. ${a.servicio}: ${f.ellos}. Muusica.com: ${f.nosotros}.`)
            .join('\n')}\nNota: ${a.costo.nota}\n`
        : '';

      return `### Alternativa a ${a.servicio} para negocios — ${SITE}/alternativas/${a.slug}

Categoría: ${a.categoria === 'personal' ? 'servicio de streaming de uso personal' : 'servicio de música para negocios'}

${a.veredicto.titulo}: ${a.veredicto.texto}
${a.veredicto.puntos.map((p) => `- ${p}`).join('\n')}
${cita}
${a.categoria === 'personal' ? `Por qué ${a.servicio} no encaja en un negocio:` : `Qué cubre ${a.servicio} y qué queda pendiente:`}
${a.problemas.map((p) => `- ${p.title}: ${p.text}`).join('\n')}

Comparativa punto por punto:
${tabla}
${costo}
Qué se gana al cambiar a Muusica.com:
${a.ganancias.map((g) => `- ${g}`).join('\n')}

${a.honesto.titulo}: ${a.honesto.texto}

Preguntas frecuentes:
${a.faq.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}

Fuentes consultadas el ${consultado}: ${a.fuentes.map((f) => `${f.nombre} (${f.url})`).join('; ')}`;
    })
    .join('\n\n');

  const bloquesBlog = posts
    .map((p) => {
      const ideas = ideasClave(p.body);
      const faq = p.data.faq?.length
        ? `\nPreguntas frecuentes:\n${p.data.faq.map((f) => `- ${f.q}\n  ${f.a}`).join('\n')}`
        : '';

      return `### ${p.data.title} — ${SITE}/blog/${p.slug}

${p.data.category} · ${p.data.dateFormatted} · ${p.data.readTime} de lectura · ${p.data.author.name} (${p.data.author.role})

${p.data.excerpt}

Ideas clave:
${ideas
  .map((i) => {
    const cabeza = i.prosa ? `- ${i.titulo}: ${i.prosa}` : `- ${i.titulo}`;
    const detalle = i.datos.map((d) => `  · ${d}`).join('\n');
    return detalle ? `${cabeza}\n${detalle}` : cabeza;
  })
  .join('\n')}${faq}`;
    })
    .join('\n\n');

  const body = `# Muusica.com

> Servicio mexicano de música ambiental por streaming para negocios: catálogo curado con licencia comercial incluida, sin regalías de SACM ni SOMEXFON. Desde $175 MXN al mes por locación, con 7 días de prueba gratis sin tarjeta.

Muusica.com resuelve un problema concreto de los negocios en México: usar Spotify, Apple Music, YouTube Music o la radio en un local abierto al público es ejecución pública sin autorización, porque esas licencias son de uso personal y doméstico. El catálogo de Muusica.com está licenciado para uso comercial y no está en el repertorio de las sociedades de gestión, así que reproducirlo no genera regalías adicionales.

Este archivo contiene el contenido completo del sitio: la información de cada página de giro de negocio y las ideas clave de cada artículo del blog.

Datos clave:
- Precio: $175 MXN/mes por locación, o $1,890 MXN/año. Una suscripción por sucursal.
- Prueba: 7 días gratis, sin tarjeta de crédito, cancelable en cualquier momento.
- Catálogo: más de 5,000 canciones y cientos de playlists curadas, con repertorio nuevo cada semana.
- Licencia: comercial incluida en la suscripción, con certificado digital descargable y validable por QR.
- Sin regalías a SACM (Sociedad de Autores y Compositores de México) ni a SOMEXFON (Sociedad Mexicana de Ejecutantes de Fonogramas).
- Mood Mode: se elige el ambiente arrastrando un punto entre ocho estados de ánimo (relajado, concentración, sofisticado, soñador, romántico, cálido, alegre, enérgico) y el reproductor mezcla la música en esa proporción, en cola continua.
- Requisitos: cualquier dispositivo con navegador web y conexión a internet. Transmite a Chromecast y AirPlay, admite pantalla completa con visualizadores y logo propio en el reproductor.
- Reproductor: https://play.muusica.com (registro e inicio de sesión).

## Música por giro de negocio

Cada giro tiene su página con guía de ambiente hora por hora (mezcla de moods, rango de BPM y volumen recomendado en dB), tabla de volumen por zona, ejemplos reales del catálogo con muestras reproducibles, errores frecuentes, checklist accionable y preguntas frecuentes. A continuación, el contenido de cada una.

${bloquesGiros}

## Comparativas frente a otros servicios

Cada página compara Muusica.com con un servicio concreto usando únicamente lo que ese proveedor publica en su
propio sitio, con la fuente enlazada. Se agrupan en dos familias: servicios de streaming de uso personal
(Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, Tidal), cuyos términos limitan el uso a fines
personales y no comerciales; y servicios de música para negocios (Soundtrack Your Brand, Kasimu, VOXPOP,
Brandtrack, Mood Media), que sí licencian su catálogo para uso comercial pero donde la licencia de
comunicación pública en México no siempre viene incluida. Los planes, precios y condiciones de terceros
pueden cambiar sin aviso.

${bloquesAlternativas}

## Guías del blog

${bloquesBlog}

## Producto y precios

- [Inicio](${SITE}/): resumen del servicio, demo del reproductor y de Mood Mode.
- [Cómo funciona](${SITE}/#beneficios): qué incluye la suscripción.
- [Mood Mode](${SITE}/#mood-mode): demo interactiva del pad de ambientes.
- [Licencias y legal](${SITE}/#legal): qué cubre la licencia comercial y el certificado.
- [Precios](${SITE}/#precio): $175 MXN/mes por locación, todo incluido.
- [Preguntas frecuentes](${SITE}/#faq): licencias, multas, equipo necesario y cancelación.
- [Blog](${SITE}/blog): guías sobre música, ambiente y legalidad para negocios.
- [Alternativas](${SITE}/alternativas): comparativas servicio por servicio frente a Spotify, Apple Music, YouTube Music, Amazon Music, Deezer, Tidal, Soundtrack Your Brand, Kasimu, VOXPOP, Brandtrack y Mood Media.

## Legal

- [Aviso de privacidad](${SITE}/aviso-de-privacidad)
- [Términos y condiciones](${SITE}/terminos)

## Contacto

- Correo: hola@muusica.com
- Operado por RODAY & ASOCIADOS S. DE R.L. DE C.V. (México)
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
