import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../../../services/EmailServices";

// Schema definition with Zod for strict validation
const contactSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  message: z.string().min(10, "Cuéntanos un poco más (mínimo 10 caracteres)"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [serverError, setServerError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setSent(false);
    setServerError("");

    try {
      const res = await sendEmail(data);
      if (res.ok) {
        setSent(true);
        reset();
      } else {
        setServerError("Hubo un problema al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      setServerError("Error de conexión. Verifica tu internet.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-12 w-full max-w-xl mx-auto">
      <div className="space-y-14">
        
        {/* Name Input */}
        <div className="relative group">
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            className={`w-full bg-transparent border-b py-4 outline-none transition-all duration-500 text-lg font-light
              ${errors.name ? 'border-red-400' : 'border-gray-200 focus:border-primario'}
            `}
            placeholder="Nombre Completo"
          />
          <AnimatePresence>
            {errors.name && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute pt-2 left-0 text-[9px] text-red-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3 h-3" /> {errors.name.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Email Input */}
        <div className="relative group">
          <input
            {...register("email")}
            type="email"
            autoComplete="email"
            className={`w-full bg-transparent border-b py-4 outline-none transition-all duration-500 text-lg font-light
              ${errors.email ? 'border-red-400' : 'border-gray-200 focus:border-primario'}
            `}
            placeholder="Correo Electrónico"
          />
          <AnimatePresence>
            {errors.email && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute pt-2 left-0 text-[9px] text-red-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3 h-3" /> {errors.email.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {/* Message Input */}
        <div className="relative group">
          <textarea
            {...register("message")}
            rows={4}
            className={`w-full bg-transparent border-b py-4 outline-none transition-all duration-500 text-lg font-light resize-none
              ${errors.message ? 'border-red-400' : 'border-gray-200 focus:border-primario'}
            `}
            placeholder="Tu Mensaje"
          />
          <AnimatePresence>
            {errors.message && (
              <motion.p 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute pt-2 left-0 text-[9px] text-red-500 font-bold uppercase tracking-[0.2em] flex items-center gap-1.5"
              >
                <AlertCircle className="w-3 h-3" /> {errors.message.message}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Global Status Messages */}
      <div className="min-h-[30px] pt-4">
        <AnimatePresence mode="wait">
          {sent && (
            <motion.p 
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center text-primario font-bold text-[10px] uppercase tracking-[0.3em]"
            >
              <CheckCircle className="w-4 h-4 mr-3" /> ¡Mensaje enviado con éxito!
            </motion.p>
          )}
          {serverError && (
            <motion.p 
              key="error"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center text-red-500 font-bold text-[10px] uppercase tracking-[0.3em]"
            >
              <XCircle className="w-4 h-4 mr-3" /> {serverError}
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="group flex items-center gap-8 disabled:opacity-50 transition-all pt-4"
      >
        <div className="h-px w-20 bg-gray-100 group-hover:bg-primario group-hover:w-32 transition-all duration-700" />
        <span className="text-primario text-[10px] font-black uppercase tracking-[0.5em] group-hover:tracking-[0.6em] transition-all">
          {loading ? "Procesando..." : "Enviar Mensaje"}
        </span>
        {!loading && <Send className="w-4 h-4 text-primario group-hover:translate-x-2 transition-transform" />}
      </button>
    </form>
  );
};
