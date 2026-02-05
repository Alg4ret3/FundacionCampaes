import { ActionLineHeader } from "./ActionLineHeader";
import { ActionLineFooter } from "./ActionLineFooter";
import { getCategoryStyles } from "../../../utils/CategoryUtils";

import { ActionLine } from "../../../types";

interface ActionLineCardProps {
  line: ActionLine & { index: number };
  isVisible: boolean;
  Icon: React.ElementType;
}

export const ActionLineCard = ({ line, isVisible, Icon }: ActionLineCardProps) => {
  const styles = getCategoryStyles(line.id);

  return (
  <div
    className={`group relative transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${0.3 + line.index * 0.1}s` }}
  >
    {/* Fondo con gradiente y sombra dinámica */}
    <div 
      className={`absolute inset-0 rounded-3xl transform group-hover:scale-105 transition-all duration-700 opacity-20 ${styles.lightGradient}`}
      style={{ boxShadow: `0 20px 50px -12px ${styles.shadowColor}44` }}
    ></div>

    <div className={`relative ${styles.cardBg} backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 border transition-all duration-500 h-full ${styles.border} group-hover:${styles.borderDeep} border-opacity-50 group-hover:border-opacity-100`}>
      {/* Header */}
      <ActionLineHeader Icon={Icon} category={line.id} />

      {/* Título */}
      <h3
        className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${styles.text}`}
      >
        {line.title}
      </h3>

      {/* Descripción */}
      <p className="text-sm sm:text-base text-texto leading-relaxed font-light">
        {line.description}
      </p>

      {/* Footer */}
      <ActionLineFooter subItems={line.subItems} category={line.id} />

    </div>
  </div>
  );
};
