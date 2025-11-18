// components/atoms/NavLink.tsx
import React from "react";
import { handleSmoothScroll } from "../../utils/SmoothScroll"; // Importar utilidad

interface NavLinkProps {
  name: string;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({ name, href }) => (
  <a
    href={href}
    onClick={(e) => handleSmoothScroll(e, href)}
    className="relative text-sm font-semibold text-gray-700 hover:text-primario transition-colors duration-200 group"
  >
    {name}
    {/* Underline effect */}
    <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primario transition-all duration-300 group-hover:w-full" />
  </a>
);