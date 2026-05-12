import { ActionLine } from "../types";

export const actionLines: ActionLine[] = [
  {
    id: "educativa",
    title: "Línea Educativa",
    description:
      "Promovemos procesos de formación integral, educación técnica y capacitación en diversos niveles. Trabajamos en alianza con instituciones educativas para ofrecer diplomados y cursos que fortalezcan el conocimiento y las habilidades de nuestra población.",
    icon: "book-open",
    color: "#3B82F6", // Blue
    image: "https://images.pexels.com/photos/1720186/pexels-photo-1720186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subItems: [
      "Convenios con Politécnico Sur Andino",
      "Educación para el Trabajo",
      "Cursos y Diplomados",
      "Inclusión Educativa"
    ],
  },
  {
    id: "cultural",
    title: "Línea Cultural",
    description:
      "Fomentamos la expresión artística, el teatro y la danza como herramientas de transformación social. Preservamos las tradiciones nariñenses y promovemos el bordado típico y la identidad cultural en nuestras comunidades.",
    icon: "palette",
    color: "#F59E0B", // Orange
    image: "https://images.pexels.com/photos/2545339/pexels-photo-2545339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subItems: [
      "Danzas y Tradiciones",
      "Bordado Típico Nariñense",
      "Teatro y Creatividad",
      "Gestión Cultural"
    ],
  },
  {
    id: "ambiental",
    title: "Línea Ambiental",
    description:
      "Desarrollamos proyectos de conservación, reforestación y educación ambiental. Buscamos la sostenibilidad mediante el cuidado de páramos, lagunas y la implementación de agricultura urbana sostenible.",
    icon: "sprout",
    color: "#10B981", // Emerald
    image: "https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subItems: [
      "Mingas Ambientales",
      "Agricultura Urbana Sostenible",
      "Guardianes del Planeta",
      "Conservación de Páramos"
    ],
  },
  {
    id: "social",
    title: "Línea Social",
    description:
      "Brindamos atención psicosocial y promovemos la convivencia y paz. Trabajamos con víctimas del conflicto armado y poblaciones vulnerables para fortalecer el tejido social y la reconciliación.",
    icon: "heart",
    color: "#F43F5E", // Rose
    image: "https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subItems: [
      "Atención Psicosocial Profesional",
      "Derechos Humanos",
      "Juego por la Paz",
      "Población con Discapacidad"
    ],
  },
  {
    id: "productiva",
    title: "Línea Productiva",
    description:
      "Impulsamos el emprendimiento sostenible y la autonomía económica de las familias. Apoyamos proyectos de mujeres emprendedoras y fomentamos la inclusión al sistema productivo.",
    icon: "lightbulb",
    color: "#8B5CF6", // Violet
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    subItems: [
      "Mujeres Emprendedoras",
      "Innovación Social",
      "Granyas Sostenibles",
      "Autonomía Económica"
    ],
  },
];
