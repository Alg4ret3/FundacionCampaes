import { useState } from "react";
import { User } from "lucide-react";

interface AvatarProps {
  src: string;
  alt: string;
  size?: number; // tamaño personalizable
  className?: string; // estilos extra
}

export const Avatar = ({ src, alt, size = 48, className = "" }: AvatarProps) => {
  const [error, setError] = useState(false);

  return (
    <div
      className={`
        relative rounded-full overflow-hidden
        shadow-[0_4px_12px_rgba(0,0,0,0.08)]
        ring-2 ring-primario/20
        transition-transform duration-300 ease-out
        hover:scale-105 hover:shadow-xl
        bg-white flex items-center justify-center
        ${className}
      `}
      style={{ width: size, height: size }}
    >
      {error ? (
        <User className="w-2/3 h-2/3 text-secundario/60" />
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover transition-opacity duration-500"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
};
