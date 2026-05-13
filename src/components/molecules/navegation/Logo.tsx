// components/molecules/Logo.tsx
import React from "react";
import { Link } from "react-router-dom";

export const Logo: React.FC = () => (
  <Link to="/" className="flex items-center gap-2 sm:gap-3">
   <img
    src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777328156/dxnccsmmkyeuzksbz7ua.png"
    alt="Logo Caminos de Paz"
    className="w-9 sm:w-12 md:w-14 h-9 sm:h-12 md:h-14 object-contain"
   />
   <div className="flex flex-col min-w-0">
    <h1 className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold text-primario sm:whitespace-nowrap leading-tight">
     Fundación Caminos de Paz
    </h1>
    <p className="text-[9px] sm:text-xs md:text-sm text-secundario">y Esperanza</p>
   </div>
  </Link>
);