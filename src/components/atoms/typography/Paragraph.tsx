export const Paragraph = ({ children, className = "" }) => (
  <p className={`leading-relaxed ${className}`}>
    {children}
  </p>
);
