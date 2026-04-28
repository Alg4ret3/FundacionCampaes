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

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

// Importación de Átomos y Moléculas 
import { Logo } from "../../molecules/navegation/Logo";
import { NavLink } from "../../atoms/navigation/NavLink";
import { HamburgerButton } from "../../atoms/buttons/HamburgerButton";
import { IconLink } from "../../atoms/icons/IconLink";
import { useScrollSpy } from "../../../hooks/useScrollSpy";

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
  const activeId = useScrollSpy(navLinks.map(link => link.href));

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    // Se usa 'box-border' para prevenir el desbordamiento horizontal.
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-claro/20 box-border">
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 h-16 sm:h-18 md:h-20">
        {/* Molécula LOGO */}
        <Logo />

        {/* Átomos LINKS DESKTOP - Oculto en mobile y tablet */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-10">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} isActive={activeId === link.href} />
          ))}
        </div>

        {/* ✅ BOTÓN HAMBURGUESA: Visible en mobile y tablet (< lg) */}
        <div className="lg:hidden">
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* SIDEBAR MÓVIL Y TABLET */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* FONDO OSCURECIDO: z-40 (para que el sidebar z-50 quede encima) */}
            <motion.div
              className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />
            {/* SIDEBAR: z-50 - Responsive width */}
            <motion.aside
              className="fixed top-0 right-0 h-full w-64 sm:w-72 md:w-80 bg-white z-50 shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              {/* HEADER SIDEBAR */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 border-b">
                <h2 className="text-base sm:text-lg font-semibold text-primario">
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
              <div className="flex flex-col px-4 sm:px-5 py-4 sm:py-6 space-y-2 sm:space-y-3">
                {navLinks.map((link) => (
                  <IconLink key={link.name} {...link} isActive={activeId === link.href} onClose={closeMenu} />
                ))}
              </div>

              <div className="mt-auto border-t p-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Síguenos</p>
                <div className="flex items-center space-x-5">
                  <a href="https://www.facebook.com/share/1ADNfwFbQK/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-xl text-primario hover:bg-primario hover:text-white transition-all duration-300 shadow-sm" aria-label="Facebook">
                    <FaFacebookF size={20} />
                  </a>
                  <a href="https://www.instagram.com/caminosdepazyesperanza?igsh=MXU1cmFnYmh2bGJtcw%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-xl text-primario hover:bg-primario hover:text-white transition-all duration-300 shadow-sm" aria-label="Instagram">
                    <FaInstagram size={20} />
                  </a>
                  <a href="https://wa.me/573185094789" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-50 rounded-xl text-primario hover:bg-primario hover:text-white transition-all duration-300 shadow-sm" aria-label="WhatsApp">
                    <FaWhatsapp size={20} />
                  </a>
                  <a href="mailto:funpazyesperanza@gmail.com" className="p-2 bg-gray-50 rounded-xl text-primario hover:bg-primario hover:text-white transition-all duration-300 shadow-sm" aria-label="Gmail">
                    <SiGmail size={20} />
                  </a>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
