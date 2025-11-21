import { Badge } from "../../atoms/layout/Badge";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";

interface Props {
  isVisible: boolean;
}

export const ValuesHeader = ({ isVisible }: Props) => {
  return (
    <div className="mb-20 text-center">
      <Badge
        className={`mb-6 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-primario"></span>
        <span>Fundamentos</span>
      </Badge>

      {/* TÍTULO */}
      <Heading
        className={`
          text-3xl md:text-4xl lg:text-5xl
          font-extrabold text-center mb-10
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
        Los valores que{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primario to-acento drop-shadow-md">
           nos guían
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
        Nuestros valores representan la esencia de nuestra identidad.  
        Son el punto de partida para cada decisión, proyecto y acción que emprendemos,  
        guiándonos hacia un futuro más humano, responsable y comprometido con el bienestar de nuestro territorio.
      </Paragraph>
    </div>
  );
};
