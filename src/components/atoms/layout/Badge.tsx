import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className = "" }: BadgeProps) => {
  return (
    <div
      className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primario/10 text-primario font-semibold text-sm transition-all duration-700 ${className}`}
    >
      {children}
    </div>
  );
};
