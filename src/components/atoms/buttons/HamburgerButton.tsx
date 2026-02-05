import React from "react";
import { Menu, X } from "lucide-react";

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
    className={`lg:hidden p-2 sm:p-2.5 rounded-md transition-all duration-300 ease-out
      ${isOpen 
        ? 'bg-primario/10 text-primario' 
        : 'text-primario/70 hover:text-primario hover:bg-primario/5'
      }
      focus:outline-none focus:ring-2 focus:ring-primario/30 focus:ring-offset-0
    `}
  >
    {isOpen ? (
      <X className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 rotate-90" />
    ) : (
      <Menu className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300" />
    )}
  </button>
);

/*
  Componente: HamburgerButton
  ---------------------------------------------------------
  Este componente representa un botón de menú hamburguesa,
  utilizado principalmente en versiones móviles.

  Props:
    - isOpen: booleano que indica si el menú está abierto.
    - onClick: función que activa la apertura/cierre del menú.

  Funcionamiento:
    - Si isOpen es true, muestra el ícono <X /> para cerrar.
    - Si isOpen es false, muestra el ícono <Menu /> para abrir.
    - Cambia el aria-label dinámicamente para accesibilidad.

  Estilos:
    - md:hidden: solo visible en pantallas pequeñas.
    - p-2 y rounded-lg: espaciado y bordes redondeados.
    - text-primario: color configurado en Tailwind.
    - hover:bg-gray-100: efecto hover sutil.
    - transition-all duration-200: transición suave.

  Uso recomendado:
    <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
*/
