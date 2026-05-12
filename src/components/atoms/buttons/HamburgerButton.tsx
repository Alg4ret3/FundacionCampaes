import React from "react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    className="lg:hidden relative w-10 h-10 flex items-center justify-center text-primario transition-colors duration-300 focus:outline-none"
  >
    <div className="relative w-6 h-4 flex flex-col justify-between overflow-hidden">
      {/* Top line */}
      <span
        className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
          isOpen ? 'rotate-45 translate-y-[7px]' : ''
        }`}
      />
      {/* Middle line */}
      <span
        className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
          isOpen ? 'translate-x-8 opacity-0' : ''
        }`}
      />
      {/* Bottom line */}
      <span
        className={`w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center ${
          isOpen ? '-rotate-45 -translate-y-[7px]' : ''
        }`}
      />
    </div>
  </button>
);

/*
  Componente: HamburgerButton
  ---------------------------------------------------------
  Botón hamburguesa animado que se transforma en X.

  Props:
    - isOpen: indica si el menú está abierto (activa la animación a X).
    - onClick: función para abrir/cerrar el menú.

  Animación:
    - Las líneas se transforman suavemente en X al abrir.
    - Transición de 300ms para un efecto fluido.

  Estilos:
    - Diseño minimalista con spans animados.
    - Colores de la paleta primaria.
*/
