interface IconBoxProps {
  Icon: React.ElementType;
  color: string;
}

export const IconBox = ({ Icon, color }: IconBoxProps) => (
  <div
    className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
  >
    <Icon className="w-7 h-7 text-fondo" />
  </div>
);

/*
  Componente: IconBox
  ---------------------------------------------------------
  Descripción:
    Contenedor estilizado para íconos con fondo en gradiente,
    ideal para tarjetas, secciones destacadas o pasos informativos.

  Props:
    - Icon: componente de icono (React.ElementType).
    - color: clases Tailwind para el gradiente (ej: "from-primario to-secundario").

  Estilos:
    - w-14 h-14: tamaño uniforme del contenedor.
    - bg-gradient-to-br + color: gradiente personalizado.
    - rounded-xl: bordes redondeados modernos.
    - group-hover:scale-110: animación cuando el contenedor padre tenga clase "group".
    - transition-transform: animación suave de escala.

  Funcionamiento:
    - Renderiza un contenedor con gradiente.
    - Dentro coloca el icono recibido, centrado y estilizado.
  
  Ejemplos de uso:
    <IconBox Icon={Users} color="from-primario to-secundario" />
    <IconBox Icon={Sprout} color="from-green-400 to-green-600" />
*/
