export const CategoryTag = ({ text }: { text: string }) => (
  <div
    className="
      inline-block
      bg-primario/20
      text-primario
      border border-primario/40
      px-3 
      py-1 
      rounded-full 
      text-sm 
      font-semibold 
      mb-3 
      capitalize
      tracking-wide
    "
  >
    {text}
  </div>
);

/*
Componente CategoryTag que muestra una etiqueta visual para categorías o tipos de contenido.
Utiliza un estilo redondeado, borde suave y un color de fondo basado en el tono primario.
El texto se capitaliza automáticamente y se destaca con tipografía seminegrita.
Adecuado para clasificar elementos dentro de listas, tarjetas o secciones informativas.
*/
