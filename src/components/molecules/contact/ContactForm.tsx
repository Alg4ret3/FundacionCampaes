import { useState } from "react";
import { InputText } from "../../atoms/misc/InputText";
import { TextArea } from "../../atoms/misc/TextArea";
import { Send, CheckCircle, XCircle } from "lucide-react";
import { sendEmail } from "../../../services/EmailServices";

export const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");

    try {
      const res = await sendEmail(formData);
      if (res.ok) {
        setSent(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setError("Hubo un error enviando el mensaje.");
      }
    } catch {
      setError("Error de conexión con EmailJS.");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 bg-fondo p-6 rounded-2xl shadow-lg max-w-lg mx-auto"
    >
      <InputText
        label="Nombre completo"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        placeholder="Tu nombre"
        required
        className="bg-fondo border border-claro focus:border-primario focus:ring-primario rounded-lg"
      />

      <InputText
        label="Correo electrónico"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        placeholder="tu@email.com"
        required
        className="bg-fondo border border-claro focus:border-primario focus:ring-primario rounded-lg"
      />

      <TextArea
        label="Mensaje"
        value={formData.message}
        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        placeholder="Cuéntanos cómo podemos ayudarte..."
        required
        className="bg-fondo border border-claro focus:border-primario focus:ring-primario rounded-lg"
      />

      {/* Mensajes de estado */}
      {sent && (
        <p className="flex items-center text-acento font-medium">
          <CheckCircle className="w-5 h-5 mr-2" /> ¡Mensaje enviado correctamente!
        </p>
      )}
      {error && (
        <p className="flex items-center text-red-600 font-medium">
          <XCircle className="w-5 h-5 mr-2" /> {error}
        </p>
      )}

      {/* Botón */}
      <button
        type="submit"
        disabled={loading}
        className={`w-full py-4 rounded-xl font-semibold flex items-center justify-center space-x-2
          transition-all duration-300 shadow-md
          ${loading
            ? "bg-claro cursor-not-allowed text-texto"
            : "bg-primario hover:bg-secundario text-fondo hover:scale-105 hover:shadow-xl"
          }`}
      >
        {loading ? (
          <span className="animate-pulse">Enviando...</span>
        ) : (
          <>
            <span>Enviar mensaje</span>
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
};
