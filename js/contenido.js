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
    { edad: "", titulo: "Debut en la vida", texto: "El 16 de octubre de 2005 salió a la cancha un crack que todavía no sabía cuánto le iba a tocar celebrar.", foto: "fotos/ninez/1.jpeg" },
    { edad: "", titulo: "Primeros toques", texto: "Todo lo que rodaba era una pelota en potencia. Ahí empezó la mejor costumbre de su vida.", foto: "fotos/ninez/4.jpeg" },
    { edad: "", titulo: "Patio, recreo y gol", texto: "Cualquier espacio era una cancha y cualquier arco, el del Monumental.", foto: "fotos/ninez/3.jpeg" },
    { edad: "", titulo: "Nace el hincha", texto: "El crema y guinda dejó de ser un color y se volvió parte de la familia.", foto: "fotos/ninez/2.jpeg" },
    { edad: "", titulo: "Cambio de etapa", texto: "Más grande, más pilas y con la camiseta puesta siempre que se podía.", foto: "fotos/ninez/5.jpeg" },
    { edad: "", titulo: "Ya sabía quién era", texto: "Personalidad propia, ideas claras y un equipo del que nadie lo iba a mover.", foto: "fotos/ninez/7.jpeg" },
    { edad: "", titulo: "Mayoría de edad", texto: "Llegó una etapa nueva, con más libertad y muchas cosas por empezar.", foto: "fotos/ninez/6.jpeg" },
    { edad: "21 años", titulo: "Y aquí está", texto: "Veintiún años de historias, aprendizajes y gente que lo quiere. Lo mejor todavía está por jugarse.", foto: "fotos/ninez/8.jpeg" }
  ],

  // Familia (puedes agregar o quitar tarjetas)
  familia: [
    { nombre: "Mamá", relacion: "La primera hinchada", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "fotos/familia/9.jpeg" },
    { nombre: "Papá", relacion: "El de los primeros partidos", mensaje: "Ejemplo de mensaje familiar. Aquí irá un mensaje real.", foto: "fotos/familia/10.jpeg" },
    { nombre: "Familia", relacion: "Los que siempre alientan", mensaje: "Un pequeño mensaje de las personas que te quieren.", foto: "fotos/familia/11.jpeg" }
  ],

  // Recuerdos juntos. Cada uno puede tener: foto, fotos: [...], video, o nada.
  nosotros: [
    {
      titulo: "El primer pitazo",
      fecha: "Cuando todo empezó",
      texto: "Aquí va cómo nos conocimos. Escríbelo con tus palabras: ese día nadie sabía que iba a salir tan buen equipo.",
      foto: "",
      video: ""
    },
    {
      titulo: "Tardes de cancha",
      fecha: "Lo que nunca falla",
      texto: "Las salidas, los chistes, los partidos y las conversaciones que no tenían fin. Aquí irán las fotos.",
      foto: "",
      video: ""
    },
    {
      titulo: "Un día para no olvidar",
      fecha: "Ese recuerdo",
      texto: "Ese momento que cada vez que se menciona nos hace reír. Aquí va la historia completa.",
      fotos: [],
      video: ""
    },
    {
      titulo: "Y seguimos en el campo",
      fecha: "Hasta hoy",
      texto: "Entre tantas cosas pequeñas seguimos jugando el mismo partido: el de ser buenos amigos.",
      foto: "",
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

  carta: [
    "No sé cómo se empieza una carta para alguien como tú, así que voy a empezar por lo simple: gracias.",
    "Gracias por las risas, por los partidos, por las conversaciones largas y por estar en los momentos buenos y también en los que no fueron tan fáciles.",
    "Hoy cumples 21 años. Esta página es un pequeño regalo, pero en el fondo quería dejarte algo que puedas volver a abrir dentro de mucho tiempo para recordar que perteneces a un equipo: el de la gente que te aprecia.",
    "Ojalá este año venga con muchas alegrías, con sueños cumplidos, con todo lo que te propongas y, por supuesto, con muchos gritos de gol en el Monumental.",
    "Feliz cumpleaños, hermano. Que sigamos sumando capítulos y partidos juntos.",
    "¡Dale U y dale Mauro!"
  ],

  firma: "Paul (Polsito)",

  sorpresa: "Nunca olvides que tienes en quien confiar, que lo que haces importa y que, pase lo que pase en la cancha o fuera de ella, siempre habrá gente alentándote desde la tribuna."
};
