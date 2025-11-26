import { PrimaryButton } from "../../atoms/buttons/PrimaryButton";

interface LoadMoreActivitiesProps {
  showMore: boolean;
  onToggle: () => void;
  isVisible: boolean;
}

export const LoadMoreActivities = ({
  showMore,
  onToggle,
  isVisible,
}: LoadMoreActivitiesProps) => {
  return (
    <div
      className={`
        text-center 
        transition-all duration-1000 
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: "0.6s" }}
    >
      <PrimaryButton
        label={showMore ? "Ocultar actividades" : "Ver todas las actividades"}
        onClick={onToggle}
        className="
          bg-primario 
          text-white 
          px-6 py-3 
          rounded-xl 
          font-semibold 
          shadow-md 
          hover:bg-acento 
          hover:shadow-lg 
          active:scale-95
          transition-all 
          duration-300
        "
      />
    </div>
  );
};
