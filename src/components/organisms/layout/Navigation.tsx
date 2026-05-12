// components/organisms/layout/Navigation.tsx
"use client";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Leaf,
  Users,
  Phone,
  LucideIcon,
  ChevronRight,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
  { name: "Inicio", href: "/", Icon: Home },
  { name: "Sobre Nosotros", href: "/about", Icon: Users },
  { name: "Líneas de Acción", href: "/action-activities", Icon: Leaf },
  { name: "Contacto", href: "/contact", Icon: Phone },
];

const socialLinks = [
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaWhatsapp, href: "#", label: "WhatsApp" },
  { Icon: SiGmail, href: "#", label: "Gmail" },
];

export const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const activeId = location.pathname;

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Detectar scroll para cambiar el estilo del nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al cambiar de ruta
  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.05)] transition-all duration-500"
    >
      <nav className="w-full max-w-7xl mx-auto flex justify-between items-center px-5 sm:px-6 md:px-8 lg:px-12 h-[68px] sm:h-[72px] md:h-[80px]">
        {/* Molécula LOGO */}
        <Logo />

        {/* Átomos LINKS DESKTOP */}
        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
          {navLinks.map((link) => (
            <NavLink key={link.name} {...link} isActive={activeId === link.href} />
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-primario rounded-full overflow-hidden shadow-md shadow-primario/20 hover:shadow-lg hover:shadow-primario/30 transition-shadow duration-300"
          >
            <span className="relative z-10">Únete</span>
          </motion.a>
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <div className="lg:hidden">
          <HamburgerButton isOpen={isOpen} onClick={toggleMenu} />
        </div>
      </nav>

      {/* MENÚ MOBILE - FULL SCREEN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 top-[68px] sm:top-[72px] bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeMenu}
            />

            {/* Panel */}
            <motion.div
              className="absolute top-full left-0 w-full bg-white z-50 shadow-2xl lg:hidden overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 0.84, 0.44, 1] }}
            >
              {/* NAVEGACIÓN LINKS */}
              <div className="px-5 pt-6 pb-2">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-4 px-2">
                  Menú
                </p>
                <div className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.07, duration: 0.3 }}
                    >
                      <IconLink
                        {...link}
                        isActive={activeId === link.href}
                        onClose={closeMenu}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA MÓVIL */}
              <motion.div
                className="px-5 pt-4 pb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.28, duration: 0.3 }}
              >
                <a
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-primario text-white font-semibold text-sm rounded-2xl shadow-md shadow-primario/25 hover:shadow-lg hover:shadow-primario/35 transition-all duration-300 active:scale-[0.98]"
                >
                  Contáctanos
                  <ChevronRight className="w-4 h-4" />
                </a>
              </motion.div>

              {/* FOOTER DEL MENÚ (REDES SOCIALES) */}
              <motion.div
                className="px-5 py-6 border-t border-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-400 mb-4 text-center">
                  Síguenos
                </p>
                <div className="flex justify-center items-center gap-3">
                  {socialLinks.map(({ Icon, href, label }) => (
                    <motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-50 text-gray-500 hover:bg-primario hover:text-white transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-4 h-4" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
