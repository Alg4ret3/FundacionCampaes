interface GalleryIndicatorProps {
  /** Indica si el indicador está activo */
  isActive: boolean;
  /** Función que se ejecuta al hacer clic */
  onClick: () => void;
}

export const GalleryIndicator = ({ isActive, onClick }: GalleryIndicatorProps) => {
  const baseClasses =
    "rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-acento";

  const activeClasses = "bg-acento w-8 h-3"; // Activo: ancho mayor y color destacado
  const inactiveClasses = "bg-gray-300 w-3 h-3 hover:bg-acento/50"; // Inactivo: más pequeño y con hover

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-label={isActive ? "Imagen activa" : "Ir a imagen"}
    />
  );
};
