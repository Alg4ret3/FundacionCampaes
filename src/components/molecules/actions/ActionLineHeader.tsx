import { IconWrapper } from "../../atoms/icons/IconWrapper";
import { motion } from "framer-motion";
import { CategoryID } from "../../../types";
import { getCategoryStyles } from "../../../utils/CategoryUtils";

interface ActionLineHeaderProps {
  Icon: React.ElementType;
  category: CategoryID;
  isVisible?: boolean;
}

export const ActionLineHeader = ({ Icon, category, isVisible = true }: ActionLineHeaderProps) => {
  const styles = getCategoryStyles(category);

  return (
  <motion.div
    className="flex gap-6 items-center mb-6 group"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
  >
    {/* Ícono principal con fondo circular, sombra y animación hover */}
    <IconWrapper
      variant="none"
      icon={
        <motion.div
          className={`w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full ${styles.iconAreaBg} flex items-center justify-center shadow-lg group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 border ${styles.border} group-hover:${styles.borderDeep}`}
          whileHover={{ rotate: 10 }}
        >
          <Icon 
            className={`w-6 h-6 drop-shadow-md sm:w-7 md:w-8 sm:h-7 md:h-8`} 
            style={{ color: styles.primary }}
          />
        </motion.div>
      }
    />

    {/* Línea divisoria elegante con efecto de gradiente animado */}
    <motion.div
      className={`flex-1 h-px sm:h-1 rounded-full bg-gradient-to-r ${styles.gradient}`}
      initial={{ scaleX: 0 }}
      animate={isVisible ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </motion.div>
  );
};
