interface StatLabelProps {
  label: string;
}
export const StatLabel = ({ label }: StatLabelProps) => (
  <h3 className="text-lg font-semibold mb-2">{label}</h3>
);
