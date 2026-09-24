import { motion } from "framer-motion";

interface HeroTextBlockProps {
  isVisible: boolean;
}

export const HeroTextBlock = ({ isVisible }: HeroTextBlockProps) => {
  return (
    <div className="flex flex-col items-start text-left">

      {/* ── Main Heading ── */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-display text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-8"
      >
        Construyendo <br />
        Paz Sostenible
      </motion.h1>

      {/* ── Descriptive Text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white/90 text-base sm:text-lg font-light max-w-xl leading-relaxed"
      >
        Impulsamos el desarrollo socioeconómico y la protección del ambiente en nuestros territorios a través de la esperanza y la acción colectiva.
      </motion.p>
    </div>
  );
};
