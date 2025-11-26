import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";

/**
 * ActivityDetailsModal
 *
 * Componente que muestra un modal con los detalles de una actividad.
 * Incluye:
 * - Imagen principal
 * - Categoría
 * - Título
 * - Fecha
 * - Descripción y texto extra
 *
 * El modal es scrollable si el contenido excede la altura máxima
 * y tiene un botón de cierre siempre visible en la esquina superior derecha.
 *
 * @param {Object} props
 * @param {Object} props.activity - Datos de la actividad
 * @param {string} [props.activity.image] - Imagen principal de la actividad
 * @param {string} props.activity.title - Título de la actividad
 * @param {string} props.activity.category - Categoría de la actividad
 * @param {string|number|Date} props.activity.date - Fecha de la actividad
 * @param {string} props.activity.description - Descripción principal
 * @param {string} [props.activity.extraText] - Texto adicional opcional
 * @param {() => void} props.onClose - Función para cerrar el modal
 *
 * @example
 * <ActivityDetailsModal
 *    activity={{
 *      image: "/img/event.jpg",
 *      title: "Jornada de Reforestación",
 *      category: "ambiental",
 *      date: "2025-10-15",
 *      description: "Plantamos 500 árboles nativos con voluntarios",
 *      extraText: "Se incluyó capacitación ambiental",
 *    }}
 *    onClose={() => setSelectedActivity(null)}
 * />
 */
export const ActivityDetailsModal = ({ activity, onClose }: ActivityDetailsModalProps) => {
  // Variantes de animación para el backdrop
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
  };

  // Variantes de animación para la tarjeta/modal
  const cardVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: { y: 0, opacity: 1, scale: 1, transition: { type: "spring", stiffness: 90, damping: 14 } },
    exit: { y: 20, opacity: 0, transition: { duration: 0.25 } },
  };

  return (
    <motion.div
      className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="relative w-full max-w-3xl bg-fondo rounded-3xl shadow-2xl shadow-black/30
                   border-t-4 border-primario max-h-[95vh] h-full overflow-hidden p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* BOTÓN CERRAR - elegante y moderno, siempre visible */}
        <button
          onClick={onClose}
          aria-label="Cerrar modal"
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center
                     rounded-full bg-white/90 backdrop-blur-sm text-primario
                     shadow-lg shadow-black/20 hover:bg-primario/10 hover:text-secundario
                     transition-all duration-300 z-30"
        >
          <IoClose size={22} />
        </button>

        {/* Contenedor flex para scroll */}
        <div className="flex flex-col h-full overflow-hidden">
          {/* Espacio inicial para evitar que el scroll tape el inicio */}
          <div className="h-4 sm:h-4" />

          {/* Contenido scrollable */}
          <div
            className="flex-grow overflow-y-auto pr-4 sm:pr-6 pt-4 pb-4 sm:pb-8
                       -mr-4 sm:-mr-6 custom-scrollbar"
          >
            {/* Imagen principal */}
            {activity.image && (
              <div className="w-full h-44 sm:h-52 rounded-2xl overflow-hidden shadow-lg mb-6 flex-shrink-0">
                <img src={activity.image} alt={activity.title} className="w-full h-full object-cover" />
              </div>
            )}

            {/* Categoría */}
            <p className="inline-block px-4 py-1 text-xs font-semibold tracking-wide uppercase
                          bg-primario/10 text-primario rounded-full backdrop-blur-sm shadow-sm mb-4">
              {activity.category}
            </p>

            {/* Título */}
            <h2 className="text-3xl font-extrabold text-primario tracking-tight mb-4">
              {activity.title}
            </h2>

            {/* Fecha */}
            <p className="text-base text-secundario/80 font-medium mb-4 flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-primario"></span>
              {new Date(activity.date).toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            {/* Separador */}
            <div className="w-20 h-1 bg-acento/40 rounded-full mb-6"></div>

            {/* Texto extra */}
            {activity.extraText && (
              <p className="text-texto/80 text-base leading-relaxed mt-2 font-sanscustom break-words whitespace-pre-line">
                {activity.extraText}
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
