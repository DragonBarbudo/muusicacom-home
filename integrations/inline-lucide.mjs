// Sustituye cada <i data-lucide="nombre"> por su <svg> durante el build.
//
// Antes, el navegador descargaba lucide.min.js de unpkg (414 KB) y llamaba a
// createIcons(), que recorre el DOM y crea un <svg> por icono: 102 en el home.
// Eso costaba una conexión a un tercero, ~425 ms de evaluación de script y buena
// parte del trabajo de estilo y layout, todo después del primer render.
//
// Al hacerlo aquí, el HTML ya sale con los SVG dentro: cero JS, cero terceros y
// cero trabajo en el cliente. Se mantiene la forma de escribir <i data-lucide>
// en los componentes, así que no hay que tocar ni un solo uso.
//
// El único icono que cambiaba en tiempo de ejecución era el del menú móvil
// (menu ↔ x); ahora se resuelve mostrando y ocultando dos SVG ya presentes.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { icons } from 'lucide';

/** "chevron-down" → "ChevronDown", que es como los expone el paquete. */
const aPascal = (nombre) =>
  nombre
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

const escaparAtributo = (v) => String(v).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

/** Serializa los nodos del icono ([tag, attrs]) a markup SVG. */
function nodosASvg(nodos) {
  return nodos
    .map(([tag, attrs]) => {
      const props = Object.entries(attrs || {})
        .map(([k, v]) => `${k}="${escaparAtributo(v)}"`)
        .join(' ');
      return `<${tag}${props ? ' ' + props : ''} />`;
    })
    .join('');
}

// Mismos atributos que pone lucide en el cliente, para que el resultado sea
// idéntico al que se veía antes.
const ATRIBUTOS_BASE =
  'xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ' +
  'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';

async function archivosHtml(dir) {
  const salida = [];
  for (const entrada of await fs.readdir(dir, { withFileTypes: true })) {
    const completo = path.join(dir, entrada.name);
    if (entrada.isDirectory()) salida.push(...(await archivosHtml(completo)));
    else if (entrada.name.endsWith('.html')) salida.push(completo);
  }
  return salida;
}

export default function inlineLucide() {
  return {
    name: 'inline-lucide',
    hooks: {
      'astro:build:done': async ({ dir, logger }) => {
        const raiz = path.fromFileUrl ? path.fromFileUrl(dir) : new URL(dir).pathname;
        const ficheros = await archivosHtml(raiz);

        let sustituidos = 0;
        const faltantes = new Set();

        // <i data-lucide="x" class="..." style="..."></i>  (los atributos pueden ir en cualquier orden)
        const re = /<i\b([^>]*?)\bdata-lucide="([a-z0-9-]+)"([^>]*?)><\/i>/g;

        for (const fichero of ficheros) {
          const original = await fs.readFile(fichero, 'utf8');
          const nuevo = original.replace(re, (completo, antes, nombre, despues) => {
            const nodos = icons[aPascal(nombre)];
            if (!nodos) {
              faltantes.add(nombre);
              return completo; // se deja tal cual: mejor un hueco que romper el HTML
            }
            // Conservamos los atributos originales (class, style, aria-*) salvo data-lucide
            const resto = (antes + despues).replace(/\s*data-lucide="[a-z0-9-]+"/, '').trim();
            const clase = `lucide lucide-${nombre}`;
            const conClase = /\bclass="/.test(resto)
              ? resto.replace(/\bclass="/, `class="${clase} `)
              : `${resto} class="${clase}"`;
            sustituidos++;
            return `<svg ${ATRIBUTOS_BASE} ${conClase.trim()}>${nodosASvg(nodos)}</svg>`;
          });

          if (nuevo !== original) await fs.writeFile(fichero, nuevo, 'utf8');
        }

        logger.info(`${sustituidos} iconos incrustados en ${ficheros.length} páginas`);
        if (faltantes.size) logger.warn(`iconos no encontrados: ${[...faltantes].join(', ')}`);
      },
    },
  };
}
