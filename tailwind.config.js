/**
 * ==========================================================================
 * TAILWIND CONFIGURATION - tailwind.config.js
 * ==========================================================================
 *
 * @type {import('tailwindcss').Config}
 *
 * Este archivo configura TailwindCSS para el proyecto, incluyendo:
 * - Contenido que Tailwind debe escanear para generar clases
 * - Extensiones de temas: colores personalizados y fuentes
 * - Plugins adicionales para scroll moderno
 */

export default {
  // Archivos que Tailwind debe escanear para generar clases
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    // ==========================================================================
    // BREAKPOINTS PERSONALIZADOS - MOBILE FIRST
    // ==========================================================================
    screens: {
      'xs': '320px',    // Extra small devices (muy pequeños)
      'sm': '640px',    // Mobile landscape / Tablet pequeño (Breakpoint de Tailwind)
      'md': '768px',    // Tablet portrait (Breakpoint de Tailwind)
      'lg': '1024px',   // Desktop pequeño (Breakpoint de Tailwind)
      'xl': '1280px',   // Desktop (Breakpoint de Tailwind)
      '2xl': '1536px',  // Desktop grande
    },

    extend: {
      // ==========================================================================
      // COLORES PERSONALIZADOS
      // ==========================================================================
      colors: {
        primario: '#37B6BA',   // Cian principal
        claro: '#D4DADE',      // Cian muy claro
        acento: '#46CDD1',     // Cian brillante para detalles
        secundario: '#318D8F', // Cian oscuro medio
        oscuro: '#1A656B',     // Cian oscuro profundo
        texto: '#1A1A1A',      // Gris oscuro para texto
        fondo: '#FFFFFF',      // Blanco limpio
      },

      // ==========================================================================
      // FUENTES PERSONALIZADAS
      // ==========================================================================
      fontFamily: {
        // elegant: ['"Great Vibes"', 'cursive'],  
        sanscustom: ['Montserrat', 'sans-serif'], // Para el texto secundario
      },

      // ==========================================================================
      // ESPACIOS RESPONSIVOS
      // ==========================================================================
      spacing: {
        'px-mobile': '1rem',    // 16px - móvil
        'px-tablet': '2rem',    // 32px - tablet
        'px-desktop': '3rem',   // 48px - desktop
      },
    },
  },

  // ==========================================================================
  // PLUGINS
  // ==========================================================================
  plugins: [
    require('tailwind-scrollbar'),        // Scroll moderno con personalización de thumb/track
    require('tailwind-scrollbar-hide'),   // Opcional: para ocultar scroll en ciertos contenedores
  ],
};
