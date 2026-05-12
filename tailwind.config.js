/**
 * ==========================================================================
 * TAILWIND CONFIGURATION - tailwind.config.js
 * ==========================================================================
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    // 🌍 Configuración Global (Sobrescribe los valores por defecto de Tailwind)
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    // 🎨 Colores de Marca y Superficies Consolidados
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      primario: '#37B6BA',
      acento: '#46CDD1',
      secundario: '#318D8F',
      oscuro: '#1A656B',
      texto: '#1A1A1A',
      surface: '#F9FAFB',
      divider: '#E5E7EB',
      gray: {
        500: '#6B7280', // Único gris de texto permitido para narrativa
        300: '#D1D5DB', // Para detalles muy sutiles
      },
      red: {
        500: '#EF4444', // Para errores
        400: '#F87171',
      },
      green: {
        400: '#4ADE80', // Para WhatsApp
        500: '#22C55E',
      }
    },

    // ✍️ Escala Tipográfica Estricta (Sin solapamientos)
    fontSize: {
      'xs': ['10px', '1.5'],
      'sm': ['14px', '1.6'],
      'lg': ['18px', '1.6'],
      '2xl': ['24px', '1.2'],
      '4xl': ['40px', '1.1'],
      '7xl': ['72px', '1.0'],
    },

    // ⚖️ Pesos de Fuente Radicales
    fontWeight: {
      light: '300',
      bold: '700',
      black: '900',
    },

    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        'px-mobile': '1rem',
        'px-tablet': '2rem',
        'px-desktop': '3rem',
      },
    },
  },

  plugins: [
    require('tailwind-scrollbar'),
    require('tailwind-scrollbar-hide'),
  ],
};
