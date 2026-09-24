import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  LayoutDashboard,
  Calendar,
  Image as ImageIcon,
  MessageSquare,
  FileText,
  LogOut,
  Menu,
  X,
  ExternalLink,
  ChevronRight,
} from "lucide-react";

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems = [
    {
      label: "Panel Principal",
      path: "/admin",
      icon: LayoutDashboard,
      exact: true,
    },
    {
      label: "Actividades y Eventos",
      path: "/admin/activities",
      icon: Calendar,
    },
    {
      label: "Galería de Fotos",
      path: "/admin/gallery",
      icon: ImageIcon,
    },
    {
      label: "Testimonios",
      path: "/admin/testimonials",
      icon: MessageSquare,
    },
    {
      label: "Textos de la Web",
      path: "/admin/texts",
      icon: FileText,
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  const isActive = (item: (typeof navItems)[0]) => {
    if (item.exact) {
      return location.pathname === item.path;
    }
    return location.pathname.startsWith(item.path);
  };

  return (
    <div className="min-h-screen bg-surface flex flex-col font-sans text-texto">
      {/* Fixed Top Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-divider z-40 h-16 flex items-center justify-between px-4 sm:px-8 shadow-xs">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-surface focus:outline-none"
            aria-label="Abrir menú"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          <Link to="/admin" className="flex items-center gap-2.5">
            <img
              src="https://res.cloudinary.com/dqky6oqrd/image/upload/f_auto,q_auto/v1777328156/dxnccsmmkyeuzksbz7ua.png"
              alt="Logo Caminos de Paz y Esperanza"
              className="w-9 h-9 object-contain"
            />
            <div className="flex items-center gap-2">
              <span className="font-bold text-display text-base sm:text-lg tracking-tight">
                Campaes
              </span>
              <span className="text-primario font-bold text-xs px-2.5 py-0.5 bg-primario/10 rounded-full border border-primario/20">
                Admin
              </span>
            </div>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-primario hover:text-secundario bg-primario/10 hover:bg-primario/20 px-3.5 py-2 rounded-xl transition-all"
          >
            <span>Ver sitio web</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="h-6 w-px bg-divider hidden sm:block" />

          <div className="flex items-center gap-3">
            <div className="text-right hidden md:block">
              <p className="text-xs font-bold text-display">{user?.name || "Administrador"}</p>
              <p className="text-xs text-gray-500 font-light">{user?.role || "Editor"}</p>
            </div>
            <button
              onClick={handleLogout}
              className="p-2 rounded-xl text-gray-500 hover:text-red-500 hover:bg-red-500/10 transition-colors"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Wrapper */}
      <div className="pt-16 flex-1 flex">
        {/* Backdrop en móvil */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 top-16 bg-display/40 backdrop-blur-xs z-30 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar Fijo */}
        <aside
          className={`fixed top-16 left-0 z-30 w-64 h-[calc(100vh-4rem)] h-[calc(100dvh-4rem)] bg-white border-r border-divider flex flex-col justify-between overflow-y-auto transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="p-4 space-y-1">
            <p className="text-xs font-bold text-gray-400 px-3 mb-3">
              Gestión de contenidos
            </p>

            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-3 rounded-2xl font-bold text-xs transition-all duration-200 ${
                    active
                      ? "bg-primario text-white shadow-md shadow-primario/25"
                      : "text-gray-500 hover:bg-surface hover:text-display"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={`w-4 h-4 ${active ? "text-white" : "text-gray-400"}`} />
                    <span>{item.label}</span>
                  </div>
                  {active && <ChevronRight className="w-4 h-4 text-white/80" />}
                </Link>
              );
            })}
          </div>

          <div className="p-4 border-t border-divider">
            <div className="bg-surface border border-divider rounded-2xl p-3.5 text-center">
              <p className="text-xs font-bold text-display">Estado del sistema</p>
              <div className="mt-1 flex items-center justify-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-primario animate-pulse" />
                <span className="text-xs text-gray-500 font-light">Modo dinámico activo</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Contenido Principal */}
        <main className="flex-1 lg:pl-64 p-4 sm:p-8 max-w-7xl mx-auto w-full overflow-x-hidden min-h-[calc(100dvh-4rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
