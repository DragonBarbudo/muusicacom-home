// Contenido de las páginas /alternativas/[slug]: "Alternativa a <servicio> para negocios".
//
// Dos familias de páginas:
//   categoria: 'personal' → servicios de streaming de uso doméstico (Spotify, Apple
//     Music, YouTube Music, Amazon Music, Deezer, Tidal). El argumento es que sus
//     propios términos prohíben el uso en un local abierto al público.
//   categoria: 'negocio'  → servicios de música ambiental para empresas (Soundtrack,
//     Kasimu, VOXPOP, Brandtrack, Mood Media). Sí están hechos para negocios; el
//     argumento es que la licencia de comunicación pública en México no viene
//     incluida o depende del país, según lo que ellos mismos publican.
//
// REGLA (la misma de Comparativa.astro): nada de cifras ni afirmaciones que el propio
// proveedor no publique. Cada dato de un tercero lleva su `fuente` y las citas son
// textuales. Si actualizas un dato, actualiza también `consultado`.
//
// Estados usados en las tablas: 'si' | 'no' | 'parcial' | 'info'.

export const consultado = '1 de agosto de 2026';
export const tipoCambio = 17.3; // MXN por USD, referencia del mismo día

// Datos de Muusica.com que se repiten en todas las tablas
export const muusica = {
  precio: '$175 MXN',
  precioNota: 'al mes por sucursal, o $1,890 MXN al año',
  catalogo: 'Más de 5,000 canciones originales, con repertorio nuevo cada semana',
};

export const alternativas = [
  // ─────────────────────────────────────────── Streaming de uso personal
  {
    slug: 'spotify',
    servicio: 'Spotify',
    categoria: 'personal',
    icon: 'disc-3',
    color: '#1DB954',
    seoTitle: "Alternativa a Spotify para negocios",
    seoDescription: "Spotify prohíbe reproducirlo en bares, tiendas y restaurantes. Compáralo con Muusica.com: licencia comercial incluida por $175 MXN al mes.",
    entradilla:
      'Spotify es el servicio de música más usado en México y también el que más negocios ponen en sus bocinas sin saber que su propio centro de ayuda lo prohíbe. No es una zona gris ni una interpretación nuestra: está escrito en su sitio.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Spotify no es una opción para tu negocio porque su licencia es de uso personal y doméstico, y así lo dice Spotify. La alternativa directa es un servicio de música para negocios; Muusica.com lo resuelve con licencia de comunicación pública incluida por $175 MXN al mes por sucursal, sin que se requiera pagar a SACM ni SOMEXFON.',
      puntos: [
        'Spotify prohíbe la reproducción en bares, restaurantes, tiendas, escuelas y salones.',
        'Un plan Premium no convierte el uso en comercial: elimina anuncios, no añade permisos.',
        'La responsabilidad legal es del negocio, no de quien puso la música desde su celular.',
      ],
    },
    cita: {
      texto:
        'No puedes transmitir ni reproducir Spotify públicamente desde un negocio, como bares, restaurantes, escuelas, tiendas, salones, estudios de danza, estaciones de radio, etc.',
      autor: 'Spotify, centro de ayuda oficial',
      nota: 'Traducción del artículo "Spotify public or commercial use". El original dice: "you can\'t broadcast or play Spotify publicly from a business, such as bars, restaurants, schools, stores, salons, dance studios, radio stations, etc."',
      url: 'https://support.spotify.com/us/article/spotify-public-commercial-use/',
    },
    problemas: [
      {
        icon: 'file-x',
        title: 'La licencia es personal, no del local',
        text: 'Tu suscripción autoriza que escuches música tú. En cuanto suena para clientes hay comunicación pública, y ese permiso no está incluido en ningún plan de Spotify, ni siquiera en el familiar o el dúo.',
      },
      {
        icon: 'megaphone',
        title: 'Anuncios en medio de tu servicio',
        text: 'En la versión gratuita, la publicidad de otras marcas suena dentro de tu local. Un anuncio en plena hora pico rompe el ambiente que llevas todo el día construyendo, y no lo controlas tú.',
      },
      {
        icon: 'smartphone',
        title: 'Depende del celular de alguien',
        text: 'Casi siempre la cuenta es de un empleado. Cuando esa persona sale a comer, se va de turno o renuncia, la música se va con ella. Tampoco puedes auditar qué sonó ayer en tu sucursal.',
      },
      {
        icon: 'shield-alert',
        title: 'No te cubre frente a SACM ni SOMEXFON',
        text: 'El catálogo de Spotify es música popular: sus autores, intérpretes y productores están representados por las sociedades de gestión. Ellas pueden requerirte licencia aunque pagues Premium puntualmente.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Prohibido por sus propios términos' },
        nosotros: { estado: 'si', texto: 'Es exactamente para lo que existe el servicio' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida en ningún plan' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Anuncios durante la reproducción',
        ellos: { estado: 'parcial', texto: 'Sí en el plan gratuito; no en Premium' },
        nosotros: { estado: 'si', texto: 'Nunca, en ningún plan' },
      },
      {
        criterio: 'Precio publicado al mes',
        ellos: { estado: 'info', texto: 'Plan personal, no aplicable a negocios' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
      {
        criterio: 'Catálogo',
        ellos: { estado: 'info', texto: 'Música popular y comercial' },
        nosotros: { estado: 'info', texto: muusica.catalogo },
      },
      {
        criterio: 'Funciona sin que nadie lo atienda',
        ellos: { estado: 'parcial', texto: 'Se detiene al usar el celular para otra cosa' },
        nosotros: { estado: 'si', texto: 'Cola continua todo el día en un dispositivo fijo' },
      },
    ],
    costo: {
      titulo: 'Lo que realmente pagas al mes',
      nota: 'Muusica.com no incluye ni revende licencias de SACM o SOMEXFON: simplemente no se requieren, porque el catálogo es original y no forma parte del repertorio que administran esas sociedades. Sus cuotas se calculan por giro, aforo y ciudad, así que no hay una tarifa única publicada.',
      filas: [
        { concepto: 'Suscripción', ellos: 'Plan personal de Spotify', nosotros: '$175 MXN por sucursal' },
        { concepto: 'Licencia SACM', ellos: 'Aparte, según giro y aforo', nosotros: 'No se requiere: el catálogo no es de su repertorio' },
        { concepto: 'Licencia SOMEXFON', ellos: 'Aparte, según giro y aforo', nosotros: 'No se requiere: el catálogo no es de su repertorio' },
        { concepto: 'Certificado para inspecciones', ellos: 'No disponible', nosotros: 'Incluido' },
      ],
    },
    ganancias: [
      'Licencia de comunicación pública incluida, sin que se requiera pagar a SACM ni SOMEXFON',
      'Certificado digital descargable para mostrar en una inspección',
      'Cero anuncios: nunca suena publicidad de otra marca en tu local',
      'Mood Mode: cambias el ambiente arrastrando un punto, sin armar listas',
      'Funciona en cualquier navegador, sin instalar nada ni depender de un celular',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'Muusica.com no tiene los éxitos del momento ni artistas famosos: nuestro catálogo es original y por eso puede venir con licencia comercial incluida. Si tu concepto necesita canciones específicas del top 50, ningún servicio te las va a dar sin que pagues comunicación pública aparte. Para música de fondo en un negocio, la mayoría de nuestros clientes descubre que eso deja de importar en la primera semana.',
    },
    faq: [
      {
        q: '¿Es ilegal poner Spotify en mi negocio?',
        a: 'El propio centro de ayuda de Spotify indica que no puedes reproducirlo públicamente desde un negocio como bares, restaurantes, escuelas, tiendas o salones. Además, en México reproducir música para clientes es comunicación pública y requiere autorización de los titulares de derechos, que Spotify no otorga con una cuenta personal.',
      },
      {
        q: '¿Y si pago Spotify Premium?',
        a: 'Premium quita los anuncios, no añade permisos. El plan sigue siendo de uso personal y doméstico, así que la situación legal de tu local es la misma.',
      },
      {
        q: '¿Qué alternativa a Spotify sirve para un negocio en México?',
        a: 'Un servicio de música pensado para locales comerciales. Muusica.com incluye la licencia de comunicación pública en la suscripción de $175 MXN al mes por sucursal, con certificado descargable y sin que se requiera pagar a SACM ni SOMEXFON.',
      },
      {
        q: '¿Puedo pasar mis playlists de Spotify a Muusica.com?',
        a: 'No como tal: son catálogos distintos. Lo que sí puedes hacer es decirnos qué ambiente buscas y armar tus listas con nuestro catálogo, o usar Mood Mode para reproducir esa misma sensación sin construir listas manualmente.',
      },
      {
        q: '¿Cuánto tardo en hacer el cambio?',
        a: 'Minutos. Abres play.muusica.com en cualquier navegador del local, inicias sesión y eliges el ambiente. Los 7 días de prueba no piden tarjeta.',
      },
    ],
    fuentes: [
      { nombre: 'Spotify — Uso público o comercial', url: 'https://support.spotify.com/us/article/spotify-public-commercial-use/' },
      { nombre: 'Spotify — Términos de uso', url: 'https://www.spotify.com/mx/legal/end-user-agreement/' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'derechos-de-autor-musica-negocios-mexico',
      'multas-por-uso-ilegal-de-musica',
      'cuanto-cuesta-musica-legal-mexico',
    ],
  },

  {
    slug: 'apple-music',
    servicio: 'Apple Music',
    categoria: 'personal',
    icon: 'music-2',
    color: '#FA243C',
    seoTitle: "Alternativa a Apple Music para negocios",
    seoDescription: "Apple limita Apple Music a uso personal y no comercial. Compáralo con Muusica.com: licencia comercial incluida por $175 MXN al mes por sucursal.",
    entradilla:
      'Apple Music suena impecable y está en el iPad que ya tienes en la barra. El problema no es técnico: los términos de los servicios de medios de Apple limitan el uso a fines personales y no comerciales, y un local abierto al público no lo es.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Apple Music no autoriza el uso comercial. Cambiar a un servicio con licencia para negocios es la única forma de quedar cubierto: con Muusica.com son $175 MXN al mes por sucursal con la comunicación pública incluida y certificado descargable.',
      puntos: [
        'Los términos de Apple limitan el servicio a "fines personales y no comerciales".',
        'No existe un plan de Apple Music para locales comerciales en México.',
        'Apple Music for Business no es un producto: lo que existe son servicios especializados.',
      ],
    },
    cita: {
      texto:
        'Solo puedes usar los Servicios y el Contenido con fines personales y no comerciales.',
      autor: 'Apple Media Services — Términos y Condiciones',
      nota: 'Traducción de: "You may use the Services and Content only for personal, noncommercial purposes (except as set forth in the App Store Content section below or as otherwise specified by Apple)."',
      url: 'https://www.apple.com/legal/internet-services/itunes/us/terms.html',
    },
    problemas: [
      {
        icon: 'file-x',
        title: 'Sin permiso de comunicación pública',
        text: 'Ninguna suscripción de Apple Music, individual o familiar, incluye el derecho a que la música suene para clientes en un establecimiento.',
      },
      {
        icon: 'shield-alert',
        title: 'Catálogo de música popular',
        text: 'Reproduces repertorio cuyos autores e intérpretes están representados por SACM y SOMEXFON. Ellas pueden requerir licencia al negocio con independencia de lo que pagues a Apple.',
      },
      {
        icon: 'user-x',
        title: 'Atado a un Apple ID personal',
        text: 'La cuenta es de una persona. Si el equipo cambia de manos, cambia la contraseña o se restablece el dispositivo, tu música se va con él y no queda registro de operación.',
      },
      {
        icon: 'sliders-horizontal',
        title: 'Pensado para escuchar, no para ambientar',
        text: 'No hay control por zonas, ni programación por franja horaria, ni una forma simple de que el ambiente cambie solo entre la comida y la cena.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Solo fines personales y no comerciales' },
        nosotros: { estado: 'si', texto: 'Diseñado para locales comerciales' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Cuenta a nombre del negocio',
        ellos: { estado: 'no', texto: 'Apple ID de una persona' },
        nosotros: { estado: 'si', texto: 'Cuenta del negocio, con logo propio en el reproductor' },
      },
      {
        criterio: 'Precio publicado al mes',
        ellos: { estado: 'info', texto: 'Plan personal, no aplicable a negocios' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
      {
        criterio: 'Control del ambiente por franja horaria',
        ellos: { estado: 'no', texto: 'Manual, canción por canción' },
        nosotros: { estado: 'si', texto: 'Mood Mode y playlists por momento del día' },
      },
    ],
    ganancias: [
      'Licencia comercial incluida, sin que se requiera pagar a SACM ni SOMEXFON',
      'Certificado digital para inspecciones',
      'Cuenta del negocio, no el Apple ID de un empleado',
      'Reproducción continua sin anuncios ni silencios entre canciones',
      'Funciona en el mismo iPad: solo abres el navegador',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'Si lo que valoras de Apple Music es el audio sin pérdida y el catálogo comercial completo, Muusica.com no compite en eso. Nuestro catálogo es original y en calidad de streaming pensada para bocinas de local, no para audífonos de estudio. A cambio, es el único de los dos que puedes poner legalmente para tus clientes.',
    },
    faq: [
      {
        q: '¿Puedo usar Apple Music en mi negocio?',
        a: 'Los términos de los servicios de medios de Apple limitan el uso a fines personales y no comerciales. Reproducir el servicio para clientes en un establecimiento queda fuera de esa autorización.',
      },
      {
        q: '¿Existe un plan comercial de Apple Music?',
        a: 'Apple no ofrece un plan de Apple Music para uso en establecimientos en México. Para eso están los servicios de música para negocios.',
      },
      {
        q: '¿Qué gano al cambiar a Muusica.com?',
        a: 'La licencia de comunicación pública incluida, un certificado que puedes mostrar en una inspección, cero anuncios y control del ambiente por franja horaria, por $175 MXN al mes por sucursal.',
      },
      {
        q: '¿Necesito comprar equipo nuevo?',
        a: 'No. Muusica.com funciona en cualquier dispositivo con navegador: el mismo iPad, una tablet Android, una laptop o el equipo de punto de venta. También transmite por AirPlay y Chromecast.',
      },
    ],
    fuentes: [
      { nombre: 'Apple Media Services — Términos y Condiciones', url: 'https://www.apple.com/legal/internet-services/itunes/us/terms.html' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'derechos-de-autor-musica-negocios-mexico',
      'que-es-musica-libre-de-regalias',
      'multas-por-uso-ilegal-de-musica',
    ],
  },

  {
    slug: 'youtube-music',
    servicio: 'YouTube Music',
    categoria: 'personal',
    icon: 'monitor-play',
    color: '#FF0000',
    seoTitle: "Alternativa a YouTube Music para negocios",
    seoDescription: "YouTube autoriza su contenido solo para uso personal. Compáralo con Muusica.com: sin anuncios y con licencia comercial por $175 MXN al mes.",
    entradilla:
      'YouTube es la opción por defecto de miles de locales en México: es gratis, está en cualquier pantalla y tiene todo. También es la que más interrupciones mete en tu ambiente y la que sus propios términos describen como de uso personal y no comercial.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'YouTube y YouTube Music autorizan escuchar contenido para uso personal y no comercial; poner música desde ahí para tus clientes queda fuera. Muusica.com resuelve el mismo problema con licencia de comunicación pública incluida por $175 MXN al mes por sucursal y sin un solo anuncio.',
      puntos: [
        'Sus términos prohíben expresamente la proyección pública y la transmisión de música del servicio.',
        'YouTube Premium quita los anuncios, no cambia el tipo de licencia.',
        'Los anuncios de la versión gratuita son publicidad de otras marcas dentro de tu local.',
      ],
    },
    cita: {
      texto:
        'Puedes ver o escuchar Contenido para tu uso personal y no comercial.',
      autor: 'YouTube — Términos del Servicio',
      nota: 'Sus términos también indican que no se puede "proyectar videos públicamente ni transmitir música del Servicio".',
      url: 'https://www.youtube.com/t/terms',
    },
    problemas: [
      {
        icon: 'megaphone',
        title: 'Publicidad de terceros en tu negocio',
        text: 'Con la versión gratuita, en medio de tu ambiente entra un anuncio de otra marca a un volumen que no controlas. Es el problema más visible y el más caro en percepción de calidad.',
      },
      {
        icon: 'file-x',
        title: 'Sin licencia comercial',
        text: 'Ni la cuenta gratuita ni Premium autorizan la reproducción en un espacio abierto al público. Premium es una función de comodidad, no un permiso.',
      },
      {
        icon: 'shuffle',
        title: 'La reproducción automática se descarrila',
        text: 'Después de unas horas el algoritmo termina en cualquier lado: un podcast, una canción con letra explícita, un video que no tiene nada que ver con tu marca. Alguien tiene que estar vigilando.',
      },
      {
        icon: 'shield-alert',
        title: 'No te cubre ante las sociedades de gestión',
        text: 'El repertorio es música popular administrada por SACM y SOMEXFON en México. Usarlo en tu local puede generar el requerimiento de una licencia que YouTube no te da.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Solo uso personal y no comercial' },
        nosotros: { estado: 'si', texto: 'Diseñado para locales comerciales' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Anuncios durante la reproducción',
        ellos: { estado: 'no', texto: 'Sí en la versión gratuita, la más usada en locales' },
        nosotros: { estado: 'si', texto: 'Nunca, en ningún plan' },
      },
      {
        criterio: 'Contenido apto para todo público',
        ellos: { estado: 'parcial', texto: 'Depende de lo que decida la reproducción automática' },
        nosotros: { estado: 'si', texto: 'Catálogo curado, sin sorpresas' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Precio publicado al mes',
        ellos: { estado: 'info', texto: 'Gratis o plan personal Premium' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
    ],
    ganancias: [
      'Se acaban los anuncios de otras marcas dentro de tu local',
      'Licencia de comunicación pública incluida, con certificado descargable',
      'Catálogo curado: nadie tiene que vigilar qué va a sonar después',
      'Reproducción continua todo el día sin intervención del personal',
      'Ambiente por franja horaria con Mood Mode',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'YouTube tiene absolutamente todo, incluidos videos, y es gratis. Muusica.com no tiene videos ni música popular, y cuesta $175 MXN al mes. Lo que compras no es catálogo: es que puedas dejar la música puesta ocho horas sin vigilarla y sin riesgo legal.',
    },
    faq: [
      {
        q: '¿Puedo poner YouTube en mi restaurante o tienda?',
        a: 'Sus términos del servicio permiten ver o escuchar contenido solo para uso personal y no comercial, e indican expresamente que no se pueden proyectar videos públicamente ni transmitir música del servicio.',
      },
      {
        q: '¿YouTube Premium sí permite el uso comercial?',
        a: 'No. Premium elimina los anuncios y permite reproducción en segundo plano, pero no modifica la licencia: sigue siendo de uso personal.',
      },
      {
        q: '¿Cuál es la alternativa a YouTube Music para un negocio?',
        a: 'Un servicio con licencia comercial. Muusica.com incluye la comunicación pública en la suscripción, no reproduce anuncios y cuesta $175 MXN al mes por sucursal.',
      },
      {
        q: '¿Puedo seguir usando la misma pantalla y bocinas?',
        a: 'Sí. Muusica.com funciona en cualquier navegador y transmite a Chromecast y AirPlay, así que el equipo que ya tienes sirve igual.',
      },
    ],
    fuentes: [
      { nombre: 'YouTube — Términos del Servicio', url: 'https://www.youtube.com/t/terms' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'errores-al-elegir-musica-para-tu-negocio',
      'multas-por-uso-ilegal-de-musica',
      'derechos-de-autor-musica-negocios-mexico',
    ],
  },

  {
    slug: 'amazon-music',
    servicio: 'Amazon Music',
    categoria: 'personal',
    icon: 'audio-lines',
    color: '#25D1DA',
    seoTitle: "Alternativa a Amazon Music para negocios",
    seoDescription: "Amazon Music es solo para fines personales, aun dentro de Prime. Compáralo con Muusica.com: licencia comercial incluida por $175 MXN al mes.",
    entradilla:
      'Amazon Music llega gratis con Prime y se controla por voz desde un Echo, así que aparece en muchas recepciones y cafeterías casi por accidente. Sus condiciones de uso, sin embargo, autorizan el servicio solo para fines personales y no comerciales.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Amazon Music no está licenciado para uso comercial, ni siquiera dentro de Prime. La alternativa es un servicio para negocios: Muusica.com incluye la licencia de comunicación pública por $175 MXN al mes por sucursal, con certificado descargable.',
      puntos: [
        'Sus condiciones de uso dicen "solo para fines personales y no comerciales".',
        'Venir incluido en Prime no lo convierte en una licencia de negocio.',
        'El control por voz es cómodo, pero deja tu ambiente a merced de quien hable más fuerte.',
      ],
    },
    cita: {
      texto: 'Solo puedes usar los Servicios para tus fines personales y no comerciales.',
      autor: 'Amazon Music — Condiciones de Uso',
      nota: 'Traducción de: "You may use the Services only for your personal, non-commercial purposes."',
      url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201380010',
    },
    problemas: [
      {
        icon: 'file-x',
        title: 'Prime no incluye derechos comerciales',
        text: 'Prime agrupa envíos, video y música bajo una misma cuota, toda ella de uso doméstico. No hay ninguna cláusula que extienda esos permisos a un establecimiento.',
      },
      {
        icon: 'mic-off',
        title: 'El ambiente lo decide quien pida la canción',
        text: 'Con un Echo en el mostrador, cualquiera puede cambiar la música. Es divertido en una casa y es un problema de marca en un negocio.',
      },
      {
        icon: 'shield-alert',
        title: 'Repertorio con regalías pendientes',
        text: 'Es música popular: SACM y SOMEXFON representan a sus titulares en México y pueden requerir licencia a tu local aunque pagues Prime.',
      },
      {
        icon: 'file-search',
        title: 'Sin nada que mostrar en una inspección',
        text: 'No hay certificado, ni contrato a nombre del negocio, ni comprobante de que la música que suena está autorizada para uso comercial.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Solo fines personales y no comerciales' },
        nosotros: { estado: 'si', texto: 'Diseñado para locales comerciales' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Control de quién cambia la música',
        ellos: { estado: 'no', texto: 'Cualquiera con voz o con la app' },
        nosotros: { estado: 'si', texto: 'Cuenta del negocio en un dispositivo fijo' },
      },
      {
        criterio: 'Precio publicado al mes',
        ellos: { estado: 'info', texto: 'Incluido en Prime o plan personal' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
    ],
    ganancias: [
      'Licencia comercial incluida y certificado para inspecciones',
      'El ambiente deja de depender de quién le hable al altavoz',
      'Cola continua sin anuncios ni cortes',
      'Ocho ambientes para cubrir todas las franjas del día',
      'Contrato y factura a nombre de tu negocio',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'Si ya pagas Prime, Amazon Music te sale gratis y Muusica.com son $175 MXN al mes. No vamos a fingir que eso no es una diferencia. Lo que estás pagando es la licencia de comunicación pública, que por separado suele costar bastante más que la suscripción, y no tener que preocuparte por ella.',
    },
    faq: [
      {
        q: '¿Puedo usar Amazon Music en mi negocio si tengo Prime?',
        a: 'No. Las condiciones de uso de Amazon Music autorizan el servicio solo para fines personales y no comerciales, independientemente de que llegue incluido en Prime.',
      },
      {
        q: '¿Amazon tiene un plan para negocios?',
        a: 'Amazon Music no ofrece un plan de música ambiental para establecimientos en México. Para ese uso hacen falta servicios especializados con licencia comercial.',
      },
      {
        q: '¿Puedo seguir usando mi Echo?',
        a: 'Puedes reproducir Muusica.com desde cualquier navegador y enviarlo a tus bocinas por Chromecast o AirPlay. El Echo no ejecuta Muusica.com de forma nativa, así que lo habitual es dejar una tablet o laptop conectada al equipo de audio.',
      },
      {
        q: '¿Cuánto cuesta Muusica.com?',
        a: '$175 MXN al mes por sucursal, o $1,890 MXN al año, con licencia comercial y certificado incluidos. Hay 7 días de prueba sin tarjeta.',
      },
    ],
    fuentes: [
      { nombre: 'Amazon Music — Condiciones de Uso', url: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201380010' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'que-es-musica-libre-de-regalias',
      'cuanto-cuesta-musica-legal-mexico',
      'derechos-de-autor-musica-negocios-mexico',
    ],
  },

  {
    slug: 'deezer',
    servicio: 'Deezer',
    categoria: 'personal',
    icon: 'radio',
    color: '#A238FF',
    seoTitle: "Alternativa a Deezer para negocios",
    seoDescription: "Deezer prohíbe expresamente el uso en locales públicos y negocios. Compáralo con Muusica.com: licencia comercial incluida por $175 MXN al mes.",
    entradilla:
      'De todos los servicios de streaming personal, Deezer es el más explícito: sus condiciones no se limitan a decir que el uso es personal, sino que prohíben expresamente el uso en locales públicos y para negocios.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Deezer prohíbe el uso en establecimientos en sus propias condiciones. Si necesitas música para un local, la alternativa es un servicio con licencia comercial: Muusica.com la incluye por $175 MXN al mes por sucursal.',
      puntos: [
        'Sus condiciones dicen que cualquier uso distinto del personal y privado está estrictamente prohibido.',
        'Deezer sí tiene una oferta para negocios en algunos mercados, operada aparte de la app de consumo.',
        'La cuenta personal no genera ningún comprobante para una inspección.',
      ],
    },
    cita: {
      texto:
        'El uso del Sitio y de la Aplicación está autorizado únicamente para un uso personal y privado; por lo tanto, cualquier otro uso, en particular en locales públicos y para negocios, está estrictamente prohibido.',
      autor: 'Deezer — Condiciones de Uso',
      nota: 'Traducción de: "The use of the Site and Application is only authorized for a personal and private use, therefore any other use, particularly in public premises and for businesses, is strictly forbidden."',
      url: 'https://www.deezer.com/legal/cgu',
    },
    problemas: [
      {
        icon: 'ban',
        title: 'Prohibición expresa, no interpretación',
        text: 'No hace falta razonar sobre qué es comunicación pública: sus condiciones nombran directamente los locales públicos y los negocios como uso prohibido.',
      },
      {
        icon: 'file-x',
        title: 'Sin licencia de comunicación pública',
        text: 'La suscripción cubre que escuches tú. El permiso para que suene en tu local es otro y no está incluido en ningún plan de consumo.',
      },
      {
        icon: 'shield-alert',
        title: 'Repertorio de sociedades de gestión',
        text: 'Es música popular. En México SACM y SOMEXFON representan a sus titulares y pueden requerir licencia al establecimiento.',
      },
      {
        icon: 'file-search',
        title: 'Nada que mostrar si te inspeccionan',
        text: 'Una cuenta personal no produce contrato a nombre del negocio ni certificado de licencia comercial.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Prohibido expresamente en sus condiciones' },
        nosotros: { estado: 'si', texto: 'Diseñado para locales comerciales' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida en los planes de consumo' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Precio publicado al mes por sucursal',
        ellos: { estado: 'info', texto: 'Plan personal, no aplicable a negocios' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
      {
        criterio: 'Soporte en español desde México',
        ellos: { estado: 'parcial', texto: 'Soporte global de consumo' },
        nosotros: { estado: 'si', texto: 'Equipo en México, para negocios' },
      },
    ],
    ganancias: [
      'Licencia de comunicación pública incluida en la suscripción',
      'Certificado digital descargable para inspecciones',
      'Precio en pesos, factura a nombre de tu negocio',
      'Reproducción continua sin anuncios',
      'Ambientes listos por giro y por franja horaria',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'Deezer tiene el catálogo comercial completo y funciones como Flow. Muusica.com tiene catálogo original y está construido alrededor de una cosa: que la música pueda sonar legalmente en tu local todo el día sin que nadie la atienda.',
    },
    faq: [
      {
        q: '¿Puedo usar Deezer en mi negocio?',
        a: 'No con una cuenta de consumo. Sus condiciones de uso autorizan únicamente el uso personal y privado, y prohíben expresamente el uso en locales públicos y para negocios.',
      },
      {
        q: '¿Deezer tiene una versión para negocios?',
        a: 'Deezer ha ofrecido soluciones para empresas en algunos mercados, gestionadas aparte de la app de consumo. Aun así, en México conviene verificar qué cubre exactamente en materia de comunicación pública antes de contratar.',
      },
      {
        q: '¿Qué incluye Muusica.com por $175 MXN al mes?',
        a: 'Catálogo con licencia comercial, licencia de comunicación pública incluida, sin que se requiera pagar a SACM ni SOMEXFON, certificado descargable, reproducción sin anuncios y Mood Mode, por sucursal.',
      },
    ],
    fuentes: [
      { nombre: 'Deezer — Condiciones de Uso', url: 'https://www.deezer.com/legal/cgu' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'derechos-de-autor-musica-negocios-mexico',
      'que-es-musica-libre-de-regalias',
      'multas-por-uso-ilegal-de-musica',
    ],
  },

  {
    slug: 'tidal',
    servicio: 'Tidal',
    categoria: 'personal',
    icon: 'waves',
    color: '#00FFFF',
    seoTitle: "Alternativa a Tidal para negocios",
    seoDescription: "Tidal es un servicio de uso personal y no comercial. Compáralo con Muusica.com: licencia comercial incluida, sin anuncios, $175 MXN al mes.",
    entradilla:
      'Tidal se eligió en muchos negocios por su calidad de audio, que en un local con buen equipo sí se nota. Lo que no cambia con la calidad es la licencia: sus condiciones limitan el servicio a uso personal y no comercial.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Tidal no autoriza el uso comercial. Si te importa la calidad de sonido en tu local, la alternativa correcta es un servicio con licencia para negocios; Muusica.com la incluye por $175 MXN al mes por sucursal.',
      puntos: [
        'Sus condiciones dicen que el servicio es solo para uso personal y no comercial.',
        'La calidad de audio no sustituye el permiso de comunicación pública.',
        'En bocinas de local, la diferencia entre alta resolución y streaming estándar es mucho menor que en audífonos.',
      ],
    },
    cita: {
      texto: 'El Servicio TIDAL es solo para uso personal y no comercial.',
      autor: 'TIDAL — Términos y Condiciones de Uso',
      nota: 'Traducción de: "The TIDAL Service is for personal, non-commercial use only."',
      url: 'https://tidal.com/terms',
    },
    problemas: [
      {
        icon: 'file-x',
        title: 'Uso personal, igual que el resto',
        text: 'Pagar el plan más caro no amplía la licencia: sigue siendo una suscripción doméstica y la comunicación pública queda pendiente.',
      },
      {
        icon: 'shield-alert',
        title: 'Catálogo administrado por sociedades de gestión',
        text: 'Reproduces música popular. SACM y SOMEXFON representan a sus titulares en México y pueden requerir licencia al negocio.',
      },
      {
        icon: 'speaker',
        title: 'La calidad se pierde en el trayecto',
        text: 'La alta resolución se aprovecha con un buen convertidor y una escucha atenta. En bocinas de techo a 55 dB compitiendo con conversaciones, el retorno es mínimo.',
      },
      {
        icon: 'file-search',
        title: 'Sin comprobante para el negocio',
        text: 'No hay certificado ni contrato comercial que puedas mostrar si te visita un inspector.',
      },
    ],
    comparativa: [
      {
        criterio: 'Uso en un local abierto al público',
        ellos: { estado: 'no', texto: 'Solo uso personal y no comercial' },
        nosotros: { estado: 'si', texto: 'Diseñado para locales comerciales' },
      },
      {
        criterio: 'Licencia de comunicación pública en México',
        ellos: { estado: 'no', texto: 'No incluida' },
        nosotros: { estado: 'si', texto: 'Incluida en la suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'no', texto: 'No existe' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Calidad de audio',
        ellos: { estado: 'si', texto: 'Alta resolución, su principal argumento' },
        nosotros: { estado: 'parcial', texto: 'Streaming estándar, suficiente para audio de local' },
      },
      {
        criterio: 'Precio publicado al mes por sucursal',
        ellos: { estado: 'info', texto: 'Plan personal, no aplicable a negocios' },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal` },
      },
    ],
    ganancias: [
      'Licencia comercial y de comunicación pública incluidas',
      'Certificado digital para inspecciones',
      'Reproducción continua sin anuncios ni huecos entre canciones',
      'Ambientes por giro y franja horaria',
      'Precio en pesos con factura a nombre del negocio',
    ],
    honesto: {
      titulo: 'Qué no vas a encontrar aquí',
      texto:
        'Si tu local es una tienda de audio o un bar de escucha donde la fidelidad es el producto, Tidal gana en calidad y no tiene sentido negarlo. En cualquier otro giro, la música es fondo y la variable que sí te puede costar dinero es la licencia.',
    },
    faq: [
      {
        q: '¿Puedo usar Tidal en mi negocio?',
        a: 'Sus términos indican que el servicio es solo para uso personal y no comercial, así que reproducirlo para clientes en un establecimiento queda fuera de la autorización.',
      },
      {
        q: '¿La calidad de audio de Muusica.com alcanza para un local?',
        a: 'Sí. El catálogo se entrega en calidad de streaming pensada para equipos de local y reproducción continua. En bocinas ambientales a volumen de fondo, la diferencia con alta resolución es prácticamente inaudible.',
      },
      {
        q: '¿Qué incluye la suscripción de Muusica.com?',
        a: 'Catálogo original con licencia comercial, comunicación pública incluida sin que se requiera pagar a SACM ni SOMEXFON, certificado descargable, sin anuncios, por $175 MXN al mes por sucursal.',
      },
    ],
    fuentes: [
      { nombre: 'TIDAL — Términos y Condiciones de Uso', url: 'https://tidal.com/terms' },
    ],
    posts: [
      'por-que-spotify-no-sirve-para-tu-negocio',
      'que-es-musica-libre-de-regalias',
      'derechos-de-autor-musica-negocios-mexico',
    ],
  },

  // ──────────────────────────────── Servicios de música para negocios
  {
    slug: 'soundtrack-your-brand',
    servicio: 'Soundtrack Your Brand',
    categoria: 'negocio',
    icon: 'building-2',
    color: '#FF5B44',
    seoTitle: "Alternativa a Soundtrack Your Brand",
    seoDescription: "Su página de licencias para México remite a SACM y SOMEXFON. Compáralo con Muusica.com: sin esa segunda cuota, $175 MXN al mes por sucursal.",
    entradilla:
      'Soundtrack Your Brand es de los servicios de música para negocios mejor construidos del mercado, con catálogo comercial licenciado y acuerdos directos con las disqueras. La pregunta para un negocio en México no es si es bueno, sino qué queda pendiente después de pagarlo.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Soundtrack sí licencia el catálogo para uso empresarial, pero su propia página de licencias para México indica que si no cuentas con las licencias de comunicación pública de SACM y SOMEXFON debes acudir a esas sociedades. Con Muusica.com ese segundo tramo ya viene incluido: $175 MXN al mes por sucursal y no hay una segunda factura.',
      puntos: [
        'Su precio se cobra por zona y en dólares, así que el tipo de cambio se suma al costo.',
        'En México, la comunicación pública queda del lado del negocio según su propia página.',
        'Reproduce música popular: es su ventaja de catálogo y también el origen de las regalías.',
      ],
    },
    cita: {
      texto:
        'Si no cuentas con licencias de comunicación pública de SACM y SOMEXFON, visita sus sitios web.',
      autor: 'Soundtrack — página de licencias para México',
      nota: 'Traducción de: "If you don\'t have public performance licenses from SACM and SOMEXFON, please visit their websites." La misma página marca los tres derechos (grabación, edición y comunicación pública) como no incluidos en su totalidad para México.',
      url: 'https://www.soundtrack.io/licensing/mexico/',
    },
    problemas: [
      {
        icon: 'receipt',
        title: 'La segunda factura',
        text: 'Pagas la suscripción y, en México, la comunicación pública sigue pendiente. Ese cobro no lo emite Soundtrack, lo emiten las sociedades de gestión, y su monto depende de tu giro, aforo y ciudad.',
      },
      {
        icon: 'dollar-sign',
        title: 'Precio en dólares y por zona',
        text: 'La tarifa se publica en USD por zona de música. Si tienes dos ambientes en el mismo local, son dos zonas, y cada movimiento del tipo de cambio te mueve el costo.',
      },
      {
        icon: 'globe',
        title: 'Soporte y facturación internacionales',
        text: 'Es una empresa sueca con operación global. Para un negocio mexicano eso significa contratos y atención pensados para otro mercado, y facturación que hay que resolver aparte.',
      },
      {
        icon: 'music',
        title: 'La ventaja de catálogo tiene contrapartida',
        text: 'Reproducir música popular es lo que hace atractivo el servicio y, a la vez, lo que hace que existan regalías que alguien tiene que pagar. Un catálogo original evita la cuestión de raíz.',
      },
    ],
    comparativa: [
      {
        criterio: 'Licencia del catálogo para uso empresarial',
        ellos: { estado: 'si', texto: 'Incluida, con acuerdos directos con disqueras' },
        nosotros: { estado: 'si', texto: 'Incluida, catálogo propio' },
      },
      {
        criterio: 'Comunicación pública en México (SACM / SOMEXFON)',
        ellos: { estado: 'no', texto: 'Su página remite al negocio a SACM y SOMEXFON' },
        nosotros: { estado: 'si', texto: 'Incluida: el catálogo no está en ese repertorio' },
      },
      {
        criterio: 'Precio publicado al mes',
        ellos: { estado: 'info', texto: `Plan Essential ≈ 24 USD ($${Math.round(24 * tipoCambio)} MXN) por zona, con pago anual` },
        nosotros: { estado: 'info', texto: `${muusica.precio} por sucursal, en pesos` },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'parcial', texto: 'Documentación de su licencia; la de comunicación pública la tramitas tú' },
        nosotros: { estado: 'si', texto: 'Certificado único, descargable y validable por QR' },
      },
      {
        criterio: 'Catálogo',
        ellos: { estado: 'info', texto: 'Música popular de sellos internacionales' },
        nosotros: { estado: 'info', texto: muusica.catalogo },
      },
      {
        criterio: 'Gestión de varias sucursales',
        ellos: { estado: 'si', texto: 'Panel multiubicación y API en planes superiores' },
        nosotros: { estado: 'parcial', texto: 'Una suscripción por sucursal; plan de varias ubicaciones a solicitud' },
      },
    ],
    costo: {
      titulo: 'Lo que pagas al mes en México',
      nota: 'Muusica.com no incluye ni revende licencias de SACM o SOMEXFON: no se requieren, porque el catálogo es original y queda fuera del repertorio que administran esas sociedades. Sus cuotas se calculan por giro, aforo y ciudad. Verifica siempre las condiciones vigentes con cada proveedor.',
      filas: [
        { concepto: 'Suscripción', ellos: `≈ $${Math.round(24 * tipoCambio)} MXN por zona (plan Essential, pago anual)`, nosotros: '$175 MXN por sucursal' },
        { concepto: 'Licencia SACM', ellos: 'A cargo del negocio', nosotros: 'No se requiere: el catálogo no es de su repertorio' },
        { concepto: 'Licencia SOMEXFON', ellos: 'A cargo del negocio', nosotros: 'No se requiere: el catálogo no es de su repertorio' },
        { concepto: 'Emisores de la factura', ellos: 'Hasta tres distintos', nosotros: 'Uno' },
      ],
    },
    ganancias: [
      'Un solo cobro al mes: no hay segunda cuota de sociedades de gestión',
      'Precio en pesos, sin exposición al tipo de cambio',
      'Certificado digital único para inspecciones',
      'Soporte en español desde México',
      'Mood Mode para cambiar el ambiente sin armar listas',
    ],
    honesto: {
      titulo: 'En qué gana Soundtrack',
      texto:
        'Su catálogo de música popular es más amplio y reconocible que el nuestro, y su panel para cadenas grandes con API y control por zonas está más desarrollado. Si operas decenas de sucursales y necesitas integraciones, es una herramienta seria. Para un negocio o una cadena chica en México, la pregunta decisiva sigue siendo quién paga la comunicación pública.',
    },
    faq: [
      {
        q: '¿Soundtrack Your Brand incluye la licencia de SACM y SOMEXFON en México?',
        a: 'Según su propia página de licencias para México, no en su totalidad: indica que si no cuentas con licencias de comunicación pública de SACM y SOMEXFON debes visitar los sitios de esas sociedades.',
      },
      {
        q: '¿Cuánto cuesta Soundtrack en México?',
        a: 'Publica sus precios en dólares y por zona de música. Su plan Essential aparece en aproximadamente 24 USD por zona al mes con facturación anual. Verifica la tarifa vigente en su sitio, ya que los planes y precios cambian.',
      },
      {
        q: '¿Por qué Muusica.com sí puede incluir la comunicación pública?',
        a: 'Porque el catálogo es original y no forma parte del repertorio que administran SACM y SOMEXFON. Al no haber titulares representados por esas sociedades en la música que reproduces, no se genera una cuota adicional.',
      },
      {
        q: '¿Muusica.com sirve para varias sucursales?',
        a: 'Sí. La licencia es por locación, así que se contrata una suscripción por sucursal. Si tienes varias sedes, escríbenos a hola@muusica.com para un plan de múltiples ubicaciones.',
      },
    ],
    fuentes: [
      { nombre: 'Soundtrack — Licencias musicales en México', url: 'https://www.soundtrack.io/licensing/mexico/' },
      { nombre: 'Soundtrack — Precios', url: 'https://www.soundtrack.io/es/pricing' },
    ],
    posts: [
      'derechos-de-autor-musica-negocios-mexico',
      'cuanto-cuesta-musica-legal-mexico',
      'que-es-musica-libre-de-regalias',
      'hilo-musical-alternativas-modernas',
    ],
  },

  {
    slug: 'kasimu',
    servicio: 'Kasimu',
    categoria: 'negocio',
    icon: 'building-2',
    color: '#0EA5E9',
    seoTitle: "Alternativa a Kasimu para negocios",
    seoDescription: "Kasimu Global no incluye comunicación pública y en Freedom depende del país. Compáralo con Muusica.com: todo incluido por $175 MXN al mes.",
    entradilla:
      'Kasimu tiene la virtud poco común de decir con claridad qué cubre cada uno de sus planes. Justamente por eso su propia tabla de precios es el mejor punto de partida para entender por qué un negocio en México puede terminar pagando dos veces.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Kasimu Global, su plan más barato, no incluye los derechos de comunicación pública. Kasimu Freedom incluye los derechos de autor, pero su propia página advierte que los de productor pueden no estar cubiertos según la legislación de cada país. Muusica.com incluye todo por $175 MXN al mes por sucursal, por debajo de ambos planes.',
      puntos: [
        'Kasimu Global: $239 MXN al mes, sin derechos de comunicación pública.',
        'Kasimu Freedom: $279 MXN al mes, con derechos de autor y cobertura de productor variable.',
        'Muusica.com: $175 MXN al mes, con la comunicación pública incluida.',
      ],
    },
    cita: {
      texto:
        'Kasimu Freedom incluye los derechos de autor (SGAE, SACM, SADAIC, etc). Dependiendo de la legislación de cada país, Kasimu Freedom puede incluir o no los derechos de productor, editor, etc (AGEDI, SOMEXFON, ADI-CAPIF, etc).',
      autor: 'Kasimu — página de precios para México',
      nota: 'De la misma página: el plan Kasimu Global "no incluye los derechos de comunicación pública (derechos de autor, productor, etc)".',
      url: 'https://www.kasimu.mx/precio-servicio-de-musica-ambiental-kasimu-mexico/',
    },
    problemas: [
      {
        icon: 'layers',
        title: 'Dos planes, dos coberturas distintas',
        text: 'El plan barato es solo música: los derechos de comunicación pública quedan a tu cargo. Comparar Kasimu Global contra un servicio con licencia incluida no es comparar lo mismo.',
      },
      {
        icon: 'help-circle',
        title: 'La cobertura de Freedom depende del país',
        text: 'Su propia página dice que los derechos de productor pueden estar o no incluidos según la legislación local, y nombra a SOMEXFON entre esos casos. Es una zona que conviene confirmar por escrito antes de firmar.',
      },
      {
        icon: 'trending-up',
        title: 'Más caro en ambos escenarios',
        text: 'Global cuesta $239 MXN y Freedom $279 MXN al mes. Muusica.com cuesta $175 MXN con la licencia resuelta, así que la diferencia va a favor incluso antes de sumar cuotas de sociedades.',
      },
    ],
    comparativa: [
      {
        criterio: 'Precio publicado al mes por sucursal',
        ellos: { estado: 'info', texto: 'Global $239 MXN · Freedom $279 MXN' },
        nosotros: { estado: 'info', texto: `${muusica.precio} · ${muusica.precioNota}` },
      },
      {
        criterio: 'Derechos de comunicación pública en el plan de entrada',
        ellos: { estado: 'no', texto: 'Kasimu Global no los incluye, según su tabla' },
        nosotros: { estado: 'si', texto: 'Incluidos en la única suscripción, sobre nuestro propio catálogo' },
      },
      {
        criterio: 'Derechos de autor (SACM)',
        ellos: { estado: 'parcial', texto: 'Incluidos solo en el plan Freedom' },
        nosotros: { estado: 'si', texto: 'No se requiere: el catálogo no es de su repertorio' },
      },
      {
        criterio: 'Derechos de productor (SOMEXFON)',
        ellos: { estado: 'parcial', texto: 'Su página indica que dependen de la legislación de cada país' },
        nosotros: { estado: 'si', texto: 'No se requiere: el catálogo no es de su repertorio' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'info', texto: 'Consultar con el proveedor' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Prueba gratis sin tarjeta',
        ellos: { estado: 'info', texto: 'Consultar condiciones vigentes' },
        nosotros: { estado: 'si', texto: '7 días, sin tarjeta de crédito' },
      },
    ],
    costo: {
      titulo: 'Comparación de precio de lista',
      nota: 'Precios de lista publicados por Kasimu para México. Los planes y condiciones pueden cambiar sin aviso: verifica en su sitio antes de decidir.',
      filas: [
        { concepto: 'Plan mensual de entrada', ellos: 'Kasimu Global · $239 MXN', nosotros: '$175 MXN' },
        { concepto: 'Plan con derechos de autor', ellos: 'Kasimu Freedom · $279 MXN', nosotros: 'Mismo plan de $175 MXN' },
        { concepto: 'Derechos de productor (SOMEXFON)', ellos: 'Según legislación del país', nosotros: 'No se requiere: el catálogo no es de su repertorio' },
        { concepto: 'Pago anual', ellos: 'Global $1,999 · Freedom $2,399', nosotros: '$1,890 MXN' },
      ],
    },
    ganancias: [
      'Un solo plan, sin decidir entre cobertura y precio',
      'Comunicación pública incluida, sin depender de la legislación aplicable a cada sociedad',
      'Más barato que ambos planes de Kasimu, al mes y al año',
      'Certificado digital descargable para inspecciones',
      '7 días de prueba sin tarjeta',
    ],
    honesto: {
      titulo: 'En qué gana Kasimu',
      texto:
        'Kasimu lleva años en el mercado hispanohablante, tiene reproductor de escritorio con descarga para funcionar sin internet y precios especiales para cadenas de 19 locales o más. Si tu conexión es mala o manejas muchas sucursales, esos puntos pesan. También hay que reconocerles que publican con claridad qué cubre cada plan, cosa que no todos hacen.',
    },
    faq: [
      {
        q: '¿Kasimu incluye la licencia de SACM y SOMEXFON?',
        a: 'Depende del plan. Su página indica que Kasimu Global no incluye los derechos de comunicación pública, y que Kasimu Freedom incluye los derechos de autor pero que los de productor pueden estar o no incluidos según la legislación de cada país.',
      },
      {
        q: '¿Cuánto cuesta Kasimu en México?',
        a: 'Según su tabla de precios publicada: Kasimu Global $239 MXN al mes ($1,999 al año) y Kasimu Freedom $279 MXN al mes ($2,399 al año), con tarifas menores para cadenas de 19 locales o más.',
      },
      {
        q: '¿Por qué Muusica.com puede ser más barato con más cobertura?',
        a: 'Porque el catálogo es original y no forma parte del repertorio administrado por las sociedades de gestión. Al no generar regalías a terceros, la licencia de comunicación pública puede venir incluida sin encarecer el plan.',
      },
      {
        q: '¿Muusica.com funciona sin internet?',
        a: 'No: es un reproductor web y necesita conexión. Si tu local tiene cortes frecuentes, conviene tenerlo en cuenta al comparar.',
      },
    ],
    fuentes: [
      { nombre: 'Kasimu — Precios del servicio en México', url: 'https://www.kasimu.mx/precio-servicio-de-musica-ambiental-kasimu-mexico/' },
    ],
    posts: [
      'cuanto-cuesta-musica-legal-mexico',
      'derechos-de-autor-musica-negocios-mexico',
      'que-es-musica-libre-de-regalias',
      'hilo-musical-alternativas-modernas',
    ],
  },

  {
    slug: 'voxpop',
    servicio: 'VOXPOP',
    categoria: 'negocio',
    icon: 'building-2',
    color: '#F59E0B',
    seoTitle: "Alternativa a VOXPOP para negocios",
    seoDescription: "VOXPOP va de $295 a $895 MXN al mes sin desglosar qué licencias cubre. Compáralo con Muusica.com: $175 MXN con comunicación pública incluida.",
    entradilla:
      'VOXPOP es un proveedor mexicano con una oferta amplia: música, señalización, anuncios y aroma. Para un negocio que solo necesita música legal, la comparación se reduce a dos preguntas: cuánto cuesta y qué cubre exactamente su “blindaje legal”.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'VOXPOP arranca en $295 MXN al mes por ubicación y llega a $895 MXN según el plan. Su sitio habla de certidumbre legal, pero no publica el desglose de qué derechos cubre. Muusica.com cuesta $175 MXN al mes y dice exactamente qué incluye: licencia de comunicación pública, con certificado descargable.',
      puntos: [
        'Sus planes publicados van de $295 a $895 MXN al mes por ubicación.',
        'La página de precios no menciona SACM ni SOMEXFON.',
        'Si contratas, pide por escrito qué derechos cubre el servicio en tu giro.',
      ],
    },
    problemas: [
      {
        icon: 'file-question',
        title: 'Sin desglose público de la licencia',
        text: 'Su sitio ofrece “blindaje legal” y “certidumbre legal”, pero su página de precios no detalla qué derechos cubre ni nombra a las sociedades de gestión. No es una acusación: es una recomendación de que lo pidas por escrito antes de firmar.',
      },
      {
        icon: 'trending-up',
        title: 'Punto de entrada más alto',
        text: 'El plan básico cuesta $295 MXN al mes por ubicación, 69% más que Muusica.com, y las funciones completas están en planes de $495 a $895 MXN.',
      },
      {
        icon: 'package',
        title: 'Solución integral, cuenta integral',
        text: 'Su propuesta incluye señalización digital, anuncios y marketing sensorial. Si solo necesitas música ambiental legal, buena parte de lo que pagas no la vas a usar.',
      },
    ],
    comparativa: [
      {
        criterio: 'Precio publicado al mes por ubicación',
        ellos: { estado: 'info', texto: 'Básico $295 · Clásico $495 · Premium $695 · Enterprise $895' },
        nosotros: { estado: 'info', texto: `${muusica.precio} · ${muusica.precioNota}` },
      },
      {
        criterio: 'Desglose público de qué derechos cubre',
        ellos: { estado: 'parcial', texto: 'Menciona certidumbre legal, sin desglose en su página de precios' },
        nosotros: { estado: 'si', texto: 'Licencia propia incluida; no se requiere SACM ni SOMEXFON' },
      },
      {
        criterio: 'Certificado para una inspección',
        ellos: { estado: 'info', texto: 'Consultar con el proveedor' },
        nosotros: { estado: 'si', texto: 'Descargable y validable por QR' },
      },
      {
        criterio: 'Servicios adicionales (señalización, aroma, anuncios)',
        ellos: { estado: 'si', texto: 'Parte central de su propuesta' },
        nosotros: { estado: 'no', texto: 'Solo música: es lo que hacemos' },
      },
      {
        criterio: 'Prueba gratis sin tarjeta',
        ellos: { estado: 'info', texto: 'Consultar condiciones vigentes' },
        nosotros: { estado: 'si', texto: '7 días, sin tarjeta de crédito' },
      },
    ],
    costo: {
      titulo: 'Comparación de precio de lista',
      nota: 'Precios de lista publicados por VOXPOP en su página de precios. Pueden cambiar sin aviso: verifica en su sitio.',
      filas: [
        { concepto: 'Plan de entrada', ellos: 'Básico · $295 MXN', nosotros: '$175 MXN' },
        { concepto: 'Plan intermedio', ellos: 'Clásico $495 · Premium $695', nosotros: 'Mismo plan de $175 MXN' },
        { concepto: 'Plan superior', ellos: 'Enterprise · $895 MXN', nosotros: 'Mismo plan de $175 MXN' },
      ],
    },
    ganancias: [
      'Menos de la mitad del precio de su plan de entrada',
      'Licencia de comunicación pública explícita, por escrito y en el sitio',
      'Certificado digital descargable para inspecciones',
      'Un solo producto bien resuelto, sin paquetes que no vas a usar',
      '7 días de prueba sin tarjeta',
    ],
    honesto: {
      titulo: 'En qué gana VOXPOP',
      texto:
        'Si además de música necesitas señalización digital, campañas de audio dentro del local o marketing sensorial, VOXPOP resuelve todo eso con un solo proveedor y un solo contrato. Muusica.com no compite en ese terreno: hacemos música ambiental legal y nada más.',
    },
    faq: [
      {
        q: '¿Cuánto cuesta VOXPOP?',
        a: 'Su página de precios publica cuatro planes por ubicación al mes: Básico $295, Clásico $495, Premium $695 y Enterprise $895 MXN.',
      },
      {
        q: '¿VOXPOP incluye las licencias de SACM y SOMEXFON?',
        a: 'Su sitio habla de blindaje legal y certidumbre legal, pero su página de precios no publica el desglose de qué derechos cubre ni menciona a esas sociedades. Conviene pedirlo por escrito antes de contratar.',
      },
      {
        q: '¿Qué cubre exactamente Muusica.com?',
        a: 'La suscripción de $175 MXN al mes por sucursal incluye el uso comercial del catálogo y la licencia de comunicación pública, sin que se requiera pagar a SACM ni SOMEXFON, con certificado digital descargable y validable por QR.',
      },
    ],
    fuentes: [
      { nombre: 'VOXPOP — Precios', url: 'https://www.voxpop.com.mx/precios/' },
    ],
    posts: [
      'cuanto-cuesta-musica-legal-mexico',
      'derechos-de-autor-musica-negocios-mexico',
      'que-es-musica-libre-de-regalias',
      'hilo-musical-alternativas-modernas',
    ],
  },

  {
    slug: 'brandtrack',
    servicio: 'Brandtrack',
    categoria: 'negocio',
    icon: 'building-2',
    color: '#8B5CF6',
    seoTitle: "Alternativa a Brandtrack para negocios",
    seoDescription: "Brandtrack admite que la comunicación pública depende del país y puede costar aparte. Compáralo con Muusica.com: incluida por $175 MXN al mes.",
    entradilla:
      'Brandtrack opera en buena parte de Latinoamérica y en México, con playlists por marca, anuncios de audio y control multiubicación. Su sección de preguntas frecuentes explica con una honestidad que se agradece dónde termina lo que incluye su plan.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Brandtrack incluye siempre las licencias de almacenamiento de música, pero sus propias preguntas frecuentes aclaran que las de comunicación pública dependen del país y pueden requerir un pago adicional. Con Muusica.com no hay condicional: la comunicación pública viene incluida por $175 MXN al mes por sucursal.',
      puntos: [
        'Su FAQ dice que la comunicación pública "depende del país".',
        'También reconoce que puede requerir un pago adicional según regulaciones locales.',
        'Ofrece documentación lista para auditoría, que sigue siendo un punto fuerte.',
      ],
    },
    cita: {
      texto:
        'Brandtrack siempre cubre las licencias de almacenamiento de música… Sin embargo, las licencias de comunicación pública dependen del país. En algunos países, Brandtrack gestiona las licencias de comunicación pública a través de organizaciones locales de derechos de autor, pero en otros, estas licencias deben ser gestionadas directamente por la empresa.',
      autor: 'Brandtrack — Preguntas frecuentes de licencias',
      nota: 'La misma página responde a "¿Tengo que pagar algo más aparte de la cuota mensual?": "Las licencias de comunicación pública pueden requerir un pago adicional en algunos países, dependiendo de las regulaciones locales".',
      url: 'https://brandtrack.fm/es/licencias',
    },
    problemas: [
      {
        icon: 'map-pin',
        title: 'La cobertura depende de dónde estés',
        text: 'Un servicio que gestiona la comunicación pública en un país y no en otro obliga a confirmar caso por caso qué pasa en México antes de contratar.',
      },
      {
        icon: 'receipt',
        title: 'Posible pago adicional',
        text: 'Su propia página admite que en algunos países la comunicación pública requiere un pago extra. Ese monto no lo fija el proveedor, lo fijan las sociedades de gestión según tu giro y aforo.',
      },
      {
        icon: 'file-question',
        title: 'Sin precio público',
        text: 'No publica una tabla de precios abierta, así que la comparación económica exige pasar por una cotización antes de saber si entra en tu presupuesto.',
      },
    ],
    comparativa: [
      {
        criterio: 'Licencia del catálogo para uso comercial',
        ellos: { estado: 'si', texto: 'Siempre incluida, según su FAQ' },
        nosotros: { estado: 'si', texto: 'Incluida, catálogo propio' },
      },
      {
        criterio: 'Comunicación pública en México',
        ellos: { estado: 'parcial', texto: 'Depende del país; puede requerir pago adicional' },
        nosotros: { estado: 'si', texto: 'Incluida, sin condicionales' },
      },
      {
        criterio: 'Precio publicado',
        ellos: { estado: 'no', texto: 'Sin tabla de precios pública' },
        nosotros: { estado: 'si', texto: `${muusica.precio} al mes por sucursal, publicado` },
      },
      {
        criterio: 'Documentación para auditoría',
        ellos: { estado: 'si', texto: 'Es uno de sus argumentos centrales' },
        nosotros: { estado: 'si', texto: 'Certificado descargable y validable por QR' },
      },
      {
        criterio: 'Anuncios de audio propios del negocio',
        ellos: { estado: 'si', texto: 'Creación y programación de anuncios' },
        nosotros: { estado: 'no', texto: 'No incluido' },
      },
    ],
    ganancias: [
      'Comunicación pública incluida sin depender del país ni de un pago extra',
      'Precio publicado y en pesos: $175 MXN al mes por sucursal',
      'Certificado digital descargable para inspecciones',
      'Alta en minutos, sin cotización previa',
      '7 días de prueba sin tarjeta',
    ],
    honesto: {
      titulo: 'En qué gana Brandtrack',
      texto:
        'Su plataforma para cadenas es más completa que la nuestra: programación que reacciona a hora, tráfico o clima, anuncios de audio dentro del local y control fino por ubicación. Si operas una cadena y quieres usar el audio como canal de comunicación, ahí hay valor real que Muusica.com no ofrece.',
    },
    faq: [
      {
        q: '¿Brandtrack incluye la licencia de comunicación pública en México?',
        a: 'Sus preguntas frecuentes indican que siempre cubre las licencias de almacenamiento de música, pero que las de comunicación pública dependen del país: en algunos las gestiona el propio Brandtrack y en otros deben ser gestionadas directamente por la empresa, con posible pago adicional.',
      },
      {
        q: '¿Cuánto cuesta Brandtrack?',
        a: 'No publica una tabla de precios abierta; el costo se conoce mediante cotización o al iniciar la prueba gratuita en su sitio.',
      },
      {
        q: '¿Muusica.com también deja documentación para una auditoría?',
        a: 'Sí. Desde tu cuenta descargas un certificado digital de licencia comercial, validable por código QR, que puedes mostrar en una inspección.',
      },
    ],
    fuentes: [
      { nombre: 'Brandtrack — Licencias y preguntas frecuentes', url: 'https://brandtrack.fm/es/licencias' },
    ],
    posts: [
      'derechos-de-autor-musica-negocios-mexico',
      'cuanto-cuesta-musica-legal-mexico',
      'que-es-musica-libre-de-regalias',
      'multas-por-uso-ilegal-de-musica',
    ],
  },

  {
    slug: 'mood-media',
    servicio: 'Mood Media',
    categoria: 'negocio',
    icon: 'building-2',
    color: '#64748B',
    seoTitle: "Alternativa a Mood Media para negocios",
    seoDescription: "Mood Media no publica precios ni desglose de licencias. Compáralo con Muusica.com: $175 MXN al mes, publicado, y alta en minutos.",
    entradilla:
      'Mood Media —heredera de Muzak— es el nombre grande del sector: audio, video, señalización, aroma y sistemas de sonido para cadenas de todo el mundo. Ese tamaño explica sus fortalezas y también por qué no siempre encaja con un negocio de una o cinco sucursales.',
    veredicto: {
      titulo: 'La respuesta corta',
      texto:
        'Mood Media trabaja por cotización de proyecto y no publica precios ni el desglose de licencias por país, así que no puedes evaluarla sin hablar con un vendedor. Muusica.com publica todo: $175 MXN al mes por sucursal, licencia de comunicación pública incluida y alta en minutos.',
      puntos: [
        'Sin precio público: la comparación exige pasar por un proceso comercial.',
        'Su propuesta incluye hardware, instalación y servicios que un local pequeño no necesita.',
        'Está pensada para cadenas grandes y contratos a plazo.',
      ],
    },
    problemas: [
      {
        icon: 'file-question',
        title: 'Sin precio ni desglose público',
        text: 'No hay tabla de tarifas ni detalle publicado de qué derechos cubre en México. Todo pasa por una cotización, y eso hace difícil comparar antes de comprometerte.',
      },
      {
        icon: 'hard-hat',
        title: 'Proyecto, no suscripción',
        text: 'Su modelo suele incluir equipo, instalación y servicios administrados con contrato a plazo. Para un solo local eso es un proceso largo comparado con abrir un navegador.',
      },
      {
        icon: 'building',
        title: 'Diseñado para cadenas grandes',
        text: 'Su cliente natural es la marca con cientos de puntos de venta. Un restaurante independiente rara vez es el perfil para el que están construidos sus procesos.',
      },
    ],
    comparativa: [
      {
        criterio: 'Precio publicado',
        ellos: { estado: 'no', texto: 'Sin precio público; cotización por proyecto' },
        nosotros: { estado: 'si', texto: `${muusica.precio} al mes por sucursal, publicado` },
      },
      {
        criterio: 'Desglose público de licencias por país',
        ellos: { estado: 'no', texto: 'No publicado' },
        nosotros: { estado: 'si', texto: 'Licencia propia incluida; no se requiere SACM ni SOMEXFON' },
      },
      {
        criterio: 'Tiempo hasta tener música sonando',
        ellos: { estado: 'info', texto: 'Proceso comercial e instalación' },
        nosotros: { estado: 'si', texto: 'Minutos, desde cualquier navegador' },
      },
      {
        criterio: 'Compromiso de permanencia',
        ellos: { estado: 'info', texto: 'Contratos a plazo, según proyecto' },
        nosotros: { estado: 'si', texto: 'Mensual, cancelable cuando quieras' },
      },
      {
        criterio: 'Servicios integrales (video, aroma, sistemas AV)',
        ellos: { estado: 'si', texto: 'Su oferta completa' },
        nosotros: { estado: 'no', texto: 'Solo música' },
      },
    ],
    ganancias: [
      'Precio publicado, sin cotización ni negociación',
      'Sin contrato de permanencia: cancelas cuando quieras',
      'Licencia de comunicación pública incluida y certificado descargable',
      'Sin hardware ni instalación: funciona en el equipo que ya tienes',
      '7 días de prueba sin tarjeta',
    ],
    honesto: {
      titulo: 'En qué gana Mood Media',
      texto:
        'Si necesitas resolver audio, video, señalización digital y sonorización de un centenar de sucursales con un proveedor único y un equipo que te instale todo, Mood Media hace algo que nosotros no hacemos ni pretendemos hacer. Muusica.com es la opción cuando lo que necesitas es música legal en el local, hoy y sin proyecto.',
    },
    faq: [
      {
        q: '¿Cuánto cuesta Mood Media en México?',
        a: 'No publica precios: trabaja por cotización según el proyecto, el número de ubicaciones y los servicios contratados.',
      },
      {
        q: '¿Mood Media incluye las licencias de SACM y SOMEXFON?',
        a: 'No publica el desglose por país. Si lo estás evaluando, conviene pedir por escrito qué derechos cubre su servicio en México y qué pagos adicionales podrían aplicar.',
      },
      {
        q: '¿Muusica.com sirve para una cadena?',
        a: 'Sí, con una suscripción por locación. Para varias sedes escríbenos a hola@muusica.com y armamos un plan de múltiples ubicaciones.',
      },
    ],
    fuentes: [
      { nombre: 'Mood Media — Sitio oficial', url: 'https://moodmedia.com/' },
    ],
    posts: [
      'cuanto-cuesta-musica-legal-mexico',
      'hilo-musical-alternativas-modernas',
      'derechos-de-autor-musica-negocios-mexico',
      'que-es-musica-libre-de-regalias',
    ],
  },
];

// Pasos de migración: son los mismos para todas las páginas, así que viven aquí
// y no repetidos en cada entrada.
export const migrar = [
  {
    titulo: 'Abre el reproductor en el equipo del local',
    texto:
      'Entra a play.muusica.com desde el navegador de la tablet, laptop o computadora de punto de venta que ya usas. No hay que instalar nada.',
  },
  {
    titulo: 'Elige el ambiente de la franja actual',
    texto:
      'Selecciona una playlist por giro o usa Mood Mode: arrastras un punto entre ocho estados de ánimo y el reproductor arma la mezcla en cola continua.',
  },
  {
    titulo: 'Descarga tu certificado y déjalo a la mano',
    texto:
      'Desde tu cuenta bajas el certificado de licencia comercial, validable por QR. Guárdalo en el celular del encargado por si llega una inspección.',
  },
];
