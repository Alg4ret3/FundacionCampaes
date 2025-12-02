import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const BaseCard = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`relative bg-fondo/50 backdrop-blur-sm rounded-2xl p-8 border border-claro/50 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};

/*
  Componente: BaseCard
  ---------------------------------------------------------
  Descripción:
    Contenedor base reutilizable que ofrece un diseño limpio,
    elegante y adaptable para agrupar contenido en tarjetas.
    Se usa como wrapper visual en diferentes secciones.

  Props:
    - children: contenido interno que será renderizado dentro de la tarjeta.
    - className: clases adicionales para personalizar estilos.

  Estilos:
    - bg-fondo/50: fondo semitransparente integrando colores del proyecto.
    - backdrop-blur-sm: desenfoque tipo “glassmorphism”.
    - rounded-2xl: bordes redondeados modernos.
    - p-8: padding amplio para un diseño limpio.
    - border border-claro/50: borde sutil que aporta separación.
    - transition-all duration-500: transiciones suaves en hover o cambios.

  Uso recomendado:
    <BaseCard>
      <p>Contenido dentro de la tarjeta</p>
    </BaseCard>

    <BaseCard className="mt-6 shadow-lg">
      <OtroComponente />
    </BaseCard>
*/
