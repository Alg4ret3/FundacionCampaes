interface GalleryIndicatorProps {
  isActive: boolean;
  onClick: () => void;
}

export const GalleryIndicator = ({ isActive, onClick }: GalleryIndicatorProps) => {
  const baseClasses =
    "rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-acento";

  const activeClasses = "bg-acento w-8 h-3";
  const inactiveClasses = "bg-gray-300 w-3 h-3 hover:bg-acento/50";

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
      aria-label={isActive ? "Imagen activa" : "Ir a imagen"}
    />
  );
};

/*
Componente GalleryIndicator que representa un indicador interactivo para galerías o sliders.
Cambia su tamaño y color según el estado isActive, diferenciando claramente la imagen actualmente visible.
Incluye accesibilidad mediante aria-label y estilos de foco.
Ideal para controles de navegación en carruseles o galerías.
*/
