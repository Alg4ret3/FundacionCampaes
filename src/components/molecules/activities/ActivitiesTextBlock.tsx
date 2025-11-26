import { Badge } from "../../atoms/layout/Badge";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";

interface Props {
  isVisible: boolean;
}

export const ActionTextBlock = ({ isVisible }: Props) => {
  return (
    <div className="mb-20 text-center">
      <Badge
        className={`mb-6 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-primario"></span>
        <span>Propósito</span>
      </Badge>

      {/* TÍTULO */}
      <Heading
        className={`
          text-3xl md:text-4xl lg:text-5xl
          font-extrabold text-center mb-10
          text-secundario
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Nuestra huella en{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primario to-acento drop-shadow-md">
          el futuro
        </span>
      </Heading>

      {/* PÁRRAFO MEJORADO Y CENTRADO */}
      <Paragraph
        className={`
          text-lg md:text-xl text-texto/80 max-w-3xl mx-auto leading-relaxed
          transition-all duration-[1000ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
        style={{ transitionDelay: "0.18s" }}
      >
        Conoce en profundidad las acciones que estamos desarrollando hoy y los
        proyectos que estamos preparando para el mañana. Cada iniciativa nace
        desde el compromiso firme que tenemos con la paz, la sostenibilidad y el
        fortalecimiento de nuestras comunidades. Trabajamos desde el presente
        con una visión clara del futuro, impulsando ideas que transforman,
        construyen y generan oportunidades reales para el bienestar colectivo.
        Este espacio reúne tanto nuestros avances actuales como los sueños y
        planes que guiarán los próximos pasos de nuestro camino.
      </Paragraph>
    </div>
  );
};
