import { Activity, Program, TeamMember, Value, ActionLine } from '../types';

export const values: Value[] = [
  {
    id: "1",
    title: "Ética",
    description:
      "La Ética constituye el pilar inquebrantable de nuestra conducta institucional. Promovemos una actuación absolutamente transparente, honesta y coherente en todos los niveles operacionales, garantizando la confianza con las comunidades, fortaleciendo la credibilidad de nuestras alianzas estratégicas y asegurando una gobernanza responsable. Este principio rector es fundamental para la construcción de relaciones sostenibles y la priorización constante del bienestar colectivo, cimentando un trabajo íntegro y digno.",
    icon: "scale",
  },
  {
    id: "2",
    title: "Responsabilidad",
    description:
      "Asumimos la Responsabilidad como un compromiso intrínseco de nuestra misión, ejecutando cada tarea y promesa con disciplina, sentido del deber y la más alta entrega. Reconocemos plenamente el impacto inherente de nuestras intervenciones en el territorio, lo cual nos obliga a liderar procesos que no solo cumplan los objetivos definidos, sino que también generen transformaciones sociales reales, medibles y sostenibles. Nuestro compromiso es responder con diligencia y empatía ante las complejas necesidades de las comunidades.",
    icon: "handshake",
  },
  {
    id: "3",
    title: "Solidaridad",
    description:
      "La Solidaridad es la herramienta estratégica para la cohesión social, enfocada en fomentar la unión, el apoyo mutuo y la cooperación intersectorial. Concebimos este valor como un motor esencial para superar desafíos complejos, ya que la acción colectiva y el fortalecimiento del tejido social abren un camino expedito hacia la creación de oportunidades duraderas. Es nuestro deber promover la colaboración para alcanzar la paz sostenible y garantizar un futuro más justo para la población..",
    icon: "users",
  },
  {
    id: "4",
    title: "Respeto",
    description:
      "El Respeto es el axioma fundamental que guía nuestra interacción con el ecosistema social y ambiental. Implica el reconocimiento y la alta valoración de la dignidad humana, así como de la diversidad cultural, étnica y social de cada territorio intervenido. Este principio es indispensable para diseñar e implementar prácticas seguras, inclusivas y participativas, donde cada voz y perspectiva sea tratada con la sensibilidad y atención que merece, estableciendo la base irrenunciable para la convivencia pacífica y el desarrollo humano integral.",
    icon: "sprout",
  },
];


export const actionLines: ActionLine[] = [
  {
    id: '1',
    title: 'Desarrollo socioeconómico y cultural',
    description: 'Desarrollo de proyectos para la conservación y preservación del ambiente, como también el desarrollo de proyectos para fomentar danza y teatro, la creatividad y espíritu emprendedor y la atención psicosocial, a todas la personas víctimas del conflicto armado en Colombia, con profesionales de la Psicología, Terapia ocupacional, Trabajadores sociales, y profesionales en las diferentes áreas del conocimiento.',
    icon: 'trending-up'
  },
  {
    id: '2',
    title: 'Convivencia y paz',
    description: 'Con el desarrollo de programas como diplomados en derechos humanos, reconciliación y no estigmatización de los zonas donde hubo enfrentamientos entre grupos al margen de la ley y el ejército nacional de Colombia. Proyectos como mingas ambientales por la paz, con la siembra de especies nativas en los páramos y bosques que fueron talados con el fin de buscar sostenibilidad para las familias con la venta del carbón y también la creación de caminos que facilitaban el acceso y que hoy necesitan ser reforestadas.',
    icon: 'handshake'
  },
  {
    id: '3',
    title: 'Ambiente sostenible y en paz',
    description: 'Construcción social de PRAES Y PROCEDAS, con la conformación de equipos de trabajo que ayuden al mejoramiento y restauración de las zonas verdes, paramos, lagunas, humedales y mejorar todos los procesos ambientales, a través de la educación ambiental, con la realización de cursos y diplomados. Buscar el apoyo de líderes que ayuden a través del trabajo voluntario, en los diferentes procesos ambientales, como jóvenes del ambiente y la paz, guardianes del planeta y la paz.',
    icon: 'sprout'
  },
  {
    id: '4',
    title: 'Emprendimiento sostenible',
    description: 'Promover y coordinar con otras instituciones gubernamentales y no gubernamentales a nivel municipal, departamental, nacional e internacional, procesos de educación y capacitación,  en diferentes ámbitos  como son: familiar, educativo, social, laboral, ambiental, cultural, deportivo, recreativo y productivo para la formación en los diferentes niveles de educación a la primera infancia, preescolar, básica, media, educación técnica, cursos, 	actualizaciones, 	diplomados 	en cualquier área del conocimiento, logrando su inclusión  al sistema productivo sostenible, generando autonomía familiar, social y económica de la población anteriormente mencionada.  Para esta línea de acción se viene 	trabajando 	con 	mujeres 	en 	el corregimiento de Santa Bárbara, el proyecto de bordado guatemalteco y poder vender estos cuadros, a fin de que las familias sean sostenibles.',
    icon: 'lightbulb'
  }
];

export const programs: Program[] = [
  {
    id: '1',
    title: 'Escuela de Paz',
    description: 'Formación en resolución de conflictos y construcción de paz para jóvenes y adultos',
    image: 'https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg',
    category: 'social'
  },
  {
    id: '2',
    title: 'Reforestación Comunitaria',
    description: 'Recuperación de bosques nativos con participación activa de las comunidades',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
    category: 'ambiental'
  },
  {
    id: '3',
    title: 'Emprendimiento Verde',
    description: 'Apoyo a negocios sostenibles que generen impacto social y ambiental positivo',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    category: 'educativo'
  },
  {
    id: '4',
    title: 'Huertos Urbanos',
    description: 'Creación de espacios de cultivo comunitario para la seguridad alimentaria',
    image: 'https://images.pexels.com/photos/4505447/pexels-photo-4505447.jpeg',
    category: 'ambiental'
  },
  {
    id: '5',
    title: 'Liderazgo Comunitario',
    description: 'Formación de líderes comprometidos con el desarrollo territorial',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'social'
  },
  {
    id: '6',
    title: 'Educación Ambiental',
    description: 'Sensibilización sobre el cuidado del medio ambiente en escuelas y comunidades',
    image: 'https://images.pexels.com/photos/8923108/pexels-photo-8923108.jpeg',
    category: 'educativo'
  }
];

export const activities: Activity[] = [
  {
    id: '1',
    title: 'Jornada de Reforestación',
    description: 'Plantamos 500 árboles nativos con la participación de 100 voluntarios de la comunidad',
    date: '2025-10-15',
    image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg',
    category: 'ambiental'
  },
  {
    id: '2',
    title: 'Taller de Resolución de Conflictos',
    description: 'Capacitación a 50 líderes comunitarios en técnicas de mediación y diálogo',
    date: '2025-10-08',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    category: 'social'
  },
  {
    id: '3',
    title: 'Feria de Emprendimiento Sostenible',
    description: 'Exposición de 30 emprendimientos verdes locales con más de 500 visitantes',
    date: '2025-09-22',
    image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg',
    category: 'educativo'
  },
  {
    id: '4',
    title: 'Limpieza de Quebradas',
    description: 'Recuperación de 3 kilómetros de fuentes hídricas con participación comunitaria',
    date: '2025-09-10',
    image: 'https://images.pexels.com/photos/9324335/pexels-photo-9324335.jpeg',
    category: 'ambiental'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'María González',
    role: 'Directora Ejecutiva',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
  },
  {
    id: '2',
    name: 'Carlos Ramírez',
    role: 'Coordinador de Programas',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
  },
  {
    id: '3',
    name: 'Ana Martínez',
    role: 'Líder de Proyectos Ambientales',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg'
  },
  {
    id: '4',
    name: 'Juan Torres',
    role: 'Coordinador de Convivencia',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg'
  }
];

export const galleryImages = [
   "Image/2.jpg",
   "Image/3.jpg",
   "Image/4.jpg",
   "Image/5.jpg",
   "Image/1.jpg",

   
];
