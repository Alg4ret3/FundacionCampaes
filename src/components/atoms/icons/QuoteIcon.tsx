// atoms/icons/QuoteIcon.tsx
import { Quote } from 'lucide-react';

interface QuoteIconProps {
  className?: string;
}

export const QuoteIcon = ({ className = "" }: QuoteIconProps) => {
  return (
    <Quote
      className={`w-6 h-6 text-primario drop-shadow-sm ${className}`}
    />
  );
};

/*
  Componente QuoteIcon
  --------------------
  Este componente representa un icono de cita tomado de la librería lucide-react.
  Recibe una clase opcional para permitir personalización externa.

  Detalles:
  - Se importa el icono Quote desde lucide-react.
  - El componente acepta una prop className para agregar estilos adicionales.
  - Se aplica un tamaño estándar de 24x24 píxeles usando las clases w-6 h-6.
  - El color principal del proyecto se aplica con text-primario.
  - Incluye un efecto visual sutil usando drop-shadow-sm.
  - El componente retorna directamente el icono con las clases combinadas.
*/
