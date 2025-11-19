import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";
import { SecondaryButton } from "../../atoms/buttons/SecondaryButton";

export const HeroButtons = ({ isVisible }) => (
  <div
    className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
    style={{ transitionDelay: "0.3s" }}
  >
    {/* PrimaryButton con scroll a sección "impact" */}
    <PrimaryButton
      label="Conoce nuestro impacto"
      onClick={() =>
        document.getElementById("impact")?.scrollIntoView({ behavior: "smooth" })
      }
    />

    {/* SecondaryButton sin cambios */}
    <SecondaryButton label="Únete a nosotros" />
  </div>
);
