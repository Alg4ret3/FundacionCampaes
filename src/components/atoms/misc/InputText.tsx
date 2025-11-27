interface InputTextProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

export const InputText = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: InputTextProps) => (
  <div className="flex flex-col">
    {/* Label con color primario */}
    <label className="block text-sm font-semibold text-primario mb-2">
      {label}
    </label>

    {/* Input con bordes y foco en la paleta */}
    <input
      type={type}
      required
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="
        w-full px-4 py-3 rounded-xl border-2 border-claro 
        bg-fondo text-texto
        focus:border-primario focus:ring-primario focus:ring-1
        transition-colors duration-300
      "
    />
  </div>
);
