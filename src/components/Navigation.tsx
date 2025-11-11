"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Leaf,
  MapPin,
  ThumbsUp,
  Users,
  Activity,
  Phone,
} from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio", icon: Home },
  { name: "Nosotros", href: "#nosotros", icon: Users },
  { name: "Líneas de Acción", href: "#lineas", icon: Leaf },
  { name: "Actividades", href: "#actividades", icon: Activity },
  { name: "Contacto", href: "#contacto", icon: Phone },
];

// Función para desplazamiento suave con control de duración
const handleSmoothScroll = (e, href) => {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    const offsetTop = target.getBoundingClientRect().top + window.scrollY;
    const start = window.scrollY;
    const distance = offsetTop - start;
    const duration = 1000; // 🕒 tiempo en ms (ajústalo a tu gusto)
    let startTime = null;

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, start + distance * ease);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  }
};

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta scroll para aplicar sombra a la barra
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquea scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src="/static/Logo.svg"
            alt="Logo Caminos de Paz"
            className="w-14 h-14 object-contain"
          />
          <div className="leading-tight">
            <h1 className="text-xl md:text-2xl font-bold text-primario">
              Caminos de Paz
            </h1>
            <p className="text-sm text-secundario">y Esperanza</p>
          </div>
        </div>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              onClick={(e) => handleSmoothScroll(e, href)}
              className="relative text-sm font-semibold text-gray-700 hover:text-primario transition-colors duration-200 group"
            >
              {name}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-primario transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          className="md:hidden p-2 rounded-lg text-primario hover:bg-gray-100 transition-all duration-200"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* SIDEBAR MÓVIL */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* FONDO OSCURECIDO */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            {/* SIDEBAR */}
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
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-600 hover:text-primario transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col px-5 py-6 space-y-3">
                {navLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    onClick={(e) => {
                      handleSmoothScroll(e, href);
                      setIsOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primario/10 text-gray-800 font-medium transition-all duration-200"
                  >
                    <Icon size={20} className="text-primario" />
                    {name}
                  </a>
                ))}
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
