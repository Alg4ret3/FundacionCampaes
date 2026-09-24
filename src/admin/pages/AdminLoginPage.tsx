import React, { useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Lock, Mail, ArrowRight, AlertCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || "/admin";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        navigate(from, { replace: true });
      } else {
        setError("Credenciales incorrectas. Verifique el correo electrónico o la contraseña.");
      }
    } catch {
      setError("Error de autenticación. Intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-[#0D1F22] flex flex-col items-center justify-center p-4 sm:p-6 text-white font-sans select-none relative overflow-hidden">
      
      {/* Glow de Fondo Atmosférico de Marca */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primario/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secundario/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Enlace para volver al portal público */}
      <div className="absolute top-6 left-6 z-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-xs font-semibold text-white/90 hover:text-white transition-all backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-primario"
        >
          <ArrowLeft className="w-4 h-4 text-primario" />
          <span>Volver al sitio web</span>
        </Link>
      </div>

      {/* Tarjeta Ejecutiva Principal de Acceso */}
      <div className="w-full max-w-md bg-[#132A2E]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/40 relative z-10 my-auto space-y-8">
        
        {/* Encabezado con Logo Institucional */}
        <div className="text-center space-y-4 flex flex-col items-center">
          <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl p-3 flex items-center justify-center shadow-inner">
            <img
              src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777328156/dxnccsmmkyeuzksbz7ua.png"
              alt="Logo Fundación Caminos de Paz y Esperanza"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="space-y-1">
            <h1 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-white">
              Portal de Administración
            </h1>
            <p className="text-white/60 text-xs sm:text-sm font-light">
              Fundación Caminos de Paz y Esperanza
            </p>
          </div>
        </div>

        {/* Mensaje de Alerta de Error */}
        {error && (
          <div className="p-4 bg-red-500/15 border border-red-500/30 rounded-2xl flex items-center gap-3 text-xs text-red-200 font-medium animate-fade-in">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        {/* Formulario de Inicio de Sesión */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
              Correo electrónico
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-primario absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="nombre@campaes.org"
                className="w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 focus:border-primario rounded-2xl text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primario/30 transition-all font-medium"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-white/80 mb-2">
              Contraseña
            </label>
            <div className="relative">
              <Lock className="w-4 h-4 text-primario absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-11 pr-4 py-3.5 bg-black/20 border border-white/10 focus:border-primario rounded-2xl text-xs sm:text-sm text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primario/30 transition-all font-medium"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-primario hover:bg-secundario text-white font-bold text-xs sm:text-sm rounded-2xl shadow-lg shadow-primario/25 flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50 mt-2 focus:outline-none focus:ring-2 focus:ring-primario"
          >
            {loading ? (
              <span>Autenticando...</span>
            ) : (
              <>
                <span>Ingresar al sistema</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Insignia de Seguridad Inferior (Sin credenciales demo) */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-white/40 font-light">
          <ShieldCheck className="w-3.5 h-3.5 text-primario" />
          <span>Acceso seguro cifrado SSL</span>
        </div>

      </div>

      {/* Footer Minimalista */}
      <div className="relative z-10 text-center text-xs text-white/40 font-light mt-6">
        © 2026 Fundación Caminos de Paz y Esperanza. Todos los derechos reservados.
      </div>

    </div>
  );
};
