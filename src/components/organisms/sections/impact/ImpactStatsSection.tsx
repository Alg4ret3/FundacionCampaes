import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { TrendingUp, Users, Leaf, Award } from "lucide-react";
import { ImpactStatCard } from "../../../molecules/impact/ImpactStatCard";
import { ImpactTextBlock } from "../../../molecules/impact/ImpactTextBlock";
import { motion, useMotionValue, useTransform } from "framer-motion";

const stats = [
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

export const ImpactStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  // Movimiento de fondo según mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x1 = useTransform(mouseX, [0, window.innerWidth], [-50, 50]);
  const y1 = useTransform(mouseY, [0, window.innerHeight], [-50, 50]);
  const x2 = useTransform(mouseX, [0, window.innerWidth], [50, -50]);
  const y2 = useTransform(mouseY, [0, window.innerHeight], [50, -50]);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="impact"
      ref={ref}
      className="py-32 bg-gradient-to-r from-secundario via-oscuro to-oscuro text-fondo relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 🌟 Elementos decorativos de fondo */}
      <motion.div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: x1, y: y1 }}
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-tr from-primario via-acento to-secundario opacity-10 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: x2, y: y2 }}
          className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-secundario via-acento to-oscuro opacity-10 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Texto principal */}
        <div className="mb-20 text-center">
          <ImpactTextBlock isVisible={isVisible} />
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <ImpactStatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 0.15} // Delay escalonado más natural
              className="rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-500"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
