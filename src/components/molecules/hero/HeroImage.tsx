import { getCloudinaryUrl } from "../../../utils/cloudinary";
import { FloatingStatsCard } from "./FloatingStatsCard";

interface HeroImageProps {
  isVisible: boolean;
}

export const HeroImage = ({ isVisible }: HeroImageProps) => (
  <div
    className={`relative transition-all duration-1000 ${
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`}
    style={{ transitionDelay: "0.4s" }}
  >
    <div className="relative rounded-lg sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl aspect-square">
      <img
        src={getCloudinaryUrl("sfyv6jyj8xm9shklieei.webp", { width: 1200, crop: "fill" })}
        alt="Comunidad Fundación Caminos de Paz"
        className="w-full h-full object-cover"
        loading="eager"
        decoding="async"
        fetchpriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secundario/40 to-transparent"></div>
    </div>

    <FloatingStatsCard />
  </div>
);
