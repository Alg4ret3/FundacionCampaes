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
  <div className="w-full max-w-5xl mx-auto px-2 sm:px-3 md:px-0">
    {/* Contenedor de imágenes */}
    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[450px] xl:h-[500px] rounded-lg sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl">
      {images.map((image, index) => (
        <GalleryImage
          key={index}
          src={image}
          alt={`Gallery ${index + 1}`}
          isVisible={index === currentIndex}
        />
      ))}



      {/* Flechas de navegación */}
      <GalleryNavButton onClick={goToPrevious} ariaLabel="Previous image" className="left-2 sm:left-3 md:left-4">
        <ChevronLeft className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
      </GalleryNavButton>

      <GalleryNavButton onClick={goToNext} ariaLabel="Next image" className="right-2 sm:right-3 md:right-4">
        <ChevronRight className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" />
      </GalleryNavButton>
    </div>

    {/* Indicadores */}
    <div className="flex justify-center mt-3 sm:mt-4 md:mt-5 space-x-1.5 sm:space-x-2">
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
