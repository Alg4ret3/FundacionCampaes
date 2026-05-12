import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  name: string;
  href: string;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, href, isActive = false }) => {
  return (
    <Link
      to={href}
      className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
        isActive
          ? "text-primario bg-primario/8"
          : "text-gray-600 hover:text-primario hover:bg-primario/5"
      }`}
    >
      {name}
      {/* Indicador activo */}
      <span
        className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] rounded-full bg-primario transition-all duration-300 ${
          isActive ? "w-4" : "w-0 group-hover:w-4"
        }`}
      />
    </Link>
  );
};

/*
  NavLink mejorado:
  - Pill background en hover / estado activo
  - Indicador puntual centrado en lugar de subrayado full-width
*/
