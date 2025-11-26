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
