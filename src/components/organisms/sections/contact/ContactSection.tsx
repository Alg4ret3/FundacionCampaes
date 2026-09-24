import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { ContactForm } from "../../../molecules/contact/ContactForm";

export const ContactSection = () => {
  return (
    <section id="contacto" className="bg-white pt-32 pb-0 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">

        {/* ── Refined Typographic Header ── */}
        <div className="max-w-3xl mb-24 md:mb-32">
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-display tracking-tight leading-tight">
            Hablemos del Futuro.
          </h1>
          <p className="mt-8 text-gray-500 text-lg lg:text-lg font-light leading-relaxed max-w-2xl">
            Estamos aquí para escucharte y construir juntos nuevos caminos de paz. Encuentra todas las formas de conectar con nuestra labor.
          </p>
        </div>

        {/* ── Contact Info Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin className="text-primario w-4 h-4 opacity-50" />
              <span className="text-xs text-gray-400">Sede principal</span>
            </div>
            <p className="text-xl md:text-2xl font-black text-texto tracking-tighter leading-tight">
              Calle 18 #12-08, <br />
              Barrio Fátima, Pasto.
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Phone className="text-primario w-4 h-4 opacity-50" />
              <span className="text-xs text-gray-400">Línea directa</span>
            </div>
            <p className="text-xl md:text-2xl font-black text-texto tracking-tighter leading-tight">
              +57 318 509 4789
            </p>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Mail className="text-primario w-4 h-4 opacity-50" />
              <span className="text-xs text-gray-400">Correo</span>
            </div>
            <p className="text-xl md:text-2xl font-black text-texto tracking-tighter leading-tight lowercase break-all">
              funpazyesperanza@gmail.com
            </p>
          </div>

        </div>

        {/* ── Form Section: Floating Island ── */}
        <div className="max-w-4xl mx-auto mb-20 md:mb-32 bg-surface p-6 sm:p-10 md:p-20 rounded-sm border border-divider">
          <div className="max-w-xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-display tracking-tight mb-4">
                Envíanos un mensaje
              </h2>
              <p className="text-gray-500 text-[11px] md:text-sm font-light">
                Completa el formulario y nos pondremos en contacto contigo pronto.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>


        {/* ── Social Footer ── */}
        <div className="flex flex-col items-center gap-8 mb-24">
          <div className="flex items-center gap-12">
            <a href="#" className="text-gray-400 hover:text-primario transition-colors" aria-label="Instagram"><Instagram className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primario transition-colors" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
            <a href="#" className="text-gray-400 hover:text-primario transition-colors" aria-label="Youtube"><Youtube className="w-6 h-6" /></a>
          </div>
        </div>

      </div>

      {/* ── Full Width Map: The Foundation ── */}
      <div className="w-full h-[400px] md:h-[500px]">
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
    </section>
  );
};
