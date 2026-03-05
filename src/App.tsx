import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { HelmetProvider } from 'react-helmet-async';
import { useScrollToTop } from '@/hooks/useScrollToTop';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Home = lazy(() => import('@/pages/Home'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const ArtworkDetail = lazy(() => import('@/pages/ArtworkDetail'));
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Contact = lazy(() => import('@/pages/Contact'));
const LegalNotices = lazy(() => import('@/pages/LegalNotices'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const SitemapPage = lazy(() => import('@/pages/Sitemap'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-10 h-10 border-3 border-[#ECF3FF] border-t-[#1877F2] rounded-full animate-spin" />
    </div>
  );
}

function AppContent() {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen" data-sidebar>
      <Header />
      <main className="flex-1">
        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:slug" element={<ArtworkDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/mentions-legales" element={<LegalNotices />} />
              <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
              <Route path="/plan-du-site" element={<SitemapPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <AppContent />
    </HelmetProvider>
  );
}
