import { ModalBase } from "../../atoms/layout/ModalBase";
import { getCategoryStyles } from "../../../utils/CategoryUtils";
import { Activity } from "../../../types";

interface Props {
  activity: Activity | null;
  onClose: () => void;
}

export const ActivityDetailsModal = ({ activity, onClose }: Props) => {
  if (!activity) return null;
  const styles = getCategoryStyles(activity.category);

  return (
    <ModalBase open={!!activity} onClose={onClose} themeColor={styles.primary}>
      <div className="pt-8 sm:pt-12 pb-8 px-4 sm:px-6">
        {activity.image && (
          <img
            src={activity.image}
            className="w-full h-52 sm:h-64 md:h-72 rounded-2xl object-cover mb-6 shadow-lg transition-all duration-300"
          />
        )}

        <span className={`px-4 py-1 ${styles.bg} ${styles.text} rounded-full text-xs font-semibold mb-4 inline-block uppercase tracking-wide border ${styles.border}`}>
          {activity.category}
        </span>

        <h2 className={`text-xl sm:text-2xl md:text-3xl font-extrabold mb-4`} style={{ color: styles.primary }}>
          {activity.title}
        </h2>

        <p className={`text-xs sm:text-sm md:text-base ${styles.textHeavy} opacity-80 mb-4`}>
          {new Date(activity.date).toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className={`w-16 sm:w-18 md:w-20 h-1 rounded-full mb-6`} style={{ backgroundColor: styles.primary }}></div>

        {activity.extraText && (
          <p className="text-xs sm:text-sm md:text-base text-texto/80 leading-relaxed mt-4 whitespace-pre-line">
            {activity.extraText}
          </p>
        )}
      </div>
    </ModalBase>
  );
};
