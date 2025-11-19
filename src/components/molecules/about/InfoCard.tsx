// molecules/InfoCard.tsx
import { IconWrapper } from "../../atoms/icons/IconWrapper";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { motion } from "framer-motion";

interface InfoCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
  isVisible?: boolean;
}

export const InfoCard = ({
  icon,
  title,
  description,
  delay = 0,
  isVisible,
}: InfoCardProps) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay } },
  };

  const iconFloatVariants = {
    float: {
      y: [0, -8, 0], // movimiento vertical sutil
      rotate: [0, 5, -5, 0], // pequeña rotación
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
    hover: { scale: 1.2, rotate: 10 },
    tap: { scale: 0.9, rotate: -10 },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-gradient-to-br from-fondo/95 to-fondo/80 rounded-3xl p-8
                 shadow-lg shadow-primario/20 transition-transform duration-300 text-center"
    >
      {/* Icono animado */}
      <motion.div
        variants={iconFloatVariants}
        animate="float"
        whileHover="hover"
        whileTap="tap"
        className="mb-6 w-16 h-16 rounded-xl flex items-center justify-center
                   bg-gradient-to-br from-primario to-acento text-white
                   shadow-md shadow-primario/40 mx-auto"
      >
        <IconWrapper icon={icon} />
      </motion.div>

      {/* Título centrado */}
      <Heading className="text-xl md:text-2xl font-bold text-primario mb-3 text-center">
        {title}
      </Heading>

      {/* Descripción */}
      <Paragraph className="text-texto/80 text-sm md:text-base leading-relaxed">
        {description}
      </Paragraph>
    </motion.div>
  );
};
