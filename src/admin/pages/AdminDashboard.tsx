import React from "react";
import { Link } from "react-router-dom";
import { useContent } from "../../context/ContentContext";
import {
  Calendar,
  Image as ImageIcon,
  MessageSquare,
  FileText,
  Plus,
  Clock,
  ArrowUpRight,
  ShieldCheck,
  Globe,
  Sparkles,
  Zap,
} from "lucide-react";

export const AdminDashboard: React.FC = () => {
  const { activities, gallery, testimonials, siteInfo } = useContent();

  const formattedDate = new Intl.DateTimeFormat("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());

  return (
    <div className="space-y-8 font-sans text-texto pb-12">
      
      {/* ── 1. ENCABEZADO DE COMANDO Y SALUDO DEL DÍA ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-divider shadow-xs">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 text-xs font-bold text-primario">
            <span className="w-2 h-2 rounded-full bg-primario animate-ping" />
            <span className="capitalize">{formattedDate}</span>
          </div>
          <h1 className="font-display text-2xl sm:text-4xl font-black text-display tracking-tight">
            Centro de control institucional
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm font-light">
            Gestión y actualización en vivo del portal oficial de la Fundación Caminos de Paz y Esperanza.
          </p>
        </div>

        {/* Acciones Rápidas */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap sm:flex-nowrap">
          <Link
            to="/admin/activities"
            className="inline-flex items-center gap-2 px-4 py-3 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl shadow-md shadow-primario/20 transition-all active:scale-[0.98]"
          >
            <Plus className="w-4 h-4" />
            <span>Publicar actividad</span>
          </Link>
          <Link
            to="/admin/gallery"
            className="inline-flex items-center gap-2 px-4 py-3 bg-surface hover:bg-white border border-divider text-display font-bold text-xs rounded-2xl transition-all"
          >
            <ImageIcon className="w-4 h-4 text-primario" />
            <span>Subir foto</span>
          </Link>
        </div>
      </div>

      {/* ── 2. TIRA HORIZONTAL DE MÉTRICAS CLAVE (MINIMAL BARS) ── */}
      <div className="bg-display text-white rounded-3xl p-6 sm:p-8 shadow-xl shadow-display/10 relative overflow-hidden">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/10">
          
          <div className="space-y-1 sm:px-6 first:pl-0">
            <span className="text-xs font-semibold text-white/60 block">Actividades públicas</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">{activities.length}</span>
              <span className="text-[11px] font-bold text-acento">Pobladas</span>
            </div>
            <p className="text-[11px] text-white/50 font-light truncate">Proyectos en territorio</p>
          </div>

          <div className="space-y-1 sm:px-6">
            <span className="text-xs font-semibold text-white/60 block">Fotografías</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">{gallery.length}</span>
              <span className="text-[11px] font-bold text-acento">Galería</span>
            </div>
            <p className="text-[11px] text-white/50 font-light truncate">Archivo multimedia</p>
          </div>

          <div className="space-y-1 sm:px-6">
            <span className="text-xs font-semibold text-white/60 block">Testimonios</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl sm:text-5xl font-black text-white tracking-tight">{testimonials.length}</span>
              <span className="text-[11px] font-bold text-acento">Historias</span>
            </div>
            <p className="text-[11px] text-white/50 font-light truncate">Relatos de comunidad</p>
          </div>

          <div className="space-y-1 sm:px-6 last:pr-0">
            <span className="text-xs font-semibold text-white/60 block">Estado del servidor</span>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">100%</span>
              <span className="text-[11px] font-bold text-emerald-400">En vivo</span>
            </div>
            <p className="text-[11px] text-white/50 font-light truncate">Sincronización activa</p>
          </div>

        </div>
      </div>

      {/* ── 3. REJILLA ASIMÉTRICA PRINCIPAL ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Columna Izquierda (8 Cols): Feed Editorial de Actividades Recientes */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white border border-divider rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
            
            <div className="flex items-center justify-between border-b border-divider pb-4">
              <div className="space-y-0.5">
                <h2 className="font-display text-xl font-bold text-display flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primario" />
                  <span>Proyectos e intervenciones territoriales</span>
                </h2>
                <p className="text-xs text-gray-500 font-light">
                  Gestiona las publicaciones visibles en la sección de actividades
                </p>
              </div>
              <Link
                to="/admin/activities"
                className="text-xs font-bold text-primario hover:text-secundario flex items-center gap-1 shrink-0"
              >
                <span>Ver todas ({activities.length})</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mosaico de Actividades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {activities.slice(0, 4).map((act) => (
                <div
                  key={act.id}
                  className="group bg-surface border border-divider rounded-2xl overflow-hidden hover:border-primario/40 transition-all flex flex-col justify-between"
                >
                  <div className="relative h-36 bg-gray-100">
                    <img
                      src={act.image}
                      alt={act.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-bold text-primario uppercase tracking-wider shadow-xs">
                      {act.category}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-[11px] text-gray-400 flex items-center gap-1 font-medium mb-1">
                        <Clock className="w-3 h-3 text-primario" />
                        <span>{act.date}</span>
                      </div>
                      <h3 className="text-xs font-bold text-display group-hover:text-primario transition-colors line-clamp-2">
                        {act.title}
                      </h3>
                    </div>

                    <div className="pt-3 border-t border-divider flex items-center justify-between">
                      <span className="text-[10px] text-gray-400 font-light">Publicado</span>
                      <Link
                        to="/admin/activities"
                        className="text-xs font-bold text-primario hover:underline"
                      >
                        Editar
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Columna Derecha (4 Cols): Panel de Datos Institucionales y Galería Mini */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Panel de Datos Rápidos del Sitio */}
          <div className="bg-white border border-divider rounded-3xl p-6 shadow-xs space-y-5">
            <div className="flex items-center justify-between border-b border-divider pb-4">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primario" />
                <h3 className="font-display text-base font-bold text-display">Datos institucionales</h3>
              </div>
              <Link
                to="/admin/texts"
                className="text-xs font-bold text-primario hover:underline"
              >
                Editar
              </Link>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 bg-surface rounded-2xl border border-divider">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Correo electrónico
                </span>
                <span className="text-xs font-bold text-display break-all font-mono">
                  {siteInfo.contactEmail}
                </span>
              </div>

              <div className="p-3.5 bg-surface rounded-2xl border border-divider">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider block mb-1">
                  Línea WhatsApp
                </span>
                <span className="text-xs font-bold text-display">
                  {siteInfo.contactPhone}
                </span>
              </div>
            </div>
          </div>

          {/* Mini Galería Reciente */}
          <div className="bg-white border border-divider rounded-3xl p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-divider pb-3">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4 text-primario" />
                <h3 className="font-display text-sm font-bold text-display">Galería reciente</h3>
              </div>
              <Link to="/admin/gallery" className="text-xs font-bold text-primario hover:underline">
                Ver todas
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {gallery.slice(0, 6).map((item) => (
                <div
                  key={item.id}
                  className="aspect-square rounded-xl overflow-hidden bg-surface border border-divider group relative"
                >
                  <img
                    src={item.url.startsWith("http") ? item.url : `https://res.cloudinary.com/dqky6oqrd/image/upload/v1778623906/${item.url}`}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Enlace de previsualización pública */}
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full p-4 bg-surface hover:bg-white border border-divider hover:border-primario/40 rounded-3xl flex items-center justify-between text-xs font-bold text-display transition-all shadow-xs group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-primario/10 text-primario flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-display">Ver sitio público</p>
                <p className="text-[10px] text-gray-400 font-light">Abrir en nueva pestaña</p>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-primario group-hover:translate-x-1 transition-transform" />
          </a>

        </div>

      </div>

    </div>
  );
};
