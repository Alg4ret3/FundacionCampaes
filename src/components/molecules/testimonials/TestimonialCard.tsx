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

export const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ 
        opacity: isActive ? 1 : 0, 
        y: isActive ? 0 : 10,
      }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.8, ease: [0.2, 0, 0.2, 1] }}
      className={`relative w-full flex items-center justify-center ${isActive ? '' : 'hidden'}`}
    >

      <div className="w-full max-w-4xl flex flex-col items-center text-center px-6">
        
        {/* Large Portrait Image - Ultra Minimalist Circle */}
        <div className="relative mb-12">
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ring-1 ring-gray-100 ring-offset-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Accent dot */}
          <div className="absolute bottom-1 right-3 w-4 h-4 bg-primario rounded-full border-4 border-white" />
        </div>

        {/* The Quote - Bold but Clean */}
        <blockquote className="mb-10 max-w-3xl">
          <p className="text-2xl md:text-4xl font-black text-gray-900 leading-[1.2] tracking-tight">
            “{testimonial.content}”
          </p>
        </blockquote>

        {/* Author Info */}
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-bold text-gray-900 mb-1">
            {testimonial.name}
          </h4>
          <p className="text-primario text-[10px] font-black uppercase tracking-[0.4em]">
            {testimonial.role}
          </p>
        </div>

      </div>
    </motion.div>
  );
};
