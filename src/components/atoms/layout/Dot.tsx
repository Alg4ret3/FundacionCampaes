import { motion } from "framer-motion";

interface BarProps {
  delay?: number;
}

export const Dot = ({ delay = 0 }: BarProps) => (
  <motion.div
    className="w-6 h-1 rounded-full bg-primario"
    animate={{ scaleY: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
    transition={{
      duration: 1,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
      delay,
    }}
  />
);

/*
Componente Dot que muestra una barra animada utilizando Framer Motion.
La animación incrementa la escala vertical y modifica la opacidad en un ciclo infinito.
Admite un retraso opcional para coordinar varias barras y crear efectos rítmicos o de carga.
Ideal para indicadores de actividad o microinteracciones visuales.
*/
