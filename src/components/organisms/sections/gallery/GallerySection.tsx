import { useState, useEffect } from "react";
import { galleryImages } from "../../../../constants/DataGalley";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { GalleryCarousel } from "../../../molecules/gallery/GalleryCarousel";
import { GalleyTextBlock } from "../../../molecules/gallery/GalleryTextBlock";

export const GallerySection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  return (
    <section
      ref={ref}
      className="relative py-15 bg-gradient-to-b from-fondo/90 to-fondo-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GalleyTextBlock isVisible={isVisible} />

        <div
          className={`relative max-w-5xl mx-auto transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <GalleryCarousel
            images={galleryImages}
            currentIndex={currentIndex}
            goToNext={goToNext}
            goToPrevious={goToPrevious}
            setCurrentIndex={setCurrentIndex}
          />
        </div>
      </div>
      {/* Divider decorativo al final de la sección */}
      <div className="mt-16 w-full h-16 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-acento/10 pointer-events-none" />
      </div>




    </section>
  );
};
