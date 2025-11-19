// molecules/TimelineItem.tsx
import { TimelineDot } from "../../atoms/layout/TimeLineDot";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  index: number;
  isVisible?: boolean;
}

export const TimelineItem = ({
  year,
  title,
  description,
  index,
  isVisible,
}: TimelineItemProps) => (
  <div
    className={`relative flex items-center ${
      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
    } transition-all duration-1000 transform ${
      isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
    }`}
    style={{ transitionDelay: `${0.4 + index * 0.1}s` }}
  >
    <div className={`flex-1 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
      <div className="bg-fondo rounded-xl p-6 inline-block shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="text-2xl font-bold text-primario mb-2">{year}</div>
        <Heading className="text-lg font-bold text-secundario mb-2">{title}</Heading>
        <Paragraph className="text-texto/80">{description}</Paragraph>
      </div>
    </div>

    {/* Timeline Dot central */}
    <TimelineDot />

    <div className="flex-1"></div>
  </div>
);
