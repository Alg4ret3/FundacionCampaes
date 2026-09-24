import { motion } from "framer-motion";

export const ImpactTextBlock = () => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display text-4xl lg:text-5xl font-bold text-display leading-[1.1] mb-8 tracking-tight"
      >
        Cifras y voces que transforman
        <br className="hidden md:block" />
        el territorio
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-gray-500 text-lg lg:text-lg leading-relaxed font-light max-w-4xl mx-auto"
      >
        Cada número, rostro y palabra representa una semilla de paz que germina en nuestras comunidades, consolidando un camino de esperanza y desarrollo sostenible.
      </motion.p>
    </div>
  );
};
