// components/organisms/layout/Navigation.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Leaf,
  Users,
  Activity,
  Phone,
  X,
  LucideIcon,
} from "lucide-react";

// Importación de Átomos y Moléculas 
import { Logo } from "../../molecules/navegation/Logo";
import { NavLink } from "../../atoms/navigation/NavLink";
import { HamburgerButton } from "../../atoms/buttons/HamburgerButton";
import { IconLink } from "../../atoms/icons/IconLink";

// Definición de tipos para los enlaces
interface NavItem {
  name: string;
  href: string;
  Icon: LucideIcon;
}

const navLinks: NavItem[] = [
  { name: "Inicio", href: "#inicio", Icon: Home },
  { name: "Sobre Nosotros", href: "#nosotros", Icon: Users },
  { name: "Líneas de Acción", href: "#lineas", Icon: Leaf },
  { name: "Actividades", href: "#actividades", Icon: Activity },
  { name: "Contacto", href: "#contacto", Icon: Phone },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    // Se usa 'box-border' para prevenir el desbordamiento horizontal.
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md box-border">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
        {/* Molécula LOGO */}
        <Logo />

        {/* Átomos LINKS DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} />
          ))}
        </div>

        {/* ✅ BOTÓN HAMBURGUESA: Visible solo en móvil */}
        <div className="md:hidden">
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* SIDEBAR MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* FONDO OSCURECIDO: z-40 (para que el sidebar z-50 quede encima) */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            {/* SIDEBAR: z-50 */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* HEADER SIDEBAR */}
              <div className="flex items-center justify-between px-5 py-4 border-b">
                <h2 className="text-lg font-semibold text-primario">
                  Navegación
                </h2>
                <button
                  onClick={closeMenu}
                  className="p-2 text-primario hover:text-primario-900 transition-colors"
                  aria-label="Cerrar menú lateral"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Átomos LINKS MÓVIL */}
              <div className="flex flex-col px-5 py-6 space-y-3">
                {navLinks.map((link) => (
                  <IconLink key={link.name} {...link} onClose={closeMenu} />
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
