import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "../../../../constants/DataTestimonials";
import { TestimonialCard } from "../../../molecules/testimonials/TestimonialCard";

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 10000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative bg-white pt-24 md:pt-40 pb-32 md:pb-48 overflow-hidden">
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        
        {/* Subtle Section Label */}
        <div className="mb-20 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-4"
          >
            <span className="w-8 h-px bg-gray-100" />
            <span className="text-gray-300 text-[10px] font-black uppercase tracking-[0.6em]">
              Testimonios
            </span>
            <span className="w-8 h-px bg-gray-100" />
          </motion.div>
        </div>

        {/* ── Ultra Minimalist Showcase ── */}
        <div className="relative h-[500px] md:h-[450px]">
          <AnimatePresence mode="wait">
            <TestimonialCard 
              key={testimonials[activeIndex].id}
              testimonial={testimonials[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </div>

        {/* ── Minimalist Navigation Dots ── */}
        <div className="flex justify-center items-center gap-6 mt-16">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative p-2"
              aria-label={`Go to testimonial ${idx + 1}`}
            >
              <div className={`transition-all duration-500 rounded-full ${
                activeIndex === idx 
                ? "w-2.5 h-2.5 bg-primario" 
                : "w-2 h-2 bg-gray-100 group-hover:bg-gray-200"
              }`} />
              
              {activeIndex === idx && (
                <motion.div 
                  layoutId="activeRing"
                  className="absolute inset-0 border border-primario/20 rounded-full scale-150"
                />
              )}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
