import React, { useState } from "react";
import { useContent, TestimonialItem } from "../../context/ContentContext";
import { Plus, Trash2, MessageSquare, Check, X, Star } from "lucide-react";

export const AdminTestimonialsPage: React.FC = () => {
  const { testimonials, addTestimonial, deleteTestimonial } = useContent();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Omit<TestimonialItem, "id">>({
    name: "",
    role: "",
    content: "",
    rating: 5,
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTestimonial(formData);
    setIsModalOpen(false);
    setFormData({
      name: "",
      role: "",
      content: "",
      rating: 5,
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800",
    });
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`¿Eliminar testimonio de "${name}"?`)) {
      deleteTestimonial(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Gestión de Testimonios
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Administra los relatos e historias inspiradoras de la comunidad.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl shadow-md shadow-primario/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Nuevo testimonio</span>
        </button>
      </div>

      {/* Grid of Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover bg-slate-100 shrink-0"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                  <p className="text-xs text-emerald-700 font-medium">{item.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              <p className="text-xs text-slate-600 italic leading-relaxed">
                "{item.content}"
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end">
              <button
                onClick={() => handleDelete(item.id, item.name)}
                className="text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-3 py-1.5 rounded-lg transition-colors font-semibold flex items-center gap-1"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Eliminar</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Add Testimonial */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900">Nuevo Testimonio</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Nombre</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Ej. María Pérez"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">Rol / Comunidad</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Ej. Líder Comunitaria"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">URL Foto de Perfil</label>
                <input
                  type="url"
                  required
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">Testimonio / Historia</label>
                <textarea
                  required
                  rows={4}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Relato del impacto positivo..."
                />
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 text-slate-600 font-semibold text-xs rounded-xl"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl flex items-center gap-1 shadow-md shadow-primario/20"
                >
                  <Check className="w-4 h-4" />
                  <span>Guardar testimonio</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
