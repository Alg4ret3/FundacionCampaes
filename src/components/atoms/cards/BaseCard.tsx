import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export const BaseCard = ({ children, className = "" }: Props) => {
  return (
    <div
      className={`relative bg-fondo/50 backdrop-blur-sm rounded-2xl p-8 border border-claro/50 transition-all duration-500 ${className}`}
    >
      {children}
    </div>
  );
};
