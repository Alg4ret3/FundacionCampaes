/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primario: '#37B6BA',   // Cian principal
        claro: '#D4DADE',      // Cian muy claro
        acento: '#46CDD1',     // Cian brillante para detalles
        secundario: '#318D8F', // Cian oscuro medio
        oscuro: '#1A656B',     // Cian oscuro profundo
        texto: '#1A1A1A',      // Gris oscuro para texto
        fondo: '#FFFFFF',      // Blanco limpio
      },
    },
  },
  plugins: [],
};
