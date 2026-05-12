import { motion } from "framer-motion";
import { values } from "../../../../constants/DataValues";

export const ValuesSection = () => {
  return (
    <section id="values" className="bg-white py-24 md:py-32 border-t border-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Refined Header ── */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-primario" />
            <span className="text-primario text-xs font-black uppercase tracking-[0.4em]">
              Fundamentos
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-4xl font-black text-texto tracking-tighter uppercase leading-none">
            Lo que <br /> <span className="text-primario">nos Define</span>
          </h2>
        </div>

        {/* ── Values Grid: Clean & Open Style ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 md:gap-y-32">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group flex flex-col"
            >
              <div className="relative">
                {/* Minimalist Index */}
                <span className="text-primario/10 text-7xl font-black absolute -top-12 -left-6 select-none group-hover:text-primario/20 transition-colors duration-700">
                  0{i + 1}
                </span>
                
                <div className="relative z-10 pt-4">
                  <h3 className="text-2xl font-black text-texto uppercase tracking-tighter mb-6 group-hover:text-primario transition-colors duration-500">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed max-w-xl">
                    {v.description}
                  </p>
                  
                  {/* Accent bar */}
                  <div className="mt-10 h-1 w-8 bg-divider group-hover:w-full group-hover:bg-primario transition-all duration-700 rounded-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
