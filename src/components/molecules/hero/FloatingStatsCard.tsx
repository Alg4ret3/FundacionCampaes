import { Dot } from "../../atoms/layout/Dot";
import { motion } from "framer-motion";

export const FloatingStatsCard = () => (
  <motion.div
    className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 -right-3 sm:-right-4 md:-right-6 bg-white/90 rounded-lg sm:rounded-xl md:rounded-2xl shadow-2xl p-3 sm:p-4 md:p-6 backdrop-blur-xl max-w-xs sm:max-w-sm"
    initial={{ y: 0 }}
    animate={{ y: [0, -5, 0] }} // solo flota arriba y abajo
    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  >
    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primario mb-2">8+</div>
    <p className="text-xs sm:text-sm md:text-base text-secundario font-semibold mb-3">Años transformando vidas</p>
    <div className="flex space-x-2">
      {[0, 1, 2, 3].map((i) => (
        <Dot key={i} delay={i * 0.2} />
      ))}
    </div>
  </motion.div>
);
