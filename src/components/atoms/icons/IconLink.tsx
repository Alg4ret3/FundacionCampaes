// components/atoms/IconLink.tsx
import React from "react";
import { LucideIcon } from "lucide-react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface IconLinkProps {
  name: string;
  href: string;
  Icon: LucideIcon;
  onClose: () => void;
  isActive?: boolean;
}

export const IconLink: React.FC<IconLinkProps> = ({
  name,
  href,
  Icon,
  onClose,
  isActive = false,
}) => {

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Scroll suave manual
    handleSmoothScroll(e, href);

    // Evita que el menú móvil tiemble al cerrar
    setTimeout(() => {
      onClose();
    }, 350);
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 text-left border font-medium group relative
        ${isActive 
          ? 'bg-primario/10 border-primario/30 text-primario' 
          : 'bg-white hover:bg-primario/5 text-primario/70 hover:text-primario border-primario/10 hover:border-primario/20'
        }
      `}
    >
      {/* Indicador izquierdo cuando está activo */}
      {isActive && (
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-gradient-to-b from-primario to-acento rounded-r-full shadow-lg shadow-primario/40" />
      )}
      
      <Icon size={20} className={`transition-colors duration-300 ${
        isActive ? 'text-primario' : 'text-primario/60 group-hover:text-primario'
      }`} />
      <span className={`group-hover:translate-x-0.5 transition-transform duration-300 ${
        isActive ? 'font-semibold' : ''
      }`}>
        {name}
      </span>
    </button>
  );
};

/*
  Componente: IconLink
  ---------------------------------------------------------
  Descripción:
    Enlace estilizado en forma de botón, utilizado principalmente
    dentro de menús móviles o listas de navegación con íconos.
    Incluye scroll suave y cierre automático del menú.

  Props:
    - name: texto que se mostrará junto al ícono.
    - href: ancla o sección del sitio a la que se desea hacer scroll.
    - Icon: ícono de Lucide que se mostrará al inicio del botón.
    - onClose: función que cierra el menú móvil después del clic.

  Funcionamiento:
    - handleClick previene la navegación por defecto.
    - Usa handleSmoothScroll() para un desplazamiento suave a la sección.
    - Aplica un pequeño delay antes de ejecutar onClose() para evitar 
      un efecto de “temblor” en el menú móvil.

  Estilos:
    - bg-gray-50 con hover bg-primario/10 para retroalimentación visual.
    - gap-3 para separar correctamente ícono y texto.
    - text-left: asegura alineación perfecta en menús tipo lista.
    - Icon con color primario para destacar el elemento interactivo.

  Uso recomendado:
    <IconLink
      name="Características"
      href="#features"
      Icon={Star}
      onClose={closeMenu}
    />
*/
