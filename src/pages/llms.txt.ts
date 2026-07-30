// /llms.txt — índice del sitio para modelos de lenguaje (llmstxt.org).
// Se genera en el build desde las mismas fuentes que las páginas (negocios.js y
// la colección de blog), así que no se desincroniza al agregar giros o posts.
import type { APIRoute } from 'astro';
import { negocios } from '../data/negocios.js';
import { getAllPosts } from '../data/blog.js';

const SITE = 'https://muusica.com';

export const GET: APIRoute = async () => {
  const posts = await getAllPosts();

  const giros = negocios
    .map((n) => `- [Música para ${n.title.toLowerCase()}](${SITE}/negocios/${n.slug}): ${n.seoDescription}`)
    .join('\n');

  const guias = posts
    .map((p) => `- [${p.data.title}](${SITE}/blog/${p.slug}): ${p.data.excerpt}`)
    .join('\n');

  const body = `# Muusica.com

> Servicio mexicano de música ambiental por streaming para negocios: catálogo curado con licencia comercial incluida, sin regalías de SACM ni SOMEXFON. Desde $175 MXN al mes por locación, con 7 días de prueba gratis sin tarjeta.

Muusica.com resuelve un problema concreto de los negocios en México: usar Spotify, Apple Music, YouTube Music o la radio en un local abierto al público es ejecución pública sin autorización, porque esas licencias son de uso personal y doméstico. El catálogo de Muusica.com está licenciado para uso comercial y no está en el repertorio de las sociedades de gestión, así que reproducirlo no genera regalías adicionales.

Datos clave:
- Precio: $175 MXN/mes por locación, o $1,890 MXN/año. Una suscripción por sucursal.
- Prueba: 7 días gratis, sin tarjeta de crédito, cancelable en cualquier momento.
- Catálogo: más de 5,000 canciones y cientos de playlists curadas, con repertorio nuevo cada semana.
- Licencia: comercial incluida en la suscripción, con certificado digital descargable y validable por QR.
- Sin regalías a SACM (Sociedad de Autores y Compositores de México) ni a SOMEXFON (Sociedad Mexicana de Ejecutantes de Fonogramas).
- Mood Mode: se elige el ambiente arrastrando un punto entre ocho estados de ánimo (relajado, concentración, sofisticado, soñador, romántico, cálido, alegre, enérgico) y el reproductor mezcla la música en esa proporción, en cola continua.
- Requisitos: cualquier dispositivo con navegador web y conexión a internet. Transmite a Chromecast y AirPlay, admite pantalla completa con visualizadores y logo propio en el reproductor.
- Reproductor: ${SITE.replace('https://', 'https://play.')} (registro e inicio de sesión).

## Música por giro de negocio

Cada página incluye guía de ambiente hora por hora (mezcla de moods, rango de BPM y volumen recomendado en dB), tabla de volumen por zona, ejemplos reales del catálogo con muestras reproducibles, errores frecuentes, checklist accionable y preguntas frecuentes del giro.

${giros}

## Guías y recursos

${guias}

## Producto y precios

- [Inicio](${SITE}/): resumen del servicio, demo del reproductor y de Mood Mode.
- [Cómo funciona](${SITE}/#beneficios): qué incluye la suscripción.
- [Mood Mode](${SITE}/#mood-mode): demo interactiva del pad de ambientes.
- [Licencias y legal](${SITE}/#legal): qué cubre la licencia comercial y el certificado.
- [Precios](${SITE}/#precio): $175 MXN/mes por locación, todo incluido.
- [Preguntas frecuentes](${SITE}/#faq): licencias, multas, equipo necesario y cancelación.
- [Blog](${SITE}/blog): guías sobre música, ambiente y legalidad para negocios.

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
