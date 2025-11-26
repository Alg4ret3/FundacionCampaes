// atoms/icons/StarIcon.tsx
import { Star } from 'lucide-react';

interface StarIconProps {
  className?: string;
}

export const StarIcon = ({ className = "" }: StarIconProps) => {
  return <Star className={className} />;
};
