import { useState, useEffect } from "react";
import { values } from "../../../../constants/data";
import { ValuesHeader } from "../../../molecules/values/Header";
import { ValueCircle } from "../../../molecules/values/Circle";
import { ValueDetailsCard } from "../../../molecules/values/DetailsCard";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";

export const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<any | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % values.length); // Ciclo infinito
    }, 1000); // Cambia cada 1s

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-10 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <ValuesHeader isVisible={isVisible} />

        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative flex flex-col md:flex-row items-center justify-between gap-20 md:gap-0">

          {/* LINEA HORIZONTAL (solo escritorio) */}
          <div
            className="
              hidden md:block
              absolute top-1/2 left-0 w-full
              -translate-y-1/2
              h-1 bg-acento/40
              pointer-events-none
              -z-10
            "
          />

          {/* CIRCULOS + SEGMENTOS EN MOVIL */}
          {values.map((v, i) => (
            <div
              key={v.id}
              className="relative flex flex-col items-center md:items-center"
            >
              {/* CIRCULO */}
              <ValueCircle
                icon={v.icon}
                label={v.title}
                active={activeIndex === i || selected?.id === v.id}
                onClick={() => setSelected(v)}
              />

              {/* LINEA SEGMENTADA SOLO PARA MOVIL */}
              {i < values.length - 1 && (
                <div className="md:hidden w-1 h-16 bg-acento/30 absolute top-full left-1/2 -translate-x-1/2 mt-4 -z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <ValueDetailsCard value={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
};
