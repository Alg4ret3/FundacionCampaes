// atoms/layout/TimelineDot.tsx
import { motion } from "framer-motion";

export const TimelineDot = () => (
  <motion.div
    className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-4 border-fondo bg-primario"
    animate={{ scale: [1, 1.3, 1] }}
    transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
  />
);
