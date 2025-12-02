import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primario/10 text-primario font-semibold text-sm transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
};

/*
Componente Badge diseñado para mostrar etiquetas destacadas o información breve.
Utiliza un estilo redondeado, tipografía marcada y un fondo suave basado en el color primario.
Permite personalizar estilos adicionales mediante className y acepta cualquier contenido como children.
Ideal para estados, categorías o indicadores dentro de una interfaz.
*/
