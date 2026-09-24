import { motion } from "framer-motion";
import { useState, useMemo, useCallback } from "react";
import { useContent } from "../../../../context/ContentContext";
import { ActivityDetailsModal } from "../../../molecules/activities/ActivityDetailsModal";
import { Activity } from "../../../../types";

export const ActivitiesSection = () => {
  const { activities } = useContent();
  const [showMore, setShowMore] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const visibleActivities = useMemo(() => {
    return showMore ? activities : activities.slice(0, 6);
  }, [showMore, activities]);

  const handleCloseModal = useCallback(() => {
    setSelectedActivity(null);
  }, []);

  return (
    <section id="actividades" className="bg-white py-24 md:py-48 border-t border-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Editorial Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-display tracking-tight leading-none">
              El Impacto visto
              <br />
              desde el Territorio.
            </h2>
          </div>
        </div>

        {/* ── Mosaic Editorial Layout ── */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {visibleActivities.map((activity, index) => {
            // Determine grid span for mosaic effect
            const isWide = index === 0 || index === 5;
            const isTall = index === 1 || index === 4;
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onClick={() => setSelectedActivity(activity)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedActivity(activity)}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles de la actividad: ${activity.title}`}
                className={`group cursor-pointer flex flex-col outline-none focus-within:ring-2 focus-within:ring-primario focus-within:ring-offset-8 rounded-sm
                  ${isWide ? 'md:col-span-8' : 'md:col-span-4'}
                  ${isTall ? 'md:row-span-2' : ''}
                `}
              >
                <div className={`relative overflow-hidden rounded-sm mb-6 shadow-md shadow-surface group-hover:shadow-primario/10 transition-all duration-700
                  ${isTall ? 'flex-1 aspect-[4/6]' : 'aspect-video'}
                  ${isWide && !isTall ? 'aspect-[16/7]' : ''}
                `}>
                  <img 
                    src={activity.image} 
                    alt={`Proyecto: ${activity.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute top-8 left-8">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-semibold text-gray-700">
                      {activity.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-4 space-y-3">
                  <span className="text-primario font-bold text-[10px] uppercase tracking-widest">
                    {new Date(activity.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-tight group-hover:text-primario transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-2 max-w-xl">
                    {activity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Minimalist Pagination ── */}
        <div className="mt-24 flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            aria-label={showMore ? "Mostrar menos actividades" : "Mostrar más actividades"}
            className="group flex items-center gap-6 outline-none focus:ring-2 focus:ring-primario focus:ring-offset-4 rounded-full px-4 py-2"
          >
             <div className="h-px w-24 bg-gray-100 group-hover:bg-primario transition-all duration-700" />
             <span className="text-primario text-[10px] font-black uppercase tracking-[0.5em]">
              {showMore ? "Contraer" : "Explorar más Historias"}
            </span>
             <div className="h-px w-24 bg-gray-100 group-hover:bg-primario transition-all duration-700" />
          </button>
        </div>

      </div>

      {/* Sidebar Detail Modal */}
      <ActivityDetailsModal
        activity={selectedActivity}
        onClose={handleCloseModal}
      />
    </section>
  );
};
