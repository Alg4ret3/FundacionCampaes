import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { HeroTextBlock } from "../../../molecules/hero/HeroTextBlock";
import { HeroButtons } from "../../../molecules/hero/HeroButton";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-start overflow-hidden pt-20"
    >
      {/* ── Background Image Layer ── */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-[#2d342d]">
        <img 
          src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1778623906/zlgmqz57whvussrtrwww.jpg" 
          alt="Niños sonriendo en comunidad, representando la paz y esperanza de la fundación"
          fetchpriority="high"
          loading="eager"
          className="w-full h-full object-cover"
        />
        {/* Simple Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40" />
        
        {/* Left-to-right gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent" />
      </div>

      {/* ── Content Container ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 lg:px-20">
        <div className="max-w-4xl">
          <HeroTextBlock isVisible={isVisible} />
          
          <div className="mt-12">
            <HeroButtons isVisible={isVisible} />
          </div>
        </div>
      </div>

      {/* ── Minimalist Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 right-10 hidden md:flex items-center gap-4"
      >
        <span className="text-[10px] font-black text-white/60 uppercase tracking-[0.6em] rotate-180 [writing-mode:vertical-lr]">
          Scroll
        </span>
        <div className="h-20 w-px bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-full bg-primario"
          />
        </div>
      </motion.div>
    </section>
  );
};
