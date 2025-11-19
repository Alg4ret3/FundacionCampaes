// molecules/TimelineItem.tsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { FloatingIcon } from "../../atoms/layout/TimeLineDot";
import { IoChevronDown } from "react-icons/io5";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isVisible?: boolean;
}

export const TimelineItem = ({ year, title, description, index, isVisible }: TimelineItemProps) => {
  const [isOpen, setIsOpen] = useState(true); // Tarjetas abiertas por defecto
  const alignLeft = index % 2 === 0;

  const cardVariants = {
    hidden: { opacity: 0, x: alignLeft ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { delay: index * 0.15, type: "spring", stiffness: 100, damping: 14 },
    },
  };

  const descriptionVariants = {
    collapsed: { opacity: 0, height: 0, marginTop: 0, transition: { duration: 0.35, ease: "easeInOut" } },
    open: { opacity: 1, height: "auto", marginTop: 8, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row w-full mb-12
        ${alignLeft ? "md:justify-start" : "md:justify-end"} justify-start`}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center w-full md:max-w-md">
        {/* Icono flotante */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block" onClick={() => setIsOpen(!isOpen)}>
          <FloatingIcon index={index} />
        </div>

        {/* Card */}
        <motion.div
          className={`bg-fondo rounded-xl p-6 shadow-xl w-full text-left cursor-pointer
            ${alignLeft ? "md:ml-4 ml-0" : "md:mr-4 mr-0"}
            ${isOpen ? "shadow-primario/20" : "shadow-lg"} transition-shadow duration-300`}
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.99 }}
        >
          <div className="flex justify-between items-center mb-2">
            <div>
              <div className="text-2xl font-extrabold text-primario">{year}</div>
              <Heading className="text-lg font-bold text-secundario">{title}</Heading>
            </div>

            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.35 }} className="p-1 rounded-full bg-primario/10 text-primario flex-shrink-0">
              <IoChevronDown size={20} />
            </motion.div>
          </div>

          <motion.div
            initial="open"
            animate={isOpen ? "open" : "collapsed"}
            variants={descriptionVariants}
            className="overflow-hidden"
          >
            <Paragraph className="text-texto/80">{description}</Paragraph>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
