// components/molecules/Logo.tsx
import React from "react";

export const Logo: React.FC = () => (
 <div className="flex items-center gap-2 sm:gap-3">
  <img
   src="/static/Logo.webp"
   alt="Logo Caminos de Paz"
   className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 object-contain"
  />
  <div> 
   {/*  Añadimos 'whitespace-nowrap' y ajustamos el responsive de texto para que quepa */}
   <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold text-primario whitespace-nowrap leading-tight">
    Fundación Caminos de Paz
   </h1>
   <p className="text-[10px] sm:text-xs md:text-sm text-secundario">y Esperanza</p>
  </div>
 </div>
);