import { motion } from "framer-motion";

interface HeroTextBlockProps {
  isVisible: boolean;
}

export const HeroTextBlock = ({ isVisible }: HeroTextBlockProps) => {
  return (
    <div className="flex flex-col items-start text-left">
      
      {/* ── Minimalist Eyebrow ── */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="w-10 h-px bg-primario" />
        <span className="text-primario text-xs font-black uppercase tracking-[0.5em]">
          Fundación Campaes
        </span>
      </motion.div>

      {/* ── Main Heading: Bold & Clean ── */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-7xl font-black text-white leading-[0.9] tracking-tighter mb-8 uppercase"
      >
        Construyendo <br />
        <span className="text-white/80">
           Paz Sostenible
        </span>
      </motion.h1>

      {/* ── Descriptive Text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="text-white/90 text-lg lg:text-lg font-light max-w-xl leading-relaxed mb-4"
      >
        Impulsamos el desarrollo socioeconómico y la protección del ambiente en nuestros territorios a través de la esperanza y la acción colectiva.
      </motion.p>
      
      {/* ── Subtle Tagline ── */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 0.6 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
        className="text-white text-xs font-bold uppercase tracking-[0.4em]"
      >
        Desde 2018 al servicio del territorio
      </motion.span>
    </div>
  );
};
