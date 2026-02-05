import { useState } from "react";
import { activities } from "../../../../constants/DataActivities";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { ActionTextBlock } from "../../../molecules/activities/ActivitiesTextBlock";
import { ActivityCard } from "../../../molecules/activities/ActivityCard";
import { LoadMoreActivities } from "../../../molecules/activities/ActivitiesLoadMore";
import { ActivityDetailsModal } from "../../../molecules/activities/ActivityDetailsModal";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

export const ActivitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [showMore, setShowMore] = useState(false);

  // ESTADO DEL MODAL
  const [selectedActivity, setSelectedActivity] = useState<any | null>(null);

  const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const visibleActivities = showMore ? activities : activities.slice(0, 4);

  return (
    <section id="actividades" ref={ref} className="py-20 md:py-28 lg:py-36 bg-[#F9FBFC] relative overflow-hidden">
      <SectionDivider variant="curve" color="fill-white" className="top-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">

        {/* TÍTULO + DESCRIPCIÓN */}
        <ActionTextBlock isVisible={isVisible} />

        {/* GRID DE ACTIVIDADES - Responsive 1 col mobile, 2 tablet, 3-4 desktop */}
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3
            xl:grid-cols-4
            gap-4 sm:gap-6 md:gap-8 lg:gap-10
            mb-12 sm:mb-14 md:mb-16 lg:mb-20
            transition-all duration-700
          "
        >
          {visibleActivities.map((activity, index) => (
            <ActivityCard
              key={activity.id}
              activity={activity}
              isVisible={isVisible}
              formattedDate={formatDate(activity.date)}
              delay={`${0.2 + index * 0.1}s`}
              onSelect={() => setSelectedActivity(activity)} // ← ABRIR MODAL
            />
          ))}
        </div>

        {/* BOTÓN DE MOSTRAR MÁS */}
        <LoadMoreActivities
          showMore={showMore}
          onToggle={() => setShowMore(!showMore)}
          isVisible={isVisible}
        />
      </div>



      {/* MODAL DE DETALLES */}
      {selectedActivity && (
        <ActivityDetailsModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </section>
  );
};
