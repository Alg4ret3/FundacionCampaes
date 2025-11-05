import { TrendingUp, Handshake, Sprout, Lightbulb } from 'lucide-react';
import { actionLines } from '../constants/data';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  'trending-up': TrendingUp,
  'handshake': Handshake,
  'sprout': Sprout,
  'lightbulb': Lightbulb
};

export const ActionLinesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="lineas" ref={ref} className="py-32 bg-gradient-to-b from-white to-[#F5F9F8] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#138A7E] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-[#1ABC9C]/10 px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1ABC9C]"></span>
            <span className="text-[#1ABC9C] font-semibold text-sm">Estrategia</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-[#138A7E] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Líneas Estratégicas de Acción
          </h2>

          <p
            className={`text-gray-700 text-lg max-w-3xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Cuatro ejes fundamentales que orientan nuestra labor y maximizan nuestro impacto
            en la construcción de paz sostenible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {actionLines.map((line, index) => {
            const Icon = iconMap[line.icon as keyof typeof iconMap];
            return (
              <div
                key={line.id}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1ABC9C]/20 to-[#138A7E]/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>

                <div className="relative bg-white rounded-3xl p-10 border border-[#1ABC9C]/10 group-hover:border-[#1ABC9C]/30 transition-all duration-500 h-full">
                  <div className="flex items-start space-x-6 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#1ABC9C]/20 to-[#138A7E]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 flex-shrink-0">
                      <Icon className="w-10 h-10 text-[#1ABC9C]" />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="w-8 h-1 bg-gradient-to-r from-[#1ABC9C] to-[#138A7E] rounded-full group-hover:w-12 transition-all duration-500"></div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#138A7E] mb-4">
                    {line.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed font-light">
                    {line.description}
                  </p>

                  <div className="flex items-center justify-end mt-6 pt-6 border-t border-gray-100">
                    <div className="text-[#1ABC9C] font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      Explorar
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
