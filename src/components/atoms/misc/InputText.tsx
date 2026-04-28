interface InputTextProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  id?: string;
}

export const InputText = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  id,
}: InputTextProps) => {
  const inputId = id || label.toLowerCase().replace(/\s+/g, "-");
  return (
    <div className="flex flex-col">
      {/* Label con color primario */}
      <label 
        htmlFor={inputId}
        className="block text-sm font-semibold text-primario mb-2"
      >
        {label}
      </label>

      {/* Input estilizado con foco destacado */}
      <input
        id={inputId}
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
};

/*
Componente InputText diseñado para manejar entradas de texto controladas.
Incluye un label con estilo consistente y un input con bordes redondeados y animación al recibir foco.
El prop type permite reutilizarlo para diferentes tipos de campo, como email, number o password.
Ideal para formularios donde se requiere coherencia visual y accesibilidad.
*/
