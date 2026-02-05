import { StarIcon } from '../../atoms/icons/StarIcon';
import { QuoteIcon } from '../../atoms/icons/QuoteIcon';
import { Avatar } from '../../atoms/layout/Avatar';

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
  delay: number;
  isVisible: boolean;
  className?: string;
}

export const TestimonialCard = ({ testimonial, delay, isVisible, className = "" }: TestimonialCardProps) => (
  <div
    className={`group transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    } ${className}`}
    style={{ transitionDelay: `${delay}s` }}
  >
      <div className="flex relative flex-col justify-between p-4 sm:p-6 md:p-8 h-full bg-white rounded-lg sm:rounded-xl md:rounded-2xl border border-claro/10">
        {/* Icono de cita */}
        <div className="flex absolute -top-4 sm:-top-5 right-4 sm:right-5 justify-center items-center p-2 sm:p-3 rounded-full shadow-md bg-fondo/80">
          <QuoteIcon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primario" />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-3 sm:w-3.5 md:w-4 h-3 sm:h-3.5 md:h-4 ${
                i < testimonial.rating ? 'text-primario fill-primario' : 'text-claro/40 fill-claro/40'
              }`}
            />
          ))}
        </div>

        {/* Contenido */}
        <p className="mb-6 sm:mb-7 md:mb-8 text-xs sm:text-sm md:text-base italic font-light leading-relaxed text-oscuro">
          "{testimonial.content}"
        </p>

        {/* Autor */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <Avatar src={testimonial.image} alt={testimonial.name} />
          <div>
            <h4 className="font-semibold text-sm md:text-base text-primario">{testimonial.name}</h4>
            <p className="text-xs md:text-sm text-secundario">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
);
