import { Scale, Handshake, Users, Sprout } from "lucide-react";

const iconMap = {
  scale: Scale,
  handshake: Handshake,
  users: Users,
  sprout: Sprout,
};

interface Props {
  name: keyof typeof iconMap;
  className?: string;
}

export const DynamicIcon = ({ name, className = "" }: Props) => {
  const Icon = iconMap[name];
  return <Icon className={className} />;
};
