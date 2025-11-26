import { IconBox } from "../../atoms/icons/IconBox";
interface ImpactStatCardProps {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  color: string;
  extraText?: string; // <-- nueva prop
  onClick?: () => void;
}

export const ImpactStatCard = ({
  icon: Icon,
  value,
  label,
  description,
  color,
  extraText,
  onClick,
}: ImpactStatCardProps) => (
  <div
    className="relative cursor-pointer rounded-3xl p-6 border bg-fondo/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col items-center text-center"
    onClick={onClick}
  >
    <IconBox Icon={Icon} color={color} />
    <h3 className="mt-4 text-white/90 text-xl font-semibold">{value}</h3>
    <p className="text-white/70 mt-1">{label}</p>
    <p className="text-white/50 text-sm mt-2">{description}</p>
  </div>
);
