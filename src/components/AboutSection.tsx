import { Target, Eye, Award, Calendar } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const timeline = [
  { year: '2017', title: 'Fundación', description: 'Inicio de operaciones en el territorio' },
  { year: '2019', title: 'Expansión', description: 'Llegamos a 10 nuevas comunidades' },
  { year: '2021', title: 'Reconocimiento', description: 'Premio nacional a la paz' },
  { year: '2025', title: 'Presente', description: 'Más de 1000 beneficiarios activos' }
];

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="nosotros" ref={ref} className="py-20 bg-[#F5F9F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#138A7E] mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Quiénes Somos
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            <div className="w-14 h-14 bg-[#1ABC9C] rounded-xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#138A7E] mb-3">Misión</h3>
            <p className="text-gray-600">
              Contribuir con el desarrollo social, económico, cultural, ambiental sostenible, de nuestro territorio, con el propósito de disminuir las brechas de desigualdad 
promoviendo la inclusión social, a través de diferentes proyectos encaminados a  fortalecer el desarrollo humano, la cultura de la paz, la cultura ciudadana, el desarrollo tecnológico, Educación formal e informal y construcción de proyectos de vida sostenibles, teniendo en cuenta su contexto de vida. 


            </p>
          </div>

          <div
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <div className="w-14 h-14 bg-[#1ABC9C] rounded-xl flex items-center justify-center mb-4">
              <Eye className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#138A7E] mb-3">Visión</h3>
            <p className="text-gray-600">
              En el año 2027, seremos líderes en el desarrollo de proyectos sociales, los cuales contribuirán al bienestar y desarrollo del territorio, con innovación social, cultura ciudadana, tecnología, propiciando la verdadera inclusión 
social y generando sostenibilidad en los diferentes proyectos. 

            </p>
          </div>

          <div
            className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <div className="w-14 h-14 bg-[#1ABC9C] rounded-xl flex items-center justify-center mb-4">
              <Award className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#138A7E] mb-3">Compromiso</h3>
            <p className="text-gray-600">
              Trabajar con transparencia, ética y responsabilidad social, poniendo siempre
              a las comunidades en el centro de nuestras acciones.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-8 h-8 text-[#1ABC9C] mr-3" />
            <h3 className="text-2xl font-bold text-[#138A7E]">Nuestra Historia</h3>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#1ABC9C] hidden md:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                  }`}
                  style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <div className="bg-[#F5F9F8] rounded-xl p-6 inline-block">
                      <div className="text-2xl font-bold text-[#1ABC9C] mb-2">{item.year}</div>
                      <h4 className="text-lg font-bold text-[#138A7E] mb-2">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1ABC9C] rounded-full border-4 border-white hidden md:block"></div>

                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
