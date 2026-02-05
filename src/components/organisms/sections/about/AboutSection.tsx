// organisms/AboutSection.tsx
import { InfoCard } from "../../../molecules/about/InfoCard";
import { HorizontalTimeline } from "../../../molecules/about/HorizontalTimeline";
import { Heart, Eye, Handshake, CalendarCheck } from "lucide-react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { Heading } from "../../../atoms/typography/Heading";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

const timeline = [
  {
    year: "2017",
    title: "Fundación de la Organización",
    description:
      "La FUNDACIÓN CAMINOS DE PAZ Y ESPERANZA fue registrada legalmente el 05 de abril de 2017 ante la Cámara de Comercio de Pasto, Nariño, como una entidad sin ánimo de lucro. Su objeto principal es cooperar en la labor social encaminada a la PROMOCIÓN HUMANA y contribuir al desarrollo social, económico y cultural de la región. Esto incluye la formulación de planes y proyectos de educación (Formal, Informal, para el trabajo y desarrollo humano), con un enfoque en la inclusión social y proyección ambiental. Desde sus inicios, la Fundación se ha dedicado a atender a poblaciones vulnerables, como víctimas del conflicto armado, personas con discapacidad, población en situación de desplazamiento, y grupos étnicos.",
    image: "/Image/1.webp",
  },
  {
    year: "2019",
    title: "Expansión Estratégica",
    description:
      "Este período marcó una Expansión Estratégica significativa, ampliando nuestra presencia y el alcance de los programas a 10 nuevas comunidades en Nariño. Esta expansión fortaleció la red de trabajo y permitió aplicar las líneas de acción de la Fundación, como el Desarrollo Socio Económico y Cultural y la Convivencia y Paz , en zonas que requieren atención psicosocial, fomento del espíritu emprendedor, y proyectos de reconciliación y no estigmatización en áreas afectadas por el conflicto armado.",
    image: "/Image/2.webp",
  },
  {
    year: "2021",
    title: "Consolidación Institucional y Alianzas Educativas",
    description:
      "La Fundación recibió un Reconocimiento Nacional por sus iniciativas en promoción de la paz y el bienestar social, consolidando su reputación. Además, consolidó su capacidad formativa a través de convenios con instituciones como el POLITÉCNICO SUR ANDINO. Gracias a esta alianza, la Fundación ofrece capacitaciones, seminarios, cursos y diplomados con personal altamente calificado en áreas clave como Convivencia Escolar, Inclusión Educativa, Neuro psicopedagogía, y la apropiación crítica de las TIC'S en procesos formativos y productivos.",
    image: "/Image/3.webp",
  },
  {
    year: "2025",
    title: "Impacto Actual",
    description:
      "Actualmente, la Fundación mantiene un impacto activo con más de 1000 beneficiarios, enfocándose en sus cuatro líneas de acción principales: Desarrollo Socio Económico y Cultural, Convivencia y Paz, Ambiente Sostenible y en Paz, y Proyecto de Vida Emprendimiento Sostenible. Se están ejecutando proyectos clave, como el Bordado Guatemalteco en Santa Bárbara para la autonomía económica de las mujeres, y proyectos de Agricultura Urbana Sostenible. Este trabajo continuo y su compromiso con la inclusión social y la sostenibilidad buscan lograr la Visión de ser líderes en el desarrollo de proyectos sociales para el año 2027.",
    image: "/Image/4.webp",
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-primario/5 via-fondo to-primario/10 relative overflow-hidden"
    >
      <SectionDivider variant="curve" flip={true} color="fill-fondo" className="top-0" />
      {/* Fondos de glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz ambiental superior */}
        <div className="absolute -top-60 sm:-top-72 md:-top-80 left-1/2 transform -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-primario/5 rounded-full blur-[100px] sm:blur-[130px] md:blur-[150px]" />
        {/* Glow lateral derecho sutil */}
        <div className="absolute top-1/3 -right-32 sm:-right-40 md:-right-48 w-[250px] sm:w-[300px] md:w-[350px] h-[250px] sm:h-[300px] md:h-[350px] bg-primario/15 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
        {/* Luz ambiental inferior */}
        <div className="absolute bottom-0 left-1/3 w-[350px] sm:w-[450px] md:w-[500px] h-[350px] sm:h-[450px] md:h-[500px] bg-primario/15 rounded-full blur-[120px] sm:blur-[150px] md:blur-[160px]" />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        {/* TÍTULO — ANIMACIÓN DESDE LA IZQUIERDA */}
        <Heading
          className={`
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-center mb-12 sm:mb-14 md:mb-16 lg:mb-20
            text-secundario
            transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
            ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }
          `}
          style={{ transitionDelay: "0.05s" }}
        >
          ¿Quiénes hacemos posible{" "}
          <span className="text-primario border-b-2 border-primario/20 pb-1">
            el cambio?
          </span>
        </Heading>

        {/* Tarjetas de Misión, Visión y Compromiso - Vertical on mobile/tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          <InfoCard
            icon={<Heart className="w-7 h-7 text-fondo" />}
            title="Misión"
            description="Contribuir con el desarrollo social, económico, cultural, 
ambiental sostenible, de nuestro territorio, con el 
propósito de disminuir las brechas de desigualdad 
promoviendo la inclusión social, a través de diferentes proyectos encaminados a  
fortalecer el desarrollo humano, la cultura de la paz, la cultura ciudadana, el 
desarrollo tecnológico, Educación formal e informal y construcción de proyectos de 
vida sostenibles, teniendo en cuenta su contexto de vida. "
            delay={0.1}
            isVisible={isVisible}
          />
          <InfoCard
            icon={<Eye className="w-7 h-7 text-fondo" />}
            title="Visión"
            description="En el año 2027, seremos líderes en el desarrollo de 
proyectos sociales, los cuales contribuirán al bienestar y 
desarrollo del territorio, con innovación social, cultura 
ciudadana, tecnología, propiciando la verdadera inclusión 
social y generando sostenibilidad en los diferentes proyectos. "
            delay={0.2}
            isVisible={isVisible}
          />
          <InfoCard
            icon={<Handshake className="w-7 h-7 text-fondo" />}
            title="Compromiso"
            description={`Nos comprometemos a trabajar con ética, transparencia y responsabilidad social, colocando a las comunidades en el centro de nuestras acciones. 
  Esto incluye fomentar la inclusión social, promover la cultura de paz y ciudadanía, impulsar la educación formal e informal, 
  y garantizar la sostenibilidad de los proyectos en concordancia con su contexto de vida. `}
            delay={0.3}
            isVisible={isVisible}
          />
        </div>
      </div>

      {/* Timeline Section - Full Width on Desktop */}
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        {/* Subtitle - Re-centered within its own container if needed, but usually looks good inside a full-width section */}
        <div className="flex items-center justify-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 px-4">
          <CalendarCheck className="w-6 sm:w-7 md:w-8 text-primario mr-2 sm:mr-3" />
          <h3
            className={`
              text-xl sm:text-2xl md:text-3xl lg:text-4xl
              font-bold text-center 
              text-secundario
              transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}
            style={{ transitionDelay: "0.05s" }}
          >
            Conoce Nuestra <span className="text-primario">Historia</span>
          </h3>
        </div>

        {/* The Timeline itself - Full width but with reasonable max for ultra-wide screens */}
        <div className="relative w-full max-w-[1700px] mx-auto overflow-hidden">
          <HorizontalTimeline items={timeline} />
        </div>
      </div>
    </section>
  );
};
