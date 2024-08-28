type Article = {
  id: number;
  title: string;
  content: string;
  date: string;
  type: string;
  shortDescription: string;
  gallery: ImageGallery[];
};

export type ImageGallery = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Construcción del Viaducto Las Américas",
    content: `
      🚧👷‍♂️ ¡Nueva obra para Lima! 💪 El Viaducto Las Américas es una obra de infraestructura vial destinada a mejorar la conectividad entre los distritos de La Victoria, San Luis, y San Borja. Con una extensión de más de 2 kilómetros, este proyecto busca descongestionar las principales arterias de la ciudad, especialmente las avenidas Canadá y Javier Prado.
      Incluye la construcción de puentes elevados y pasos a desnivel.
      Mejoras en el paisaje urbano con enfoque en sostenibilidad.
      Se espera facilitar el tránsito de más de 100,000 vehículos diariamente.
      Mejorará considerablemente los tiempos de viaje y reducirá el tráfico en zonas aledañas.
      `,
    date: "2024-12-01",
    type: "article",
    shortDescription: "Viaducto para mejorar la conectividad vial en Lima.",
    gallery: [
      {
        id: 1,
        title: "Viaducto Las Américas",
        description:
          "Render del viaducto que conectará La Victoria con San Borja.",
        url: "/work-municipality-lima/viaducto.jpg",
      },
      {
        id: 2,
        title: "Viaducto Las Américas",
        description:
          "Render del viaducto que conectará La Victoria con San Luis.",
        url: "/work-municipality-lima/viaducto.mp4",
      },
      {
        id: 3,
        title: "Mapa del Viaducto Las Américas",
        description:
          "Mapa del viaducto que conectará La Victoria con San Borja.",
        url: "/work-municipality-lima/viaducto2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Ampliación del Metropolitano",
    content: `
      🚌💨 ¡Mejorando el transporte público! La ampliación del Metropolitano es uno de los proyectos emblemáticos de nuestra gestión. Incluye la extensión del tramo norte hasta Carabayllo y del tramo sur hacia Lurín.
      Aumentará la capacidad de 700,000 a 1,000,000 de pasajeros diarios.
      Nuevas estaciones e infraestructura mejorada.
      Implementación de carriles exclusivos y estaciones inteligentes.
      Reducción del uso de vehículos privados para disminuir la congestión y contaminación.
    `,
    date: "2024-08-15",
    type: "article",
    shortDescription: "Extensión del Metropolitano para mejorar la movilidad.",
    gallery: [
      {
        id: 1,
        title: "Metropolitano",
        description: "Ampliación del Metropolitano en Lima.",
        url: "/work-municipality-lima/ampliacion.jpg",
      },
      {
        id: 2,
        title: "Metropolitano",
        description: "Ampliación del Metropolitano en Lima.",
        url: "/work-municipality-lima/metro.jpg",
      },
      {
        id: 3,
        title: "Inauguracion del Metropolitano",
        description: "Inauguracion del Metropolitano en Lima.",
        url: "/work-municipality-lima/inauguracion-metro.jpg",
      },
      {
        id: 4,
        title: "Pista de Metropolitano",
        description: "Inauguracion pista del Metropolitano en Lima.",
        url: "/work-municipality-lima/pista-metro.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Teleférico de Lima",
    content: `
      🚡 ¡Conectando Lima desde las alturas! El teleférico urbano es una solución innovadora de transporte que unirá el distrito de Independencia con San Juan de Miraflores.
        Recorrido de 8 kilómetros con 5 estaciones.
        Beneficiará a más de 30,000 personas diariamente.
        Se integrará con el Metropolitano y la Línea 1 del Metro de Lima.
        Alternativa rápida y segura que evita el tráfico terrestre.
    `,
    date: "2024-07-10",
    type: "article",
    shortDescription: "Teleférico para conectar zonas altas de Lima.",
    gallery: [
      {
        id: 1,
        title: "Teleférico de Lima",
        description:
          "Render del teleférico que unirá Independencia y San Juan de Miraflores.",
        url: "/work-municipality-lima/telefericos.jpg",
      },
      {
        id: 2,
        title: "Teleférico de Lima",
        description:
          "Mapa del teleférico que uniremos San Juan de Miraflores y San Borja.",
        url: "/work-municipality-lima/mapa-teleferico.jpg",
      },
      {
        id: 3,
        title: "Teleférico de Lima",
        description:
          "Render del teleférico que uniremos San Juan de Miraflores y San Borja.",
        url: "/work-municipality-lima/telefericos2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Muros de Contención para Lima Alta",
    content: `
      💪 ¡Protegiendo a nuestros hermanos de las zonas altas! 🏗️ El muro de contención de más de 5 kilómetros protegerá a las comunidades ante posibles desbordes y deslizamientos.
      Tecnología avanzada con materiales resistentes y drenajes eficientes.
      Brindará seguridad a más de 50,000 residentes en áreas vulnerables.
      Minimizará riesgos de desastres naturales, especialmente en épocas de lluvias intensas.
    `,
    date: "2023-12-15",
    type: "article",
    shortDescription: "Muro de contención para Lima Alta.",
    gallery: [
      {
        id: 1,
        title: "Muro de Contención",
        description: "Construcción del muro de contención en Lima Alta.",
        url: "/work-municipality-lima/muros.jpg",
      },
      {
        id: 2,
        title: "Muro de Contención",
        description: "Construcción del muro de contención en Lima Alta.",
        url: "/work-municipality-lima/muros1.jpg",
      },
      {
        id: 3,
        title: "Muro de Contención",
        description: "Construcción del muro de contención en Lima Alta.",
        url: "/work-municipality-lima/muros2.jpg",
      },
      {
        id: 4,
        title: "Muro de Contención",
        description: "Construcción del muro de contención en Lima Alta.",
        url: "/work-municipality-lima/muros3.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Rehabilitación de Parques en Lima",
    content: `
        🌳🏞️ ¡Espacios verdes para todos! Estamos rehabilitando más de 50 parques en Lima para embellecer los espacios públicos de la ciudad.
      Remodelación de áreas verdes e instalación de juegos infantiles.
      Mejora de iluminación y seguridad en los parques.
      Promoción del esparcimiento y estilo de vida saludable.
      Incluye la renovación de parques emblemáticos como el Parque de la Exposición y el Parque Kennedy.
      `,
    date: "2024-03-25",
    type: "article",
    shortDescription: "Mejora y mantenimiento de parques en Lima.",
    gallery: [
      {
        id: 1,
        title: "Parques de Lima",
        description: "Parques rehabilitados bajo la gestión de López Aliaga.",
        url: "/work-municipality-lima/parque.jpg",
      },
      {
        id: 2,
        title: "Parques de Lima",
        description: "Parques rehabilitados bajo la gestión de ：Aliaga.",
        url: "/work-municipality-lima/parques2.jpg",
      },
      {
        id: 3,
        title: "Parques de Lima",
        description: "Parques rehabilitados bajo la gestión de ：Aliaga.",
        url: "/work-municipality-lima/parques3.jpg",
      },
      {
        id: 4,
        title: "Parques de Lima",
        description: "Parques rehabilitados bajo la gestión de ：Aliaga.",
        url: "/work-municipality-lima/parques4.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Programa de Ollas Comunes",
    content: `
        🍲👨‍🍳 ¡300 congeladoras para las ollitas comunes! 💪 Nuestra visión es impulsar el autosostenimiento de estas organizaciones para que no dependan del Estado.
        Presupuesto de 80 millones de soles para fortalecer más de 1,000 ollas comunes.
        Brinda alimentos de primera necesidad a miles de familias en situación de pobreza.
        Incluye capacitaciones en nutrición y manejo de alimentos.
      `,
    date: "2024-05-10",
    type: "article",
    shortDescription: "Apoyo a las ollas comunes en Lima.",
    gallery: [
      {
        id: 1,
        title: "Ollas Comunes",
        description: "Programa de apoyo a las ollas comunes en Lima.",
        url: "/work-municipality-lima/ollas3.jpg",
      },
      {
        id: 2,
        title: "Ollas Comunes",
        description: "Programa de apoyo a las ollas comunes en Lima.",
        url: "/work-municipality-lima/ollas.jpg",
      },
      {
        id: 3,
        title: "Ollas Comunes",
        description: "Programa de apoyo a las ollas comunes en Lima.",
        url: "/work-municipality-lima/ollas.mp4",
      },
      {
        id: 4,
        title: "Ollas Comunes",
        description: "Programa de apoyo a las ollas comunes en Lima.",
        url: "/work-municipality-lima/ollas2.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Proyecto Vía Expresa Sur",
    content: `
      🚗🛣️ ¡Conectando el sur con el centro de Lima! La Vía Expresa Sur extenderá la actual Vía Expresa de Paseo de la República hasta San Juan de Miraflores.
      12 kilómetros de nueva vía rápida.
      Construcción de puentes elevados, túneles y pasos a desnivel.
      Reducirá tiempos de viaje y descongestionará avenidas como Angamos y Panamericana Sur.
    `,
    date: "2024-04-12",
    type: "article",
    shortDescription: "Planificación de la Vía Expresa Sur.",
    gallery: [
      {
        id: 1,
        title: "Vía Expresa Sur",
        description: "Render del proyecto de la Vía Expresa Sur.",
        url: "/work-municipality-lima/via-expresa-sur.jpg",
      },
      {
        id: 2,
        title: "Vía Expresa Sur",
        description: "Render del proyecto de la Vía Expresa Sur.",
        url: "/work-municipality-lima/sur.mp4",
      },
      {
        id: 3,
        title: "Vía Expresa Sur",
        description: "Render del proyecto de la Vía Expresa Sur.",
        url: "/work-municipality-lima/sur1.jpeg",
      },
      {
        id: 4,
        title: "Vía Expresa Sur",
        description: "Render del proyecto de la Vía Expresa Sur.",
        url: "/work-municipality-lima/sur2.jpeg",
      },
    ],
  },
  {
    id: 9,
    title: "Seguridad Ciudadana con motos para serenazgo y PNP",
    content: `
        🏍️👮‍♂️ ¡1800 motos entregadas! 🏍️🚨 Por primera vez en la historia del Perú, la Municipalidad de Lima asume competencias del Ministerio del Interior y equipa a la Policía Nacional del Perú y al Serenazgo Municipal.
        Entrega de 4000 motos todoterreno para reforzar la seguridad.
        Unidades de alta cilindrada para fortalecer el patrullaje integrado.
        Especial atención a las zonas más vulnerables de la ciudad.
      `,
    date: "2024-08-26",
    type: "article",
    shortDescription: "1800 motos para mejorar la seguridad en la capital.",
    gallery: [
      {
        id: 1,
        title: "Motos para serenazgo",
        description: "4000 motos para serenazgo.",
        url: "/work-municipality-lima/motos.jpeg",
      },
      {
        id: 2,
        title: "Motos para serenazgo",
        description: "4000 motos para serenazgo.",
        url: "/work-municipality-lima/motos.mp4",
      },
      {
        id: 3,
        title: "Motos para serenazgo",
        description: "4000 motos para serenazgo.",
        url: "/work-municipality-lima/motos2.jpg",
      },
    ],
  },
  {
    id: 10,
    title: "Obras Viales en Distritos",
    content: `
    🚧💪 ¡Seguimos iniciando más obras para Lima! 👷‍♂️ Nuestro objetivo es revolucionar la infraestructura vial en beneficio de millones de limeños.
    Renovación de pistas y veredas en la av. Lurigancho (San Juan de Lurigancho).
    Construcción de pistas y veredas en la avenida Metropolitana (Comas).
    Rehabilitación de importantes avenidas en Santa Anita.
    Mejoramiento de accesos a zonas altas en Comas, SJL y Pucusana.
    Reparación de 100,000 m² de pistas en 20 distritos de Lima Metropolitana.
    `,
    date: "2023 - 2024",
    type: "article",
    shortDescription: "Obras Viales en Distritos",
    gallery: [
      {
        id: 1,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales.mp4",
      },
      {
        id: 2,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales.jpg",
      },
      {
        id: 3,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales2.jpg",
      },
      {
        id: 4,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales3.jpg",
      },
      {
        id: 5,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales4.jpg",
      },
      {
        id: 6,
        title: "Obras Viales en Distritos",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/obras-viales5.jpg",
      },
    ],
  },
  {
    id: 11,
    title: "Proyecto Agua de Emergencia",
    content: `
      💪🚰 ¡Agua para nuestros hermanos! Inauguramos la tercera etapa del proyecto Agua de Emergencia para dotar del líquido vital a las personas más vulnerables.
      100 atrapanieblas instalados en Villa María del Triunfo.
      11 tanques y 2 baños con duchas que beneficiarán a miles de familias.
      Colaboración con voluntarios del colegio Markham y la ONG Peruanos Sin Agua.
      Proyecto replicable en otras partes de la ciudad.
    `,
    date: "2024",
    type: "article",
    shortDescription: "Proyecto Agua de Emergencia",
    gallery: [
      {
        id: 1,
        title: "Proyecto Agua de Emergencia",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/proyecto-agua-de-emergencia.jpg",
      },
      {
        id: 2,
        title: "Proyecto Agua de Emergencia",
        description: "Render de las obras de Lima.",
        url: "/work-municipality-lima/proyecto-agua-de-emergencia2.jpg",
      },
    ],
  },
];
