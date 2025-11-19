interface IconLinkProps {
  Icon: React.ComponentType<any>;
  href: string;
  label: string;
  color?: string; // color del icono
  fondo?: string; // color de fondo del círculo
}

export const IconLink = ({ Icon, href, label, color, fondo }: IconLinkProps) => (
  <a
    href={href}
    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${fondo || 'bg-white'}`}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Icon className={`w-5 h-5 ${color || 'text-primario'}`} />
  </a>
);
