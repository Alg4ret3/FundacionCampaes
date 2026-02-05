// atoms/icons/IconWrapper.tsx
import { motion } from "framer-motion";

interface IconWrapperProps {
  icon: React.ReactNode;
  className?: string;
  variant?: "brand" | "none";
}

export const IconWrapper = ({ 
  icon, 
  className = "", 
  variant = "brand" 
}: IconWrapperProps) => {
  const floatVariants = {
    float: {
      y: [0, -6, 0],      // movimiento vertical sutil
      rotate: [0, 3, -3, 0], // pequeña rotación
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop" as const,
        ease: "easeInOut" as const,
      },
    },
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9, rotate: -5 },
  };

  const variantStyles = variant === "brand" 
    ? "bg-gradient-to-br from-primario to-acento shadow-primario/30 p-4" 
    : "p-0 shadow-none";

  return (
    <motion.div
      className={`flex items-center justify-center rounded-xl transition-transform duration-300 ${variantStyles} ${className}`}
      variants={floatVariants}
      animate="float"
      whileHover="hover"
      whileTap="tap"
    >
      {icon}
    </motion.div>
  );
};

/*
  Este componente IconWrapper envuelve un ícono y le aplica animaciones mediante Framer Motion.
  Recibe un ícono y una clase opcional como propiedades. Define tres variantes de animación:
  - float: movimiento continuo con oscilación vertical y ligera rotación para crear un efecto flotante.
  - hover: agranda y rota levemente el ícono al pasar el cursor.
  - tap: reduce el tamaño y rota ligeramente al hacer clic.
  El contenedor utiliza estilos de Tailwind, incluyendo un fondo degradado, bordes redondeados y sombras.
  El componente anima automáticamente con el estado "float" y reacciona a los eventos hover y tap.
*/
