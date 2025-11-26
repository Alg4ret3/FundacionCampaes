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
        elegant: ['"Great Vibes"', 'cursive'],  
        sanscustom: ['Montserrat', 'sans-serif'], // Para el texto secundario
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
