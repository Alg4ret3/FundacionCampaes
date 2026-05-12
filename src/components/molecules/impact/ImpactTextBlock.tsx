import { motion } from "framer-motion";

export const ImpactTextBlock = () => {
  return (
    <div className="text-center max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <span className="h-[1px] w-8 bg-primario" />
        <span className="text-primario text-xs font-black uppercase tracking-[0.4em] bg-surface px-4 py-1.5 rounded-full border border-divider">
          Conoce nuestras actividades
        </span>
        <span className="h-[1px] w-8 bg-primario" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-4xl lg:text-4xl font-black text-texto leading-[1.1] mb-8 uppercase tracking-tighter"
      >
        Cifras, realidades y voces <br className="hidden md:block" />
        <span className="relative inline-block text-primario">
          que transforman el territorio
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute -bottom-2 left-0 h-1.5 bg-primario/10 rounded-full"
          />
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-gray-500 text-lg lg:text-lg leading-relaxed font-light max-w-4xl mx-auto"
      >
        Cada número, rostro y palabra representa una semilla de paz que germina en nuestras comunidades, consolidando un camino de esperanza y desarrollo sostenible.
      </motion.p>
    </div>
  );
};
