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
