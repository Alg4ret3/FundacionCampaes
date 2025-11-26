import { Navigation } from '../components/organisms/layout/Navigation';
import { HeroSection } from '../components/organisms/sections/hero/HeroSection';
import { ImpactStatsSection } from '../components/organisms/sections/impact/ImpactStatsSection';
import { ValuesSection } from '../components/organisms/sections/values/ValuesSection';
import { AboutSection } from '../components/organisms/sections/about/AboutSection';
import { ActionLinesSection } from '../components/organisms/sections/actions/ActionLinesSection';
import { ActivitiesSection } from '../components/organisms/sections/activities/ActivitiesSection';
import { TestimonialsSection } from '../components/organisms/sections/testimonials/TestimonialsSection';
import { GallerySection } from '../components/organisms/sections/gallery/GallerySection';
import { ContactSection } from '../components/organisms/sections/contact/ContactSection';
import { Footer } from '../components/organisms/layout/Footer';
//import { ProgramsSection } from '../components/ProgramsSection';


function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ValuesSection />
      <ActionLinesSection />
      <ImpactStatsSection />
      <TestimonialsSection />
      <ActivitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
    
  );
}

export default App;
