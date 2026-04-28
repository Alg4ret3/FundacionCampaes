import { Suspense, lazy } from 'react';
import { Navigation } from '../components/organisms/layout/Navigation';
import { HeroSection } from '../components/organisms/sections/hero/HeroSection';
import { AboutSection } from '../components/organisms/sections/about/AboutSection';

// Carga perezosa de secciones por debajo del fold
const ValuesSection = lazy(() => import('../components/organisms/sections/values/ValuesSection').then(m => ({ default: m.ValuesSection })));
const ActionLinesSection = lazy(() => import('../components/organisms/sections/actions/ActionLinesSection').then(m => ({ default: m.ActionLinesSection })));
const ImpactStatsSection = lazy(() => import('../components/organisms/sections/impact/ImpactStatsSection').then(m => ({ default: m.ImpactStatsSection })));
const TestimonialsSection = lazy(() => import('../components/organisms/sections/testimonials/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const ActivitiesSection = lazy(() => import('../components/organisms/sections/activities/ActivitiesSection').then(m => ({ default: m.ActivitiesSection })));
const GallerySection = lazy(() => import('../components/organisms/sections/gallery/GallerySection').then(m => ({ default: m.GallerySection })));
const ContactSection = lazy(() => import('../components/organisms/sections/contact/ContactSection').then(m => ({ default: m.ContactSection })));
const Footer = lazy(() => import('../components/organisms/layout/Footer').then(m => ({ default: m.Footer })));

import { Skeleton } from '../components/atoms/feedback/Skeleton';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      
      <Suspense fallback={
        <div className="space-y-20 py-20 px-4 max-w-7xl mx-auto">
          <Skeleton className="h-64" />
          <Skeleton className="h-96" />
        </div>
      }>
        <ValuesSection />
        <ActionLinesSection />
        <ImpactStatsSection />
        <TestimonialsSection />
        <ActivitiesSection />
        <GallerySection />
        <ContactSection />
        <Footer />
      </Suspense>
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
