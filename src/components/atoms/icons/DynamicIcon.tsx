import { Scale, Handshake, Users, Sprout } from "lucide-react";

const iconMap = {
  scale: Scale,
  handshake: Handshake,
  users: Users,
  sprout: Sprout,
};

interface Props {
  name: keyof typeof iconMap;
  className?: string;
}

export const DynamicIcon = ({ name, className = "" }: Props) => {
  const Icon = iconMap[name];
  return <Icon className={className} />;
};

/*
  Componente: DynamicIcon
  ---------------------------------------------------------
  Descripción:
    Renderiza dinámicamente un ícono de la librería lucide-react 
    según el nombre recibido en las props. Permite cambiar iconos 
    fácilmente sin tener que importar uno por uno en cada componente.

  Props:
    - name: clave que identifica el ícono dentro del objeto iconMap.
    - className: clases opcionales para personalizar tamaño, color, etc.

  Funcionamiento:
    - iconMap relaciona claves string con sus respectivos componentes de íconos.
    - Se obtiene el componente correspondiente usando name.
    - El componente ícono se renderiza directamente con las clases recibidas.

  Ejemplos de uso:
    <DynamicIcon name="scale" className="w-8 h-8 text-green-500" />
    <DynamicIcon name="handshake" className="text-primario w-6 h-6" />

  Ventajas:
    - Facilita la reutilización.
    - Permite cambiar iconos solo modificando el valor de 'name'.
    - Mantiene los imports centralizados.
*/
