// atoms/icons/StarIcon.tsx
import { Star } from 'lucide-react';

interface StarIconProps {
  className?: string;
}

export const StarIcon = ({ className = "" }: StarIconProps) => {
  return <Star className={className} />;
};

/*
Componente StarIcon que actúa como un wrapper del ícono Star proveniente de lucide-react.
Permite recibir una clase personalizada para ajustar estilos desde el exterior.
Es un átomo simple dentro de un sistema de diseño basado en componentes reutilizables.
*/
