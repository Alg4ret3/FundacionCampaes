import { useState, useEffect } from "react";
import { galleryImages } from "../../../../constants/DataGalley";
import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { GalleryCarousel } from "../../../molecules/gallery/GalleryCarousel";
import { GalleyTextBlock } from "../../../molecules/gallery/GalleryTextBlock";
import { SectionDivider } from "../../../atoms/misc/SectionDivider";

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
      className="relative py-20 md:py-28 lg:py-36 bg-white"
    >
      <SectionDivider variant="wave" flip={true} color="fill-[#F9FBFC]" className="top-0" />
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <GalleyTextBlock isVisible={isVisible} />

        <div
          className={`relative w-full max-w-5xl mx-auto transition-all duration-1000 ${
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
    </section>
  );
};
