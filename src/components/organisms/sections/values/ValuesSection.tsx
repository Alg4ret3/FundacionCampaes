import { useState, useEffect } from "react";
import { Value } from "../../../../types";
import { values } from "../../../../constants/DataValues";
import { ValuesHeader } from "../../../molecules/values/Header";
import { ValueCircle } from "../../../molecules/values/Circle";
import { ValueDetailsCard } from "../../../molecules/values/DetailsCard";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

export const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<Value | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % values.length); // Ciclo infinito
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="values" ref={ref} className="py-20 md:py-28 lg:py-36 relative overflow-hidden bg-white">
      <SectionDivider variant="curve" color="fill-fondo" className="top-0 -translate-y-[99%]" />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <ValuesHeader isVisible={isVisible} />

        {/* CONTENEDOR PRINCIPAL */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-14 md:gap-16 lg:gap-0">
          
          {values.map((v, i) => (
            <div
              key={v.id}
              className="relative flex flex-col lg:flex-row items-center w-full lg:w-auto flex-1 last:flex-none"
            >
              {/* CIRCULO Y LABEL */}
              <div className="relative flex flex-col items-center">
                <ValueCircle
                  icon={v.icon}
                  label={v.title}
                  active={activeIndex === i || selected?.id === v.id}
                  onClick={() => setSelected(v)}
                />

                {/* LINEA VERTICAL (Mobile/Tablet) */}
                {i < values.length - 1 && (
                  <div className="lg:hidden w-[2px] h-12 sm:h-14 md:h-16 bg-gradient-to-b from-acento/60 to-transparent absolute top-full left-1/2 -translate-x-1/2 mt-2 z-0" />
                )}
              </div>

              {/* LINEA HORIZONTAL DE UNIÓN (Escritorio) */}
              {i < values.length - 1 && (
                <div className="hidden lg:block flex-1 h-[3px] mx-4 -translate-y-7 bg-gradient-to-r from-acento/60 via-acento/30 to-transparent rounded-full z-0" />
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
