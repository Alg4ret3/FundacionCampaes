import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

export const ContactItem = ({ Icon, children, href = '#' }: ContactItemProps) => (
  <a href={href} className="flex items-start space-x-4 group">
    <div className="w-8 h-8 rounded-full border border-divider flex items-center justify-center group-hover:bg-primario group-hover:text-white transition-all duration-500 flex-shrink-0 text-gray-400">
      <Icon className="w-4 h-4" />
    </div>
    <span className="text-gray-500 group-hover:text-primario text-sm transition-colors pt-1">
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
