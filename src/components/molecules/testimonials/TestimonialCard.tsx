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
}

export const TestimonialCard = ({ testimonial, delay, isVisible }: TestimonialCardProps) => (
  <div
    className={`group transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}
    style={{ transitionDelay: `${delay}s` }}
  >
    <div className="relative rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-500">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-primario/20 via-acento/10 to-secundario/10"></div>

      <div className="relative bg-fondo/90 backdrop-blur-md p-8 rounded-3xl h-full flex flex-col justify-between">
        {/* Icono de cita */}
        <div className="absolute -top-5 right-5 bg-fondo/80 rounded-full p-3 shadow-md flex items-center justify-center">
          <QuoteIcon className="w-6 h-6 text-primario" />
        </div>

        {/* Rating */}
        <div className="flex items-center mb-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating ? 'text-primario fill-primario' : 'text-claro/40 fill-claro/40'
              }`}
            />
          ))}
        </div>

        {/* Contenido */}
        <p className="text-oscuro leading-relaxed mb-8 italic font-light text-sm md:text-base">
          "{testimonial.content}"
        </p>

        {/* Autor */}
        <div className="flex items-center space-x-4">
          <Avatar src={testimonial.image} alt={testimonial.name} />
          <div>
            <h4 className="font-semibold text-primario">{testimonial.name}</h4>
            <p className="text-sm text-secundario">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);
