// organisms/AboutSection.tsx
import { InfoCard } from "../../../molecules/about/InfoCard";
import { HorizontalTimeline } from "../../../molecules/about/HorizontalTimeline";
import { Heart, Eye, Handshake, CalendarCheck } from "lucide-react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { Heading } from "../../../atoms/typography/Heading";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";
import { timelineData } from "../../../../constants/DataAboutTimeline";
import { aboutInfoData } from "../../../../constants/DataAboutInfo";

const icons = [Heart, Eye, Handshake];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 bg-gradient-to-br from-primario/5 via-fondo to-primario/10 relative overflow-hidden"
    >
      <SectionDivider
        variant="curve"
        flip={true}
        color="fill-fondo"
        className="top-0"
      />
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
          {aboutInfoData.map((info, index) => (
            <InfoCard
              key={index}
              icon={
                index === 0 ? (
                  <Heart className="w-7 h-7 text-fondo" />
                ) : index === 1 ? (
                  <Eye className="w-7 h-7 text-fondo" />
                ) : (
                  <Handshake className="w-7 h-7 text-fondo" />
                )
              }
              title={info.title}
              description={info.description}
              delay={info.delay}
              isVisible={isVisible}
            />
          ))}
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
          <HorizontalTimeline items={timelineData} />
        </div>
      </div>
    </section>
  );
};
