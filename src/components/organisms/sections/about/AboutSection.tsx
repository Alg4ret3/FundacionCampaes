import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { aboutInfoData } from "../../../../constants/DataAboutInfo";
import { timelineData } from "../../../../constants/DataAboutTimeline";
import { getCloudinaryUrl } from "../../../../utils/cloudinary";

export const AboutSection = () => {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="nosotros" className="relative bg-white pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      
      {/* ── Background Branding: Much Smaller ── */}
      <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
        <h2 className="text-[12vw] font-black text-primario leading-none uppercase tracking-tighter">
          Campaes
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Refined Header ── */}
        <div className="max-w-2xl mb-24 md:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-primario" />
            <span className="text-primario text-xs font-black uppercase tracking-[0.4em]">
              Nuestra Esencia
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-7xl font-black text-texto leading-tight tracking-tighter uppercase"
          >
            Sembramos <br />
            <span className="text-primario">Esperanza.</span>
          </motion.h1>
        </div>

        {/* ── Misión, Visión & Compromiso: Compact ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-24 md:mb-40 border-t border-divider pt-16">
          {aboutInfoData.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-col group"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-primario font-bold text-2xl">0{index + 1}</span>
                <span className="text-primario text-xs font-bold uppercase tracking-[0.3em]">
                  {index === 0 ? "Misión" : index === 1 ? "Visión" : "Compromiso"}
                </span>
              </div>
              <h3 className="text-2xl font-black text-texto uppercase tracking-tighter mb-6 group-hover:text-primario transition-colors">
                {info.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                {info.description}
              </p>
              <div className="w-8 h-1 bg-primario mt-8 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* ── Vertical Timeline Section: Clean & Open ── */}
        <div ref={timelineRef} className="relative space-y-16">

          <div className="mb-12 relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="bg-white pr-6">
              <span className="text-primario text-xs font-bold uppercase tracking-[0.5em] block mb-2">
                Cronología
              </span>
              <h2 className="text-2xl md:text-4xl font-black text-texto tracking-tighter uppercase">
                Nuestra <span className="text-primario">Trayectoria</span>
              </h2>
            </div>
          </div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Year & Text */}
              <div className="flex-1 space-y-4 text-left md:text-right">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <span className="text-primario text-2xl md:text-4xl font-black tracking-tighter leading-none block border-b-2 border-primario/10 pb-1 mb-2">
                    {item.year}
                  </span>
                  <h4 className="text-lg md:text-2xl font-black text-texto uppercase tracking-tighter leading-none mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Visual Side: Smaller & Lighter */}
              <div className="flex-1 w-full max-w-[300px]">
                 <div className="group relative aspect-video overflow-hidden rounded-2xl shadow-lg shadow-surface">
                    <img 
                      src={getCloudinaryUrl(item.image)} 
                      alt={`Hito histórico de la fundación: ${item.title} en el año ${item.year}`} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
