import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ImpactStatsSection } from './components/ImpactStatsSection';
import { ValuesSection } from './components/ValuesSection';
import { AboutSection } from './components/AboutSection';
import { ActionLinesSection } from './components/ActionLinesSection';
//import { ProgramsSection } from './components/ProgramsSection';
import { ActivitiesSection } from './components/ActivitiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <ActivitiesSection />
      <ImpactStatsSection />
      <AboutSection />
      <ValuesSection />
      <ActionLinesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
