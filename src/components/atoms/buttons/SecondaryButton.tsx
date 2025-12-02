import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

interface SecondaryButton {
  label?: string;
  onClick?: () => void;
  index?: number;
  url?: string;
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
        delay: index * 0.1,
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
      <motion.span
        className="absolute inset-0 rounded-full bg-secundario/20"
        animate={{ opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop" }}
      />

      <span className="relative flex items-center space-x-2 z-10">
        <FaWhatsapp className="w-5 h-5" />
        <span>{label}</span>
      </span>
    </motion.a>
  );
};

/*
  Componente: SecondaryButton
  ---------------------------------------------------------
  Descripción:
    Botón secundario estilo "únete al grupo", ideal para enlaces
    a WhatsApp u otros canales externos. Incluye animaciones con
    Framer Motion y estilo moderno con un borde marcado.

  Props:
    - label: texto del botón (por defecto “Únete a nuestro grupo”).
    - url: enlace externo (abre en nueva pestaña).
    - index: permite animaciones escalonadas si se renderiza en lista.
    - onClick: opcional (usualmente no se usa en <a>).

  Animaciones:
    - Entrada desde la izquierda con opacidad.
    - Hover:
        * scale 1.05
        * shadow suave
    - Tap:
        * scale 0.95
        * cambio de color de fondo
        * color blanco
    - Glow animado con un span absoluto sobre el fondo.

  Estilos:
    - rounded-full para estilo de “píldora”.
    - border-secundario combina con el branding del proyecto.
    - bg-white/5 para un fondo translúcido.
    - Contenido centrado con flex + space-x-2.
    - Icono de WhatsApp incluido por defecto.

  Uso recomendado:
    <SecondaryButton url="https://chat.whatsapp.com/123" label="Únete al grupo" />

    // Para animación escalonada:
    botones.map((b, i) => <SecondaryButton key={i} index={i} {...b} />);
*/
