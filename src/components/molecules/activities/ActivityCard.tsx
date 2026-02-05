import { ActivityImageBlock } from "./ActivityImageBlock";
import { ActivityContentBlock } from "./ActivityContentBlock";
import { getCategoryStyles } from "../../../utils/CategoryUtils";

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
}) => {
  const styles = getCategoryStyles(activity.category);

  return (
  <div
    onClick={() => onSelect(activity)}
    className={`
      group 
      rounded-3xl 
      overflow-hidden 
      border transition-all duration-500 
      ${styles.border} border-opacity-40 group-hover:border-opacity-100 group-hover:${styles.borderDeep}
      hover:-translate-y-2
      cursor-pointer
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
    `}
    style={{ 
      transitionDelay: delay,
      boxShadow: isVisible ? `0 10px 30px -15px ${styles.shadowColor}33` : 'none'
    }}
  >
    <ActivityImageBlock
      image={activity.image}
      title={activity.title}
      date={formattedDate}
      category={activity.category}
    />

    <ActivityContentBlock
      category={activity.category}
      title={activity.title}
      description={activity.description}
      extraText={activity.extraText}
    />
  </div>
  );
};
