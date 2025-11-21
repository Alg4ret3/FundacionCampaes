import { DynamicIcon } from "../../atoms/icons/DynamicIcon";

interface Props {
  icon: string;
  label: string;
  active: boolean;
  onClick: () => void;
}

export const ValueCircle = ({ icon, label, active, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      role="button"
      aria-pressed={active}
      className="flex flex-col items-center gap-3 outline-none"
    >
      {/* Contenedor circular con anillo animado */}
      <div className="relative">
        {/* ANILLO EXTERIOR (solo cuando está activo) */}
        <div
          className={`
            absolute inset-0 rounded-full transition-all duration-500 
            ${active ? "scale-125 opacity-100 bg-acento/20 blur-md" : "scale-75 opacity-0"}
          `}
        />

        {/* CÍRCULO PRINCIPAL */}
        <div
          className={`
            w-24 h-24 md:w-28 md:h-28 rounded-full
            bg-gradient-to-br from-primario to-secundario
            flex items-center justify-center
            shadow-xl cursor-pointer
            transition-all duration-500 ease-out
            ${active ? "scale-110 shadow-2xl" : "scale-100"}
            hover:scale-105 hover:shadow-acento/40
          `}
        >
          <DynamicIcon
            name={icon as any}
            className={`
              w-10 h-10 text-fondo transition-transform duration-500 
              ${active ? "scale-110 -translate-y-0.5" : "scale-100"}
              group-hover:-translate-y-1
            `}
          />
        </div>
      </div>

      {/* TEXTO LABEL */}
      <span
        className={`
          text-secundario font-semibold text-center transition-all duration-300
          ${active ? "text-primario" : "opacity-90"}
        `}
      >
        {label}
      </span>
    </button>
  );
};
