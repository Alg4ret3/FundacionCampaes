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
    className="md:hidden p-2 rounded-lg text-primario hover:bg-gray-100 transition-all duration-200"
  >
    {isOpen ? <X size={26} /> : <Menu size={26} />}
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
