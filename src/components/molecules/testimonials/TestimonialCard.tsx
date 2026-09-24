import { motion } from 'framer-motion';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  content: string;
  rating: number;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

import { memo } from 'react';

export const TestimonialCard = memo(({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isActive ? 1 : 0, 
        x: isActive ? 0 : 20,
      }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.7, ease: [0.2, 0, 0.2, 1] }}
      className={`relative w-full ${isActive ? '' : 'hidden'}`}
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-20 px-4">
        
        {/* ── Quote Block (izquierda / editorial) ── */}
        <div className="flex-1 relative">
          {/* Comilla tipográfica grande — elemento de identidad */}
          <span
            className="font-display absolute -top-6 -left-2 text-8xl text-primario/20 leading-none select-none"
            aria-hidden="true"
          >
            "
          </span>

          <blockquote className="relative">
            <p className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-display leading-[1.25] tracking-tight italic">
              {testimonial.content}
            </p>
          </blockquote>

          {/* Separador con línea de acento */}
          <div className="flex items-center gap-4 mt-8">
            <div className="w-8 h-px bg-primario" />
            <div className="flex flex-col">
              <span className="font-sans text-sm font-bold text-texto tracking-tight">
                {testimonial.name}
              </span>
              <span className="font-sans text-xs font-black uppercase tracking-[0.35em] text-primario mt-0.5">
                {testimonial.role}
              </span>
            </div>
          </div>
        </div>

        {/* ── Portrait (derecha) ── */}
        <div className="flex-shrink-0">
          <div className="relative w-28 h-36 md:w-36 md:h-48 overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover object-top"
            />
            {/* Accent line bottom */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-primario" />
          </div>
        </div>

      </div>
    </motion.div>
  );
});
