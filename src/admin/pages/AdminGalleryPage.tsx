import React, { useState } from "react";
import { useContent } from "../../context/ContentContext";
import { Plus, Trash2, Image as ImageIcon, Check, X } from "lucide-react";

export const AdminGalleryPage: React.FC = () => {
  const { gallery, addGalleryItem, deleteGalleryItem } = useContent();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUrl, setNewUrl] = useState("");
  const [newTitle, setNewTitle] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUrl) return;
    addGalleryItem({
      url: newUrl,
      title: newTitle || `Imagen Galería ${gallery.length + 1}`,
    });
    setNewUrl("");
    setNewTitle("");
    setIsModalOpen(false);
  };

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`¿Eliminar la imagen "${title}" de la galería?`)) {
      deleteGalleryItem(id);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs">
        <div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">
            Gestión de Galería de Fotos
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Añade o remueve fotografías de la galería principal del portal.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primario hover:bg-secundario text-white font-bold text-xs rounded-2xl shadow-md shadow-primario/20 transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Añadir nueva foto</span>
        </button>
      </div>

      {/* Grid of Gallery Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {gallery.map((item) => (
          <div
            key={item.id}
            className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all aspect-square"
          >
            <img
              src={item.url.startsWith("http") ? item.url : `https://res.cloudinary.com/dqky6oqrd/image/upload/v1778623906/${item.url}`}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 bg-slate-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-3 flex flex-col justify-between">
              <div className="text-right">
                <button
                  onClick={() => handleDelete(item.id, item.title)}
                  className="p-2 bg-rose-600/90 text-white rounded-xl hover:bg-rose-600 transition-colors shadow-sm"
                  title="Eliminar foto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <p className="text-xs font-semibold text-white truncate">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Add Image Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl p-6 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900">Agregar Fotografía</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <ImageIcon className="w-3.5 h-3.5 text-emerald-600" />
                  <span>URL de la Fotografía</span>
                </label>
                <input
                  type="url"
                  required
                  value={newUrl}
                  onChange={(e) => setNewUrl(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="https://images.unsplash.com/..."
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Título / Leyenda
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Ej. Taller de Lectura 2026"
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
                  <span>Agregar</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
