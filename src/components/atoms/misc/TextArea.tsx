interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  id?: string;
}

export const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
  id,
}: TextAreaProps) => {
  const textAreaId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col">
      <label 
        htmlFor={textAreaId}
        className="block text-sm font-semibold text-primario mb-2"
      >
        {label}
      </label>

      <textarea
        id={textAreaId}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="
          w-full px-4 py-3 rounded-xl border-2 border-claro
          bg-fondo text-texto
          focus:border-primario focus:ring-primario focus:ring-1
          transition-colors duration-300 resize-none
        "
      />
    </div>
  );
};

/*
  Componente TextArea:
  - Recibe una etiqueta, valor, controlador de cambios, placeholder y cantidad de filas.
  - Renderiza un label con estilo primario para mantener consistencia visual.
  - El textarea utiliza bordes con colores de la paleta definida.
  - Incluye estilos de enfoque para resaltar el campo seleccionando.
  - La propiedad resize-none evita que el usuario cambie el tamaño del área.
  - rows permite definir la altura inicial del campo de texto.
*/
