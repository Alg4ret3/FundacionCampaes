// organisms/AboutSection.tsx
import { InfoCard } from "../../../molecules/about/InfoCard";
import { TimelineItem } from "../../../molecules/about/TimelineItem";
import { Heart, Eye, Handshake, CalendarCheck } from "lucide-react";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { Heading } from "../../../atoms/typography/Heading";

const timeline = [
  {
    year: "2017",
    title: "Fundación",
    description: "Inicio de operaciones en el territorio",
  },
  {
    year: "2019",
    title: "Expansión",
    description: "Llegamos a 10 nuevas comunidades",
  },
  {
    year: "2021",
    title: "Reconocimiento",
    description: "Premio nacional a la paz",
  },
  {
    year: "2025",
    title: "Presente",
    description: "Más de 1000 beneficiarios activos",
  },
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-20 bg-fondo relative overflow-hidden"
    >
      {/* Fondos de glow */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Luz ambiental superior */}
        <div className="absolute -top-80 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-primario/5 rounded-full blur-[150px]" />
        {/* Glow lateral derecho sutil */}
        <div className="absolute top-1/3 -right-40 w-[300px] h-[300px] bg-primario/15 rounded-full blur-[100px]" />
        {/* Luz ambiental inferior */}
        <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-primario/15 rounded-full blur-[160px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* TÍTULO — ANIMACIÓN DESDE LA IZQUIERDA */}
        <Heading
          className={`
            text-3xl md:text-4xl lg:text-5xl
            font-extrabold text-center mb-12
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primario to-acento drop-shadow-md">
            el cambio?
          </span>
        </Heading>

        {/* Tarjetas de Misión, Visión y Compromiso */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
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

        {/* Timeline */}
        <div className="bg-fondo rounded-2xl p-8 shadow-lg relative z-10">
          <div className="flex items-center justify-center mb-8">
            <CalendarCheck className="w-8 h-8 text-primario mr-3" />
            <h3 className="text-2xl font-bold text-primario">
              Nuestra Historia
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primario hidden md:block"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <TimelineItem
                  key={item.year}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  index={index}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
