import { motion } from "framer-motion";
import { useState } from "react";
import { activities } from "../../../../constants/DataActivities";
import { ActivityDetailsModal } from "../../../molecules/activities/ActivityDetailsModal";
import { Activity } from "../../../../types";

export const ActivitiesSection = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

  const visibleActivities = showMore ? activities : activities.slice(0, 6);

  return (
    <section id="actividades" className="bg-white py-24 md:py-48 border-t border-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Editorial Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-primario" />
              <span className="text-primario text-xs font-bold uppercase tracking-[0.4em]">
                Bitácora de Campo
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase leading-none">
              El Impacto <br /> <span className="text-primario text-2xl md:text-4xl">visto desde el Territorio.</span>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                onClick={() => setSelectedActivity(activity)}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedActivity(activity)}
                tabIndex={0}
                role="button"
                aria-label={`Ver detalles de la actividad: ${activity.title}`}
                className={`group cursor-pointer flex flex-col outline-none focus-within:ring-2 focus-within:ring-primario focus-within:ring-offset-8 rounded-[3rem]
                  ${isWide ? 'md:col-span-8' : 'md:col-span-4'}
                  ${isTall ? 'md:row-span-2' : ''}
                `}
              >
                <div className={`relative overflow-hidden rounded-[3rem] mb-6 shadow-2xl shadow-surface group-hover:shadow-primario/10 transition-all duration-700
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
                    <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-900">
                      {activity.category}
                    </span>
                  </div>
                </div>
                
                <div className="px-4 space-y-3">
                  <span className="text-primario font-bold text-[10px] uppercase tracking-widest">
                    {new Date(activity.date).toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tighter leading-tight group-hover:text-primario transition-colors">
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
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  );
};
