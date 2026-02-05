interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Paragraph = ({ children, className = "", style = {} }: ParagraphProps) => (
  <p className={`leading-relaxed ${className}`} style={style}>
    {children}
  </p>
);

/*
  Componente Paragraph:
  - Renderiza un párrafo con espaciado "leading-relaxed" para mejorar la legibilidad.
  - Recibe contenido como children y permite extender estilos mediante className.
  - Ideal para textos descriptivos, subtítulos largos o contenido general.
*/
