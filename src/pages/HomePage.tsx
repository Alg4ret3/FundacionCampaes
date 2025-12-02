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

/*
  Este archivo importa y organiza todas las secciones principales de la página 
  usando los componentes de tipo `organisms` para construir la interfaz completa.

  Importaciones de layout:
    - Navigation: barra de navegación principal.
    - Footer: pie de página con enlaces y redes sociales.

  Importaciones de secciones:
    - HeroSection: sección de portada o hero, incluye imagen, texto y botones principales.
    - AboutSection: sección “Acerca de”, con información y línea de tiempo.
    - ValuesSection: sección de valores de la organización, tarjetas y encabezados.
    - ActionLinesSection: sección de líneas de acción, muestra bloques de acciones.
    - ImpactStatsSection: sección de impacto, con estadísticas y textos destacados.
    - TestimonialsSection: sección de testimonios, tarjetas y citas tipeadas.
    - ActivitiesSection: sección de actividades, incluye tarjetas, imágenes y detalles.
    - GallerySection: sección de galería, con carrusel de imágenes y bloques de texto.
    - ContactSection: sección de contacto, formulario, información y enlaces sociales.

  Estructura del componente App:
    - Devuelve un contenedor principal (`div`) con altura mínima de pantalla (`min-h-screen`).
    - Renderiza los componentes en orden de aparición para construir la página completa.
    - Permite mantener la jerarquía y consistencia del layout utilizando `organisms`.

  Nota:
    - La sección `ProgramsSection` está comentada y se puede incluir si es necesario.
*/
