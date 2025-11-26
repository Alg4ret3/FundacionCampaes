import { useState } from "react";
import { IconBox } from "../../atoms/icons/IconBox";
import { StatValue } from "../../atoms/typography/StatValue";
import { StatLabel } from "../../atoms/typography/StatLabel";
import { StatDescription } from "../../atoms/typography/StatDescription";
import { DividerGradient } from "../../atoms/layout/DividerGradient";
import { motion, AnimatePresence } from "framer-motion";

interface ImpactStatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  extraText?: string; // Nuevo atributo
  color: string;
  isVisible: boolean;
  delay?: number;
}

export const ImpactStatCard = ({
  icon: Icon,
  value,
  label,
  description,
  extraText,
  color,
  isVisible,
  delay = 0,
}: ImpactStatCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
  };

  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15, rotate: 5 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="relative cursor-pointer"
      onClick={() => extraText && setIsExpanded(!isExpanded)}
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primario/10 via-acento/10 to-secundario/10 blur-3xl"></div>

      {/* Contenedor principal interactivo */}
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="relative rounded-3xl p-8 border border-fondo/20 bg-fondo/10 backdrop-blur-md shadow-lg transition-all duration-500"
      >
        {/* Icono animado */}
        <motion.div
          variants={iconVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className="mb-6 flex justify-center"
        >
          <IconBox Icon={Icon} color={color} />
        </motion.div>

        {/* Contenido textual */}
        <div className="mb-2 text-center">
          <StatValue value={value} />
          <StatLabel label={label} className="text-white/90" />
          <StatDescription description={description} className="text-white/70 mt-2" />

          {/* Mensaje “Haz click para ver más” */}
          {!isExpanded && extraText && (
            <p className="text-xs mt-2 text-white/50 italic">Haz click para ver más</p>
          )}
        </div>

        {/* Divider con gradiente */}
        <DividerGradient />

        {/* ExtraText desplegable */}
        <AnimatePresence>
          {isExpanded && extraText && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 text-sm text-white/70 overflow-hidden"
            >
              {extraText}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
