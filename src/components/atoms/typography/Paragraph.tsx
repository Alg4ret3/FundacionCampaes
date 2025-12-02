export const Paragraph = ({ children, className = "" }) => (
  <p className={`leading-relaxed ${className}`}>
    {children}
  </p>
);

/*
  Componente Paragraph:
  - Renderiza un párrafo con espaciado "leading-relaxed" para mejorar la legibilidad.
  - Recibe contenido como children y permite extender estilos mediante className.
  - Ideal para textos descriptivos, subtítulos largos o contenido general.
*/
