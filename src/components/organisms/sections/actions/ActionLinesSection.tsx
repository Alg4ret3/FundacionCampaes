import { Sprout, Lightbulb, BookOpen, Heart, Palette } from 'lucide-react';
import { actionLines } from '../../../../constants/DataActionLine.ts';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { ActionLineCard } from "../../../molecules/actions/ActionLineCard";
import { ActionTextBlock } from "../../../molecules/actions/ActionTextBlock.tsx";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

const iconMap = {
  'book-open': BookOpen,
  'palette': Palette,
  'sprout': Sprout,
  'heart': Heart,
  'lightbulb': Lightbulb
};

export const ActionLinesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="lineas"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 bg-[#F4F7F8] relative overflow-hidden"
    >
      {/* Divisor superior - Tilt shape */}
      <SectionDivider variant="tilt" flip={true} color="fill-white" className="top-0" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">

        {/* 🔥 MOLÉCULA COMPLETA DE TEXTO */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center">
          <ActionTextBlock isVisible={isVisible} />
        </div>

        {/* GRID DE TARJETAS - Vertical on mobile/tablet, 2 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
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
