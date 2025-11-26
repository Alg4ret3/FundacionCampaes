interface IconBoxProps {
  Icon: React.ElementType;
  color: string;
}
export const IconBox = ({ Icon, color }: IconBoxProps) => (
  <div className={`w-14 h-14 bg-gradient-to-br ${color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
    <Icon className="w-7 h-7 text-fondo" />
  </div>
);
