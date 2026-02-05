import { Calendar } from "lucide-react";
import { CategoryID } from "../../../types";
import { getCategoryStyles } from "../../../utils/CategoryUtils";

export const ActivityDateBadge = ({ date, category }: { date: string, category: CategoryID }) => {
  const styles = getCategoryStyles(category);

  return (
    <div className={`
      absolute top-4 right-4 
      ${styles.bgSoft}
      backdrop-blur-md 
      shadow-lg 
      rounded-full 
      px-4 py-2 
      flex items-center gap-2 
      border ${styles.border}
    `}>
      <Calendar className="w-4 h-4" style={{ color: styles.primary }} />
      <span className={`text-sm font-semibold tracking-wide ${styles.textHeavy}`}>
        {date}
      </span>
    </div>
  );
};

/*
Componente ActivityDateBadge que muestra una fecha destacada dentro de una burbuja de estilo moderno.
Incluye un ícono de calendario y aplica efectos como fondo semitransparente, desenfoque, sombras y bordes suaves.
El contenido se posiciona de manera absoluta para colocarse en la esquina superior derecha del contenedor padre.
*/
