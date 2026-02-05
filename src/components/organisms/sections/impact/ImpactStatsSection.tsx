import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { stats } from "../../../../constants/DataStats";
import { ImpactStatCard } from "../../../molecules/impact/ImpactStatCard";
import { ImpactTextBlock } from "../../../molecules/impact/ImpactTextBlock";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { ExtraTextModal } from "../../../molecules/impact/ExtraTextModal";

export const ImpactStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const controls = useAnimation();
  const [activeStat, setActiveStat] = useState<number | null>(null);

  // 💡 UX: Referencia para detectar si el usuario está interactuando
  const isDragging = useRef(false);

  // Auto-scroll horizontal infinito
  useEffect(() => {
    // Si la sección no está visible o el usuario está arrastrando, no animamos
    if (!isVisible || isDragging.current) return;

    // Reinicia y comienza la animación
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: stats.length * 4,
          ease: "linear",
        },
      },
    });

    // 💡 Dependencia: Incluimos isDragging.current para reanudar si deja de arrastrar
  }, [isVisible, controls]);

  // --- Manejo del Arrastre (Drag UX) ---
  const handleDragStart = () => {
    isDragging.current = true;
    // Detiene la animación automática inmediatamente al arrastrar
    controls.stop();
  };

  const handleDragEnd = () => {
    isDragging.current = false;
    // 💡 UX: Opcional: Podrías reanudar la animación después de un breve retraso si deseas.
    // Por simplicidad, la dejamos detenida hasta el próximo render o si se sale/vuelve a la vista.
  };

  return (
    <section
      id="impact"
      ref={ref}
      className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-oscuro text-fondo relative overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Texto principal */}
        <div className="mb-10 sm:mb-14 md:mb-16 lg:mb-20 text-center">
          <ImpactTextBlock isVisible={isVisible} />
        </div>

        {/* Carrusel horizontal con Drag - Responsive */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing">
          {" "}
          {/* 💡 UX: Feedback visual */}
          <motion.div
            className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 w-max pb-2 sm:pb-3 md:pb-4"
            animate={controls}
            // 💡 UX: Habilitar arrastre
            drag="x"
            dragConstraints={{ left: -1000, right: 0 }} // Limites de arrastre arbitrarios, ajusta según el contenido real
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          >
            {stats.concat(stats).map((stat: any, index: number) => (
              // 💡 UX: Usar una clave más robusta para evitar problemas de re-renderizado en la lista concatenada
              <div
                key={`${stat.label}-${index}`}
                className="min-w-[240px] sm:min-w-[260px] md:min-w-[280px] lg:min-w-[320px] flex-shrink-0" // 💡 UI: Tarjetas responsivas
              >
                <ImpactStatCard
                  {...stat}
                  isVisible={isVisible}
                  // Ajuste de delay basado en el index real (no en la lista concatenada)
                  delay={0.1 + (index % stats.length) * 0.1}
                  onClick={() => setActiveStat(index % stats.length)}
                  className="rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl bg-oscuro/50 
                             hover:shadow-primario/40 hover:scale-[1.03] 
                             transition-all duration-300 cursor-pointer" // 💡 UI: Mejor estilo en hover
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 💡 Modal Refactorizado */}
      <ExtraTextModal
        activeStat={activeStat}
        setActiveStat={setActiveStat}
        stats={stats}
      />
    </section>
  );
};
