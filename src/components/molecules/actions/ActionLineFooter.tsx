import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  subItems?: string[];
}

export const ActionLineFooter = ({ subItems = [] }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-6 pt-6 border-t border-gray-100">
      {/* Botón Explorar */}
      <div
        className="flex items-center justify-between text-primario font-semibold text-sm cursor-pointer group-hover:translate-x-2 transition-transform duration-300"
        onClick={() => setOpen(!open)}
      >
        Programas Sociales
        {open ? <ChevronUp className="w-4 h-4 ml-2" /> : <ChevronDown className="w-4 h-4 ml-2" />}
      </div>

      {/* Subítems con estilo */}
      <div
        className={`mt-3 space-y-3 transition-all duration-500 ease-out overflow-hidden ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        {subItems.map((item, idx) => (
          <div
            key={idx}
            className="bg-primario/10 text-secundario rounded-xl px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300 flex items-center gap-2"
          >
            <span className="w-2 h-2 rounded-full bg-primario flex-shrink-0"></span>
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
