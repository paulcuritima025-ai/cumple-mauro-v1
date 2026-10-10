// =====================================================
//  CUMPLE MAURO · TODO EL CONTENIDO SE EDITA AQUÍ
// =====================================================
const contenido = {
  nombre: "Mauro",
  nombreCompleto: "Mauro Jesús Falcón Amaranto",
  edad: 21,

  // Cumpleaños: 16 de octubre de 2026, 00:00 hora de Perú (UTC-5)
  cumple: "2026-10-16T00:00:00-05:00",

  // Fecha desde que son amigos. Cambia por la real.
  // Ojo: el mes empieza en 0 (enero = 0, diciembre = 11).
  fechaInicio: { anio: 2020, mes: 0, dia: 1, hora: 0, minuto: 0 },

  // Etapas de su vida (edad, título, texto, foto)
  ninez: [
    { edad: "", titulo: "Debut en la vida", texto: "El 16 de octubre de 2005 llegó alguien que todavía no sabía todo lo bueno que le esperaba.", foto: "fotos/ninez/1.jpeg" },
    { edad: "", titulo: "Primeros pasos", texto: "Cada día traía algo nuevo por descubrir, y esa curiosidad ya se le notaba.", foto: "fotos/ninez/4.jpeg" },
    { edad: "", titulo: "Descubriendo el mundo", texto: "Entre juegos, recreos y travesuras se iban armando los primeros recuerdos.", foto: "fotos/ninez/3.jpeg" },
    { edad: "", titulo: "Ya sabía quién era", texto: "Ideas propias, ocurrencias únicas y esa forma tan suya de ver el mundo.", foto: "fotos/ninez/2.jpeg" },
    { edad: "", titulo: "Pequeños recuerdos", texto: "Momentos que quizá parecían simples, pero que hoy guardan algo muy especial.", foto: "fotos/ninez/5.jpeg" },
    { edad: "", titulo: "Una sonrisa inolvidable", texto: "Hay recuerdos que no necesitan muchas palabras para sacar una sonrisa.", foto: "fotos/ninez/7.jpeg" },
    { edad: "", titulo: "Un pedacito de historia", texto: "Una fotografía, mil recuerdos y una historia que merece ser contada.", foto: "fotos/ninez/6.jpeg" },
    { edad: "21 años", titulo: "Y aquí está", texto: "Veintiún años de historias, aprendizajes y gente que lo quiere. Lo mejor todavía está por venir.", foto: "fotos/ninez/8.jpeg" }
  ],

  // Familia (puedes agregar o quitar tarjetas)
  familia: [
    { nombre: "Mamá", relacion: "Amor incondicional", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "fotos/familia/9.jpeg" },
    { nombre: "Papá", relacion: "Un apoyo para siempre", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "fotos/familia/10.jpeg" },
    { nombre: "Familia", relacion: "Los que siempre alientan", mensaje: "Un pequeño mensaje de las personas que te quieren.", foto: "fotos/familia/11.jpeg" }
  ],

  // Recuerdos juntos. Cada uno puede tener: foto, fotos: [...], video, o nada.
  nosotros: [
    {
      titulo: "Así comenzó todo",
      fecha: "Cuando todo empezó",
      texto: "A veces, los momentos más bonitos comienzan sin que nos demos cuenta. Y qué bonito es mirar atrás y recordar todo lo que vino después.",
      foto: "fotos/nosotros/12.jpeg",
      video: ""
    },
    {
      titulo: "Momentos que se quedan",
      fecha: "Entre risas y ocurrencias",
      texto: "Las conversaciones sin sentido, las bromas inesperadas y esos pequeños momentos que terminan convirtiéndose en recuerdos inolvidables.",
      foto: "fotos/nosotros/13.jpeg",
      video: ""
    },
    {
      titulo: "De esos días bonitos",
      fecha: "Para recordar siempre",
      texto: "Hay días que parecen normales hasta que, con el tiempo, te das cuenta de lo especiales que fueron. Este es uno de esos recuerdos que merecen quedarse.",
      foto: "fotos/nosotros/14.jpeg",
      video: ""
    },
    {
      titulo: "Y todavía quedan historias",
      fecha: "Esto no termina aquí",
      texto: "Quedan más momentos por vivir, más fotos por guardar y muchas historias que algún día volveremos a recordar con una sonrisa.",
      foto: "fotos/nosotros/15.jpeg",
      video: ""
    }
  ],

  // Sección de la U (foto opcional: deja "" para ocultar el banner)
  laU: {
    foto: "",
    tarjetas: [
      { grande: "1924", titulo: "El año en que nació tu club", texto: "Un siglo de historia que se lleva por dentro, vayas donde vayas." },
      { grande: "Crema y guinda", titulo: "Colores que no se negocian", texto: "Se visten en el pecho, pero se sienten mucho más adentro." },
      { grande: "¡Dale U!", titulo: "El grito de siempre", texto: "En las buenas, en las malas y en los partidos que se sufren hasta el final." }
    ]
  },

  // Algo que me recuerda a ti (va justo antes de la carta).
  // fotos: las imágenes de esta sección (pon 1, 2 o las que quieras).
  //        Déjalas "" para ver el marcador mientras no las tengas.
  // puntos: tarjetas con texto; agrega o quita las que quieras.
  recuerdo: {
    fotos: [
      "fotos/recuerdo/16.jpeg",
      "fotos/recuerdo/17.jpeg"
    ],
    puntos: [
      { titulo: "Eso que me recuerda a ti", texto: "Aquí cuenta qué es y por qué cada vez que lo ves piensas en él." },
      { titulo: "Un detalle más", texto: "Puede ser una canción, un lugar, una comida o una costumbre que solo ustedes entienden." }
    ]
  },

  carta: [
    "No sé si existen las palabras perfectas para decirte todo lo que me haces sentir, pero hoy quiero intentarlo. Porque es tu cumpleaños y quería regalarte algo que no se quede solamente en un día, sino que puedas volver a leer cada vez que quieras recordar lo especial que eres para mí.",
    "A veces me pongo a pensar en lo bonito que es tenerte en mi vida. En tu sonrisa, en tu forma de ser, en esas pequeñas cosas que quizá tú ni notas, pero que para mí tienen un significado enorme. No necesitas hacer algo extraordinario para hacerme feliz; muchas veces basta con ser tú.",
    "Hoy cumples 21 años y deseo de corazón que la vida te regale muchísimos motivos para sonreír. Que nunca te falten las ganas de perseguir tus sueños, la fuerza para levantarte cuando algo no salga como esperabas y personas que te recuerden lo increíble que eres, incluso en los días en que tú mismo lo olvides.",
    "Quiero que sepas que admiro mucho a la persona que eres y a todo lo que llevas dentro. Me hace feliz poder compartir momentos contigo, guardar recuerdos a tu lado y pensar que todavía nos quedan tantas cosas bonitas por vivir. No sé qué nos traerá el futuro, pero sí sé que me encanta poder coincidir contigo en esta parte de la vida.",
    "Ojalá pudiera guardar en una cajita cada sonrisa tuya, cada abrazo y cada instante en el que te veo feliz, para que nunca se me olvidara lo bonito que es verte así. Y si algún día tienes uno de esos días difíciles, quiero que recuerdes que hay una chica que piensa en ti con muchísimo cariño y que desea verte cumplir cada uno de tus sueños.",
    "Esta página es solo un pequeño detalle, pero detrás de ella hay tiempo, ilusión y muchas ganas de hacerte sentir especial. Porque hoy no se trata solamente de celebrar tus 21 años, sino también de celebrar que existes, que eres tú y que, entre tantas personas en el mundo, tengo la suerte de haberte encontrado.",
    "Feliz cumpleaños, mi niño. ❤️ Que este nuevo año de vida te traiga momentos inolvidables, abrazos sinceros, sueños cumplidos y muchísimas razones para ser feliz. Nunca dejes de ser esa persona que me hace sonreír de una manera tan bonita. Y ojalá, cuando vuelvas a leer estas palabras dentro de mucho tiempo, puedas hacerlo con una sonrisa y recordar cuánto cariño había detrás de cada una de ellas.",
    "Te quiero muchísimo. Feliz cumpleaños, mi amor. ❤️"
  ],

  firma: "Fiorella",

  sorpresa: "Nunca olvides que tienes en quien confiar, que lo que haces importa y que, pase lo que pase, siempre habrá gente alentándote."
};