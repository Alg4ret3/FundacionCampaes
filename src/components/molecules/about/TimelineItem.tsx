import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { FloatingIcon } from "../../atoms/layout/TimeLineDot";
import { IoChevronDown } from "react-icons/io5";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  image?: string;
  index: number;
  isVisible?: boolean;
}

export const TimelineItem = ({
  year,
  title,
  description,
  image,
  index,
  isVisible,
}: TimelineItemProps) => {
  const [isOpen, setIsOpen] = useState(true);
  const [expanded, setExpanded] = useState(false);

  const alignLeft = index % 2 === 0;

  const resume = description.slice(0, 200) + "...";

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: index * 0.12,
        type: "spring",
        stiffness: 90,
        damping: 12,
      },
    },
  };

  return (
    <motion.div
      className={`relative flex flex-col md:flex-row w-full mb-12 
      ${alignLeft ? "md:justify-start" : "md:justify-end"} justify-start`}
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      layout
    >
      <div className="flex flex-col items-center w-full md:max-w-md">

        {/* ICONO CENTRAL */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:block">
          <FloatingIcon index={index} />
        </div>

        {/* CARD */}
        <motion.div
          className={`bg-fondo rounded-2xl p-6 shadow-xl w-full text-left cursor-pointer
          ${alignLeft ? "md:ml-4" : "md:mr-4"} 
          transition-all duration-300`}
          whileHover={{ scale: 1.03, y: -4 }}
          whileTap={{ scale: 0.98 }}
          layout
          onClick={() => {
            const newState = !isOpen;
            setIsOpen(newState);

            if (newState === true) {
              // ⭐ SCROLL A LA IMAGEN AL MAXIMIZAR
              setTimeout(() => {
                const imgElement = document.getElementById(
                  `timeline-image-${index}`
                );
                imgElement?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }, 380); // espera la animación de abrir
            }
          }}
        >
          {/* HEADER */}
          <motion.div className="flex justify-between items-center mb-3" layout>
            <div>
              <div className="text-3xl font-extrabold text-primario">
                {year}
              </div>

              <Heading className="text-lg font-bold text-secundario">
                {title}
              </Heading>
            </div>

            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 120, damping: 10 }}
              className="p-1 rounded-full bg-primario/10 text-primario flex-shrink-0"
            >
              <IoChevronDown size={22} />
            </motion.div>
          </motion.div>

          {/* CONTENIDO ANIMADO */}
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                key="content"
                id={`timeline-content-${index}`}
                initial={{ opacity: 0, height: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                className="overflow-hidden"
                layout
              >
                {/* IMAGEN */}
                {image && (
                  <motion.img
                    src={image}
                    alt={title}
                    id={`timeline-image-${index}`}   // ⭐ ID PARA EL SCROLL
                    className="w-full h-52 object-cover rounded-xl mb-4"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45 }}
                    whileHover={{
                      scale: 1.04,
                      transition: { duration: 0.25 },
                    }}
                  />
                )}

                {/* DESCRIPCIÓN */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={expanded ? "full" : "resume"}
                    initial={{ opacity: 0, x: expanded ? -40 : 0 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    layout
                  >
                    <Paragraph className="text-texto/80 leading-relaxed">
                      {expanded ? description : resume}
                    </Paragraph>
                  </motion.div>
                </AnimatePresence>

                {/* BOTÓN LEER MÁS / MENOS */}
                <motion.button
                  onClick={(e) => {
                    e.stopPropagation();

                    if (expanded) {
                      setExpanded(false);
                      setTimeout(() => {
                        const titleElement = document.getElementById(
                          `timeline-image-${index}`
                        );
                        titleElement?.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }, 180);
                    } else {
                      setExpanded(true);

                      setTimeout(() => {
                        const contentElement = document.getElementById(
                          `timeline-content-${index}`
                        );
                        contentElement?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 350);
                    }
                  }}
                  className="mt-3 text-primario font-bold hover:underline"
                  whileTap={{ scale: 0.96 }}
                >
                  {expanded ? "Leer menos" : "Leer más"}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};
