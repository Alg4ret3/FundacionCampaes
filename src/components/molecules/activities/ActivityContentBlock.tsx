import { CategoryTag } from "../../atoms/layout/CategoryTag";
import { CategoryID } from "../../../types";
import { getCategoryStyles } from "../../../utils/CategoryUtils";

export const ActivityContentBlock = ({
  category,
  title,
  description,
  extraText,
}: {
  category: CategoryID;
  title: string;
  description: string;
  extraText?: string;
}) => {
  const styles = getCategoryStyles(category);

  return (
    <div className={`p-4 sm:p-5 md:p-6 transition-colors duration-500 ${styles.cardBg}`}>
      <h3
        className="
          text-base sm:text-lg md:text-xl
          font-bold 
          mb-2 sm:mb-3
        "
        style={{ color: styles.primary }}
      >
        {title}
      </h3>

      <p className="text-sm sm:text-base text-text/80 leading-relaxed">
        {description}
      </p>
    </div>
  );
};
