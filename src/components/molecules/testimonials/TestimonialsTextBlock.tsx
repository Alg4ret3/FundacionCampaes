import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { motion } from "framer-motion";

export const TestimonialsTextBlock = () => {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {/* Small minimalist label */}
      <motion.span 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-[10px] font-black uppercase tracking-[0.5em] text-gray-300 block mb-6"
      >
        Historias Reales
      </motion.span>

      {/* Clean Heading */}
      <Heading className="text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-8">
        Voces de quienes{" "}
        <span className="relative inline-block">
          ya dieron el paso
          <motion.span 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            className="absolute -bottom-1 left-0 h-[2px] bg-primario/40"
          />
        </span>
      </Heading>

      {/* Subtle Paragraph */}
      <Paragraph className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
        Experiencias que reflejan nuestro compromiso y la pasión que ponemos en cada proyecto.
      </Paragraph>
    </div>
  );
};
