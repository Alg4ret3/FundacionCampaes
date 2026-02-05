import { ActivityDateBadge } from "../../atoms/layout/ActivityDateBadge";
import { CategoryID } from "../../../types";

export const ActivityImageBlock = ({
  image,
  title,
  date,
  category,
}: {
  image: string;
  title: string;
  date: string;
  category: CategoryID;
}) => (
  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl">
    <img
      src={image}
      alt={title}
      className="
        w-full h-full object-cover 
        transition-transform duration-700 
        group-hover:scale-110
      "
    />

    {/* Overlay sutil para mejor lectura y estética */}
    <div
      className="
        absolute inset-0 
        bg-gradient-to-t from-black/0 via-black/10 to-transparent 
        pointer-events-none
        opacity-100
        transition-opacity duration-500
        group-hover:opacity-90
      "
    />

    {/* Badge de fecha */}
    <ActivityDateBadge date={date} category={category} />
  </div>
);
