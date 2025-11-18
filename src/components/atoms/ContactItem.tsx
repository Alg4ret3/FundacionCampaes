import { LucideIcon } from 'lucide-react';

interface ContactItemProps {
  Icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
}

export const ContactItem = ({ Icon, children, href = '#' }: ContactItemProps) => (
  <a href={href} className="flex items-start space-x-3 group">
    <Icon className="w-4 h-4 flex-shrink-0 mt-1 text-white" />
    <span className="text-white/80 text-sm group-hover:text-primario transition-colors">
      {children}
    </span>
  </a>
);
