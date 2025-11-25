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
          text-3xl md:text-4xl lg:text-5xl
          font-extrabold text-center mb-10
          text-secundario
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Líneas estratégicas{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primario to-acento drop-shadow-md">
          de acción
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
        Nuestra labor se articula en torno a cuatro pilares estratégicos que garantizan la máxima eficiencia y sostenibilidad en la construcción de paz. Estos pilares no operan de forma aislada, sino que se integran de manera sistémica para generar sinergias y multiplicar los resultados en las comunidades.
      </Paragraph>
    </div>
  );
};
