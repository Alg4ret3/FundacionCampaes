import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

export const ContactItem = ({ Icon, children, href = '#' }: ContactItemProps) => (
  <a href={href} className="flex items-start space-x-3 group">
    <Icon className="w-4 h-4 flex-shrink-0 mt-1 text-white" />
    <span className="text-white/80 text-sm group-hover:text-claro/90 transition-colors">
      {children}
    </span>
  </a>
);

/*
Componente ContactItem que representa un elemento clicable para información de contacto.
Recibe un ícono y contenido textual, adaptándose a enlaces externos mediante el prop href.
Incluye un efecto hover que destaca el texto y mantiene la interfaz visualmente coherente.
Ideal para listas de contacto en footers, sidebars o secciones informativas.
*/
