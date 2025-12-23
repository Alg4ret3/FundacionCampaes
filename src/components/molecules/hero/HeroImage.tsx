import { FloatingStatsCard } from "./FloatingStatsCard";

export const HeroImage = ({ isVisible }) => (
  <div
    className={`relative transition-all duration-1000 ${
      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
    }`}
    style={{ transitionDelay: "0.4s" }}
  >
    <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square">
      <img
        src="Image/Presentacion.webp"
        alt="Community"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-secundario/40 to-transparent"></div>
    </div>

    <FloatingStatsCard />
  </div>
);
