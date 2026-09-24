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
      

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* ── Refined Header ── */}
        <div className="max-w-2xl mb-24 md:mb-32">
            <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl font-bold text-display leading-tight tracking-tight"
          >
            Sembramos <br />
            Esperanza.
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
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col"
            >
              <span className="text-primario text-xs font-bold mb-4">
                {index === 0 ? "Misión" : index === 1 ? "Visión" : "Compromiso"}
              </span>
              <h3 className="text-xl font-bold text-display tracking-tight mb-4">
                {info.title}
              </h3>
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* ── Vertical Timeline Section: Clean & Open ── */}
        <div ref={timelineRef} className="relative space-y-16">

          <div className="mb-12 relative z-10">
            <h2 className="font-display text-2xl md:text-4xl font-bold text-display tracking-tight">
              Nuestra Trayectoria
            </h2>
          </div>

          {timelineData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className={`relative flex flex-col md:flex-row gap-8 md:gap-16 items-center z-10 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Year & Text */}
              <div className="flex-1 space-y-4 text-left md:text-right">
                <div className={`flex flex-col ${index % 2 !== 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <span className="text-primario text-2xl md:text-4xl font-black tracking-tighter leading-none block border-b-2 border-primario/10 pb-1 mb-2">
                    {item.year}
                  </span>
                  <h4 className="font-display text-lg md:text-2xl font-bold text-display tracking-tight leading-snug mb-2 italic">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Visual Side: Smaller & Lighter */}
              <div className="flex-1 w-full max-w-[300px]">
                 <div className="group relative aspect-video overflow-hidden rounded-sm shadow-md shadow-surface">
                    <img 
                      src={getCloudinaryUrl(item.image)} 
                      alt={`Hito histórico de la fundación: ${item.title} en el año ${item.year}`} 
                      loading="lazy"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primario" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
