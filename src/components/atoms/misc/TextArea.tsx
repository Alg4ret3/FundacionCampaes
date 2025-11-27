interface TextAreaProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

export const TextArea = ({
  label,
  value,
  onChange,
  placeholder,
  rows = 5,
}: TextAreaProps) => (
  <div className="flex flex-col">
    {/* Label con color primario */}
    <label className="block text-sm font-semibold text-primario mb-2">
      {label}
    </label>

    {/* TextArea con bordes y foco según la paleta */}
    <textarea
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
