// components/atoms/HamburgerButton.tsx
import React from "react";
import { Menu, X } from "lucide-react";

interface HamburgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({
  isOpen,
  onClick,
}) => (
  <button
    onClick={onClick}
    aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
    className="md:hidden p-2 rounded-lg text-primario hover:bg-gray-100 transition-all duration-200"
  >
    {isOpen ? <X size={26} /> : <Menu size={26} />}
  </button>
);