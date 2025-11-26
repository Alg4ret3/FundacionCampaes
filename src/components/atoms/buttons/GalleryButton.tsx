import { ReactNode } from "react";

interface GalleryNavButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  ariaLabel: string;
}

export const GalleryNavButton = ({
  onClick,
  children,
  className = "",
  ariaLabel,
}: GalleryNavButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      className={`absolute top-1/2 -translate-y-1/2 flex items-center justify-center transition-transform duration-300 hover:scale-110 ${className}`}
    >
      <span className="text-white">{children}</span>
    </button>
  );
};
