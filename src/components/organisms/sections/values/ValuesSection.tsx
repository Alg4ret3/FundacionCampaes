import { motion } from "framer-motion";
import { values } from "../../../../constants/DataValues";

export const ValuesSection = () => {
  return (
    <section id="values" className="bg-white py-24 md:py-32 border-t border-divider">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Refined Header ── */}
        <div className="mb-20">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-display tracking-tight leading-none">
            Lo que nos Define
          </h2>
        </div>

        {/* ── Values Grid: Clean & Open Style ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 md:gap-y-32">
          {values.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group flex flex-col"
            >
              <div className="relative pt-4">
                <h3 className="font-display text-2xl font-bold text-display tracking-tight mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-base font-light leading-relaxed max-w-xl">
                  {v.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
