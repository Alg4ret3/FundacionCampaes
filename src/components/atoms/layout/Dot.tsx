import { motion } from "framer-motion";

interface DotProps {
  delay?: number; // Delay para animación escalonada
}

export const Dot = ({ delay = 0 }: DotProps) => (
  <motion.div
    className="w-2 h-2 rounded-full bg-primario"
    animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay, // aplica delay individual
    }}
  />
);
