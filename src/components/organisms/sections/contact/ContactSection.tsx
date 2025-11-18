import { useState } from 'react';
import { useScrollAnimation } from '../../../../hooks/useScrollAnimation';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Twitter } from 'lucide-react';

export const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contacto" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-3xl md:text-4xl font-bold text-center text-[#138A7E] mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          Contáctanos
        </h2>

        <p
          className={`text-center text-gray-600 mb-12 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          style={{ transitionDelay: '0.1s' }}
        >
          Estamos aquí para escucharte y trabajar juntos por nuestras comunidades
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <h3 className="text-2xl font-bold text-[#138A7E] mb-6">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#138A7E] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ABC9C] focus:outline-none transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#138A7E] mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ABC9C] focus:outline-none transition-colors duration-300"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#138A7E] mb-2">
                  Mensaje
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#1ABC9C] focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Cuéntanos cómo podemos ayudarte..."
                />
              </div>

              <button
                type="submit"
                className="group w-full bg-[#1ABC9C] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#138A7E] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Enviar mensaje</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          <div
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '0.3s' }}
          >
            <h3 className="text-2xl font-bold text-[#138A7E] mb-6">Información de contacto</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#138A7E] mb-1">Dirección</h4>
                  <p className="text-gray-600">
                    Calle 123 #45-67, Barrio La Paz
                    <br />
                    Ciudad, Colombia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#138A7E] mb-1">Teléfono</h4>
                  <p className="text-gray-600">+57 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-[#1ABC9C] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#138A7E] mb-1">Email</h4>
                  <p className="text-gray-600">contacto@caminosdepaz.org</p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F9F8] rounded-2xl p-6">
              <h4 className="font-semibold text-[#138A7E] mb-4">Síguenos en redes sociales</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-[#1ABC9C] hover:bg-[#138A7E] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#1ABC9C] hover:bg-[#138A7E] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-white" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-[#1ABC9C] hover:bg-[#138A7E] rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="mt-8 rounded-2xl overflow-hidden shadow-lg h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127194.48348169815!2d-74.14659885!3d4.6486259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bfd2da6cb29%3A0x239d635520a33914!2sBogot%C3%A1%2C%20Colombia!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
