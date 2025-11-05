import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { TrendingUp, Users, Leaf, Award } from 'lucide-react';

const stats = [
  {
    icon: Award,
    value: '8+',
    label: 'Años de Impacto',
    description: 'Trabajando sin cesar por la paz',
    color: 'from-[#1ABC9C] to-[#0F9B8C]'
  },
  {
    icon: Users,
    value: '1000+',
    label: 'Beneficiarios Directos',
    description: 'Vidas transformadas',
    color: 'from-[#138A7E] to-[#0F7961]'
  },
  {
    icon: Leaf,
    value: '50+',
    label: 'Proyectos Ejecutados',
    description: 'En construcción de paz',
    color: 'from-[#1ABC9C] to-[#138A7E]'
  },
  {
    icon: TrendingUp,
    value: '20+',
    label: 'Comunidades',
    description: 'Alcance territorial',
    color: 'from-[#0F9B8C] to-[#0F7961]'
  }
];

export const ImpactStatsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-r from-[#138A7E] to-[#0F7961] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#1ABC9C] opacity-5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Nuestro Impacto en Números
          </h2>

          <p
            className={`text-white/80 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Resultados tangibles que demuestran nuestro compromiso con la paz sostenible
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-white/10 rounded-2xl transform group-hover:scale-105 transition-transform duration-500"></div>

                <div className="relative rounded-2xl p-8 border border-white/20 group-hover:border-white/40 transition-all duration-500 backdrop-blur-sm">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-[#1ABC9C] transition-colors duration-300">
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                    <p className="text-white/70 text-sm">{stat.description}</p>
                  </div>

                  <div className="w-8 h-1 bg-gradient-to-r from-white to-transparent rounded-full group-hover:w-12 transition-all duration-500"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
