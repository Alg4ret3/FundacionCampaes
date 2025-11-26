import { ActivityImageBlock } from "./ActivityImageBlock";
import { ActivityContentBlock } from "./ActivityContentBlock";

export const ActivityCard = ({
  activity,
  isVisible,
  delay,
  formattedDate,
  onSelect,
}: {
  activity: any;
  isVisible: boolean;
  delay: string;
  formattedDate: string;
  onSelect: (activity: any) => void;
}) => (
  <div
    onClick={() => onSelect(activity)}
    className={`
      group 
      rounded-3xl 
      overflow-hidden 
      shadow-md 
      hover:shadow-2xl 
      border border-white/40
      hover:border-acento/40
      transition-all 
      duration-500 
      hover:-translate-y-2
      cursor-pointer
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
    style={{ transitionDelay: delay }}
  >
    <ActivityImageBlock
      image={activity.image}
      title={activity.title}
      date={formattedDate}
    />

    <ActivityContentBlock
      category={activity.category}
      title={activity.title}
      description={activity.description}
      extraText={activity.extraText}
    />
  </div>
);
