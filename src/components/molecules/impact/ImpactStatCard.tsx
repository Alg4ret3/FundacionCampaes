import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface ImpactStatCardProps {
  value: string; // e.g., "1000+"
  label: string;
  description: string;
  index: number;
}

const AnimatedNumber = ({ value }: { value: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  // Extract number from string (e.g., "1000+" -> 1000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9]/g, "");

  const spring = useSpring(0, { stiffness: 30, damping: 20, restDelta: 0.001 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString() + suffix);

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, numericValue, spring]);

  return <motion.span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>{display}</motion.span>;
};

export const ImpactStatCard = ({
  value,
  label,
  description,
  index,
}: ImpactStatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full flex flex-col"
    >
      <div className="flex-1 bg-white p-8 md:p-10 flex flex-col items-start transition-all duration-500 hover:bg-surface rounded-[2rem] border border-transparent hover:border-divider relative group">
        
        {/* Minimalist Top Indicator */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-primario" />
          <span className="text-xs font-black uppercase tracking-[0.3em] text-gray-300">
            Dato 0{index + 1}
          </span>
        </div>

        <div className="relative mb-6 w-full overflow-visible">
          <div className="text-7xl font-black tracking-tighter text-texto leading-none group-hover:text-primario transition-colors duration-700 whitespace-nowrap" style={{ fontVariantNumeric: "tabular-nums" }}>
            <AnimatedNumber value={value} />
          </div>
          {/* Subtle line that expands on hover */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
            className="h-2 bg-primario/10 absolute -bottom-2 left-0 rounded-full overflow-hidden"
          >
            <div className="h-full w-0 group-hover:w-full bg-primario transition-all duration-700 ease-in-out" />
          </motion.div>
        </div>

        {/* Info Block */}
        <div className="mt-4">
          <h3 className="text-texto font-black text-2xl mb-2 tracking-tight uppercase">
            {label}
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[200px]">
            {description}
          </p>
        </div>

        {/* Decorative corner accent */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primario">
            <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};
