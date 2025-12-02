import { ReactNode } from "react";

interface GalleryNavButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

export const GalleryNavButton = ({
  onClick,
  children,
  className = "",
  ariaLabel,
}: GalleryNavButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <span className="text-white">{children}</span>
    </button>
  );
};

/*
  Componente: GalleryNavButton
  ---------------------------------------------------------
  Descripción:
    Representa un botón de navegación para galerías, generalmente 
    para moverse entre imágenes a izquierda o derecha.

  Props:
    - onClick: función que se ejecuta al hacer clic.
    - children: contenido dentro del botón (normalmente íconos).
    - className: clases opcionales para personalizar posición o estilo.
    - ariaLabel: etiqueta accesible para describir la acción del botón.

  Funcionamiento:
    - Renderiza un botón posicionado verticalmente al centro mediante
      top-1/2 y -translate-y-1/2.
    - Incluye una animación hover que aumenta ligeramente el tamaño.
    - ariaLabel garantiza accesibilidad para lectores de pantalla.

  Estilos:
    - absolute: permite posicionarlo libremente dentro de la galería.
    - flex + items-center + justify-center: centra el icono.
    - hover:scale-110: efecto interactivo al pasar el cursor.
    - text-white dentro del span para asegurar buena visibilidad.

  Uso recomendado:
    <GalleryNavButton onClick={prevImage} ariaLabel="Imagen anterior">
      <IconoIzquierda />
    </GalleryNavButton>

    <GalleryNavButton onClick={nextImage} ariaLabel="Imagen siguiente">
      <IconoDerecha />
    </GalleryNavButton>
*/
