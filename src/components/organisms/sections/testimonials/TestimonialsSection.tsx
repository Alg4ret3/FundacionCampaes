import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { TestimonialCard } from "../../../molecules/testimonials/TestimonialCard";
import { testimonials } from "../../../../constants/DataTestimonials";
import { TestimonialsTextBlock } from "../../../molecules/testimonials/TestimonialsTextBlock";
import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="relative py-32 bg-gradient-to-br from-claro via-fondo to-fondo overflow-hidden"
    >
      {/* Fondos abstractos sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primario/10 rounded-full blur-3xl animate-blob animation-delay-0"></div>
        <div className="absolute -bottom-40 -right-20 w-80 h-80 bg-secundario/10 rounded-full blur-2xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-acento/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título y subtítulo */}
        <motion.div
          className="mb-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TestimonialsTextBlock
            titleClassName="text-5xl md:text-6xl font-elegant text-oscuro tracking-tight"
            subtitleClassName="text-lg md:text-xl text-secundario mt-4 font-sanscustom"
            isVisible={isVisible}
          />
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{
                opacity: isVisible ? 1 : 0,
                y: isVisible ? 0 : 30,
                scale: isVisible ? 1 : 0.95,
              }}
              transition={{
                delay: 0.3 + index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.03,
                rotate: 1,
                transition: { duration: 0.3 },
              }}
            >
              <TestimonialCard
                testimonial={testimonial}
                isVisible={isVisible}
                className={`
                  rounded-3xl p-8 bg-fondo/90 backdrop-blur-md
                  shadow-2xl hover:shadow-3xl
                  transition-all duration-500
                `}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
