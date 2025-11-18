import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

const testimonials = [
  {
    id: '1',
    name: 'Rosa García',
    role: 'Beneficiaria del Programa de Paz',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg',
    content:
      'Gracias a Caminos de Paz, nuestra comunidad ha aprendido a resolver conflictos de manera pacífica. El impacto ha sido transformador.',
    rating: 5
  },
  {
    id: '2',
    name: 'Juan Ramírez',
    role: 'Emprendedor Verde',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
    content:
      'El apoyo en mi emprendimiento fue crucial. Ahora puedo mantener a mi familia mientras protejo el ambiente.',
    rating: 5
  },
  {
    id: '3',
    name: 'María López',
    role: 'Líder Comunitaria',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
    content:
      'Las capacitaciones fueron excelentes. He podido entrenar a otros líderes en mi región. La paz es posible.',
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-[#F5F9F8] to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-0 w-96 h-96 bg-[#1ABC9C] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-[#1ABC9C]/10 px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1ABC9C]"></span>
            <span className="text-[#1ABC9C] font-semibold text-sm">Historias de Impacto</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-[#138A7E] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Voces que Inspiran
          </h2>

          <p
            className={`text-gray-700 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Lo que dicen quienes han vivido la transformación
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`group transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ABC9C]/20 to-[#138A7E]/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>

                <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white/60 group-hover:border-[#1ABC9C]/30 transition-all duration-500 h-full">
                  <div className="absolute -top-4 right-8 bg-white rounded-full p-3 shadow-lg">
                    <Quote className="w-5 h-5 text-[#1ABC9C]" />
                  </div>

                  <div className="mb-6">
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#1ABC9C] text-[#1ABC9C]" />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-8 italic font-light">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-[#138A7E]">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
