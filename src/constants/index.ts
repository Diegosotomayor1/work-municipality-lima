type Article = {
  id: number;
  title: string;
  content: string;
  date: string;
  type: string;
  shortDescription: string;
  gallery: ImageGallery[];
};

type ImageGallery = {
  id: number;
  url: string;
  title: string;
  description: string;
};

export const articles: Article[] = [
  {
    id: 1,
    title: "Construcción del Viaducto Las Américas",
    content:
      "Este viaducto es una obra de infraestructura vial destinada a mejorar la conectividad entre los distritos de La Victoria, San Luis, y San Borja. Con una extensión de más de 2 kilómetros, el viaducto busca descongestionar las principales arterias de la ciudad, especialmente las avenidas Canadá y Javier Prado. La obra incluye la construcción de puentes elevados, pasos a desnivel y mejoras en el paisaje urbano, con un enfoque en la sostenibilidad y la reducción de emisiones de CO2. Además, se espera que este proyecto facilite el tránsito de más de 100,000 vehículos diariamente, mejorando considerablemente los tiempos de viaje y reduciendo el tráfico en las zonas aledañas.",
    date: "2024-12-01",
    type: "article",
    shortDescription: "Viaducto para mejorar la conectividad vial en Lima.",
    gallery: [
      {
        id: 1,
        title: "Viaducto Las Américas",
        description:
          "Render del viaducto que conectará La Victoria con San Borja.",
        url: "/public/viaducto.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Ampliación del Metropolitano",
    content:
      "La ampliación del Metropolitano es uno de los proyectos emblemáticos de la actual gestión. Este proyecto incluye la extensión del tramo norte hasta Carabayllo y del tramo sur hacia Lurín, cubriendo así zonas más amplias de la ciudad. La ampliación permitirá atender a un mayor número de usuarios, pasando de 700,000 a 1,000,000 de pasajeros diarios. Además, se implementarán nuevas estaciones y se mejorará la infraestructura existente, con nuevos carriles exclusivos, estaciones inteligentes y un sistema de gestión del tráfico más eficiente. La obra busca reducir el uso de vehículos privados, disminuyendo así la congestión vehicular y la contaminación ambiental.",
    date: "2024-08-15",
    type: "article",
    shortDescription: "Extensión del Metropolitano para mejorar la movilidad.",
    gallery: [
      {
        id: 2,
        title: "Metropolitano",
        description: "Ampliación del Metropolitano en Lima.",
        url: "/public/ampliacion.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Teleférico de Lima",
    content:
      "El teleférico urbano es una solución innovadora de transporte que conectará el distrito de Independencia con San Juan de Miraflores, sobrevolando zonas de difícil acceso. Este proyecto tiene como objetivo reducir los tiempos de viaje de más de 30,000 personas que se movilizan entre estos distritos, brindando una alternativa rápida y segura. El teleférico cuenta con 5 estaciones y recorre 8 kilómetros, atravesando áreas montañosas y evitando el tráfico terrestre. Además, se integrará con otros sistemas de transporte público como el Metropolitano y la Línea 1 del Metro de Lima, creando un sistema de transporte intermodal más eficiente.",
    date: "2024-07-10",
    type: "article",
    shortDescription: "Teleférico para conectar zonas altas de Lima.",
    gallery: [
      {
        id: 3,
        title: "Teleférico de Lima",
        description:
          "Render del teleférico que unirá Independencia y San Juan de Miraflores.",
        url: "/public/telefericos.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Muro de Contención para Lima Alta",
    content:
      "El proyecto del muro de contención está diseñado para proteger a las comunidades de las zonas altas de Lima ante posibles desbordes de ríos y deslizamientos, especialmente en épocas de lluvia intensa asociadas al Fenómeno del Niño. Este muro, de más de 5 kilómetros de longitud, se construye con tecnología avanzada que incluye materiales resistentes y drenajes eficientes para evitar la acumulación de agua. Se espera que esta obra brinde seguridad a más de 50,000 residentes que viven en áreas vulnerables, minimizando los riesgos de desastres naturales y mejorando la calidad de vida de las familias beneficiadas.",
    date: "2023-12-15",
    type: "article",
    shortDescription: "Muro de contención para Lima Alta.",
    gallery: [
      {
        id: 4,
        title: "Muro de Contención",
        description: "Construcción del muro de contención en Lima Alta.",
        url: "/public/muros.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Rehabilitación de Parques en Lima",
    content:
      "La rehabilitación de más de 50 parques en Lima es una iniciativa de la actual gestión para recuperar y embellecer los espacios públicos de la ciudad. Este proyecto incluye la remodelación de áreas verdes, la instalación de juegos infantiles, circuitos deportivos y zonas de descanso, así como la mejora de la iluminación y la seguridad en los parques. Se busca crear espacios más seguros y accesibles para las familias limeñas, promoviendo el esparcimiento, la recreación y un estilo de vida saludable. Algunos de los parques rehabilitados son el Parque de la Exposición, el Parque Castilla y el Parque Kennedy.",
    date: "2024-03-25",
    type: "article",
    shortDescription: "Mejora y mantenimiento de parques en Lima.",
    gallery: [
      {
        id: 6,
        title: "Parques de Lima",
        description: "Parques rehabilitados bajo la gestión de López Aliaga.",
        url: "/public/parque.jpg",
      },
    ],
  },
  {
    id: 7,
    title: "Programa de Ollas Comunes",
    content:
      "El programa de ollas comunes es una medida de apoyo social implementada por la Municipalidad de Lima, que tiene como objetivo asistir a las poblaciones más vulnerables de la ciudad. Con un presupuesto de 80 millones de soles, se ha logrado fortalecer más de 1,000 ollas comunes, brindando alimentos de primera necesidad a miles de familias en situación de pobreza. El programa incluye también capacitaciones en nutrición y manejo de alimentos, buscando no solo paliar el hambre, sino también mejorar la calidad de la dieta de los beneficiarios.",
    date: "2024-05-10",
    type: "article",
    shortDescription: "Apoyo a las ollas comunes en Lima.",
    gallery: [
      {
        id: 7,
        title: "Ollas Comunes",
        description: "Programa de apoyo a las ollas comunes en Lima.",
        url: "/public/ollas-comunes.jpg",
      },
    ],
  },
  {
    id: 8,
    title: "Proyecto Vía Expresa Sur",
    content:
      "La Vía Expresa Sur es un ambicioso proyecto vial que busca extender la actual Vía Expresa de Paseo de la República hasta el distrito de San Juan de Miraflores. Con una longitud de 12 kilómetros, esta vía permitirá una conexión más rápida y directa entre el sur de Lima y el centro de la ciudad. El proyecto incluye la construcción de puentes elevados, túneles, y pasos a desnivel, así como la modernización del sistema de peajes. Esta obra reducirá los tiempos de viaje y contribuirá a la descongestión de avenidas como Angamos, Benavides y Panamericana Sur.",
    date: "2024-04-12",
    type: "article",
    shortDescription: "Planificación de la Vía Expresa Sur.",
    gallery: [
      {
        id: 8,
        title: "Vía Expresa Sur",
        description: "Render del proyecto de la Vía Expresa Sur.",
        url: "/public/via-expresa-sur.jpg",
      },
    ],
  },
];
