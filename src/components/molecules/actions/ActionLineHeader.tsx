import { IconWrapper } from "../../atoms/icons/IconWrapper";
import { motion } from "framer-motion";

interface ActionLineHeaderProps {
  Icon: React.ElementType;
  isVisible?: boolean; // opcional para animación de entrada
}

export const ActionLineHeader = ({ Icon, isVisible = true }: ActionLineHeaderProps) => (
  <motion.div
    className="flex items-center gap-6 mb-6 group"
    initial={{ opacity: 0, y: 20 }}
    animate={isVisible ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.8, ease: [0.16, 0.84, 0.44, 1] }}
  >
    {/* Ícono principal con fondo circular, sombra y animación hover */}
    <IconWrapper
      icon={
        <motion.div
          className="w-16 h-16 rounded-full bg-fondo flex items-center justify-center shadow-lg hover:shadow-2xl transition-transform duration-500 group-hover:scale-110"
          whileHover={{ rotate: 10 }}
        >
          <Icon className="w-8 h-8 text-primario drop-shadow-md" />
        </motion.div>
      }
    />

    {/* Línea divisoria elegante con efecto de gradiente animado */}
    <motion.div
      className="flex-1 h-1 rounded-full bg-gradient-to-r from-primario via-acento to-secundario"
      initial={{ scaleX: 0 }}
      animate={isVisible ? { scaleX: 1 } : {}}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    />
  </motion.div>
);
