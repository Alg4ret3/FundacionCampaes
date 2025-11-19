import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { useEffect, useState } from "react";

export const HeroTextBlock = ({ isVisible }) => {
  const [run, setRun] = useState(false);
  const [years, setYears] = useState(0);

  useEffect(() => {
    if (isVisible) {
      setTimeout(() => setRun(true), 100);

      // Contador animado de 0 → 8
      let start = 0;
      const end = 8;
      const duration = 1000; 
      const frameRate = 30;

      const increment = end / (duration / frameRate);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setYears(Math.floor(start));
      }, frameRate);

      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <div className="flex flex-col">

      {/* TÍTULO — ANIMACIÓN DESDE LA IZQUIERDA */}
      <Heading
        className={`
          text-5xl md:text-6xl lg:text-7xl 
          mb-6 font-extrabold leading-snug
          text-secundario
          transition-all duration-[1100ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
        `}
        style={{ transitionDelay: "0.05s" }}
      >
        Construyendo
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-primario to-secundario">
          paz sostenible
        </span>
        desde nuestro territorio
      </Heading>

      {/* PÁRRAFO */}
      <Paragraph
        className={`
          text-lg md:text-xl text-texto/80 max-w-2xl
          transition-all duration-[1000ms] ease-[cubic-bezier(.16,.84,.44,1)]
          ${run ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
        style={{ transitionDelay: "0.18s" }}
      >
        Durante más de 8 años, hemos trabajado incansablemente en la construcción
        de paz sostenible, el desarrollo socioeconómico y la protección del
        ambiente en nuestros territorios.
      </Paragraph>

      {/* TIMELINE + CONTADOR */}
      <div className="mt-4 flex items-center gap-3">

        {/* Línea animada */}
        <div
          className={`
            h-[4px] rounded-full bg-primario/80 origin-left
            transition-all duration-[1200ms] ease-[cubic-bezier(.16,.84,.44,1)]
            ${run ? "opacity-100 scale-x-100 w-28" : "opacity-0 scale-x-0 w-0"}
          `}
          style={{ transitionDelay: "0.32s" }}
        />

        {/* Contador numérico */}
        <span
          className={`
            text-primario font-bold text-xl tracking-wide
            transition-all duration-[900ms]
            ${run ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
          style={{ transitionDelay: "0.55s" }}
        >
          {years} años
        </span>
      </div>
    </div>
  );
};
