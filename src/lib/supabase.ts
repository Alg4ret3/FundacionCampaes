import { createClient } from "@supabase/supabase-js";

// Extraer variables de entorno de Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";

// Verificar si Supabase está configurado con credenciales válidas
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Inicializar cliente de Supabase
export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Probar conexión automática e imprimir resultado en la consola (F12)
if (isSupabaseConfigured && supabase) {
  console.log("⚡ [Supabase] Credenciales cargadas. Probando conexión...");
  supabase
    .from("activities")
    .select("id")
    .limit(1)
    .then(({ data, error }) => {
      if (error) {
        console.error("❌ [Supabase Error de Conexión/Permisos]:", error.message, error);
      } else {
        console.log("✅ [Supabase Conectado Exitosamente]:", data);
      }
    })
    .catch((err) => {
      console.error("❌ [Supabase Fallo de Conexión]:", err);
    });
} else {
  console.warn("⚠️ [Supabase] No configurado. Revisa tu archivo .env");
}

