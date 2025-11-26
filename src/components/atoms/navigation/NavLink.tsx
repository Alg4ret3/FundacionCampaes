import React, { useState, useEffect } from "react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface NavLinkProps {
  name: string;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, href }) => {
  const [isActive, setIsActive] = useState(false);

  // Detecta cuando la sección está visible en pantalla
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(href);
      if (!section) return;

      const top = section.getBoundingClientRect().top;
      const offset = window.innerHeight / 2; // ajuste para activar antes de llegar arriba

      if (top <= offset && top + section.clientHeight >= offset) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // verificar al cargar

    return () => window.removeEventListener("scroll", handleScroll);
  }, [href]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    handleSmoothScroll(e, href);
    setIsActive(true); // Mantener activo al hacer click
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
      {/* Underline effect */}
      <span
        className={`absolute left-0 bottom-0 h-0.5 w-0 bg-primario transition-all duration-300 ${
          isActive ? "w-full" : "group-hover:w-full"
        }`}
      />
    </a>
  );
};
