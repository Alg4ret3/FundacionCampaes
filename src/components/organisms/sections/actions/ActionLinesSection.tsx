import { motion } from "framer-motion";
import { actionLines } from "../../../../constants/DataActionLine.ts";

export const ActionLinesSection = () => {
  return (
    <section id="lineas" className="bg-white pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Editorial Header ── */}
        <div className="max-w-3xl mb-32 md:mb-56">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-primario" />
            <span className="text-primario text-[10px] font-bold uppercase tracking-[0.4em]">
              Estrategia Terrritorial
            </span>
          </motion.div>
          <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-tight uppercase">
            Nuestras Líneas <br /> <span className="text-primario">de Impacto.</span>
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
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col md:flex-row items-center gap-16 md:gap-32 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Visual Side: Framed & Deep */}
              <div className="flex-[1.2] w-full group relative">
                 {/* Floating Color Background Accent */}
                 <div 
                   className="absolute -inset-10 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-1000 blur-3xl pointer-events-none"
                   style={{ backgroundColor: line.color }}
                 />
                 
                 {/* Image with Custom Border Frame */}
                 <div className="relative p-4 md:p-8 bg-surface rounded-[4rem] transition-all duration-700 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-surface">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[3rem]">
                      <img 
                        src={line.image} 
                        alt={`Línea de acción: ${line.title}`}
                        loading="lazy"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                      />
                      {/* Interactive Color Wash */}
                      <div 
                        className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-1000 mix-blend-multiply"
                        style={{ backgroundColor: line.color }}
                      />
                    </div>
                 </div>
              </div>

              {/* Text Side: Sophisticated Narrative */}
              <div className="flex-1 space-y-10 relative">
                {/* Massive Watermark Number */}
                <span 
                  className="absolute -top-24 -left-10 text-[12rem] md:text-[15rem] font-black opacity-[0.04] leading-none select-none pointer-events-none"
                  style={{ color: line.color }}
                >
                  0{index + 1}
                </span>

                <div className="relative z-10 space-y-8">
                  <span 
                    className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border"
                    style={{ color: line.color, borderColor: `${line.color}40` }}
                  >
                    Pilar Estratégico
                  </span>
                  
                  <h2 className="text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                    {line.title}
                  </h2>
                  
                  <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed">
                    {line.description}
                  </p>

                  <div className="pt-6">
                    <motion.button 
                      whileHover={{ x: 10 }}
                      className="group flex items-center gap-6"
                    >
                       <div 
                        className="h-px w-16 transition-all duration-700 group-hover:w-24"
                        style={{ backgroundColor: line.color }}
                       />
                       <span 
                        className="text-[10px] font-black uppercase tracking-[0.5em]"
                        style={{ color: line.color }}
                       >
                         Explorar Impacto
                       </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
