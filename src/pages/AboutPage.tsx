import { lazy, Suspense } from 'react';
import { Navigation } from '../components/organisms/layout/Navigation';
import { AboutSection } from '../components/organisms/sections/about/AboutSection';
import { Footer } from '../components/organisms/layout/Footer';
import { Skeleton } from '../components/atoms/feedback/Skeleton';

const ValuesSection = lazy(() => import('../components/organisms/sections/values/ValuesSection').then(m => ({ default: m.ValuesSection })));

function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AboutSection />
      <Suspense fallback={
        <div className="space-y-20 py-20 px-4 max-w-7xl mx-auto">
          <Skeleton className="h-64" />
        </div>
      }>
        <ValuesSection />
      </Suspense>
      <Footer />
    </div>
  );
}

export default AboutPage;