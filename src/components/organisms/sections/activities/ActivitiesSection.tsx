import { useState } from "react";
import { activities } from "../../../../constants/DataActivities";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { ActionTextBlock } from "../../../molecules/activities/ActivitiesTextBlock";
import { ActivityCard } from "../../../molecules/activities/ActivityCard";
import { LoadMoreActivities } from "../../../molecules/activities/ActivitiesLoadMore";
import { ActivityDetailsModal } from "../../../molecules/activities/ActivityDetailsModal";

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
    <section id="actividades" ref={ref} className="py-20 bg-fondo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* TÍTULO + DESCRIPCIÓN */}
        <ActionTextBlock isVisible={isVisible} />

        {/* GRID DE ACTIVIDADES */}
        <div
          className="
            grid grid-cols-1 md:grid-cols-2 
            gap-10 
            mb-16
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

      {/* CIERRE VISUAL */}
      <div className="mt-16 w-full h-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-acento/10 pointer-events-none" />
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
