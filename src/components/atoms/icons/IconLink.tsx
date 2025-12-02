// components/atoms/IconLink.tsx
import React from "react";
import { LucideIcon } from "lucide-react";
import { handleSmoothScroll } from "../../../utils/SmoothScroll";

interface IconLinkProps {
  name: string;
  href: string;
  Icon: LucideIcon;
  onClose: () => void;
}

export const IconLink: React.FC<IconLinkProps> = ({
  name,
  href,
  Icon,
  onClose,
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
      className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 hover:bg-primario/10 text-gray-800 font-medium transition-all duration-200 text-left"
    >
      <Icon size={20} className="text-primario" />
      {name}
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
