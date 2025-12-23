// components/molecules/Logo.tsx
import React from "react";

export const Logo: React.FC = () => (
 <div className="flex items-center gap-3">
  <img
   src="/static/Logo.webp"
   alt="Logo Caminos de Paz"
   className="w-14 h-14 object-contain"
  />
  <div> 
   {/*  Añadimos 'whitespace-nowrap' y ajustamos el responsive de texto para que quepa */}
   <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-primario whitespace-nowrap">
    Fundación Caminos de Paz
   </h1>
   <p className="text-sm text-secundario">y Esperanza</p>
  </div>
 </div>
);