import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Leaf } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0F7961] to-[#138A7E] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Leaf className="w-7 h-7 text-[#1ABC9C]" />
              </div>
              <div>
                <h4 className="text-lg font-bold">Caminos de Paz</h4>
                <p className="text-xs text-white/70">Y Esperanza</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed text-sm font-light mb-3">
              Construyendo Paz Sostenible desde nuestro Territorio
            </p>
            <p className="text-white/60 text-xs">
              Trabajamos por el desarrollo integral de nuestras comunidades desde 2017
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-[#1ABC9C]">Contacto</h4>
            <div className="space-y-4">
              <a href="#" className="flex items-start space-x-3 group">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-[#1ABC9C]" />
                <span className="text-white/80 text-sm group-hover:text-[#1ABC9C] transition-colors">
                  Calle 123 #45-67<br />
                  Barrio La Paz, Colombia
                </span>
              </a>
              <a href="tel:+573124567890" className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#1ABC9C]" />
                <span className="text-white/80 text-sm group-hover:text-[#1ABC9C] transition-colors">
                  +57 312 456 7890
                </span>
              </a>
              <a href="mailto:contacto@caminosdepaz.org" className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#1ABC9C]" />
                <span className="text-white/80 text-sm group-hover:text-[#1ABC9C] transition-colors">
                  contacto@caminosdepaz.org
                </span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-[#1ABC9C]">Enlaces</h4>
            <ul className="space-y-3">
              {['Inicio', 'Nosotros',  'Actividades', 'Contacto'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-white/80 hover:text-[#1ABC9C] text-sm transition-all duration-300 inline-flex items-center group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#1ABC9C] mr-2 group-hover:mr-3 transition-all"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wide mb-6 text-[#1ABC9C]">Síguenos</h4>
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Facebook, label: 'Facebook', href: '#' },
                { icon: Instagram, label: 'Instagram', href: '#' },
                { icon: Twitter, label: 'Twitter', href: '#' }
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-[#1ABC9C] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-xs text-center md:text-left">
              © 2025 Fundación Caminos de Paz y Esperanza. Todos los derechos reservados.
            </p>
            <p className="text-white/60 text-xs">
              Diseñado por <span className="text-[#1ABC9C] font-semibold">Sergio</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
