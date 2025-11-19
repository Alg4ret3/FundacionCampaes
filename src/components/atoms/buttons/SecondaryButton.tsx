import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface SecondaryButton {
  label?: string;
  onClick?: () => void;
  index?: number; // para animación escalonada si quieres varios botones
  url?: string; // enlace al grupo de WhatsApp
}

export const SecondaryButton = ({
  label = "Únete a nuestro grupo",
  url = "https://chat.whatsapp.com/tuEnlaceAqui",
  index = 0,
}: SecondaryButton) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: -40, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.5,
        delay: index * 0.1, // animación escalonada
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
      }}
      whileTap={{
        scale: 0.95,
        backgroundColor: "#0F7961",
        color: "#FFFFFF",
      }}
      className="
        relative inline-flex items-center justify-center
        px-4 sm:px-6 py-3 rounded-full border-2 border-secundario
        text-secundario font-semibold overflow-hidden bg-white/5
      "
    >
      {/* Glow animado alrededor del botón */}
      <motion.span
        className="absolute inset-0 rounded-full bg-secundario/20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      />

      {/* Contenido del botón */}
      <span className="relative flex items-center space-x-2 z-10">
        <FaWhatsapp className="w-5 h-5" />
        <span>{label}</span>
      </span>
    </motion.a>
  );
};
