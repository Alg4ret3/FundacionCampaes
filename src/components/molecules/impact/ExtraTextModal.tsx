// src/components/molecules/impact/ExtraTextModal.tsx

import { useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react'; 

interface Stat { 
  label: string; 
  extraText: string; 
  // otras props opcionales
}

interface ExtraTextModalProps {
  activeStat: number | null;
  setActiveStat: (index: number | null) => void;
  stats: Stat[]; 
}

export const ExtraTextModal = ({ activeStat, setActiveStat, stats }: ExtraTextModalProps) => {

  const handleClose = useCallback(() => {
    setActiveStat(null);
  }, [setActiveStat]);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleClose]);

  const modalContent = activeStat !== null ? stats[activeStat] : null;
  if (!modalContent) return null;

  return (
    <AnimatePresence>
      {activeStat !== null && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[1000] p-4 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            className="
              relative bg-gradient-to-br from-fondo/90 to-fondo/95 rounded-3xl 
              p-6 sm:p-8 md:p-10 max-w-lg w-full shadow-2xl shadow-primario/20 
              border border-primario/20 overflow-y-auto max-h-[90vh] flex flex-col
            "
            initial={{ y: 50, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de cierre */}
            <button
              onClick={handleClose}
              className="
                absolute top-3 right-3 sm:top-5 sm:right-5 p-2 rounded-full 
                bg-primario/10 hover:bg-primario/20 text-primario transition-all duration-300 
                focus:outline-none focus:ring-2 focus:ring-primario/50
              "
              aria-label="Cerrar ventana"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Contenido principal */}
            <div className="mt-4 sm:mt-0 text-center">
              <h3 
                id="modal-title"
                className="text-primario text-2xl sm:text-3xl font-extrabold mb-4 border-b border-primario/30 pb-2 leading-tight"
              >
                {modalContent.label}
              </h3>

              <p className="text-black text-base sm:text-lg leading-relaxed font-light mt-4">
                {modalContent.extraText}
              </p>
            </div>

            {/* Indicador visual centrado */}
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-center">
              <span className="bg-primario/60 px-6 py-2 rounded-full text-white/90 text-sm font-semibold tracking-wide shadow-inner">
                Detalle
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
