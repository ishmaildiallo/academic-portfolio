import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import { Research } from './pages/Research';
import { Teaching } from './pages/Teaching';
import { Contact } from './pages/Contact';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Navbar } from './components/Navbar';
import { useDocumentTitle } from './hooks/useDocumentTitle';

const AppContent: React.FC = () => {
  useDocumentTitle();

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-blue selection:text-white text-base leading-relaxed">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full py-10 md:py-14">
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
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
