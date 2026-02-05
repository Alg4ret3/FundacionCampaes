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

export const TimelineStep = ({
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
        <div className="w-20 flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-primario text-white flex items-center justify-center font-bold">{index + 1}</div>
          <div className="w-px bg-claro/30 flex-1 mt-2" />
        </div>

        <div className="flex-1">
          <div className="bg-white rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-sm text-primario font-semibold">{year}</div>
                <Heading className="text-sm sm:text-base font-bold text-gray-800 mt-1">{title}</Heading>
              </div>

              <div className="text-primario/70" />
            </div>

            <div className="mt-3">
              <Paragraph className="text-sm text-gray-600 line-clamp-2">{isOpen ? description : resume}</Paragraph>
            </div>

            <div className="mt-3">
              <button onClick={() => setIsOpen((s) => !s)} className="text-primario font-semibold flex items-center gap-2">
                <span>{isOpen ? "Cerrar" : "Ver más"}</span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={16} />
                </motion.span>
              </button>
            </div>

            <AnimatePresence>
              {isOpen && (
                <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.28 }} className="overflow-hidden mt-4">
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
