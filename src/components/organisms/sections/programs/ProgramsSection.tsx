import { useState } from 'react';
import { programs } from '../../../../constants/DataActionLine';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { ArrowRight } from 'lucide-react';

type Category = 'todos' | 'social' | 'ambiental' | 'educativo';

const categories = [
  { id: 'todos' as Category, name: 'Todos' },
  { id: 'social' as Category, name: 'Social' },
  { id: 'ambiental' as Category, name: 'Ambiental' },
  { id: 'educativo' as Category, name: 'Educativo' }
];

export const ProgramsSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeCategory, setActiveCategory] = useState<Category>('todos');

  const filteredPrograms =
    activeCategory === 'todos'
      ? programs
      : programs.filter((p) => p.category === activeCategory);

  return (
    <section id="programas" ref={ref} className="py-32 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#1ABC9C] rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-20 text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-[#1ABC9C]/10 px-4 py-2 rounded-full mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#1ABC9C]"></span>
            <span className="text-[#1ABC9C] font-semibold text-sm">Iniciativas</span>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold text-[#138A7E] mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Nuestros Programas
          </h2>

          <p
            className={`text-gray-700 text-lg max-w-2xl mx-auto transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Iniciativas que transforman vidas y construyen paz sostenible en nuestros territorios
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-3 mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.3s' }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 text-sm ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-[#1ABC9C] to-[#0F9B8C] text-white shadow-lg shadow-[#1ABC9C]/30 scale-105'
                  : 'bg-white border border-gray-200 text-[#138A7E] hover:border-[#1ABC9C] hover:text-[#1ABC9C]'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((program, index) => (
            <div
              key={program.id}
              className={`group relative transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${0.4 + index * 0.08}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#1ABC9C]/10 to-[#138A7E]/5 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>

              <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 group-hover:border-[#1ABC9C]/20 transition-all duration-500 h-full flex flex-col shadow-lg hover:shadow-2xl">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#138A7E]/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#1ABC9C] capitalize">
                    {program.category}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-[#138A7E] mb-3 group-hover:text-[#1ABC9C] transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed flex-1 font-light">
                    {program.description}
                  </p>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 group-hover:border-[#1ABC9C]/20 transition-colors duration-300">
                    <button className="inline-flex items-center space-x-2 text-[#1ABC9C] font-semibold hover:text-[#138A7E] transition-all duration-300 group-hover:translate-x-2">
                      <span>Conocer más</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <div className="w-8 h-1 bg-gradient-to-r from-[#1ABC9C] to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
