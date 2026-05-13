import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/atoms/misc/ScrollToTop';
import HomePage from './pages/HomePage';
import { WhatsAppButton } from './components/atoms/buttons/WhatsAppButton';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ActionActivitiesPage = lazy(() => import('./pages/ActionActivitiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="AppRoot">


        <Suspense fallback={<div className="min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/action-activities" element={<ActionActivitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
