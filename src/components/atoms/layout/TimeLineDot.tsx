// atoms/FloatingIcon.tsx
import { motion } from "framer-motion";
import { LucideIcon, CalendarCheck, Heart, Eye, Handshake } from "lucide-react";

const icons: LucideIcon[] = [CalendarCheck, Heart, Eye, Handshake];

interface TimeLineDot {
  index: number;
  size?: number;
  className?: string;
}

export const FloatingIcon = ({ index, size = 64, className = "" }: TimeLineDot) => {
  const Icon = icons[index % icons.length];

  return (
    <motion.div
      className={`rounded-full bg-primario flex items-center justify-center shadow-xl text-white text-2xl cursor-pointer ${className}`}
      style={{ width: size, height: size }}
      animate={{
        y: [0, -4, 0],        // Movimiento vertical aún más sutil
        scale: [1, 1.08, 1],  // Pulso reducido
        boxShadow: [
          "0 0 0px rgba(0,0,0,0.1)",  
          "0 0 8px rgba(0,0,0,0.15)",
          "0 0 0px rgba(0,0,0,0.1)",
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
    >
      <Icon className="w-8 h-8" />
    </motion.div>
  );
};
