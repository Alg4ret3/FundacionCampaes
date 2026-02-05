import { Badge } from "../../atoms/layout/Badge";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";

interface TestimonialsTextBlockProps {
  isVisible: boolean;
  titleClassName?: string;
  subtitleClassName?: string;
}

export const TestimonialsTextBlock = ({ 
  isVisible, 
  titleClassName = "", 
  subtitleClassName = "" 
}: TestimonialsTextBlockProps) => {
  return (
    <div className="mb-20 text-center">
      <Badge
        className={`mb-6 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-primario"></span>
        <span>Historias de impacto</span>
      </Badge>

      {/* TÍTULO */}
      <Heading
        className={`
          ${titleClassName || "text-3xl md:text-4xl lg:text-5xl font-bold"}
          text-center mb-10 text-secundario
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Voces de quienes{" "}
        <span className="text-primario">
          ya dieron el paso
        </span>
      </Heading>

      {/* PÁRRAFO */}
      <Paragraph
        className={`
          ${subtitleClassName || "text-base md:text-lg"}
          text-texto/70 max-w-3xl mx-auto leading-relaxed
          transition-all duration-[1000ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        `}
        style={{ transitionDelay: "0.18s" }}
      >
        Conoce las historias de quienes confiaron en nosotros y experimentaron
        un cambio real. Sus experiencias reflejan nuestro compromiso y la pasión que ponemos en cada proyecto.
      </Paragraph>
    </div>
  );
};
