import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "../../atoms/icons/DynamicIcon";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { IoClose } from "react-icons/io5"; // Importamos un ícono de cierre más profesional

// NOTA: Reemplazamos 'BaseCard' por 'motion.div' si BaseCard no soporta Framer Motion.
// Asumiremos que el componente BaseCard es un simple div o que lo reemplazamos por un motion.div para las animaciones.
// Si deseas mantener BaseCard, tendrías que envolverlo con motion(BaseCard).

interface Props {
  value: any;
  onClose: () => void;
}

// Variantes de animación
const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9 },
  visible: { 
    y: 0, 
    opacity: 1, 
    scale: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  },
  exit: { y: 20, opacity: 0, transition: { duration: 0.2 } }
};


export const ValueDetailsCard = ({ value, onClose }: Props) => {
  return (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[999] p-6"
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit" // Usamos exit para la animación de salida
    >
      <motion.div
        className="
          relative max-w-lg w-full p-8 md:p-10 rounded-3xl bg-fondo
          shadow-2xl shadow-black/30 border-t-4 border-primario 
        "
        onClick={(e) => e.stopPropagation()}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* BOTÓN CERRAR - MEJORADO */}
        <button
          className="
            absolute top-3 right-3 p-2 rounded-full 
            text-texto/60 bg-gray-100/70 hover:bg-gray-200 
            transition-all duration-200 hover:text-secundario
          "
          onClick={onClose}
          aria-label="Cerrar detalles del valor"
        >
          <IoClose size={22} />
        </button>

        {/* ICONO PRINCIPAL - MEJORADO */}
        <div
          className="
            w-20 h-20 mx-auto mb-6 rounded-full 
            bg-gradient-to-br from-primario to-secundario/80 
            flex items-center justify-center text-white
            shadow-xl shadow-primario/40 transform -translate-y-2
          "
        >
          <DynamicIcon name={value.icon} className="w-10 h-10" />
        </div>

        {/* TÍTULO - MEJORADO */}
        <Heading
          className="
            text-center text-oscuro mb-3 text-3xl 
            font-extrabold tracking-tight
          "
        >
          {value.title}
        </Heading>

        {/* LÍNEA SEPARADORA SUTIL */}
        <div className="w-16 h-1 bg-primario/50 mx-auto mb-6 rounded-full"></div>

        {/* DESCRIPCIÓN - MEJORADO */}
        <Paragraph
          className="
            text-texto/90 text-center leading-relaxed 
            text-base md:text-lg max-w-md mx-auto
          "
        >
          {value.description}
        </Paragraph>
      </motion.div>
    </motion.div>
  );
};

// NOTA IMPORTANTE: Para que las animaciones 'exit' funcionen, debes envolver este componente
// en el componente padre con <AnimatePresence mode="wait">.
// (Esto se vio en tu componente ValuesSection original, por lo que debería funcionar.)