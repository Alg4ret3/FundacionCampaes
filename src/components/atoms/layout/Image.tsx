interface GalleryImageProps {
  src: string;
  alt: string;
  isVisible: boolean;
}

export const GalleryImage = ({ src, alt, isVisible }: GalleryImageProps) => (
  <div
    className={`absolute inset-0 transition-opacity duration-1000 ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </div>
);

/*
Componente GalleryImage diseñado para mostrar imágenes dentro de una galería con efecto de desvanecimiento.
Utiliza posicionamiento absoluto para superponer imágenes y controla la visibilidad mediante la propiedad isVisible.
Aplica una transición suave de opacidad para lograr un cambio gradual entre imágenes.
Ideal para sliders, carruseles o galerías automáticas.
*/
