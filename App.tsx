import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigationType } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar';
import { useDocumentTitle } from './hooks/useDocumentTitle';

// Secondary routes are code-split so the initial load only ships the Home page.
const Publications = lazy(() => import('./pages/Publications').then(m => ({ default: m.Publications })));
const Research = lazy(() => import('./pages/Research').then(m => ({ default: m.Research })));
const Teaching = lazy(() => import('./pages/Teaching').then(m => ({ default: m.Teaching })));
const Contact = lazy(() => import('./pages/Contact').then(m => ({ default: m.Contact })));
const Blog = lazy(() => import('./pages/Blog').then(m => ({ default: m.Blog })));
const BlogPost = lazy(() => import('./pages/BlogPost').then(m => ({ default: m.BlogPost })));

const RELOAD_FLAG = 'chunk-reload-once';

// After a redeploy, an open tab may request route chunks whose hashed URLs no
// longer exist. Reload once to pick up the new deploy; if that doesn't fix it,
// show a refresh hint instead of a blank page.
class ChunkErrorBoundary extends React.Component<React.PropsWithChildren, { failed: boolean }> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    if (!sessionStorage.getItem(RELOAD_FLAG)) {
      sessionStorage.setItem(RELOAD_FLAG, '1');
      window.location.reload();
    }
  }

  render() {
    if (this.state.failed) {
      return (
        <p className="text-brand-muted py-10">
          A new version of this site was deployed —{' '}
          <a href={window.location.href} className="text-brand-blue underline">refresh the page</a> to continue.
        </p>
      );
    }
    return this.props.children;
  }
}

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const navigationType = useNavigationType();
  useEffect(() => {
    // Let the browser restore scroll position on back/forward navigation.
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [pathname, navigationType]);
  return null;
};

const AppContent: React.FC = () => {
  useDocumentTitle();

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue selection:text-white text-base leading-relaxed">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full py-10 md:py-14">
          <ChunkErrorBoundary>
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/research" element={<Research />} />
              <Route path="/teaching" element={<Teaching />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
          </ChunkErrorBoundary>
        </main>

        <footer className="py-12 mt-16 text-center sm:text-left border-t border-brand-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-brand-muted">
            <span>&copy; {new Date().getFullYear()} Mohamed Bella Jalloh</span>
            <div className="flex gap-6">
               <a href="mailto:mbjay208@outlook.com" className="hover:text-brand-dark transition-colors duration-300">Email</a>
               <a href="https://twitter.com/dr_bellajaymd" target="_blank" rel="noreferrer" className="hover:text-brand-dark transition-colors duration-300">Twitter</a>
               <a href="https://www.linkedin.com/in/bellajaymd" target="_blank" rel="noreferrer" className="hover:text-brand-dark transition-colors duration-300">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router future={{ v7_startTransition: true }}>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;
