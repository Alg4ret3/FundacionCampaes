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
        


        {/* ── Editorial Showcase ── */}
        <div className="relative min-h-[360px] md:min-h-[300px] flex items-center">
          <AnimatePresence mode="wait">
            <TestimonialCard 
              key={testimonials[activeIndex].id}
              testimonial={testimonials[activeIndex]}
              isActive={true}
            />
          </AnimatePresence>
        </div>
        {/* ── Navigation: flechas editoriales ── */}
        <div className="flex items-center gap-3 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className="group relative p-1.5"
              aria-label={`Testimonio ${idx + 1}`}
            >
              <div className={`transition-all duration-500 ${
                activeIndex === idx 
                ? "w-6 h-0.5 bg-primario" 
                : "w-2 h-0.5 bg-gray-200 group-hover:bg-gray-400"
              }`} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
