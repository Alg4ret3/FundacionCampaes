import { useState, useEffect } from 'react';
import { galleryImages } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section ref={ref} className="py-20 bg-[#F5F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#138A7E] mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Memoria Visual
        </h2>

        <p
          className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          En esta sección compartimos los momentos más significativos de nuestras actividades, procesos comunitarios y proyectos sociales.
Cada fotografía refleja el compromiso de la Fundación Caminos de Paz y Esperanza con la construcción de una sociedad más solidaria, inclusiva y sostenible.
Este espacio es una memoria visual del trabajo conjunto entre comunidades, voluntarios y aliados.
        </p>

        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.2s' }}
        >
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

            <div className="absolute inset-0 bg-gradient-to-t from-[#138A7E]/50 to-transparent"></div>

            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-[#138A7E]" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-[#138A7E]" />
            </button>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#1ABC9C] w-8'
                    : 'bg-gray-300 hover:bg-[#1ABC9C]/50'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
