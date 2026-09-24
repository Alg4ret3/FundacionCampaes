import { motion } from "framer-motion";
import { actionLines } from "../../../../constants/DataActionLine.ts";

export const ActionLinesSection = () => {
  return (
    <section id="lineas" className="bg-white pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Editorial Header ── */}
        <div className="max-w-3xl mb-32 md:mb-56">
          <h1 className="font-display text-5xl md:text-7xl font-bold text-display tracking-tight leading-tight">
            Nuestras Líneas de Impacto.
          </h1>
          <p className="mt-8 text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
            Articulamos nuestra labor en torno a pilares estratégicos que garantizan eficiencia y sostenibilidad en la construcción de paz y esperanza.
          </p>
        </div>

        {/* ── Action Lines: Art-Gallery Feature ── */}
        <div className="space-y-48 md:space-y-72">
          {actionLines.map((line, index) => (
            <motion.div
              key={line.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9 }}
              className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Visual Side: Framed & Deep */}
              <div className="flex-[1.2] w-full group relative">

                 
                 {/* Image with Custom Border Frame */}
                 <div className="relative p-4 md:p-8 bg-surface rounded-sm transition-all duration-700 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-surface">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-sm">
                      <img 
                        src={line.image} 
                        alt={`Línea de acción: ${line.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                      />
                      {/* Color wash removed for cleaner look */}
                    </div>
                 </div>
              </div>

              {/* Text Side: Sophisticated Narrative */}
              <div className="flex-1 space-y-10 relative">
                {/* Massive Watermark Number Removed */}

                <div className="relative z-10 space-y-8">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-display tracking-tight leading-none">
                    {line.title}
                  </h2>
                  
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    {line.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
