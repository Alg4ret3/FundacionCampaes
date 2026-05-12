import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Activity } from "../../../types";

interface Props {
  activity: Activity | null;
  onClose: () => void;
}

export const ActivityDetailsModal = ({ activity, onClose }: Props) => {
  return (
    <AnimatePresence>
      {activity && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="activity-modal-title"
          className="fixed inset-0 bg-white z-[200] overflow-y-auto"
        >
          {/* Close Button: Absolute and minimal */}
          <div className="fixed top-8 right-8 z-50">
             <button 
              onClick={onClose}
              aria-label="Cerrar detalle de actividad"
              className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-primario transition-colors focus:ring-2 focus:ring-primario rounded-full outline-none"
             >
               <X className="w-8 h-8" />
             </button>
          </div>

          <div className="min-h-screen flex flex-col lg:flex-row">
            
            {/* Left: Immense Image */}
            <div className="lg:flex-1 h-[50vh] lg:h-screen sticky top-0 overflow-hidden">
               <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={activity.image} 
                alt={`Imagen representativa de ${activity.title}`}
                loading="lazy"
                className="w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:flex-1 bg-white px-8 md:px-20 py-20 md:py-32 flex flex-col justify-center">
               <div className="max-w-xl mx-auto space-y-12">
                  
                  {/* Category & Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-primario text-[10px] font-black uppercase tracking-[0.6em]">
                      {activity.category}
                    </span>
                    <span className="text-gray-300 text-sm font-light">
                      {new Date(activity.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 id="activity-modal-title" className="text-5xl md:text-7xl font-black text-gray-900 uppercase tracking-tighter leading-[0.85]">
                    {activity.title}
                  </h2>

                  {/* Divider */}
                  <div className="w-16 h-1 bg-primario" aria-hidden="true" />

                  {/* Description */}
                  <div className="space-y-8">
                    <p className="text-gray-600 text-xl md:text-2xl font-light leading-relaxed">
                      {activity.description}
                    </p>
                    
                    {activity.extraText && (
                      <div className="pt-10 border-t border-gray-50">
                        <p className="text-gray-500 text-lg font-light leading-relaxed whitespace-pre-line">
                          {activity.extraText}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Footer Decoration */}
                  <div className="pt-20">
                     <span className="text-[10px] font-black text-primario/40 uppercase tracking-[0.5em]">
                       Fundación Campaes — Territorio de Paz
                     </span>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
