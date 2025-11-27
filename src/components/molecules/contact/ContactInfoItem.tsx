import { IconBox } from "../../atoms/icons/IconBox";

interface ContactInfoItemProps {
  Icon: React.ElementType; // Componente del ícono
  color: string;           // Color de fondo del IconBox
  title: string;
  children: React.ReactNode;
}

export const ContactInfoItem = ({ Icon, color, title, children }: ContactInfoItemProps) => (
  <div className="flex items-start space-x-4 p-4 rounded-xl bg-fondo shadow-sm hover:shadow-md transition-shadow duration-300">
    <IconBox Icon={Icon} color={color} />
    <div>
      <h4 className="font-semibold text-primario mb-1">{title}</h4>
      <p className="text-texto">{children}</p>
    </div>
  </div>
);
