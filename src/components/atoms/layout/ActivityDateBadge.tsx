import { Calendar } from "lucide-react";

export const ActivityDateBadge = ({ date }: { date: string }) => (
  <div className="
    absolute top-4 right-4 
    bg-white/90 
    backdrop-blur-md 
    shadow-lg 
    rounded-full 
    px-4 py-2 
    flex items-center gap-2 
    border border-primario/20
  ">
    <Calendar className="w-4 h-4 text-primario" />
    <span className="text-sm font-semibold text-primario tracking-wide">
      {date}
    </span>
  </div>
);

/*
Componente ActivityDateBadge que muestra una fecha destacada dentro de una burbuja de estilo moderno.
Incluye un ícono de calendario y aplica efectos como fondo semitransparente, desenfoque, sombras y bordes suaves.
El contenido se posiciona de manera absoluta para colocarse en la esquina superior derecha del contenedor padre.
*/
