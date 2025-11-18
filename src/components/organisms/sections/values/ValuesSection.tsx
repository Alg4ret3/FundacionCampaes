import { ShieldCheck, Users, Heart, Leaf } from 'lucide-react';
import { values } from '../../../../constants/data';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';

const iconMap = {
  'shield-check': ShieldCheck,
  'users': Users,
  'heart': Heart,
  'leaf': Leaf
};

export const ValuesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-0 w-72 h-72 bg-[#1ABC9C] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-[#1ABC9C]/10 px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1ABC9C]"></span>
            <span className="text-[#1ABC9C] font-semibold text-sm">Fundamentos</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-[#138A7E] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Los Valores que nos Guían
          </h2>

          <p
            className={`text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Estos principios fundamentales orientan todas nuestras acciones y decisiones
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon as keyof typeof iconMap];
            return (
              <div
                key={value.id}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1ABC9C]/10 to-[#138A7E]/5 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>

                <div className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-white/80 group-hover:border-[#1ABC9C]/30 transition-all duration-500 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1ABC9C] to-[#0F9B8C] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#138A7E] mb-3 group-hover:text-[#1ABC9C] transition-colors duration-300">
                    {value.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {value.description}
                  </p>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#1ABC9C] to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
