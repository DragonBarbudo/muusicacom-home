// Contenido de las páginas /negocios/[slug].
// Cada giro trae: por qué importa la música, guía de jornada hora por hora,
// volumen por zona, ejemplos reales del catálogo de Muusica.com, errores
// comunes, checklist accionable, FAQ (se emite como FAQPage JSON-LD) y
// artículos del blog relacionados.
//
// Los títulos en `tracks` y `sample` son canciones reales del catálogo.
// Las muestras del reproductor son la primera canción de cada franja de `jornada`,
// recortada a public/audio/negocios/<slug>-<n>.mp3 (20 s, 96 kbps). Ver BusinessPlayer.astro.

export const negocios = [
  {
    slug: "restaurantes",
    title: "Restaurantes",
    singular: "restaurante",
    icon: "utensils",
    color: "#8B5CF6",
    description: "Crea el ambiente perfecto para cada momento del día",
    longDescription:
      "La música es el ingrediente secreto de un gran restaurante. Desde un brunch relajado hasta una cena sofisticada, Muusica.com te ayuda a crear la atmósfera ideal para que tus clientes disfruten cada bocado.",
    seoTitle: "Música para restaurantes",
    seoDescription:
      "Qué poner hora por hora en tu restaurante: tempo, volumen en dB y errores comunes. Licencia comercial incluida, sin SACM ni SOMEXFON.",
    benefits: [
      "Control de ambiente por horarios",
      "Música que invita a la sobremesa",
      "Sin interrupciones ni anuncios",
      "Licencia comercial incluida",
    ],
    porQue: [
      {
        icon: "timer",
        title: "El tempo decide cuánto se quedan",
        text: "Música lenta alarga la comida y sube el consumo en bebidas y postre; música rápida rota mesas. En un restaurante, elegir el tempo es elegir tu modelo de negocio en esa franja horaria.",
      },
      {
        icon: "volume-2",
        title: "Protege la conversación",
        text: "Comer es un acto social. Si la música obliga a levantar la voz, la mesa se cansa antes y pide la cuenta. El objetivo no es que se escuche: es que se note su ausencia si la apagas.",
      },
      {
        icon: "gem",
        title: "Sostiene tu ticket promedio",
        text: "El ambiente sonoro es parte de lo que el cliente cree que está pagando. Un repertorio cuidado hace que un plato de $380 se sienta coherente con el lugar; una playlist de radio lo abarata.",
      },
      {
        icon: "repeat",
        title: "Evita la fatiga del equipo",
        text: "Tus meseros escuchan la música ocho horas al día. Una lista corta en bucle desgasta al personal antes que al cliente. La rotación continua mantiene el servicio fresco.",
      },
    ],
    estudio: {
      texto:
        "En un estudio clásico de comportamiento del consumidor, Ronald Milliman midió el efecto del tempo musical en restaurantes: con música lenta los clientes permanecían más tiempo en la mesa y el gasto en bebidas aumentaba respecto de las noches con música rápida.",
      fuente: "Milliman, R. (1986), Journal of Consumer Research",
    },
    jornada: [
      {
        franja: "Apertura y desayuno",
        horario: "8:00 – 11:00",
        objetivo: "Despertar el local sin invadir",
        mezcla: "70% Cálido · 30% Alegre",
        bpm: "70–90 BPM",
        volumen: "55–60 dB",
        tracks: ["Charming Morning", "Morning in Rio"],
      },
      {
        franja: "Comida / hora pico",
        horario: "13:00 – 16:00",
        objetivo: "Ritmo alto, rotación de mesas",
        mezcla: "55% Alegre · 45% Enérgico",
        bpm: "95–115 BPM",
        volumen: "60–65 dB",
        tracks: ["Brisa Tropical", "Montuno del Barrio"],
      },
      {
        franja: "Sobremesa y tarde",
        horario: "16:00 – 19:00",
        objetivo: "Que la mesa se quede una ronda más",
        mezcla: "60% Cálido · 40% Soñador",
        bpm: "70–85 BPM",
        volumen: "52–58 dB",
        tracks: ["La Sobremesa Infinita", "Acoustic Remake"],
      },
      {
        franja: "Cena",
        horario: "19:00 – 23:00",
        objetivo: "Elevar la percepción de valor",
        mezcla: "65% Sofisticado · 35% Romántico",
        bpm: "60–85 BPM",
        volumen: "55–62 dB",
        tracks: ["Gentle Chanson", "Fino all'Alba"],
      },
    ],
    volumen: [
      { zona: "Comedor principal", nivel: "55–62 dB", nota: "Se debe poder conversar sin subir la voz a un metro de distancia." },
      { zona: "Barra", nivel: "62–68 dB", nota: "Puede ir 5 dB por encima del comedor: define la zona como más social." },
      { zona: "Terraza", nivel: "60–68 dB", nota: "El ruido de calle se come los graves; sube ligero y usa material con más cuerpo medio." },
    ],
    tracks: [
      { title: "Charming Morning", mood: "Cálido", momento: "Desayuno" },
      { title: "Morning in Rio", mood: "Alegre", momento: "Brunch" },
      { title: "Brisa Tropical", mood: "Alegre", momento: "Comida" },
      { title: "Montuno del Barrio", mood: "Enérgico", momento: "Hora pico" },
      { title: "Acoustic Remake", mood: "Cálido", momento: "Tarde" },
      { title: "La Sobremesa Infinita", mood: "Cálido", momento: "Sobremesa" },
      { title: "Gentle Chanson", mood: "Sofisticado", momento: "Cena" },
      { title: "Fino all'Alba", mood: "Romántico", momento: "Cena" },
      { title: "Silencio Afinado", mood: "Sofisticado", momento: "Cena tardía" },
      { title: "Quietud del Mar", mood: "Relajado", momento: "Cierre" },
    ],
    sample: {
      nota: "Cuatro muestras en el orden real del día: del desayuno cálido a la cena sofisticada. Escúchalas seguidas para oír cómo debería evolucionar tu salón.",
    },
    errores: [
      {
        error: "Poner la misma playlist todo el día",
        fix: "Divide tu jornada en 3 o 4 franjas. Es el cambio de mayor impacto y el más barato: no cuesta nada más que programarlo una vez.",
      },
      {
        error: "Música con letras conocidas en la cena",
        fix: "Las letras en el idioma del cliente compiten con la conversación. Reserva lo vocal para desayuno y comida; en cena usa instrumental o voces en otro idioma.",
      },
      {
        error: "Un solo par de bocinas al fondo del salón",
        fix: "Varias bocinas a bajo volumen suenan mejor que dos a volumen alto. Las mesas cercanas al equipo no deberían tener que hablar más fuerte que el resto.",
      },
      {
        error: "Usar Spotify, YouTube o la radio",
        fix: "Son licencias de uso doméstico y traen anuncios. Además no te cubren frente a SACM ni SOMEXFON: el riesgo legal es del negocio, no de quien puso la música.",
      },
    ],
    checklist: [
      "Camina tu salón a la hora pico y comprueba que puedes conversar a volumen normal en cada mesa.",
      "Define las franjas horarias de tu jornada y asigna un ambiente a cada una.",
      "Baja el volumen 3–5 dB cuando el local está vacío: el eco engaña al oído.",
      "Pregunta a dos meseros qué canción ya no soportan. Si tienen respuesta, tu rotación es corta.",
      "Ten a la mano tu certificado de licencia comercial por si te visita un inspector.",
    ],
    faq: [
      {
        q: "¿Qué volumen debe tener la música en un restaurante?",
        a: "Entre 55 y 62 dB en el comedor, y hasta 68 dB en barra o terraza. La regla práctica: dos personas en la misma mesa deben poder conversar sin levantar la voz.",
      },
      {
        q: "¿Qué género musical es mejor para un restaurante?",
        a: "Depende de la franja horaria más que del concepto: cálido y acústico en la mañana, latino o alegre en la comida, jazz o instrumental sofisticado en la cena. Lo importante es que el tempo acompañe el ritmo de servicio que buscas.",
      },
      {
        q: "¿Puedo usar Spotify en mi restaurante?",
        a: "No se recomienda. Spotify, Apple Music y YouTube Music licencian uso personal y doméstico. Usarlos en un local abierto al público puede considerarse ejecución pública sin autorización, con riesgo de sanción.",
      },
      {
        q: "¿La música rápida hace que los clientes se vayan antes?",
        a: "Sí, es el efecto más documentado en investigación de retail y restaurantes: a mayor tempo, mayor rotación de mesas; a menor tempo, estancias más largas y más consumo de bebidas.",
      },
      {
        q: "¿Necesito pagar a SACM o SOMEXFON si uso Muusica.com?",
        a: "No. El catálogo de Muusica.com está licenciado para uso comercial y no está en el repertorio de esas sociedades de gestión, así que no generas regalías adicionales por reproducirlo en tu restaurante.",
      },
    ],
    // Se muestran los 3 primeros ya publicados; los programados entran solos al publicarse
    posts: [
      "mejores-generos-para-restaurantes",
      "volumen-ideal-musica-negocio",
      "musica-en-horas-pico-ventas",
      "psicologia-del-ritmo-comercial",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "derechos-de-autor-musica-negocios-mexico",
    ],
  },

  {
    slug: "cafeterias",
    title: "Cafeterías",
    singular: "cafetería",
    icon: "coffee",
    color: "#14B8A6",
    description: "Ambiente acogedor que invita a quedarse",
    longDescription:
      "Convierte tu cafetería en el refugio perfecto. Nuestras playlists acústicas y chill están diseñadas para acompañar conversaciones y sesiones de trabajo, creando un espacio donde todos quieran volver.",
    seoTitle: "Música para cafeterías",
    seoDescription:
      "Qué poner en tu cafetería hora por hora, volumen ideal y cómo tratar al cliente con laptop. Ejemplos del catálogo y licencia incluida.",
    benefits: [
      "Ritmos acústicos relajantes",
      "Ideal para coworking y estudio",
      "Volumen moderado optimizado",
      "Aumento en el tiempo de permanencia",
    ],
    porQue: [
      {
        icon: "armchair",
        title: "La permanencia es tu producto",
        text: "Nadie paga $75 por un café: paga por sentarse. La música es la mitad del ambiente por el que paga, y la única parte que puedes cambiar sin remodelar el local.",
      },
      {
        icon: "laptop",
        title: "Convive con quien viene a trabajar",
        text: "El cliente con laptop se queda horas y consume varias veces. Necesita música sin letra dominante y sin cambios bruscos de energía: presencia constante, cero protagonismo.",
      },
      {
        icon: "waves",
        title: "Tapa el ruido incómodo",
        text: "Molinos, vaporizador y licuadora generan picos. Sin música de fondo esos picos destacan y el silencio entre ellos vuelve la conversación audible para todos. La música cose los huecos.",
      },
      {
        icon: "heart",
        title: "Construye el hábito de volver",
        text: "La cafetería vive de clientes recurrentes. Un ambiente sonoro reconocible —tu identidad sonora— es lo que hace que alguien elija tu local y no el de enfrente a igual precio.",
      },
    ],
    estudio: {
      texto:
        "La investigación sobre el efecto de la palabra irrelevante muestra que el habla inteligible interfiere con tareas de lectura y escritura más que la música instrumental al mismo volumen. Por eso una cafetería con clientes trabajando funciona mejor con repertorio instrumental o con voz tratada como textura.",
      fuente: "Efecto de la palabra irrelevante (irrelevant speech effect), psicología cognitiva",
    },
    jornada: [
      {
        franja: "Apertura",
        horario: "7:00 – 9:00",
        objetivo: "Energía amable para el café de camino",
        mezcla: "70% Alegre · 30% Cálido",
        bpm: "85–100 BPM",
        volumen: "52–58 dB",
        tracks: ["La Sesión de las 7am", "Morning Love"],
      },
      {
        franja: "Media mañana",
        horario: "9:00 – 13:00",
        objetivo: "Foco: laptops y juntas de trabajo",
        mezcla: "80% Concentración · 20% Relajado",
        bpm: "70–90 BPM",
        volumen: "48–55 dB",
        tracks: ["Vinilo y Cafe", "Interior Tranquilo"],
      },
      {
        franja: "Tarde",
        horario: "13:00 – 18:00",
        objetivo: "Conversación y segunda ronda",
        mezcla: "55% Cálido · 45% Relajado",
        bpm: "75–95 BPM",
        volumen: "55–60 dB",
        tracks: ["Pausa Perfecta (Reprise)", "Tarde de Domingo (Rio)"],
      },
      {
        franja: "Cierre",
        horario: "18:00 – 21:00",
        objetivo: "Bajar la energía sin correr a nadie",
        mezcla: "60% Soñador · 40% Romántico",
        bpm: "60–80 BPM",
        volumen: "50–56 dB",
        tracks: ["Ornamento Romántico", "Textura"],
      },
    ],
    volumen: [
      { zona: "Salón / mesas", nivel: "48–58 dB", nota: "Por debajo del ruido de una conversación normal. Si un cliente con audífonos sube el volumen, tú estás muy alto." },
      { zona: "Barra y fila", nivel: "58–63 dB", nota: "Algo más alta: cubre el ruido del molino y hace la espera más corta en percepción." },
      { zona: "Terraza", nivel: "58–65 dB", nota: "Compite con la calle. Usa bocinas dedicadas, no las mismas del salón a más volumen." },
    ],
    tracks: [
      { title: "La Sesión de las 7am", mood: "Alegre", momento: "Apertura" },
      { title: "Morning Love", mood: "Cálido", momento: "Mañana" },
      { title: "Café Noisette", mood: "Alegre", momento: "Mañana" },
      { title: "Vinilo y Cafe", mood: "Concentración", momento: "Media mañana" },
      { title: "Interior Tranquilo", mood: "Relajado", momento: "Laptops" },
      { title: "El Ruido de Fondo", mood: "Concentración", momento: "Mediodía" },
      { title: "Pausa Perfecta (Reprise)", mood: "Relajado", momento: "Tarde" },
      { title: "Tarde de Domingo (Rio)", mood: "Cálido", momento: "Fin de semana" },
      { title: "Textura", mood: "Concentración", momento: "Tarde" },
      { title: "Ornamento Romántico", mood: "Romántico", momento: "Cierre" },
    ],
    sample: {
      nota: "Las cuatro franjas seguidas: apertura con energía amable, instrumental para las laptops, acústico de tarde y un cierre que baja el pulso.",
    },
    errores: [
      {
        error: "Lo-fi en bucle desde la mañana hasta el cierre",
        fix: "Funciona para foco, pero aplana el día completo. Reserva el lo-fi para la franja de trabajo y sube la energía en apertura y tarde.",
      },
      {
        error: "Bocinas Bluetooth del celular del turno",
        fix: "Cada barista pone su música y el ambiente cambia según quién trabaje. Deja el reproductor en un dispositivo fijo del local y define quién puede cambiarlo.",
      },
      {
        error: "Cortes y silencios entre canciones",
        fix: "Un silencio de dos segundos hace que todo el salón escuche la conversación de al lado. Usa reproducción continua sin huecos ni anuncios.",
      },
      {
        error: "Volumen alto para 'dar ambiente' con el local vacío",
        fix: "Con pocas personas la música rebota y suena más fuerte. Baja 3–5 dB fuera de hora pico y súbelo cuando el local se llene de gente y de ropa que absorbe sonido.",
      },
    ],
    checklist: [
      "Siéntate 10 minutos en la mesa más cercana a las bocinas: si te incomoda, incomoda a tus clientes.",
      "Separa la franja de trabajo (instrumental) de la franja social (con voz).",
      "Prueba tu cafetería con las bocinas apagadas un minuto en hora pico: eso es lo que la música está tapando.",
      "Define un ambiente distinto para fin de semana, cuando el perfil de cliente cambia.",
      "Guarda tu certificado de licencia comercial accesible desde el celular del encargado.",
    ],
    faq: [
      {
        q: "¿Qué música es mejor para una cafetería con clientes que trabajan?",
        a: "Instrumental de tempo medio-bajo: jazz suave, acústico, lo-fi o ambient. El habla inteligible interfiere con tareas de lectura y escritura, así que la voz al frente conviene dejarla para las franjas sociales.",
      },
      {
        q: "¿Qué volumen debe tener la música en una cafetería?",
        a: "Entre 48 y 58 dB en el área de mesas y hasta 63 dB en barra. Debe percibirse como fondo, no como show.",
      },
      {
        q: "¿La música hace que los clientes se queden más tiempo?",
        a: "El tempo bajo se asocia a estancias más largas y a más consumo por visita. En una cafetería eso suele ser deseable: el segundo café es margen casi puro.",
      },
      {
        q: "¿Puedo usar Spotify en mi cafetería?",
        a: "No se recomienda: su licencia es de uso personal y doméstico. En un local abierto al público es ejecución pública, con riesgo de reclamación de sociedades de gestión.",
      },
      {
        q: "¿Cuánto cuesta poner música legal en una cafetería?",
        a: "Con Muusica.com pagas una suscripción por sucursal con licencia comercial incluida, sin pagos aparte a SACM ni SOMEXFON. Puedes probar 7 días gratis sin tarjeta.",
      },
    ],
    posts: [
      "musica-para-cafeterias-guia-completa",
      "volumen-ideal-musica-negocio",
      "identidad-sonora-audio-branding",
      "cafe-roma-aumento-tiempo-permanencia",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "que-es-musica-libre-de-regalias",
    ],
  },

  {
    slug: "gimnasios",
    title: "Gimnasios",
    singular: "gimnasio",
    icon: "dumbbell",
    color: "#3B82F6",
    description: "Energía y motivación para entrenar",
    longDescription:
      "La música es el motor del entrenamiento. Con Muusica.com, mantén a tus usuarios motivados con ritmos de alta energía, BPMs constantes y las últimas tendencias en música fitness.",
    seoTitle: "Música para gimnasios",
    seoDescription:
      "Qué BPM usar en cardio, pesas y clases, a qué volumen y cómo la música baja el esfuerzo percibido. Licencia comercial incluida.",
    benefits: [
      "Alta energía constante (BPM)",
      "Mixes sin pausas para entrenar",
      "Géneros: Electrónica, Rock, Pop Urbano",
      "Reduce la fatiga percibida",
    ],
    porQue: [
      {
        icon: "activity",
        title: "Reduce el esfuerzo percibido",
        text: "Es el efecto mejor documentado de la música en el deporte: a intensidad moderada, entrenar con música hace que el esfuerzo se sienta menor. Traducción de negocio: series más largas y sesiones que no se abandonan a la mitad.",
      },
      {
        icon: "gauge",
        title: "El BPM marca el ritmo del cuerpo",
        text: "El pulso de la música arrastra la cadencia del movimiento. 130–140 BPM sostienen una clase de cardio; 90–110 acompañan mejor una serie de fuerza con descansos.",
      },
      {
        icon: "users",
        title: "Llena los huecos sociales",
        text: "Un gimnasio en silencio expone cada gruñido, cada barra que cae y cada conversación. La música da privacidad y baja la barrera de entrada del socio nuevo, que es justo el que más se da de baja.",
      },
      {
        icon: "calendar-check",
        title: "Retención, no solo ambiente",
        text: "La experiencia de entrenar es lo que se renueva cada mes. Un ambiente que se siente igual todos los días es el primer síntoma de un gimnasio que aburre.",
      },
    ],
    estudio: {
      texto:
        "Las revisiones de Costas Karageorghis sobre música y ejercicio concluyen que escuchar música durante actividad de intensidad baja a moderada reduce de forma consistente el esfuerzo percibido y mejora el estado de ánimo durante y después del entrenamiento.",
      fuente: "Karageorghis & Priest, International Review of Sport and Exercise Psychology",
    },
    jornada: [
      {
        franja: "Turno matutino",
        horario: "5:30 – 9:00",
        objetivo: "Arrancar sin agredir al que apenas despierta",
        mezcla: "60% Enérgico · 40% Alegre",
        bpm: "110–125 BPM",
        volumen: "65–70 dB",
        tracks: ["Morning Vibes", "Buenos Dias Caribe"],
      },
      {
        franja: "Horas valle",
        horario: "9:00 – 17:00",
        objetivo: "Constancia para entrenamiento individual",
        mezcla: "70% Enérgico · 30% Concentración",
        bpm: "115–130 BPM",
        volumen: "63–68 dB",
        tracks: ["Push It", "One More Rep"],
      },
      {
        franja: "Hora pico",
        horario: "18:00 – 21:00",
        objetivo: "Máxima energía, sala llena",
        mezcla: "85% Enérgico · 15% Alegre",
        bpm: "128–140 BPM",
        volumen: "68–75 dB",
        tracks: ["Explota", "Full Throttle"],
      },
      {
        franja: "Estiramiento y cierre",
        horario: "21:00 – 22:00",
        objetivo: "Bajar pulsaciones y despedir bien",
        mezcla: "70% Relajado · 30% Soñador",
        bpm: "60–80 BPM",
        volumen: "55–60 dB",
        tracks: ["Bowl Flow", "Zen Flow II"],
      },
    ],
    volumen: [
      { zona: "Sala de pesas", nivel: "65–72 dB", nota: "Suficiente para dar impulso sin que el socio tenga que gritar a su compañero de serie." },
      { zona: "Salón de clases", nivel: "70–78 dB", nota: "El instructor debe poder indicar por encima de la música. Si necesita micrófono y aun así no se le oye, está muy alto." },
      { zona: "Recepción y vestidores", nivel: "55–62 dB", nota: "Zona de transición: baja la energía para que el socio pueda hablar y pagar sin esfuerzo." },
    ],
    tracks: [
      { title: "Morning Vibes", mood: "Enérgico", momento: "Apertura" },
      { title: "Buenos Dias Caribe", mood: "Alegre", momento: "Calentamiento" },
      { title: "Pedalea Fuerte", mood: "Enérgico", momento: "Cardio" },
      { title: "Push It", mood: "Enérgico", momento: "Pesas" },
      { title: "One More Rep", mood: "Enérgico", momento: "Series" },
      { title: "Explota", mood: "Enérgico", momento: "Hora pico" },
      { title: "Guaracha Veloz", mood: "Enérgico", momento: "Clases de baile" },
      { title: "Baile Bravo", mood: "Enérgico", momento: "Clases de baile" },
      { title: "Full Throttle", mood: "Enérgico", momento: "HIIT" },
      { title: "Bowl Flow", mood: "Relajado", momento: "Estiramiento" },
    ],
    sample: {
      nota: "El día completo en cuatro muestras: turno matutino, horas valle, el pico de las 7 y la pista de estiramiento del cierre.",
    },
    errores: [
      {
        error: "Subir el volumen en lugar de subir la energía",
        fix: "Si la sala se siente apagada, cambia el repertorio a más BPM antes de tocar la perilla. El volumen alto cansa; el tempo alto motiva.",
      },
      {
        error: "Mismo ambiente en pesas, cardio y clases",
        fix: "Son tres necesidades distintas. Si tu instalación lo permite, usa zonas de audio separadas; si no, alterna por franja horaria según qué zona esté más llena.",
      },
      {
        error: "Baladas o música lenta en hora pico",
        fix: "Una pista lenta en medio de la hora más llena rompe la inercia de toda la sala. La rotación continua por ambiente evita ese bache.",
      },
      {
        error: "Confiar en la playlist personal del instructor",
        fix: "La música de una cuenta personal no tiene licencia comercial y desaparece cuando ese instructor se va. El riesgo legal y la continuidad son del gimnasio.",
      },
    ],
    checklist: [
      "Mide el volumen en el punto más cercano a las bocinas de la sala de pesas.",
      "Comprueba que el instructor puede dar indicaciones sin forzar la voz.",
      "Define una franja de cierre con música tranquila para estiramiento.",
      "Rota el repertorio cada semana: tus socios vienen 4 veces por semana, todo el año.",
      "Ten a la vista tu certificado de licencia comercial en recepción.",
    ],
    faq: [
      {
        q: "¿Qué BPM debe tener la música de un gimnasio?",
        a: "115–130 BPM para entrenamiento general, 128–140 BPM para clases de cardio o HIIT, y 60–80 BPM para estiramiento y enfriamiento. En fuerza con descansos largos funciona bien 90–115 BPM.",
      },
      {
        q: "¿A qué volumen debe estar la música en un gimnasio?",
        a: "Entre 65 y 72 dB en sala de pesas y hasta 78 dB en salón de clases. En recepción y vestidores, bájala a 55–62 dB para que se pueda conversar.",
      },
      {
        q: "¿La música realmente mejora el rendimiento en el ejercicio?",
        a: "La evidencia más sólida es sobre el esfuerzo percibido: a intensidad baja y moderada, entrenar con música hace que el ejercicio se sienta menos duro y mejora el estado de ánimo. El efecto sobre el rendimiento máximo es menor.",
      },
      {
        q: "¿Puedo usar Spotify o YouTube en mi gimnasio?",
        a: "No se recomienda. Esas cuentas licencian uso personal y doméstico; en un gimnasio abierto al público es ejecución pública sin autorización, con riesgo de sanción y con anuncios que interrumpen la clase.",
      },
      {
        q: "¿Necesito una suscripción por cada sucursal?",
        a: "Sí, la licencia de Muusica.com es por locación. Si tienes varias sedes, contáctanos para un plan de múltiples ubicaciones.",
      },
    ],
    posts: [
      "como-elegir-musica-para-gimnasio",
      "gimnasio-fuerza-norte-caso-exito",
      "psicologia-del-ritmo-comercial",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "multas-por-uso-ilegal-de-musica",
      "que-es-musica-libre-de-regalias",
    ],
  },

  {
    slug: "tiendas",
    title: "Tiendas",
    singular: "tienda",
    icon: "shopping-bag",
    color: "#F59E0B",
    description: "Música que acompaña la experiencia de compra",
    longDescription:
      "El audio branding es clave en el retail. Crea una experiencia de compra memorable que refleje la identidad de tu marca y anime a tus clientes a explorar tu tienda por más tiempo.",
    seoTitle: "Música para tiendas",
    seoDescription:
      "Tempo, volumen y repertorio para retail: cómo el sonido cambia el recorrido y la percepción de precio. Licencia comercial incluida.",
    benefits: [
      "Identidad de marca sonora",
      "Ritmo que guía el flujo de clientes",
      "Ambientación moderna y trendy",
      "Mejora la percepción de valor",
    ],
    porQue: [
      {
        icon: "footprints",
        title: "El tempo controla el recorrido",
        text: "Con música lenta la gente camina más despacio y ve más producto; con música rápida se acelera el paso hacia caja. Es tu control de flujo para hora pico y para horas valle.",
      },
      {
        icon: "tag",
        title: "Cambia la percepción de precio",
        text: "El repertorio comunica en qué tipo de tienda está el cliente antes de que vea una etiqueta. Un ambiente sofisticado sostiene precios altos; uno genérico los hace parecer caros.",
      },
      {
        icon: "shield",
        title: "Rompe la incomodidad del silencio",
        text: "En una tienda callada el cliente siente que el personal lo observa y sale antes. La música le da permiso de mirar sin compromiso, que es la condición de toda compra no planeada.",
      },
      {
        icon: "sparkle",
        title: "Es tu firma de marca",
        text: "El sonido es lo único de tu tienda que el cliente se lleva puesto a la calle. Un ambiente reconocible es la parte más barata de una identidad de marca y la que casi nadie trabaja.",
      },
    ],
    estudio: {
      texto:
        "En un experimento clásico de campo, Areni y Kim encontraron que en una tienda de vinos con música clásica los clientes compraban producto más caro que con música pop, sin que cambiara el número de artículos comprados: la música movió la percepción de valor, no el volumen de venta.",
      fuente: "Areni & Kim (1993), Advances in Consumer Research",
    },
    jornada: [
      {
        franja: "Apertura",
        horario: "10:00 – 12:00",
        objetivo: "Invitar a entrar, tienda aún vacía",
        mezcla: "65% Alegre · 35% Cálido",
        bpm: "85–105 BPM",
        volumen: "55–60 dB",
        tracks: ["Despertar Alegre", "El Cuaderno del Desayuno"],
      },
      {
        franja: "Horas valle",
        horario: "12:00 – 17:00",
        objetivo: "Recorrido lento, más producto visto",
        mezcla: "60% Relajado · 40% Soñador",
        bpm: "70–90 BPM",
        volumen: "52–58 dB",
        tracks: ["Corriente Tranquila", "Nowhere to Be"],
      },
      {
        franja: "Hora pico",
        horario: "17:00 – 20:00",
        objetivo: "Mover el flujo, evitar cuellos en caja",
        mezcla: "70% Enérgico · 30% Alegre",
        bpm: "105–120 BPM",
        volumen: "58–64 dB",
        tracks: ["Acid Beat", "Movimiento Natural"],
      },
      {
        franja: "Cierre",
        horario: "20:00 – 22:00",
        objetivo: "Ambiente de marca, últimas compras",
        mezcla: "60% Sofisticado · 40% Soñador",
        bpm: "80–100 BPM",
        volumen: "55–60 dB",
        tracks: ["Late Night Chemistry", "Nightcrawler"],
      },
    ],
    volumen: [
      { zona: "Piso de venta", nivel: "55–62 dB", nota: "Perceptible pero por debajo de la voz del vendedor a dos metros." },
      { zona: "Probadores", nivel: "50–56 dB", nota: "Momento de decisión y de vulnerabilidad. Más suave y sin picos de energía." },
      { zona: "Caja", nivel: "52–58 dB", nota: "El cliente da datos y escucha totales. Que no tenga que repetir nada." },
    ],
    tracks: [
      { title: "Despertar Alegre", mood: "Alegre", momento: "Apertura" },
      { title: "Cumbia del Desayuno", mood: "Alegre", momento: "Mañana" },
      { title: "El Cuaderno del Desayuno", mood: "Cálido", momento: "Mañana" },
      { title: "Corriente Tranquila", mood: "Relajado", momento: "Horas valle" },
      { title: "Nowhere to Be", mood: "Soñador", momento: "Horas valle" },
      { title: "Tono Neutro", mood: "Neutro", momento: "Probadores" },
      { title: "Movimiento Natural", mood: "Alegre", momento: "Flujo" },
      { title: "Acid Beat", mood: "Enérgico", momento: "Hora pico" },
      { title: "Nightcrawler", mood: "Enérgico", momento: "Tarde-noche" },
      { title: "Late Night Chemistry", mood: "Sofisticado", momento: "Cierre" },
    ],
    sample: {
      nota: "Cuatro muestras que recorren el día del piso de venta: apertura, horas valle con recorrido lento, hora pico y cierre de marca.",
    },
    errores: [
      {
        error: "Poner los éxitos del momento",
        fix: "La música muy conocida secuestra la atención: el cliente escucha la canción en lugar de mirar el producto. Busca repertorio con carácter pero sin protagonismo.",
      },
      {
        error: "Volumen alto para 'dar energía'",
        fix: "El cliente que no puede preguntar un precio sin gritar no pregunta: se va. La energía se sube con tempo, no con decibeles.",
      },
      {
        error: "Ignorar el ambiente en probadores",
        fix: "Es donde se decide la venta. Un ambiente más suave y sin cortes reduce la prisa por salir.",
      },
      {
        error: "El mismo ambiente en enero que en diciembre",
        fix: "El perfil de cliente y el tráfico cambian por temporada. Ajusta la energía a la ocupación real de tu piso de venta.",
      },
    ],
    checklist: [
      "Recorre tu tienda como cliente: ¿te dan ganas de quedarte o de salir?",
      "Comprueba que se puede preguntar un precio sin levantar la voz.",
      "Define ambientes distintos para horas valle y hora pico.",
      "Revisa el sonido dentro de los probadores, no solo en el piso.",
      "Ten disponible tu certificado de licencia comercial.",
    ],
    faq: [
      {
        q: "¿La música influye en cuánto compra la gente en una tienda?",
        a: "Sí. La investigación de retail muestra dos efectos consistentes: el tempo modifica la velocidad de recorrido y el tiempo en tienda, y el estilo musical modifica la percepción de valor del producto.",
      },
      {
        q: "¿Qué volumen debe tener la música en una tienda?",
        a: "Entre 55 y 62 dB en piso de venta, y más suave en probadores y caja. El vendedor debe poder atender sin levantar la voz.",
      },
      {
        q: "¿Música rápida o lenta para una tienda?",
        a: "Lenta cuando quieres que el cliente recorra y explore (horas valle); rápida cuando necesitas mover el flujo y evitar cuellos de botella en caja (hora pico).",
      },
      {
        q: "¿Puedo poner la radio en mi tienda?",
        a: "La radio comercial trae anuncios de otras marcas dentro de tu local y su uso en establecimientos puede requerir licencias adicionales. Un servicio con licencia comercial evita ambos problemas.",
      },
      {
        q: "¿Qué es el audio branding?",
        a: "Es el uso consistente de un estilo sonoro propio para que tu marca sea reconocible por el oído, igual que lo es por su logo o sus colores.",
      },
    ],
    posts: [
      "musica-para-tiendas-de-ropa",
      "como-la-musica-influye-en-las-decisiones-de-compra",
      "identidad-sonora-audio-branding",
      "boutique-lunaria-caso-exito",
      "psicologia-del-ritmo-comercial",
      "por-que-spotify-no-sirve-para-tu-negocio",
    ],
  },

  {
    slug: "spas",
    title: "Spas",
    singular: "spa",
    icon: "sparkles",
    color: "#EC4899",
    description: "Relajación y bienestar para tus clientes",
    longDescription:
      "El bienestar comienza por el oído. Nuestras playlists para spas y centros de bienestar están cuidadosamente seleccionadas para reducir el estrés y facilitar la relajación profunda.",
    seoTitle: "Música para spas",
    seoDescription:
      "Cómo diseñar el ambiente sonoro de un spa por zona: recepción, cabinas y vestidores. Volumen recomendado y licencia incluida.",
    benefits: [
      "Sonidos zen y relajantes",
      "Frecuencias que reducen el estrés",
      "Ambientación inmersiva",
      "Ideal para masajes y tratamientos",
    ],
    porQue: [
      {
        icon: "heart-pulse",
        title: "La música reduce la ansiedad",
        text: "Es uno de los efectos mejor estudiados en entornos clínicos: escuchar música tranquila antes y durante procedimientos reduce la ansiedad reportada. Tu cliente llega tenso; el ambiente empieza a trabajar antes que tus manos.",
      },
      {
        icon: "ear-off",
        title: "Enmascara lo que rompe el momento",
        text: "Puertas, recepción, la calle, la cabina de al lado. En un spa el ruido no solo molesta: cancela el servicio que vendiste. Una capa sonora continua lo vuelve inaudible.",
      },
      {
        icon: "hourglass",
        title: "Estira el tiempo percibido",
        text: "Un tratamiento de 50 minutos con un ambiente bien construido se recuerda como más largo y más completo. Es la forma más barata de subir el valor percibido de tu carta de servicios.",
      },
      {
        icon: "wind",
        title: "Marca el ritmo del terapeuta",
        text: "El tempo de la música guía la cadencia del masaje sin que nadie lo hable. Un repertorio consistente estandariza la experiencia entre terapeutas distintos.",
      },
    ],
    estudio: {
      texto:
        "Revisiones sistemáticas sobre intervenciones musicales en entornos de salud encuentran de forma consistente reducciones en la ansiedad preoperatoria de los pacientes que escuchan música tranquila, con efectos comparables a los de otras intervenciones no farmacológicas.",
      fuente: "Revisiones Cochrane sobre música y ansiedad preoperatoria",
    },
    jornada: [
      {
        franja: "Recepción y bienvenida",
        horario: "Todo el día",
        objetivo: "Bajar pulsaciones desde la puerta",
        mezcla: "60% Relajado · 40% Cálido",
        bpm: "55–70 BPM",
        volumen: "48–54 dB",
        tracks: ["Zen Peace", "Bruma Acústica"],
      },
      {
        franja: "Cabina de masaje",
        horario: "Durante el servicio",
        objetivo: "Continuidad sin eventos sonoros",
        mezcla: "70% Relajado · 30% Soñador",
        bpm: "50–65 BPM",
        volumen: "42–50 dB",
        tracks: ["Serene Calm II", "Corriente Suave"],
      },
      {
        franja: "Faciales y tratamientos",
        horario: "Durante el servicio",
        objetivo: "Presencia mínima, cero distracción",
        mezcla: "55% Soñador · 45% Relajado",
        bpm: "50–70 BPM",
        volumen: "45–52 dB",
        tracks: ["Ambient Float II", "Tambor Lejano"],
      },
      {
        franja: "Vestidores y salida",
        horario: "Al cerrar el servicio",
        objetivo: "Regresar al mundo sin sobresalto",
        mezcla: "50% Relajado · 50% Cálido",
        bpm: "60–80 BPM",
        volumen: "48–55 dB",
        tracks: ["Bamboo Peace", "Inner Still"],
      },
    ],
    volumen: [
      { zona: "Cabinas", nivel: "42–50 dB", nota: "Apenas por encima del silencio. El cliente debe poder escuchar la voz del terapeuta en susurro." },
      { zona: "Recepción", nivel: "48–55 dB", nota: "Suficiente para que la conversación de pago no se escuche en el pasillo." },
      { zona: "Vestidores y pasillos", nivel: "45–55 dB", nota: "Capa continua que cubre puertas y lockers, que es el ruido que más rompe el ambiente." },
    ],
    tracks: [
      { title: "Zen Peace", mood: "Relajado", momento: "Recepción" },
      { title: "Serene Calm II", mood: "Relajado", momento: "Masaje" },
      { title: "Ambient Float II", mood: "Soñador", momento: "Flotación" },
      { title: "Corriente Suave", mood: "Relajado", momento: "Facial" },
      { title: "Bruma Acústica", mood: "Relajado", momento: "Sala de espera" },
      { title: "Corriente Tranquila", mood: "Relajado", momento: "Transición" },
      { title: "Zen Stillness", mood: "Relajado", momento: "Meditación" },
      { title: "Inner Still", mood: "Relajado", momento: "Cierre" },
      { title: "Bamboo Peace", mood: "Relajado", momento: "Vestidores" },
      { title: "Tambor Lejano", mood: "Soñador", momento: "Ritual" },
    ],
    sample: {
      nota: "Las cuatro capas del spa: recepción, cabina de masaje, tratamiento facial y la salida. Todas planas y sin eventos que despierten al cliente.",
    },
    errores: [
      {
        error: "Sonidos de naturaleza en bucle corto",
        fix: "El cerebro detecta el punto de repetición en pocos minutos y ya no puede dejar de oírlo. Usa material continuo y sin loop audible.",
      },
      {
        error: "Volumen tan bajo que no tapa nada",
        fix: "Si la música no enmascara el ruido del pasillo, no está cumpliendo su función principal. Súbela hasta que el ruido exterior deje de ser reconocible.",
      },
      {
        error: "Cambios de energía a mitad de tratamiento",
        fix: "Una pista con crescendo o con percusión sorprende al cliente ya relajado y deshace 20 minutos de trabajo. Mantén la energía plana durante todo el servicio.",
      },
      {
        error: "Una sola playlist para todo el spa",
        fix: "Cabinas, recepción y vestidores necesitan niveles y densidades distintas. Si compartes equipo de audio, al menos ajusta el volumen por zona.",
      },
    ],
    checklist: [
      "Acuéstate en la camilla cinco minutos con la música puesta: es la única prueba que vale.",
      "Comprueba que no se escucha la recepción ni la cabina contigua.",
      "Verifica que ninguna pista tenga crescendos ni silencios largos.",
      "Ajusta el volumen por zona: cabina, recepción y vestidores no van igual.",
      "Ten a la mano tu certificado de licencia comercial.",
    ],
    faq: [
      {
        q: "¿Qué música es mejor para un spa?",
        a: "Ambient, instrumental de cuerdas suaves, piano y texturas sin percusión marcada, entre 50 y 70 BPM. Lo esencial es la ausencia de cambios bruscos de energía.",
      },
      {
        q: "¿A qué volumen debe estar la música en una cabina de masaje?",
        a: "Entre 42 y 50 dB: apenas por encima del silencio, suficiente para enmascarar el ruido del pasillo y que el terapeuta pueda hablar en voz baja.",
      },
      {
        q: "¿La música realmente ayuda a relajar a los clientes?",
        a: "Sí. Es uno de los efectos mejor documentados: escuchar música tranquila reduce de forma consistente la ansiedad reportada en entornos clínicos y de bienestar.",
      },
      {
        q: "¿Puedo usar videos de YouTube con sonidos de spa?",
        a: "No se recomienda: además de los anuncios que rompen el tratamiento, la licencia es de uso personal y no cubre la reproducción en un establecimiento abierto al público.",
      },
      {
        q: "¿Necesito pagar regalías a SACM o SOMEXFON en mi spa?",
        a: "No si usas Muusica.com: el catálogo está licenciado para uso comercial y no genera regalías adicionales a esas sociedades.",
      },
    ],
    posts: [
      "musica-para-spas",
      "musica-para-consultorios-clinicas",
      "volumen-ideal-musica-negocio",
      "que-es-musica-libre-de-regalias",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "derechos-de-autor-musica-negocios-mexico",
    ],
  },

  {
    slug: "bares",
    title: "Bares",
    singular: "bar",
    icon: "wine",
    color: "#6366F1",
    description: "Ritmo y energía para la noche",
    longDescription:
      "La música hace la noche. Crea el ambiente justo para cada momento de tu bar, desde el after-office relajado hasta la pista llena, siempre con licencia comercial incluida.",
    seoTitle: "Música para bares",
    seoDescription:
      "Curva de energía hora por hora para bares: qué poner en after-office, pico y cierre, y a qué volumen. Licencia comercial incluida.",
    benefits: [
      "Ambiente que evoluciona con la noche",
      "Ritmos para mantener la energía",
      "Sin interrupciones ni anuncios",
      "Licencia comercial incluida",
    ],
    porQue: [
      {
        icon: "trending-up",
        title: "La noche es una curva, no una playlist",
        text: "Un bar que suena igual a las 7 que a la 1 pierde las dos puntas: espanta al after-office y aburre a quien se queda. La energía tiene que subir con la ocupación, no antes.",
      },
      {
        icon: "glass-water",
        title: "El tempo mueve el consumo",
        text: "Más BPM acelera el ritmo de la mesa y con él la frecuencia de la siguiente ronda. Menos BPM alarga la estancia. Es la palanca más directa que tienes sobre el ticket.",
      },
      {
        icon: "door-open",
        title: "Decide quién entra por la puerta",
        text: "La música que se oye desde la calle filtra a tu público antes de que cruce el umbral. Es tu portero silencioso y trabaja todas las noches.",
      },
      {
        icon: "moon",
        title: "El cierre también se diseña",
        text: "Bajar la energía en la última hora vacía el local sin prender las luces ni pedirle a nadie que se vaya. Un cierre bien musicalizado ahorra fricción a tu equipo cada noche.",
      },
    ],
    estudio: {
      texto:
        "Investigación de campo en bares ha observado que un volumen más alto se asocia a un consumo más rápido de bebida y a menos conversación por mesa. Es una palanca real, pero de doble filo: sube el ritmo y también expulsa al cliente que fue a platicar.",
      fuente: "Guéguen et al. (2008), Alcoholism: Clinical and Experimental Research",
    },
    jornada: [
      {
        franja: "Apertura / after-office",
        horario: "17:00 – 20:00",
        objetivo: "Que se pueda conversar y pedir la primera",
        mezcla: "60% Relajado · 40% Cálido",
        bpm: "80–100 BPM",
        volumen: "58–65 dB",
        tracks: ["Pleasant Calm", "Fresh Bread"],
      },
      {
        franja: "Calentamiento",
        horario: "20:00 – 22:00",
        objetivo: "Subir el pulso conforme se llena",
        mezcla: "55% Alegre · 45% Enérgico",
        bpm: "100–115 BPM",
        volumen: "65–72 dB",
        tracks: ["Orquesta de Barrio", "Jiefang de Shengyan"],
      },
      {
        franja: "Pico de la noche",
        horario: "22:00 – 1:00",
        objetivo: "Máxima energía, pista y barra llenas",
        mezcla: "80% Enérgico · 20% Alegre",
        bpm: "118–130 BPM",
        volumen: "72–80 dB",
        tracks: ["Cuatro en el Suelo", "La Noche es Nuestra"],
      },
      {
        franja: "Última hora",
        horario: "1:00 – cierre",
        objetivo: "Bajar la energía y vaciar sin fricción",
        mezcla: "60% Romántico · 40% Sofisticado",
        bpm: "70–95 BPM",
        volumen: "62–68 dB",
        tracks: ["Entre Tus Brazos Esta Noche", "Un Bacio d'Addio"],
      },
    ],
    volumen: [
      { zona: "Mesas y área de conversación", nivel: "62–70 dB", nota: "Si tus meseros tienen que pedir que repitan la orden, estás perdiendo ventas por ruido." },
      { zona: "Barra", nivel: "68–75 dB", nota: "Puede ir más alto: es zona de paso y de energía, no de conversación larga." },
      { zona: "Pista / centro del local", nivel: "75–85 dB", nota: "Cuida los límites de ruido de tu licencia municipal y la exposición de tu personal durante toda la jornada." },
    ],
    tracks: [
      { title: "Pleasant Calm", mood: "Relajado", momento: "Apertura" },
      { title: "Fresh Bread", mood: "Cálido", momento: "After-office" },
      { title: "Orquesta de Barrio", mood: "Alegre", momento: "Calentamiento" },
      { title: "Jiefang de Shengyan", mood: "Enérgico", momento: "Calentamiento" },
      { title: "Cuatro en el Suelo", mood: "Enérgico", momento: "Pico" },
      { title: "La Noche es Nuestra", mood: "Enérgico", momento: "Pico" },
      { title: "Entre Tus Brazos Esta Noche", mood: "Romántico", momento: "Madrugada" },
      { title: "Por Siempre Te Amare", mood: "Romántico", momento: "Madrugada" },
      { title: "Un Bacio d'Addio", mood: "Sofisticado", momento: "Cierre" },
      { title: "Silencio Activo Pt. 2", mood: "Soñador", momento: "Cierre" },
    ],
    sample: {
      nota: "La curva de la noche en cuatro muestras: after-office, calentamiento, pico y la última hora. Así debería subir y bajar la energía de tu bar.",
    },
    errores: [
      {
        error: "Empezar la noche al volumen del pico",
        fix: "A las 7 el local está vacío y suena hueco. Arranca 10 dB por debajo y sube conforme entra gente: los cuerpos absorben sonido.",
      },
      {
        error: "Bajar la energía justo cuando se llena",
        fix: "El error más caro de la noche. La curva de energía debe seguir a la ocupación con un poco de anticipación, nunca ir detrás.",
      },
      {
        error: "Anuncios y silencios de una cuenta personal",
        fix: "Un anuncio en medio del pico rompe la noche entera. Un servicio comercial reproduce en continuo, sin cortes.",
      },
      {
        error: "Ignorar el límite de ruido de la licencia municipal",
        fix: "Las quejas de vecinos son el riesgo operativo más común de un bar. Define un tope de volumen en el equipo y no lo dejes a criterio del turno.",
      },
    ],
    checklist: [
      "Dibuja tu curva de energía por hora y déjala escrita para todos los turnos.",
      "Fija un volumen máximo en el equipo para que no dependa de quién cierra.",
      "Sal a la banqueta a las 23:00 y escucha lo que oyen tus vecinos.",
      "Define la playlist de última hora: baja energía, cero sorpresas.",
      "Ten tu certificado de licencia comercial disponible en el local.",
    ],
    faq: [
      {
        q: "¿Qué volumen debe tener la música en un bar?",
        a: "62–70 dB en área de mesas, 68–75 dB en barra y 75–85 dB en pista. Revisa también el límite de ruido de tu licencia municipal y el ruido que llega a los vecinos.",
      },
      {
        q: "¿Cómo debe cambiar la música durante la noche?",
        a: "En curva: relajado en after-office (80–100 BPM), en ascenso al llenarse (100–115 BPM), pico de energía en las horas centrales (118–130 BPM) y descenso en la última hora para facilitar el cierre.",
      },
      {
        q: "¿La música alta hace que la gente consuma más?",
        a: "Hay evidencia de que un volumen mayor se asocia a un consumo más rápido y menos conversación. El costo es que ahuyenta al cliente que va a platicar, así que conviene usarlo solo en las horas centrales.",
      },
      {
        q: "¿Puedo usar Spotify en mi bar?",
        a: "No se recomienda. Su licencia es de uso personal y doméstico, trae anuncios y no te protege frente a reclamaciones de sociedades de gestión.",
      },
      {
        q: "¿Muusica.com sirve si tengo DJ algunos días?",
        a: "Sí. Muchos bares usan Muusica.com para toda la semana y la curva de apertura y cierre, y dejan el DJ para las noches fuertes.",
      },
    ],
    posts: [
      "musica-para-bares",
      "psicologia-del-ritmo-comercial",
      "multas-por-uso-ilegal-de-musica",
      "derechos-de-autor-musica-negocios-mexico",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "tendencias-musica-comercial-2026",
    ],
  },

  {
    slug: "oficinas",
    title: "Oficinas",
    singular: "oficina",
    icon: "briefcase",
    color: "#0EA5E9",
    description: "Concentración y buen ambiente de trabajo",
    longDescription:
      "Un buen ambiente sonoro mejora el día a día del equipo. Música de fondo que favorece la concentración sin distraer, ideal para espacios de trabajo y áreas comunes.",
    seoTitle: "Música para oficinas",
    seoDescription:
      "Qué dice la evidencia sobre música y concentración, cómo tapar conversaciones en oficina abierta y volumen por zona.",
    benefits: [
      "Música que favorece la concentración",
      "Volumen de fondo equilibrado",
      "Ideal para áreas comunes y recepción",
      "Licencia comercial incluida",
    ],
    porQue: [
      {
        icon: "message-square-off",
        title: "Tapa la conversación ajena",
        text: "En oficina abierta lo que rompe la concentración no es el ruido: es el habla que se entiende. Una capa musical instrumental hace ininteligible la llamada de al lado, que es exactamente lo que se necesita.",
      },
      {
        icon: "brain",
        title: "La evidencia pide matices",
        text: "La música ayuda en tareas repetitivas y mejora el ánimo, pero las letras compiten con tareas de lectura y escritura. Instrumental para bloques de foco, con voz para áreas comunes: esa distinción es todo el secreto.",
      },
      {
        icon: "smile",
        title: "Ambiente, no solo productividad",
        text: "El silencio absoluto de una oficina hace que nadie se atreva a hablar y que cada llamada se sienta pública. Un fondo discreto baja esa tensión social sin que nadie sepa explicar por qué.",
      },
      {
        icon: "user-check",
        title: "Recepción: primera impresión",
        text: "Tu cliente espera cinco minutos en recepción antes de cada junta. Ese silencio incómodo también comunica algo de tu empresa, y es gratis cambiarlo.",
      },
    ],
    estudio: {
      texto:
        "El efecto de la palabra irrelevante, ampliamente replicado en psicología cognitiva, muestra que el habla inteligible de fondo degrada el desempeño en tareas verbales y de memoria a corto plazo. Por eso en oficinas abiertas conviene enmascarar la conversación con material instrumental en lugar de buscar el silencio.",
      fuente: "Irrelevant speech effect, literatura de psicología cognitiva",
    },
    jornada: [
      {
        franja: "Llegada",
        horario: "8:00 – 10:00",
        objetivo: "Arrancar el día sin exigir foco todavía",
        mezcla: "55% Cálido · 45% Alegre",
        bpm: "80–100 BPM",
        volumen: "45–52 dB",
        tracks: ["Crackle and Coffee", "Dawn Crackle"],
      },
      {
        franja: "Bloque de foco",
        horario: "10:00 – 13:00",
        objetivo: "Enmascarar conversaciones, cero distracción",
        mezcla: "85% Concentración · 15% Relajado",
        bpm: "70–90 BPM",
        volumen: "42–50 dB",
        tracks: ["Study Calm", "Focus Static"],
      },
      {
        franja: "Después de comer",
        horario: "14:00 – 16:00",
        objetivo: "Sostener la energía del bajón de la tarde",
        mezcla: "60% Enérgico · 40% Concentración",
        bpm: "95–110 BPM",
        volumen: "45–52 dB",
        tracks: ["Flujo Ácido", "Nubes Bajas"],
      },
      {
        franja: "Cierre / viernes",
        horario: "17:00 – 19:00",
        objetivo: "Aflojar el ambiente antes de salir",
        mezcla: "60% Alegre · 40% Cálido",
        bpm: "90–110 BPM",
        volumen: "48–55 dB",
        tracks: ["Quién Toca Esta Noche", "Unplugged Session"],
      },
    ],
    volumen: [
      { zona: "Área de escritorios", nivel: "42–50 dB", nota: "Debe enmascarar la conversación a tres escritorios de distancia, no taparla en el escritorio de al lado." },
      { zona: "Recepción", nivel: "48–55 dB", nota: "Algo más presente: llena el silencio de la espera y da privacidad a la conversación de recepción." },
      { zona: "Cocina y áreas comunes", nivel: "52–60 dB", nota: "Zona social: aquí sí funciona el repertorio con voz y más energía." },
    ],
    tracks: [
      { title: "Dawn Crackle", mood: "Concentración", momento: "Apertura" },
      { title: "Crackle and Coffee", mood: "Cálido", momento: "Café de la mañana" },
      { title: "Study Calm", mood: "Concentración", momento: "Bloque de foco" },
      { title: "Silent Calm", mood: "Concentración", momento: "Foco profundo" },
      { title: "Focus Static", mood: "Concentración", momento: "Foco profundo" },
      { title: "Nubes Bajas", mood: "Relajado", momento: "Media tarde" },
      { title: "Temperatura Ambiente (Alt)", mood: "Neutro", momento: "Áreas comunes" },
      { title: "Unplugged Session", mood: "Cálido", momento: "Recepción" },
      { title: "Flujo Ácido", mood: "Enérgico", momento: "Post-comida" },
      { title: "Quién Toca Esta Noche", mood: "Alegre", momento: "Viernes" },
    ],
    sample: {
      nota: "El día de la oficina en cuatro muestras: llegada, bloque de foco instrumental, el bajón de después de comer y el cierre de viernes.",
    },
    errores: [
      {
        error: "Música con letra en zona de escritorios",
        fix: "Las letras compiten directamente con tareas de lectura y escritura. Deja lo vocal para cocina, comedor y recepción.",
      },
      {
        error: "Que cada quien ponga su bocina",
        fix: "Tres bocinas compitiendo son peor que ninguna. Un solo sistema, a bajo volumen y bien repartido, y audífonos para quien quiera algo distinto.",
      },
      {
        error: "Volumen alto 'para que se escuche'",
        fix: "En oficina la música debe estar por debajo del umbral de atención. Si alguien puede tararearla, está muy alta.",
      },
      {
        error: "Suponer que la oficina no necesita licencia",
        fix: "La reproducción en un centro de trabajo con público o personal también es ejecución en un espacio no doméstico. Un servicio con licencia comercial cierra el tema.",
      },
    ],
    checklist: [
      "Pregunta al equipo si escucha la música: si la mayoría dice que sí, bájala.",
      "Usa instrumental en escritorios y reserva lo vocal para áreas comunes.",
      "Pon música en recepción: es donde más se nota el silencio.",
      "Revisa el nivel en las esquinas, no solo debajo de las bocinas.",
      "Ten el certificado de licencia comercial en tu carpeta administrativa.",
    ],
    faq: [
      {
        q: "¿La música mejora la productividad en la oficina?",
        a: "Depende de la tarea. Ayuda en trabajo repetitivo y mejora el estado de ánimo, pero la música con letra interfiere con tareas de lectura, escritura y memoria verbal. Instrumental en zonas de foco es la opción segura.",
      },
      {
        q: "¿Qué volumen debe tener la música en una oficina?",
        a: "42–50 dB en el área de escritorios, 48–55 dB en recepción y 52–60 dB en áreas comunes. Debe enmascarar conversaciones lejanas sin llamar la atención.",
      },
      {
        q: "¿Qué música sirve para concentrarse?",
        a: "Instrumental de tempo medio-bajo y dinámica pareja: ambient, lo-fi, piano suave o jazz sin voz, entre 70 y 90 BPM.",
      },
      {
        q: "¿Una oficina necesita licencia comercial de música?",
        a: "Sí. La reproducción de música en un centro de trabajo no es uso doméstico. Con Muusica.com la licencia comercial está incluida en la suscripción.",
      },
      {
        q: "¿Puedo usar la cuenta de Spotify de un empleado?",
        a: "No se recomienda: es una licencia personal, la responsabilidad recae en la empresa y el acceso desaparece cuando esa persona se va.",
      },
    ],
    posts: [
      "musica-para-oficinas-productividad",
      "volumen-ideal-musica-negocio",
      "que-es-musica-libre-de-regalias",
      "derechos-de-autor-musica-negocios-mexico",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "tendencias-musica-comercial-2026",
    ],
  },

  {
    slug: "hoteles",
    title: "Hoteles",
    singular: "hotel",
    icon: "hotel",
    color: "#10B981",
    description: "Una experiencia cuidada en cada espacio",
    longDescription:
      "Cada espacio del hotel merece su propia atmósfera. Desde el lobby hasta el restaurante y la alberca, ambienta la estancia de tus huéspedes con música seleccionada y 100% legal.",
    seoTitle: "Música para hoteles",
    seoDescription:
      "Ambiente por zona en un hotel: lobby, restaurante, alberca y spa. Volumen recomendado y licencia comercial incluida.",
    benefits: [
      "Ambientes distintos por espacio",
      "Experiencia premium para huéspedes",
      "Sin interrupciones ni anuncios",
      "Licencia comercial incluida",
    ],
    porQue: [
      {
        icon: "log-in",
        title: "El lobby es la primera impresión",
        text: "El huésped llega cansado, con maletas y con expectativas formadas por las fotos. El sonido del lobby es lo primero que confirma o desmiente la categoría que reservó.",
      },
      {
        icon: "layout-grid",
        title: "Un hotel son ocho negocios distintos",
        text: "Lobby, restaurante, bar, alberca, spa, gimnasio, elevadores y business center tienen públicos y horarios distintos. La misma música en todos es el error más frecuente y el más visible.",
      },
      {
        icon: "star",
        title: "Aparece en las reseñas",
        text: "El huésped rara vez elogia la música, pero sí menciona el ruido, el eco del lobby o el silencio incómodo del desayuno. El ambiente sonoro es una fuente silenciosa de calificaciones.",
      },
      {
        icon: "banknote",
        title: "Sostiene el consumo interno",
        text: "Que el huésped se quede a cenar o a tomar algo en el bar en lugar de salir depende de qué tan cómodo se sienta el espacio. Ese es el ingreso que más margen deja.",
      },
    ],
    estudio: {
      texto:
        "La investigación sobre música ambiental en hospitalidad coincide con lo observado en restaurantes y retail: el tempo lento se asocia a estancias más largas en las áreas de consumo, y el estilo musical modifica la percepción de categoría del establecimiento.",
      fuente: "Literatura de servicescape y música ambiental (Milliman; Areni & Kim)",
    },
    jornada: [
      {
        franja: "Lobby de día",
        horario: "7:00 – 18:00",
        objetivo: "Calma con presencia, check-in fluido",
        mezcla: "55% Relajado · 45% Cálido",
        bpm: "70–90 BPM",
        volumen: "50–58 dB",
        tracks: ["Brisa de Olivo", "Acustico del Alma"],
      },
      {
        franja: "Desayuno y restaurante",
        horario: "7:00 – 11:00",
        objetivo: "Ambiente amable sin despertar de golpe",
        mezcla: "60% Cálido · 40% Alegre",
        bpm: "75–95 BPM",
        volumen: "52–60 dB",
        tracks: ["Dois Acordes", "Melodia del Corazon"],
      },
      {
        franja: "Alberca y terraza",
        horario: "11:00 – 18:00",
        objetivo: "Vacaciones, energía luminosa",
        mezcla: "65% Alegre · 35% Soñador",
        bpm: "90–110 BPM",
        volumen: "58–66 dB",
        tracks: ["Kalokairini Vrochi", "Dois Acordes"],
      },
      {
        franja: "Lobby y bar de noche",
        horario: "18:00 – 24:00",
        objetivo: "Elevar la categoría percibida",
        mezcla: "60% Sofisticado · 40% Romántico",
        bpm: "65–90 BPM",
        volumen: "55–62 dB",
        tracks: ["Placer Culpable", "Ii Jinsei"],
      },
    ],
    volumen: [
      { zona: "Lobby y recepción", nivel: "50–58 dB", nota: "El check-in implica dar datos y nombres. Que nadie tenga que deletrear dos veces." },
      { zona: "Restaurante y bar", nivel: "55–65 dB", nota: "Como en cualquier restaurante: conversación cómoda a la mesa, un poco más de energía en barra." },
      { zona: "Alberca, terraza y pasillos", nivel: "48–66 dB", nota: "En exteriores sube por el ruido ambiente; en pasillos y elevadores, apenas presente." },
    ],
    tracks: [
      { title: "Brisa de Olivo", mood: "Relajado", momento: "Lobby de día" },
      { title: "Acustico del Alma", mood: "Cálido", momento: "Desayuno" },
      { title: "Melodia del Corazon", mood: "Romántico", momento: "Restaurante" },
      { title: "Dois Acordes", mood: "Alegre", momento: "Alberca" },
      { title: "Kalokairini Vrochi", mood: "Alegre", momento: "Terraza" },
      { title: "Eterno Suspiro", mood: "Romántico", momento: "Cena" },
      { title: "Placer Culpable", mood: "Sofisticado", momento: "Bar del lobby" },
      { title: "Ii Jinsei", mood: "Sofisticado", momento: "Lobby de noche" },
      { title: "Suspendido", mood: "Soñador", momento: "Spa y gimnasio" },
      { title: "El Ruido de Fondo II", mood: "Concentración", momento: "Business center" },
    ],
    sample: {
      nota: "Cuatro espacios del hotel, uno por muestra: lobby de día, desayuno, alberca y el lobby de noche con el bar.",
    },
    errores: [
      {
        error: "La misma música en todo el hotel",
        fix: "Como mínimo separa lobby, restaurante y áreas de recreación. Son públicos y momentos distintos del día.",
      },
      {
        error: "Lobby en silencio",
        fix: "Un lobby callado amplifica el eco, las maletas y las conversaciones de recepción. Es el espacio donde el silencio más se siente como abandono.",
      },
      {
        error: "Música de alberca a todo volumen",
        fix: "La mitad de los huéspedes fue a descansar. Mantén la energía luminosa pero el nivel moderado, y usa bocinas repartidas en lugar de dos torres.",
      },
      {
        error: "Cadena hotelera sin criterio sonoro común",
        fix: "Si tienes varias propiedades, define el ambiente por tipo de zona y no por gerente en turno. Es parte de la promesa de marca.",
      },
    ],
    checklist: [
      "Recorre el hotel completo escuchando: lobby, elevador, pasillo, restaurante, alberca.",
      "Comprueba que en recepción se puede dar un apellido sin repetirlo.",
      "Define un ambiente distinto para lobby de día y lobby de noche.",
      "Revisa el volumen de exteriores a distintas horas: el ruido ambiente cambia.",
      "Ten tu certificado de licencia comercial disponible para auditorías internas.",
    ],
    faq: [
      {
        q: "¿Qué música debe sonar en el lobby de un hotel?",
        a: "De día, algo relajado y cálido entre 70 y 90 BPM a 50–58 dB. De noche conviene subir la sofisticación (jazz, instrumental elegante) para elevar la categoría percibida del espacio.",
      },
      {
        q: "¿Debe haber música distinta en cada área del hotel?",
        a: "Sí. Lobby, restaurante, alberca, spa, gimnasio y business center tienen públicos y funciones distintas. Usar el mismo ambiente en todos es el error más común.",
      },
      {
        q: "¿Un hotel necesita licencia comercial para poner música?",
        a: "Sí. La reproducción en áreas comunes de un hotel es ejecución pública. Con Muusica.com la licencia comercial está incluida y no pagas regalías a SACM ni SOMEXFON.",
      },
      {
        q: "¿Necesito una suscripción por cada área o por hotel?",
        a: "La licencia es por locación. Para propiedades grandes o cadenas hoteleras, contáctanos para armar un plan de múltiples ubicaciones.",
      },
      {
        q: "¿Puedo poner mi propio logo en el reproductor?",
        a: "Sí. El reproductor de Muusica.com admite marca personalizada, útil cuando la pantalla queda a la vista de los huéspedes.",
      },
    ],
    posts: [
      "musica-para-hoteles",
      "identidad-sonora-audio-branding",
      "derechos-de-autor-musica-negocios-mexico",
      "mejores-generos-para-restaurantes",
      "por-que-spotify-no-sirve-para-tu-negocio",
      "que-es-musica-libre-de-regalias",
    ],
  },
];

// El mapa negocio → posts de arriba, leído al revés: dado un post, qué giros lo
// citan. Sirve para que cada artículo enlace de vuelta a su página de servicio
// en vez de ser un callejón sin salida para el rastreador.
export function negociosDelPost(slug) {
  return negocios.filter((n) => n.posts.includes(slug));
}
