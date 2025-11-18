import { FooterLogo } from "../../molecules/FooterLogo";
import { FooterLinks } from "../../molecules/FooterLinks";
import { SocialLinks } from "../../molecules/SocialLinks";
import { ContactItem } from "../../atoms/ContactItem";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-oscuro text-fondo relative overflow-hidden">
      {/* Fondo decorativo con blur sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primario/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-acento/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Logo y descripción */}
          <section className="lg:col-span-1" aria-label="Sobre Caminos de Paz">
            <FooterLogo />

            <p className="text-claro/70 text-xs">
              Desde 2017 trabajamos en proyectos sociales, educativos y
              ambientales que buscan fortalecer el tejido social, promover la
              equidad y mejorar la calidad de vida de las familias en nuestra
              región. Nuestra labor se basa en valores de respeto, inclusión y
              compromiso con un futuro más justo y sostenible.
            </p>
          </section>

          {/* Contacto */}
          <section aria-label="Contacto">
            <h4 className="text-primario text-sm font-bold uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <address className="space-y-4 not-italic">
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

          {/* Enlaces internos */}
          <nav aria-label="Enlaces rápidos">
            <h4 className="text-primario text-sm font-bold uppercase tracking-wider mb-6">
              Enlaces
            </h4>
            <FooterLinks className="text-claro/80 hover:text-primario transition-colors duration-300" />
          </nav>

          {/* Redes sociales */}
          <section aria-label="Redes sociales">
            <h4 className="text-primario text-sm font-bold uppercase tracking-wider mb-6">
              Síguenos
            </h4>
            <SocialLinks className="flex gap-4" />
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-claro/20 pt-8">
          <div className="flex justify-center items-center">
            <small className="text-claro/70 text-xs text-center">
              © {new Date().getFullYear()} Fundación Caminos de Paz y Esperanza.
              Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
