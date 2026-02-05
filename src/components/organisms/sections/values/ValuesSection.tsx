import { useState, useEffect } from "react";
import { values } from "../../../../constants/DataValues";
import { ValuesHeader } from "../../../molecules/values/Header";
import { ValueCircle } from "../../../molecules/values/Circle";
import { ValueDetailsCard } from "../../../molecules/values/DetailsCard";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

export const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selected, setSelected] = useState<any | null>(null);
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

        {/* CONTENEDOR PRINCIPAL - Vertical on mobile/tablet, Horizontal ONLY on desktop */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-14 md:gap-16 lg:gap-0">
          {/* LINEA HORIZONTAL (solo escritorio) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 h-1 bg-acento/40 pointer-events-none -z-10" />

          {/* CIRCULOS + SEGMENTOS */}
          {values.map((v, i) => (
            <div
              key={v.id}
              className="relative flex flex-col items-center w-full lg:w-auto flex-1 lg:flex-none"
            >
              {/* CIRCULO */}
              <ValueCircle
                icon={v.icon}
                label={v.title}
                active={activeIndex === i || selected?.id === v.id}
                onClick={() => setSelected(v)}
              />

              {/* LINEA SEGMENTADA PARA MOBILE Y TABLET */}
              {i < values.length - 1 && (
                <div className="lg:hidden w-1 h-12 sm:h-14 md:h-16 bg-acento/30 absolute top-full left-1/2 -translate-x-1/2 mt-2 -z-10" />
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
