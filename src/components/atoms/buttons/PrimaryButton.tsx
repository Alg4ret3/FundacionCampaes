import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PrimaryButtonProps {
  label: string;
  onClick?: () => void; // <-- Prop opcional para el click
}

export const PrimaryButton = ({ label, onClick }: PrimaryButtonProps) => (
  <motion.button
    onClick={onClick} // <-- Maneja el click
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ type: "spring", stiffness: 120, damping: 20, duration: 0.6 }}
    whileHover={{
      scale: 1.08,
      y: -3,
      boxShadow: "0px 12px 25px rgba(0, 0, 0, 0.25)",
    }}
    whileTap={{ scale: 0.98 }}
    className="
      group relative inline-flex items-center justify-center
      bg-primario px-8 py-4 rounded-lg font-semibold
      text-white shadow-lg overflow-hidden
    "
  >
    {/* Fondo animado pulsante */}
    <motion.span
      className="absolute inset-0 bg-gradient-to-r from-primario to-secundario opacity-20 rounded-lg"
      animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.25, 0.2] }}
      transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
    />

    {/* Contenido */}
    <span className="relative flex items-center space-x-2">
      <span>{label}</span>
      <motion.span
        className="inline-block"
        animate={{ x: [0, 4, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
      >
        <ArrowRight className="w-5 h-5" />
      </motion.span>
    </span>
  </motion.button>
);
