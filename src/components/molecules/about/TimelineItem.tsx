import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const resume = description.length > 140 ? description.slice(0, 140) + "..." : description;

  const variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.06, duration: 0.36 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="w-full"
    >
      <div className="flex gap-4 items-start">
        {/* espacio reservado para el stepper */}
        <div className="w-14 flex justify-center items-start pt-1">
          {/* left column is controlled by AboutSection stepper */}
        </div>

        <div className="flex-1">
          <div className="bg-white border-l-4 border-primario rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="w-full text-left flex items-start justify-between gap-4"
              aria-expanded={isOpen}
            >
              <div>
                <div className="text-lg sm:text-xl font-semibold text-primario">{year}</div>
                <Heading className="text-sm sm:text-base font-bold text-gray-800 mt-1">{title}</Heading>
              </div>

              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-primario/70">
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <div className="mt-3">
              <Paragraph className="text-sm text-gray-600 line-clamp-2">{isOpen ? description : resume}</Paragraph>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden mt-4"
                >
                  {image && <img src={image} alt={title} className="w-full h-44 object-cover rounded-md mb-3" />}
                  <Paragraph className="text-sm text-gray-700 leading-relaxed">{description}</Paragraph>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const resume = description.length > 140 ? description.slice(0, 140) + "..." : description;

  const variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { delay: index * 0.06, duration: 0.36 } },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      className="w-full"
    >
      <div className="flex gap-4 items-start">
        {/* espacio reservado para el stepper */}
        <div className="w-14 flex justify-center items-start pt-1">
          {/* left column is controlled by AboutSection stepper */}
        </div>

        <div className="flex-1">
          <div className="bg-white border-l-4 border-primario rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <button
              onClick={() => setIsOpen((s) => !s)}
              className="w-full text-left flex items-start justify-between gap-4"
              aria-expanded={isOpen}
            >
              <div>
                <div className="text-lg sm:text-xl font-semibold text-primario">{year}</div>
                <Heading className="text-sm sm:text-base font-bold text-gray-800 mt-1">{title}</Heading>
              </div>

              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-primario/70">
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <div className="mt-3">
              <Paragraph className="text-sm text-gray-600 line-clamp-2">{isOpen ? description : resume}</Paragraph>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.28 }}
                  className="overflow-hidden mt-4"
                >
                  {image && <img src={image} alt={title} className="w-full h-44 object-cover rounded-md mb-3" />}
                  <Paragraph className="text-sm text-gray-700 leading-relaxed">{description}</Paragraph>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { ChevronDown } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const resume = description.slice(0, 150) + "...";

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="relative w-full"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div className="flex gap-4 sm:gap-6 md:gap-8">
        
        {/* PUNTO Y LÍNEA VERTICAL */}
        <div className="flex flex-col items-center pt-1">
          {/* Punto del timeline */}
          <div className="w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-primario border-4 border-white shadow-md relative z-10 flex-shrink-0"></div>
          
          {/* Línea conectora - solo en mobile/tablet */}
          <div className="w-1 h-24 sm:h-28 md:h-32 bg-gradient-to-b from-primario/40 to-primario/10 md:hidden"></div>
        </div>

        {/* CONTENIDO - CARD */}
        <div className="flex-1 pb-8 sm:pb-10 md:pb-12">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full text-left group"
          >
            {/* HEADER CARD */}
            <div className="flex justify-between items-start gap-3 mb-2">

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
