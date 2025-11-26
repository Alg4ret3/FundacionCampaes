import { ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryNavButton } from "../../atoms/buttons/GalleryButton";
import { GalleryImage } from "../../atoms/layout/Image";
import { GalleryIndicator } from "../../atoms/layout/Indicator";

interface GalleryCarouselProps {
  images: string[];
  currentIndex: number;
  goToNext: () => void;
  goToPrevious: () => void;
  setCurrentIndex: (index: number) => void;
}

export const GalleryCarousel = ({
  images,
  currentIndex,
  goToNext,
  goToPrevious,
  setCurrentIndex,
}: GalleryCarouselProps) => (
  <div className="max-w-5xl mx-auto">
    {/* Contenedor de imágenes */}
    <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          isVisible={index === currentIndex}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-secundario/50 to-transparent"></div>

      {/* Flechas de navegación */}
      <GalleryNavButton onClick={goToPrevious} ariaLabel="Previous image" className="left-4">
        <ChevronLeft className="w-6 h-6 text-white" />
      </GalleryNavButton>

      <GalleryNavButton onClick={goToNext} ariaLabel="Next image" className="right-4">
        <ChevronRight className="w-6 h-6 text-white" />
      </GalleryNavButton>
    </div>

    {/* Indicadores */}
    <div className="flex justify-center mt-4 space-x-2">
      {images.map((_, index) => (
        <GalleryIndicator
          key={index}
          isActive={index === currentIndex}
          onClick={() => setCurrentIndex(index)}
        />
      ))}
    </div>
  </div>
);
