import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/atoms/misc/ScrollToTop';
import HomePage from './pages/HomePage';
import { WhatsAppButton } from './components/atoms/buttons/WhatsAppButton';
import { ContentProvider } from './context/ContentContext';
import { AuthProvider } from './admin/context/AuthContext';
import { ProtectedRoute } from './admin/components/ProtectedRoute';

const AboutPage = lazy(() => import('./pages/AboutPage'));
const ActionActivitiesPage = lazy(() => import('./pages/ActionActivitiesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Admin pages
const AdminLoginPage = lazy(() => import('./admin/pages/AdminLoginPage').then(m => ({ default: m.AdminLoginPage })));
const AdminLayout = lazy(() => import('./admin/components/AdminLayout').then(m => ({ default: m.AdminLayout })));
const AdminDashboard = lazy(() => import('./admin/pages/AdminDashboard').then(m => ({ default: m.AdminDashboard })));
const AdminActivitiesPage = lazy(() => import('./admin/pages/AdminActivitiesPage').then(m => ({ default: m.AdminActivitiesPage })));
const AdminGalleryPage = lazy(() => import('./admin/pages/AdminGalleryPage').then(m => ({ default: m.AdminGalleryPage })));
const AdminTestimonialsPage = lazy(() => import('./admin/pages/AdminTestimonialsPage').then(m => ({ default: m.AdminTestimonialsPage })));
const AdminTextsPage = lazy(() => import('./admin/pages/AdminTextsPage').then(m => ({ default: m.AdminTextsPage })));

function App() {
  return (
    <AuthProvider>
      <ContentProvider>
        <Router>
          <ScrollToTop />
          <div className="AppRoot">
            <Suspense fallback={<div className="min-h-screen bg-white" />}>
              <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/action-activities" element={<ActionActivitiesPage />} />
                <Route path="/contact" element={<ContactPage />} />

                {/* Rutas Administrativas Protegidas */}
                <Route path="/admin/login" element={<AdminLoginPage />} />
                <Route
                  path="/admin"
                  element={
                    <ProtectedRoute>
                      <AdminLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<AdminDashboard />} />
                  <Route path="activities" element={<AdminActivitiesPage />} />
                  <Route path="gallery" element={<AdminGalleryPage />} />
                  <Route path="testimonials" element={<AdminTestimonialsPage />} />
                  <Route path="texts" element={<AdminTextsPage />} />
                </Route>
              </Routes>
            </Suspense>
            <WhatsAppButton />
          </div>
        </Router>
      </ContentProvider>
    </AuthProvider>
  );
}

export default App;
