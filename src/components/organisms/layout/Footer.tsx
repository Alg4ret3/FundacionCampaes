import { FooterLogo } from "../../molecules/footer/FooterLogo";
import { FooterLinks } from "../../molecules/footer/FooterLinks";
import { SocialLinks } from "../../molecules/footer/SocialLinks";
import { ContactItem } from "../../atoms/misc/ContactItem";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-oscuro text-fondo relative overflow-hidden">
      {/* Fondo decorativo con blur sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primario/20 rounded-full blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-60 sm:w-72 md:w-80 h-60 sm:h-72 md:h-80 bg-acento/20 rounded-full blur-2xl sm:blur-3xl"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-12 sm:mb-14 md:mb-16 lg:mb-20">
          {/* Logo y descripción */}
          <section className="lg:col-span-1" aria-label="Sobre Caminos de Paz">
            <FooterLogo />

            <p className="text-claro/70 text-xs sm:text-sm leading-relaxed">
              Desde 2017 trabajamos en proyectos sociales, educativos y
              ambientales que buscan fortalecer el tejido social, promover la
              equidad y mejorar la calidad de vida de las familias en nuestra
              región. Nuestra labor se basa en valores de respeto, inclusión y
              compromiso con un futuro más justo y sostenible.
            </p>
          </section>

          {/* Contacto */}
          <section aria-label="Contacto">
            <h4 className="text-fondo text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
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
            <h4 className="text-fondo text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Enlaces
            </h4>
            <FooterLinks className="text-claro/80 hover:text-claro transition-colors duration-300" />
          </nav>

          {/* Redes sociales */}
          <section aria-label="Redes sociales">
            <h4 className="text-fondo text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 sm:mb-6">
              Síguenos
            </h4>
            <SocialLinks className="flex gap-4" />
          </section>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-claro/20 pt-6 sm:pt-8">
          <div className="flex justify-center items-center">
            <small className="text-claro text-xs text-center">
              © {new Date().getFullYear()} Fundación Caminos de Paz y Esperanza.
              Todos los derechos reservados.
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
};
