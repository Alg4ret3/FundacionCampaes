import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heading } from "../../atoms/typography/Heading";
import { Paragraph } from "../../atoms/typography/Paragraph";
import { ModalBase } from "../../atoms/layout/ModalBase";

interface Item {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export const HorizontalTimeline = ({ items }: { items: Item[] }) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<Item | null>(null);
  const [open, setOpen] = useState(false);

  // DRAG STATE
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollPos = el.scrollLeft + el.clientWidth / 2;
      let newIndex = 0;
      let minDiff = Infinity;

      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const center = c.offsetLeft + c.clientWidth / 2;
        const diff = Math.abs(center - scrollPos);
        if (diff < minDiff) {
          minDiff = diff;
          newIndex = i;
        }
      });

      setIndex(newIndex);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    setIsDragging(true);
    setHasDragged(false);
    setStartX(e.pageX - el.offsetLeft);
    setScrollLeft(el.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const el = scrollerRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startX) * 1.5; // multiplicador de velocidad
    el.scrollLeft = scrollLeft - walk;
    
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
  };

  const scrollToIndex = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    
    // Calculamos el scroll necesario para centrar el elemento
    const targetScroll = child.offsetLeft - (el.clientWidth / 2) + (child.clientWidth / 2);
    el.scrollTo({ left: targetScroll, behavior: "smooth" });
  };

  const scrollPrev = () => {
    if (index > 0) scrollToIndex(index - 1);
  };

  const scrollNext = () => {
    if (index < items.length - 1) scrollToIndex(index + 1);
  };

  return (
    <div className="relative w-full group/timeline">
      <div
        ref={scrollerRef}
        className={`
          overflow-x-auto scroll-smooth snap-x snap-mandatory 
          flex gap-4 sm:gap-6 py-6 md:py-8 lg:py-12 px-4 sm:px-6 md:px-10 lg:px-16
          scrollbar-hide cursor-grab active:cursor-grabbing
          ${isDragging ? "snap-none" : "snap-x"}
        `}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {items.map((it, i) => (
          <motion.div
            key={i}
            className="snap-center flex-shrink-0 w-[88%] sm:w-[85%] md:w-[85%] lg:w-[480px] xl:w-[550px]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05, duration: 0.5 }}
          >
            <button
              onClick={() => {
                if (!hasDragged) {
                  setSelected(it);
                  setOpen(true);
                }
              }}
              className="w-full text-left h-full"
            >
              <div className="bg-fondo rounded-2xl p-5 shadow-lg shadow-primario/20 hover:shadow-xl hover:shadow-primario/30 hover:scale-[1.01] transform-gpu transition-all duration-300 h-full flex flex-col border border-primario/10">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-sm text-primario font-semibold">{it.year}</div>
                    <Heading className="text-base sm:text-lg font-extrabold text-primario mt-1">{it.title}</Heading>
                  </div>
                </div>

                <div className="mt-3 flex-1">
                  <Paragraph className="text-sm text-texto/80 line-clamp-3">{it.description}</Paragraph>
                </div>

                {it.image && (
                  <img src={it.image} alt={it.title} className="w-full h-40 object-cover rounded-md mt-4 border border-primario/10" />
                )}
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden md:flex justify-between px-2 sm:px-4 pointer-events-none z-20">
        <button
          onClick={scrollPrev}
          disabled={index === 0}
          className={`
            w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center 
            text-primario pointer-events-auto transition-all duration-300
            hover:bg-primario hover:text-white 
            ${index === 0 ? "opacity-0 cursor-default" : "opacity-100 hover:scale-110 active:scale-95"}
          `}
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={scrollNext}
          disabled={index === items.length - 1}
          className={`
            w-10 h-10 rounded-full bg-white/95 shadow-xl flex items-center justify-center 
            text-primario pointer-events-auto transition-all duration-300
            hover:bg-primario hover:text-white
            ${index === items.length - 1 ? "opacity-0 cursor-default" : "opacity-100 hover:scale-110 active:scale-95"}
          `}
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* indicators */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? "bg-primario w-4" : "bg-primario/30"}`}
            aria-label={`Ir al paso ${i + 1}`}
          />
        ))}
      </div>

      <ModalBase open={open} onClose={() => setOpen(false)} maxW="max-w-5xl">
        {selected && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-4 sm:gap-6 lg:gap-8">
            <div className="flex items-center justify-center order-2 lg:order-1">
              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-auto max-h-64 sm:max-h-80 lg:max-h-[500px] object-cover rounded-2xl border-2 border-primario/20 shadow-lg"
                />
              )}
            </div>

            <div className="flex flex-col justify-start order-1 lg:order-2">
              <div className="text-xs sm:text-sm lg:text-base text-primario font-semibold tracking-wide uppercase">{selected.year}</div>
              <Heading className="text-xl sm:text-2xl lg:text-4xl font-extrabold text-primario mt-2 lg:mt-4 leading-tight">
                {selected.title}
              </Heading>

              <div className="mt-3 sm:mt-4 lg:mt-6 text-xs sm:text-sm lg:text-base text-texto/85 leading-relaxed space-y-3 max-h-40 sm:max-h-56 lg:max-h-none overflow-y-auto">
                <Paragraph>{selected.description}</Paragraph>
              </div>
            </div>
          </div>
        )}
      </ModalBase>
    </div>
  );
};
