import { Badge } from "../../atoms/layout/Badge";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";

interface Props {
  isVisible: boolean;
}

export const ActionTextBlock = ({ isVisible }: Props) => {
  return (
    <div className="mb-20 text-center">
      {/* Badge */}
      <Badge
        className={`mb-6 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-primario"></span>
        <span>Estrategia</span>
      </Badge>

      {/* TÍTULO */}
      <Heading
        className={`
          text-3xl md:text-4xl
          font-bold text-center mb-10
          text-secundario
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Líneas estratégicas{" "}
        <span className="text-primario border-b-2 border-primario/10 pb-1">
          de acción
        </span>
      </Heading>

      {/* PÁRRAFO MEJORADO Y CENTRADO */}
      <Paragraph
        className={`
          text-base md:text-lg text-texto/70 max-w-3xl mx-auto leading-relaxed
          transition-all duration-[1000ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "0.18s" }}
      >
        Nuestra labor se articula en torno a cuatro pilares estratégicos que garantizan la máxima eficiencia y sostenibilidad en la construcción de paz.
      </Paragraph>
    </div>
  );
};
