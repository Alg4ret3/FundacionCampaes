import { Navigation } from '../components/organisms/layout/Navigation';
import { ContactSection } from '../components/organisms/sections/contact/ContactSection';
import { Footer } from '../components/organisms/layout/Footer';

function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default ContactPage;