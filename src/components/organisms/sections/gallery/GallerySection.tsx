import { useState } from "react";
import { motion } from "framer-motion";
import { galleryImages } from "../../../../constants/DataGalley";
import { getCloudinaryUrl } from "../../../../utils/cloudinary";

export const GallerySection = () => {
  // Mostramos las 5 imágenes principales
  const displayImages = galleryImages.slice(0, 5);
  
  // Estado para controlar la expansión en móvil/clic
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative bg-white overflow-hidden pt-12 md:pt-20">
      
      {/* ── Seamless Transition Label ── */}
      <div className="w-full max-w-7xl mx-auto px-6 mb-12 text-center">
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-gray-300 text-[10px] font-black uppercase tracking-[0.5em]"
        >
          De los números a los rostros
        </motion.p>
      </div>

      {/* ── Vertical Accordion (Full Width) ── */}
      <div 
        className="w-full flex flex-row h-[500px] md:h-[600px] lg:h-[800px] group/gallery overflow-hidden cursor-pointer"
        onMouseLeave={() => setActiveIndex(null)}
      >
        {displayImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            onPointerDown={() => setActiveIndex(index)}
            className={`relative h-full transition-all duration-700 ease-[cubic-bezier(0.2,1,0.2,1)] overflow-hidden group z-20
              ${activeIndex === index ? "flex-[8] md:flex-[6]" : "flex-1"} 
              ${activeIndex !== null && activeIndex !== index ? "flex-[1.5] md:flex-[0.5]" : ""}
              ${index > 2 ? "hidden md:block" : ""}
            `}
          >
            {/* Image Layer */}
            <div className={`absolute inset-0 transition-all duration-1000 scale-110 
              ${activeIndex === index ? "grayscale-0 scale-100" : "grayscale md:grayscale"}
            `}>
              <img
                src={getCloudinaryUrl(image)}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-black/20 transition-all duration-700 
                ${activeIndex === index ? "bg-transparent" : "bg-black/40"}
              `} />
            </div>
            
            {/* Vertical Divider */}
            <div className="absolute top-0 right-0 w-[1px] h-full bg-white/10 z-20" />

            {/* Content Overlay */}
            <div className={`absolute inset-0 flex flex-col justify-end p-8 md:p-16 transition-all duration-700 pointer-events-none
              ${activeIndex === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            `}>
               <div className="max-w-sm text-left pointer-events-auto">
                <h3 className="text-white text-3xl md:text-5xl font-black tracking-tighter uppercase drop-shadow-xl">
                  {index === 0 ? "Comunidad" : 
                   index === 1 ? "Territorio" : 
                   index === 2 ? "Cambio" : 
                   index === 3 ? "Esperanza" : "Paz"}
                </h3>
                <div className="w-12 h-1 bg-primario mt-4" />
               </div>
            </div>
            {/* Vertical Label (when not active) */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 pointer-events-none z-10
              ${activeIndex === index ? "opacity-0" : "opacity-100"}
            `}>
               <span className="text-white/30 text-[10px] font-black uppercase tracking-[1.5em] rotate-90 block whitespace-nowrap">
                  Campaes 2026
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
