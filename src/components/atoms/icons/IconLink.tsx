// components/atoms/IconLink.tsx
import React from "react";
import { LucideIcon } from "lucide-react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface IconLinkProps {
  name: string;
  href: string;
  Icon: LucideIcon;
  onClose: () => void;
}

export const IconLink: React.FC<IconLinkProps> = ({
  name,
  href,
  Icon,
  onClose,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Hacemos scroll manual
    handleSmoothScroll(e, href);

    // Esperamos un poco para que NO tiemble el menú móvil
    setTimeout(() => {
      onClose();
    }, 350); // este tiempo coincide con tu scroll suave
  };

  return (
    <button
      onClick={handleClick}
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primario/10 text-gray-800 font-medium transition-all duration-200 text-left"
    >
      <Icon size={20} className="text-primario" />
      {name}
    </button>
  );
};
