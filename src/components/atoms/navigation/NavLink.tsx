import React, { useState, useEffect } from "react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface NavLinkProps {
  name: string;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      const offset = window.innerHeight / 2;

      if (top <= offset && top + section.clientHeight >= offset) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    handleSmoothScroll(e, href);
    setIsActive(true);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`relative text-sm font-semibold transition-colors duration-200 group ${
        isActive ? "text-primario" : "text-gray-700"
      }`}
    >
      {name}
      <span
        className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primario transition-all duration-300 ${
          isActive ? "w-full" : "group-hover:w-full"
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
