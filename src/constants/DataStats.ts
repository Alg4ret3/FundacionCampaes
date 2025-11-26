import { Award, Users, Leaf, TrendingUp } from "lucide-react";
import { Stats } from "../types";

export const stats: Stats = [
  { 
    icon: Award, 
    value: "8+", 
    label: "Años de Impacto", 
    description: "Trabajando sin cesar por la paz", 
    extraText: "Durante estos años, hemos desarrollado programas educativos, comunitarios y de reconciliación, dejando huella en cientos de familias. Hemos trabajado con líderes locales para fortalecer la cohesión social y fomentar la cultura de paz en distintas regiones, adaptando nuestros proyectos a las necesidades de cada comunidad.", 
    color: "from-primario via-acento to-secundario" 
  },
  { 
    icon: Users, 
    value: "1000+", 
    label: "Beneficiarios Directos", 
    description: "Vidas transformadas", 
    extraText: "Incluye niños, jóvenes y adultos que han recibido apoyo integral en educación, salud y desarrollo social. Gracias a programas de capacitación y acompañamiento, muchas familias han logrado mejorar su calidad de vida, acceder a nuevas oportunidades y fortalecer sus habilidades para la vida y el trabajo.", 
    color: "from-secundario via-acento to-oscuro" 
  },
  { 
    icon: Leaf, 
    value: "50+", 
    label: "Proyectos Ejecutados", 
    description: "En construcción de paz", 
    extraText: "Proyectos enfocados en sostenibilidad ambiental, agricultura, cultura y fortalecimiento de comunidades locales. Cada proyecto se diseña con participación activa de los habitantes, fomentando la autogestión y la preservación de recursos naturales, promoviendo así un desarrollo integral y sostenible a largo plazo.", 
    color: "from-primario via-acento to-secundario" 
  },
  { 
    icon: TrendingUp, 
    value: "20+", 
    label: "Comunidades", 
    description: "Alcance territorial", 
    extraText: "Cobertura en múltiples regiones, promoviendo liderazgo comunitario y desarrollo económico local. Trabajamos de la mano con organizaciones locales para identificar necesidades prioritarias y generar soluciones que fomenten la resiliencia y el crecimiento social, económico y cultural de cada comunidad.", 
    color: "from-secundario via-acento to-oscuro" 
  },
];