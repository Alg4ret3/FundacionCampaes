interface StatLabelProps {
  label: string;
}

export const StatLabel = ({ label }: StatLabelProps) => (
  <h3 className="text-lg font-semibold mb-2">{label}</h3>
);

/*
  Componente StatLabel:
  - Muestra el título o nombre de una estadística.
  - Usa un tamaño de texto medio-grande y un peso semibold para destacarse.
  - Incluye margen inferior para separar visualmente del valor o descripción.
  - Ideal para encabezados dentro de tarjetas o bloques de métricas.
*/
