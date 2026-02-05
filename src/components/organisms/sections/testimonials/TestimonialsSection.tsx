import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { TestimonialCard } from "../../../molecules/testimonials/TestimonialCard";
import { testimonials } from "../../../../constants/DataTestimonials";
import { TestimonialsTextBlock } from "../../../molecules/testimonials/TestimonialsTextBlock";
import { motion } from "framer-motion";
import { TypingQuote } from "../../../molecules/testimonials/TypingQuote";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 lg:py-36 bg-white overflow-hidden"
    >
      <SectionDivider variant="wave" color="fill-fondo" className="top-0 -translate-y-full" />


      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        {/* Título y subtítulo */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20 lg:mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TestimonialsTextBlock
            titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-oscuro tracking-tight"
            subtitleClassName="text-sm sm:text-base md:text-lg text-secundario mt-3 sm:mt-4 md:mt-6 max-w-2xl mx-auto"
            isVisible={isVisible}
          />
        </motion.div>

        {/* Grid de testimonios - Vertical on mobile/tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {testimonials.map((testimonial: any, index: number) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 20,
              }}
              transition={{
                delay: 0.2 + index * 0.1,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              <TestimonialCard
                testimonial={testimonial}
                isVisible={isVisible}
                delay={0.2 + index * 0.1}
                className={`
                  rounded-lg sm:rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-10 bg-white border border-claro/20
                  shadow-sm hover:shadow-md
                  transition-all duration-300
                `}
              />
            </motion.div>
          ))}
        </div>

        {/* 🌟 Final de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="relative mt-16 sm:mt-20 md:mt-24 lg:mt-28 flex flex-col items-center"
        >
          {/* Línea sutil */}
          <div className="h-px w-24 sm:w-32 md:w-40 bg-primario/30 mb-6 sm:mb-8"></div>

          {/* Texto final */}
          <TypingQuote
            text="Sus palabras impulsan la evolución de todo lo que hacemos."
            className="text-center text-oscuro text-base sm:text-lg md:text-xl font-medium max-w-2xl leading-relaxed mx-auto px-4"
            speed={35} 
            startDelay={2000} 
            showCursor={false}
          />
        </motion.div>
      </div>
    </section>
  );
};
