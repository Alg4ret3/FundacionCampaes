import React from "react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface NavLinkProps {
  name: string;
  href: string;
  isActive?: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, href, isActive = false }) => {

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    handleSmoothScroll(e, href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-sm md:text-base transition-all duration-300 pb-3 group ${
        isActive 
          ? "text-primario font-bold" 
          : "text-gray-600 hover:text-primario font-medium"
      }`}
    >
      {name}
      {/* Indicador impactante */}
      <span
        className={`absolute left-0 bottom-0 h-1 w-0 bg-primario transition-all duration-400 ease-out rounded-full ${
          isActive ? "w-full shadow-lg shadow-primario/50" : "group-hover:w-full opacity-40"
        }`}
      />
    </a>
  );
};

/*
  Componente NavLink:
  - Recibe el nombre visible del enlace y su destino (href) hacia una sección del sitio.
  - Detecta si la sección vinculada está actualmente visible en el viewport usando un listener de scroll.
  - Cuando la sección está en el centro de la pantalla, el enlace se marca como activo.
  - Al hacer click, activa un scroll suave hacia la sección usando handleSmoothScroll.
  - Se aplica un estilo dinámico: texto en primario si está activo, gris si no.
  - Incluye una animación de subrayado que aparece al estar activo o al pasar el cursor.
  - Útil para barras de navegación con navegación por secciones en landing pages.
*/
