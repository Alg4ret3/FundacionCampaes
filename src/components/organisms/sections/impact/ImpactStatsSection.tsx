import { stats } from "../../../../constants/DataStats";
import { ImpactStatCard } from "../../../molecules/impact/ImpactStatCard";
import { ImpactTextBlock } from "../../../molecules/impact/ImpactTextBlock";

export const ImpactStatsSection = () => {
  return (
    <section id="impact" className="relative bg-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      
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
