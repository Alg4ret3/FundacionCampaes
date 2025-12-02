export const Heading = ({ children, className = "" }) => (
  <h1 className={`font-bold leading-tight ${className}`}>
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
