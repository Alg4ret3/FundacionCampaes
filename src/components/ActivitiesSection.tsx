import { activities } from "../constants/data";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Calendar, ArrowRight } from "lucide-react";

export const ActivitiesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section id="actividades" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#138A7E] mb-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Actividades e Ideas Futuras
        </h2>

        <p
          className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Conoce las acciones que estamos realizando hoy y los proyectos que
          soñamos para mañana. Cada iniciativa refleja nuestro compromiso con la
          paz, la sostenibilidad y el desarrollo comunitario.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {activities.map((activity, index) => (
            <div
              key={activity.id}
              className={`group bg-[#F5F9F8] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-105 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-[#1ABC9C]" />
                  <span className="text-sm font-semibold text-[#138A7E]">
                    {formatDate(activity.date)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block bg-[#1ABC9C]/10 text-[#1ABC9C] px-3 py-1 rounded-full text-sm font-semibold mb-3 capitalize">
                  {activity.category}
                </div>
                <h3 className="text-xl font-bold text-[#138A7E] mb-3 group-hover:text-[#1ABC9C] transition-colors duration-300">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.6s" }}
        >
          <button className="group inline-flex items-center space-x-2 bg-[#1ABC9C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#138A7E] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            <span>Ver todas las actividades</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
