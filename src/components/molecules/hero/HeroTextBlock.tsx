import { motion } from "framer-motion";
import { useContent } from "../../../context/ContentContext";

interface HeroTextBlockProps {
  isVisible: boolean;
}

export const HeroTextBlock = ({ isVisible }: HeroTextBlockProps) => {
  const { siteInfo } = useContent();

  return (
    <div className="flex flex-col items-start text-left">

      {/* ── Main Heading ── */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.98] tracking-tight mb-8"
      >
        {siteInfo.heroTitle}
      </motion.h1>

      {/* ── Descriptive Text ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-white/90 text-base sm:text-lg font-light max-w-xl leading-relaxed"
      >
        {siteInfo.heroSubtitle}
      </motion.p>
    </div>
  );
};
