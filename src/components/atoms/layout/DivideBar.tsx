export const DividerBar = () => (
  <div
    className="
      w-10 h-[3px]
      bg-gradient-to-r from-primario to-secundario
      rounded-full
      transition-all duration-500
      group-hover:w-16
    "
  ></div>
);

/*
Componente DividerBar que muestra una pequeña barra decorativa con un degradado entre los colores primario y secundario.
Su tamaño se expande suavemente al interactuar con un elemento padre que tenga la clase group.
Sirve como separador visual o detalle estético en encabezados, secciones o tarjetas.
*/
