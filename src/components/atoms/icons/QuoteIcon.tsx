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
