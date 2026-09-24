/**
 * ==========================================================================
 * TAILWIND CONFIGURATION - tailwind.config.js
 * ==========================================================================
 */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    // 🌍 Configuración Global de Pantallas
    screens: {
      'xs': '320px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    // ✍️ Escala Tipográfica Completa
    fontSize: {
      'xs':  ['10px', '1.5'],
      'sm':  ['14px', '1.6'],
      'base':['16px', '1.7'],
      'lg':  ['18px', '1.6'],
      '2xl': ['24px', '1.2'],
      '3xl': ['30px', '1.15'],
      '4xl': ['40px', '1.1'],
      '5xl': ['48px', '1.05'],
      '6xl': ['60px', '1.0'],
      '7xl': ['72px', '1.0'],
    },

    // ⚖️ Pesos de Fuente
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      black: '900',
    },

    extend: {
      // 🎨 Colores de Marca Extendidos (Preservando la paleta estándar de Tailwind)
      colors: {
        primario: '#37B6BA',
        acento: '#46CDD1',
        secundario: '#318D8F',
        oscuro: '#1A656B',
        texto: '#1A1A1A',
        display: '#0D1F22',   // Para headings Playfair en secciones claras
        surface: '#F9FAFB',
        divider: '#E5E7EB',
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        // Fuente editorial — headings, citas, display
        display: ['Playfair Display', 'Georgia', 'serif'],
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
