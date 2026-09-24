import React, { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Activity, CategoryID } from "../../types";
import {
  Plus,
  Trash2,
  Edit,
  X,
  Check,
  Image as ImageIcon,
  Calendar as CalendarIcon,
  Tag,
  FileText,
} from "lucide-react";

export const AdminActivitiesPage: React.FC = () => {
  const { activities, addActivity, updateActivity, deleteActivity } = useContent();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState<Activity | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    extraText: "",
    date: new Date().toISOString().split("T")[0],
    category: "educativa" as CategoryID,
    image: "",
  });

  const categories: { id: CategoryID; label: string }[] = [
    { id: "educativa", label: "Educativa" },
    { id: "cultural", label: "Cultural" },
    { id: "ambiental", label: "Ambiental" },
    { id: "social", label: "Social" },
    { id: "productiva", label: "Productiva" },
  ];

  const handleOpenCreateModal = () => {
    setEditingActivity(null);
    setFormData({
      title: "",
      description: "",
      extraText: "",
      date: new Date().toISOString().split("T")[0],
      category: "educativa",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop",
    });
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (activity: Activity) => {
    setEditingActivity(activity);
    setFormData({
      title: activity.title,
      description: activity.description,
      extraText: activity.extraText || "",
      date: activity.date,
      category: activity.category,
      image: activity.image,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingActivity) {
      updateActivity(editingActivity.id, formData);
    } else {
      addActivity(formData);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`¿Estás seguro de eliminar la actividad "${title}"?`)) {
      deleteActivity(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Gestión de Actividades y Eventos
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Crea, actualiza o elimina publicaciones que aparecen en la sección de líneas de acción y actividades.
          </p>
        </div>
        <button
          onClick={handleOpenCreateModal}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl shadow-md shadow-primario/20 transition-all active:scale-[0.98]"
        >
          <Plus className="w-4 h-4" />
          <span>Agregar nueva actividad</span>
        </button>
      </div>

      {/* Grid of Activities */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {activities.map((act) => (
          <div
            key={act.id}
            className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative h-48 bg-slate-100">
                <img
                  src={act.image}
                  alt={act.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg text-[10px] font-bold text-emerald-800 uppercase tracking-wider shadow-xs">
                  {act.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
                  <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{act.date}</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 line-clamp-2">
                  {act.title}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {act.description}
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-end gap-2">
              <button
                onClick={() => handleOpenEditModal(act)}
                className="p-2 text-slate-600 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                title="Editar"
              >
                <Edit className="w-3.5 h-3.5" />
                <span>Editar</span>
              </button>
              <button
                onClick={() => handleDelete(act.id, act.title)}
                className="p-2 text-slate-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors text-xs font-semibold flex items-center gap-1"
                title="Eliminar"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900">
                {editingActivity ? "Editar Actividad" : "Crear Nueva Actividad"}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Título de la Actividad</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Ej. Taller de Reforestación Comunitaria"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Categoría</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({ ...formData, category: e.target.value as CategoryID })
                    }
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none bg-white"
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <CalendarIcon className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fecha</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>URL de la Imagen</span>
                </label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Descripción Corta
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Resumen visible en las tarjetas principales..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Detalle Extendido (Opcional)
                </label>
                <textarea
                  rows={4}
                  value={formData.extraText}
                  onChange={(e) => setFormData({ ...formData, extraText: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Texto completo que se muestra al abrir la ventana emergente..."
                />
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 border border-slate-200 text-slate-600 font-semibold text-xs rounded-xl hover:bg-slate-50"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl flex items-center gap-1.5 shadow-md shadow-primario/20"
                >
                  <Check className="w-4 h-4" />
                  <span>Guardar cambios</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
