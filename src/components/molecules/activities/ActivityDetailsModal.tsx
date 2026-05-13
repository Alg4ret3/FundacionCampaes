import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Activity } from "../../../types";

interface Props {
  activity: Activity | null;
  onClose: () => void;
}

export const ActivityDetailsModal = ({ activity, onClose }: Props) => {
  // Bloquear el scroll del cuerpo cuando el modal está abierto
  useEffect(() => {
    if (activity) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [activity]);

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
          className="fixed inset-0 bg-white z-[200] overflow-y-auto scrollbar-hide"
        >
          {/* Close Button: Absolute and minimal */}
          <div className="fixed top-4 right-4 md:top-8 md:right-8 z-50">
            <button
              onClick={onClose}
              aria-label="Cerrar detalle de actividad"
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-black/10 backdrop-blur-md md:bg-transparent text-gray-900 md:text-gray-400 hover:text-primario transition-colors focus:ring-2 focus:ring-primario rounded-full outline-none"
            >
              <X className="w-6 h-6 md:w-8 md:h-8" />
            </button>
          </div>

          <div className="min-h-screen flex flex-col lg:flex-row">

            {/* Left: Immense Image */}
            <div className="lg:flex-1 h-[45vh] lg:h-screen lg:sticky lg:top-0 overflow-hidden bg-white">
               <motion.img 
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={activity.image} 
                alt={`Imagen representativa de ${activity.title}`}
                loading="lazy"
                className="w-full h-full object-cover"
               />
            </div>

            {/* Right: Narrative Content */}
            <div className="lg:flex-1 bg-white px-6 md:px-20 py-16 md:py-32 flex flex-col justify-center">
               <div className="max-w-xl mx-auto space-y-12">
                  
                  {/* Category & Date */}
                  <div className="flex items-center gap-6">
                    <span className="text-primario text-[10px] font-bold uppercase tracking-[0.3em]">
                      {activity.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-200" />
                    <span className="text-gray-400 text-xs font-light">
                      {new Date(activity.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                      })}
                    </span>
                  </div>

                  {/* Title & Description Block */}
                  <div className="space-y-10">
                    <h2 id="activity-modal-title" className="text-3xl md:text-5xl font-bold text-texto tracking-tight leading-tight">
                      {activity.title}
                    </h2>
                    
                    <div className="space-y-8">
                      <p className="text-gray-600 text-lg md:text-xl font-light leading-relaxed">
                        {activity.description}
                      </p>
                      
                      {activity.extraText && (
                        <p className="text-gray-500 text-base font-light leading-relaxed pt-4 border-t border-gray-50">
                          {activity.extraText}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Minimalist Footer Tagline */}
                  <div className="pt-16">
                     <span className="text-[9px] font-medium text-gray-300 uppercase tracking-[0.2em]">
                       Fundación Caminos de Paz y Esperanza
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

