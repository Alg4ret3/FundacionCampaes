interface HeadingProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Heading = ({ children, className = "", style = {} }: HeadingProps) => (
  <h1 className={`font-bold leading-tight ${className}`} style={style}>
    {children}
  </h1>
);

/*
  Componente Heading:
  - Funciona como un encabezado reutilizable (H1 por defecto).
  - Recibe contenido como children y permite añadir clases extras mediante className.
  - Aplica estilos base: fuente en negrita y "leading-tight" para un espaciado compacto.
  - Útil para títulos principales en secciones, hero banners, o encabezados destacados.
*/
