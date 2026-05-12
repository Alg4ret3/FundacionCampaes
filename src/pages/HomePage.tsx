import { Suspense, lazy } from 'react';
import { Navigation } from '../components/organisms/layout/Navigation';
import { HeroSection } from '../components/organisms/sections/hero/HeroSection';

// Carga perezosa de secciones por debajo del fold
const ImpactStatsSection = lazy(() => import('../components/organisms/sections/impact/ImpactStatsSection').then(m => ({ default: m.ImpactStatsSection })));
const TestimonialsSection = lazy(() => import('../components/organisms/sections/testimonials/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
const GallerySection = lazy(() => import('../components/organisms/sections/gallery/GallerySection').then(m => ({ default: m.GallerySection })));
const Footer = lazy(() => import('../components/organisms/layout/Footer').then(m => ({ default: m.Footer })));

import { Skeleton } from '../components/atoms/feedback/Skeleton';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />

      <Suspense fallback={
        <div className="space-y-20 py-20 px-4 max-w-7xl mx-auto">
          <Skeleton className="h-64" />
          <Skeleton className="h-96" />
        </div>
      }>
        <ImpactStatsSection />
        <GallerySection />
        <TestimonialsSection />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;

/*
  Página de inicio: importa y organiza las secciones principales de la home
  usando componentes de tipo `organisms` para construir la interfaz.

  Importaciones de layout:
    - Navigation: barra de navegación principal.
    - Footer: pie de página con enlaces y redes sociales.

  Importaciones de secciones:
    - HeroSection: sección de portada o hero, incluye imagen, texto y botones principales.
    - ImpactStatsSection: sección de impacto, con estadísticas y textos destacados.
    - TestimonialsSection: sección de testimonios, tarjetas y citas tipeadas.
    - GallerySection: sección de galería, con carrusel de imágenes y bloques de texto.

  Estructura del componente:
    - Devuelve un contenedor principal (`div`) con altura mínima de pantalla (`min-h-screen`).
    - Renderiza los componentes en orden de aparición para construir la página de inicio.
    - Las otras secciones (About, Values, Actions/Activities, Contact) están en páginas separadas.

  Nota:
    - Secciones movidas a páginas individuales para mejor navegación.
*/
