"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Líneas de Acción", href: "#lineas" },
  { name: "Actividades", href: "#actividades" },
  { name: "Contacto", href: "#contacto" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para aplicar fondo al navbar
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/95 shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20 md:h-24">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${
              isScrolled ? "bg-[#1ABC9C]" : "bg-[#1ABC9C]/20 backdrop-blur-sm"
            }`}
          >
            <svg
              className="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
            </svg>
          </div>
          <div>
            <h1
              className={`text-xl md:text-2xl font-bold ${
                isScrolled ? "text-[#138A7E]" : "text-[#1ABC9C]"
              }`}
            >
              Caminos de Paz
            </h1>
            <p
              className={`text-xs md:text-sm ${
                isScrolled ? "text-gray-600" : "text-[#1ABC9C]"
              }`}
            >
              Y Esperanza
            </p>
          </div>
        </div>

        {/* NAV DESKTOP */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold transition-colors duration-300 ${
                isScrolled
                  ? "text-[#138A7E] hover:text-[#1ABC9C]"
                  : "text-[#1ABC9C] hover:text-[#1ABC9C]"
              }`}
            >
              {link.name}
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-0 transition-all duration-300 ${
                  isScrolled ? "bg-[#1ABC9C]" : "bg-white"
                } group-hover:w-full`}
              ></span>
            </a>
          ))}
        </div>

        {/* BOTÓN HAMBURGUESA */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
          className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
            isScrolled
              ? "bg-[#1ABC9C]/10 text-[#138A7E]"
              : "bg-white/10 text-black"
          }`}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MENÚ MÓVIL */}
      <div
        className={`md:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        } bg-gradient-to-b from-[#138A7E] to-[#1ABC9C]`}
      >
        <div className="flex flex-col items-center justify-center py-10 space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-white text-lg font-semibold hover:scale-110 transition-transform duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};