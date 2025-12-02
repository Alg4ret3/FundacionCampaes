// atoms/layout/ModalBase.tsx
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import React from "react";

/**
 * @fileoverview ModalBase - Átomo para la estructura base de un modal con animaciones.
 * @version 1.1.0
 * @author Gemini AI
 * @date 2025-11-26
 */

interface ModalBaseProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
  maxW?: string;
}

const backdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const card = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 90, damping: 14 },
  },
  exit: { y: 20, opacity: 0, transition: { duration: 0.25 } },
};

export const ModalBase = ({
  open,
  onClose,
  children,
  className = "",
  maxW = "max-w-3xl",
}: ModalBaseProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className={`
              relative w-full ${maxW}
              bg-fondo rounded-3xl shadow-2xl shadow-black/30
              border-t-4 border-primario 
              max-h-[95vh]
              overflow-hidden
              ${className}
            `}
            onClick={(e) => e.stopPropagation()}
            variants={card}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              onClick={onClose}
              aria-label="Cerrar modal"
              className="
                absolute top-4 right-4
                w-10 h-10
                flex items-center justify-center
                rounded-full
                bg-white/90 backdrop-blur-sm
                text-primario
                shadow-lg shadow-black/20
                hover:bg-primario/10 hover:text-secundario
                transition-all duration-300
                z-30
              "
            >
              <IoClose size={22} />
            </button>

            <div
              className={`
                p-6 sm:p-8 
                max-h-[95vh]
                overflow-y-auto 
                custom-scrollbar 
                pt-12 sm:pt-16
              `}
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

/*
Componente ModalBase que proporciona la estructura general de un modal con animaciones usando Framer Motion.
Incluye un fondo desenfocado, una tarjeta central animada y un botón de cierre fijo.
Permite personalizar el ancho máximo mediante maxW y aplicar estilos adicionales con className.
El contenido interno tiene desplazamiento vertical y paddings calculados para evitar que el botón de cierre lo cubra.
Ideal para construir modales reutilizables con transiciones fluidas y comportamiento accesible.
*/
