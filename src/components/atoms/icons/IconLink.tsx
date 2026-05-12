// components/atoms/IconLink.tsx
import React from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { ChevronRight } from "lucide-react";

interface IconLinkProps {
  name: string;
  href: string;
  Icon?: LucideIcon;
  onClose: () => void;
  isActive?: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({
  name,
  href,
  Icon,
  onClose,
  isActive = false,
}) => {
  return (
    <Link
      to={href}
      onClick={onClose}
      className={`w-full flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 font-medium group ${
        isActive
          ? "bg-primario/8 text-primario"
          : "text-gray-700 hover:bg-gray-50 hover:text-primario"
      }`}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span
            className={`flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-200 ${
              isActive
                ? "bg-primario/15 text-primario"
                : "bg-gray-100 text-gray-500 group-hover:bg-primario/10 group-hover:text-primario"
            }`}
          >
            <Icon className="w-4 h-4" />
          </span>
        )}
        <span className="text-sm">{name}</span>
      </div>
      <ChevronRight
        className={`w-4 h-4 transition-all duration-200 ${
          isActive ? "text-primario" : "text-gray-300 group-hover:text-primario group-hover:translate-x-0.5"
        }`}
      />
    </Link>
  );
};

/*
  IconLink mejorado:
  - Icono en chip redondeado con color dinámico
  - Chevron right como indicador de navegación
  - Pill background en hover / activo
*/
