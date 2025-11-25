import { ActionLineHeader } from "./ActionLineHeader";
import { ActionLineFooter } from "./ActionLineFooter";

export const ActionLineCard = ({ line, isVisible, Icon }: any) => (
  <div
    className={`group relative transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    style={{ transitionDelay: `${0.3 + line.index * 0.1}s` }}
  >
    {/* Fondo con gradiente */}
    <div className="absolute inset-0 bg-gradient-to-r from-primario/20 to-secundario/10 rounded-3xl transform group-hover:scale-105 transition-transform duration-500"></div>

    <div className="relative bg-fondo rounded-3xl p-10 border border-primario/10 group-hover:border-primario/30 transition-all duration-500 h-full">
      {/* Header */}
      <ActionLineHeader Icon={Icon} />

      {/* Título */}
      <h3
        className={`text-2xl font-bold mb-4 ${
          line.color ? `text-${line.color}` : 'text-secundario'
        }`}
      >
        {line.title}
      </h3>

      {/* Descripción */}
      <p className="text-texto leading-relaxed font-light">
        {line.description}
      </p>

      {/* Footer */}
      <ActionLineFooter subItems={line.subItems} />

    </div>
  </div>
);
