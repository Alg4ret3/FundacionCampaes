import { ActivityDateBadge } from "../../atoms/layout/ActivityDateBadge";

export const ActivityImageBlock = ({
  image,
  title,
  date,
}: {
  image: string;
  title: string;
  date: string;
}) => (
  <div className="relative h-64 overflow-hidden rounded-t-2xl">
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
    <ActivityDateBadge date={date} />
  </div>
);
