import { Leaf } from 'lucide-react';

export const FooterLogo = () => (
  <div className="flex items-center space-x-3 mb-6">
     <img
   src="/static/Logo.webp"
   alt="Logo Caminos de Paz"
   className="w-14 h-14 object-contain"
  />
    <div>
      <h4 className="text-lg font-bold">Fundación Caminos de Paz</h4>
      <p className="text-xs text-white/70">Y Esperanza</p>
    </div>
  </div>
);
