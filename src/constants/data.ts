import { Activity, Program, TeamMember, Value, ActionLine } from '../types';

export const values: Value[] = [
  {
    id: '1',
    title: 'Ética',
    description:
      'Actuamos con integridad, transparencia y coherencia en cada una de nuestras acciones, fomentando la confianza y el respeto mutuo dentro y fuera de la organización. Creemos que la ética es la base para construir relaciones sostenibles y generar paz en nuestro territorio.',
    icon: 'shield-check'
  },
  {
    id: '2',
    title: 'Responsabilidad',
    description:
      'Actuamos con integridad, transparencia y coherencia en cada una de nuestras acciones, fomentando la confianza y el respeto mutuo dentro y fuera de la organización. Creemos que la ética es la base para construir relaciones sostenibles y generar paz en nuestro territorio.',
    icon: 'shield-check',
  },
  {
    id: '3',
    title: 'Solidaridad',
     description:
      'Promovemos la colaboración, el apoyo mutuo y la empatía entre las personas y los territorios. Creemos que el trabajo conjunto transforma realidades, fortalece vínculos comunitarios y abre caminos hacia una paz duradera.',
    icon: 'heart',
  },
  {
    id: '4',
    title: 'Respeto',
    description:
      'Valoramos la diversidad, la dignidad humana y las diferencias culturales como pilares para la convivencia. Nuestra labor se orienta a crear espacios seguros e inclusivos donde todas las voces sean escuchadas y valoradas.',
    icon: 'leaf',
  }
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
