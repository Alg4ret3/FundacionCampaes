import { ArrowRight, Leaf } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F9F8] via-white to-[#E8F8F5]"></div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#1ABC9C] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#138A7E] rounded-full blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#1ABC9C] rounded-full blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div
            className={`mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="flex items-center space-x-2 text-[#1ABC9C] font-semibold text-sm md:text-base mb-4">
              <Leaf className="w-4 h-4" />
              <span>Fundación Caminos de Paz y Esperanza</span>
            </div>
          </div>

          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[#138A7E] mb-8 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Construyendo
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#1ABC9C] to-[#138A7E]">
              paz sostenible
            </span>
            desde nuestro territorio
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-700 mb-10 leading-relaxed max-w-2xl transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Durante más de 8 años, hemos trabajado incansablemente en la construcción de
            paz sostenible, el desarrollo socioeconómico y la protección del ambiente en
            nuestros territorios.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <button className="group inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-[#1ABC9C] to-[#0F9B8C] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105">
              <span>Conoce nuestro impacto</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="inline-flex items-center justify-center space-x-2 border-2 border-[#138A7E] text-[#138A7E] px-8 py-4 rounded-lg font-semibold hover:bg-[#138A7E] hover:text-white transition-all duration-300">
              <span>Únete a nosotros</span>
            </button>
          </div>
        </div>

        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{ transitionDelay: '0.4s' }}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
            <img
              src="Image/1.jpg"
              alt="Community"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#138A7E]/40 to-transparent"></div>
          </div>

          <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-xl max-w-sm">
            <div className="text-3xl font-bold text-[#1ABC9C] mb-2">8+</div>
            <p className="text-[#138A7E] font-semibold mb-3">Años transformando vidas</p>
            <div className="flex space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-[#1ABC9C]"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#1ABC9C]/30 to-transparent"></div>
    </section>
  );
};
