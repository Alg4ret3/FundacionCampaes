interface StatValueProps {
  value: string;
}
export const StatValue = ({ value }: StatValueProps) => (
  <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:text-acento transition-colors duration-300">{value}</div>
);
