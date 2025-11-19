export const Heading = ({ children, className = "" }) => (
  <h1 className={`font-bold leading-tight ${className}`}>
    {children}
  </h1>
);
