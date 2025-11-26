import { Badge } from "../../atoms/layout/Badge";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { motion } from "framer-motion";

interface Props {
  isVisible: boolean;
}

export const ImpactTextBlock = ({ isVisible }: Props) => {
  return (
    <div className="mb-12 text-center px-4 sm:px-6 lg:px-8">
      {/* Badge animado */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="mb-6 inline-block"
      >
        <Badge className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-primario/20 text-white/90 font-semibold shadow-sm">
          <span className="w-3 h-3 rounded-full bg-primario animate-pulse"></span>
          <span>Estadísticas de Éxito</span>
        </Badge>
      </motion.div>

      {/* TÍTULO */}
      <Heading
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Nuestro impacto{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primario to-acento drop-shadow-md">
          en números
        </span>
      </Heading>

      {/* PÁRRAFO */}
      <Paragraph
        className={`text-base md:text-lg lg:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed
          transition-all duration-[1000ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
        style={{ transitionDelay: "0.18s" }}
      >
        Resultados tangibles que demuestran nuestro compromiso con la paz sostenible, evidenciando el impacto positivo de cada iniciativa y proyecto que emprendemos. Transformamos vidas y fortalecemos comunidades de manera significativa y duradera.
      </Paragraph>
    </div>
  );
};
