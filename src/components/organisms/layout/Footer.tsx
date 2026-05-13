import { FooterLogo } from "../../molecules/footer/FooterLogo";
import { FooterLinks } from "../../molecules/footer/FooterLinks";
import { SocialLinks } from "../../molecules/footer/SocialLinks";
import { ContactItem } from "../../atoms/misc/ContactItem";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-surface text-texto relative overflow-hidden border-t border-divider">

      {/* Decoración sutil */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primario/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

          {/* Columna de Marca y Misión */}
          <section className="lg:col-span-5 flex flex-col" aria-label="Sobre la Fundación">
            <FooterLogo />
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-md mt-2">
              Transformando realidades desde 2017 a través de proyectos que fortalecen el tejido social y promueven la equidad en nuestra región.
            </p>
            <div className="mt-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-6">Síguenos en redes</p>
              <SocialLinks />
            </div>
          </section>

          {/* Espaciador para desktop */}
          <div className="hidden lg:block lg:col-span-1"></div>

          {/* Columna de Enlaces Rápidos */}
          <nav className="lg:col-span-2" aria-label="Navegación del sitio">
            <h4 className="text-texto text-[10px] uppercase tracking-[0.3em] font-bold mb-10">
              Explorar
            </h4>
            <FooterLinks />
          </nav>

          {/* Columna de Contacto */}
          <section className="lg:col-span-4" aria-label="Información de contacto">
            <h4 className="text-texto text-[10px] uppercase tracking-[0.3em] font-bold mb-10">
              Contacto Directo
            </h4>
            <address className="space-y-8 not-italic">
              <ContactItem
                Icon={MapPin}
                href="https://www.google.com/maps/search/?api=1&query=Calle+18+%2312-08,+Barrio+Fátima,+San+Juan+de+Pasto,+Nariño,+Colombia"
              >
                Calle 18 #12-08, Barrio Fátima
                <br />
                San Juan de Pasto, Nariño, Colombia
              </ContactItem>

              <ContactItem Icon={Phone} href="tel:+573185094789">
                +57 318 509 4789
              </ContactItem>
              <ContactItem Icon={Mail} href="mailto:funpazyesperanza@gmail.com">
                funpazyesperanza@gmail.com
              </ContactItem>
            </address>
          </section>
        </div>

        {/* Barra Inferior */}
        <div className="mt-24 pt-10 border-t border-divider flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <small className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-left">
              © {new Date().getFullYear()} Fundación Caminos de Paz y Esperanza.
            </small>
            <small className="text-gray-400 text-[9px] uppercase tracking-[0.2em]">
              Compromiso con el cambio social
            </small>
          </div>

          <div className="flex gap-10 items-center">
            <div className="flex items-center gap-2 text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] uppercase tracking-widest">Sede Activa</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};



