interface StatDescriptionProps {
  description: string;
}
export const StatDescription = ({ description }: StatDescriptionProps) => (
  <p className="text-fondo/70 text-sm">{description}</p>
);
