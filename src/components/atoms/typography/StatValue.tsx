interface StatValueProps {
  value: string;
}

export const StatValue = ({ value }: StatValueProps) => (
  <div
    className="
      text-4xl md:text-5xl 
      font-bold 
      mb-2 
      group-hover:text-acento 
      transition-colors duration-300
    "
  >
    {value}
  </div>
);

/*
  Componente StatValue:
  - Muestra el valor numérico principal de una estadística.
  - Tamaño tipográfico grande (responsive: 4xl en móvil, 5xl en desktop).
  - Enfatiza con 'font-bold' para jerarquía visual.
  - Cambia a un color 'acento' cuando el contenedor padre tiene la clase 'group' y se hace hover.
  - Incluye transición suave para mejorar la experiencia visual.
*/
