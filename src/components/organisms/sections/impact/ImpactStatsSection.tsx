import { stats } from "../../../../constants/DataStats";
import { ImpactStatCard } from "../../../molecules/impact/ImpactStatCard";
import { ImpactTextBlock } from "../../../molecules/impact/ImpactTextBlock";

export const ImpactStatsSection = () => {
  return (
    <section id="impact" className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      
      {/* ── Background Decoration (Very Subtle) ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primario/[0.02] blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
        <div 
          className="absolute inset-0 opacity-[0.01]" 
          style={{ 
            backgroundImage: `linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)`, 
            backgroundSize: '100px 100px' 
          }} 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section (Now Unified) */}
        <div className="mb-20 md:mb-28">
          <ImpactTextBlock />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat: any, index: number) => (
            <ImpactStatCard
              key={stat.label}
              {...stat}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
