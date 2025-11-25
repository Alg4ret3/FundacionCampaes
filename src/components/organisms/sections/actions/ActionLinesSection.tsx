import { TrendingUp, Handshake, Sprout, Lightbulb } from 'lucide-react';
import { actionLines } from '../../../../constants/data';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { ActionLineCard } from "../../../molecules/actions/ActionLineCard";
import { ActionTextBlock } from "../../../molecules/actions/ActionTextBlock.tsx";

const iconMap = {
  'trending-up': TrendingUp,
  'handshake': Handshake,
  'sprout': Sprout,
  'lightbulb': Lightbulb
};

export const ActionLinesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="lineas"
      ref={ref}
      className="py-32 bg-gradient-to-b from-fondo to-[#F5F9F8] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secundario rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* 🔥 MOLÉCULA COMPLETA DE TEXTO */}
        <div className="mb-20 text-center">
          <ActionTextBlock isVisible={isVisible} />
        </div>

        {/* GRID DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {actionLines.map((line, index) => {
            const Icon = iconMap[line.icon as keyof typeof iconMap];
            return (
              <ActionLineCard
                key={line.id}
                line={{ ...line, index }}
                Icon={Icon}
                isVisible={isVisible}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
};
