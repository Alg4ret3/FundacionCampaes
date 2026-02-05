import React from 'react';

interface SectionDividerProps {
  variant?: 'wave' | 'curve' | 'tilt' | 'separator';
  color?: string;
  className?: string;
  flip?: boolean;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ 
  variant = 'separator', 
  color = 'fill-primario/5', 
  className = "",
  flip = false
}) => {
  const flipClass = flip ? 'rotate-180' : '';

  if (variant === 'separator') {
    return (
      <div className={`w-full flex items-center justify-center py-6 ${className}`}>
        <div className="flex-1 h-px bg-gradient-to-l from-primario/30 to-transparent" />
        <div className="mx-4 flex items-center gap-1.5 opacity-60">
          <div className="w-1.5 h-1.5 rounded-full bg-primario" />
          <div className="w-2.5 h-2.5 rounded-full bg-primario/40 blur-[1px]" />
          <div className="w-1.5 h-1.5 rounded-full bg-primario" />
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-primario/30 to-transparent" />
      </div>
    );
  }

  return (
    <div className={`absolute left-0 w-full overflow-hidden leading-[0] z-20 ${className} ${flipClass}`}>
      {variant === 'wave' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[40px] md:h-[60px] lg:h-[80px] ${color}`}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      )}

      {variant === 'curve' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[40px] md:h-[60px] lg:h-[80px] ${color}`}
        >
          <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
        </svg>
      )}

      {variant === 'tilt' && (
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className={`relative block w-full h-[40px] md:h-[60px] lg:h-[100px] ${color}`}
        >
          <path d="M1200 120L0 16.48V0h1200v120z"></path>
        </svg>
      )}
    </div>
  );
};
