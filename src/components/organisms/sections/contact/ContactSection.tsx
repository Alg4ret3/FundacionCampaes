import { useScrollAnimation } from "../../../../hooks/useScrollAnimation";
import { MapPin, Phone, Mail } from "lucide-react";

import { ContactForm } from "../../../molecules/contact/ContactForm";
import { ContactInfoItem } from "../../../molecules/contact/ContactInfoItem";
import { SocialLinks } from "../../../molecules/contact/SocialLinks";
import { ContactTextBlock } from "../../../molecules/contact/ContactTextBlock";

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contacto" ref={ref} className="pt-15 pb-20 bg-fondo">
      <div className="max-w-7xl mx-auto px-4">
        {/* TITLE */}
        <ContactTextBlock isVisible={isVisible} />

        <div className="grid md:grid-cols-2 gap-14">
          {/* FORMULARIO */}
          <div
            className={`transition-all duration-1000 flex flex-col items-center text-center
    ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <h3 className="text-2xl font-bold text-primario mb-6">
              Envíanos un mensaje
            </h3>

            <div className="bg-fondo p-6 rounded-2xl shadow-lg w-full max-w-md">
              <ContactForm />
            </div>
          </div>

          {/* INFORMACIÓN */}
          <div
            className={`transition-all duration-1000 
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              }`}
          >
            <h3 className="text-2xl font-bold text-primario mb-6">
              Información de contacto
            </h3>

            <div className="space-y-4 mb-8">
              <ContactInfoItem
                Icon={MapPin}
                color="from-primario to-acento"
                title="Dirección"
              >
                Calle 18 #12-08, Barrio Fátima
                <br />
                San Juan de Pasto, Nariño, Colombia
              </ContactInfoItem>

              <ContactInfoItem
                Icon={Phone}
                color="from-secundario to-primario"
                title="Teléfono"
              >
                +57 318 509 4789
              </ContactInfoItem>

              <ContactInfoItem
                Icon={Mail}
                color="from-acento to-primario"
                title="Email"
              >
                funpazyesperanza@gmail.com
              </ContactInfoItem>
            </div>

            {/* REDES SOCIALES */}
            <div className="bg-[#F5F9F8] rounded-2xl p-6 shadow-sm mb-6">
              <h4 className="font-semibold text-primario mb-4">
                Síguenos en redes sociales
              </h4>
              <SocialLinks />
            </div>

            {/* MAPA */}
            {/* MAPA */}
            <div className="rounded-2xl overflow-hidden shadow-xl h-64 ring-1 ring-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.9386880537836!2d-77.2731101!3d1.2031495999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e2ed497a4220647%3A0x6cefd8e585749d3f!2sCl%2018%20%2312-08%2C%20Pasto%2C%20Nari%C3%B1o!5e0!3m2!1ses-419!2sco!4v1764262560361!5m2!1ses-419!2sco"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación"
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
