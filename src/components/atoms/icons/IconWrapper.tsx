// atoms/icons/IconWrapper.tsx
import { motion } from "framer-motion";

interface IconWrapperProps {
  icon: React.ReactNode;
  className?: string;
}

export const IconWrapper = ({ icon, className = "" }: IconWrapperProps) => {
  const floatVariants = {
    float: {
      y: [0, -6, 0],      // movimiento vertical sutil
      rotate: [0, 3, -3, 0], // pequeña rotación
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.2, rotate: 5 },
    tap: { scale: 0.9, rotate: -5 },
  };

  return (
    <motion.div
      className={`flex items-center justify-center rounded-xl shadow-md shadow-primario/30
                  bg-gradient-to-br from-primario to-acento text-white p-4
                  transition-transform duration-300 ${className}`}
      variants={floatVariants}
      animate="float"
      whileHover="hover"
      whileTap="tap"
    >
      {icon}
    </motion.div>
  );
};
