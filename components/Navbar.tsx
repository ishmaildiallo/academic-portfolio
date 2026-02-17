import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'About', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'Publications', path: '/publications' },
  { name: 'Teaching', path: '/teaching' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm tracking-wide transition-colors duration-300 ${
      isActive
        ? 'text-brand-dark border-b border-brand-dark pb-0.5'
        : 'text-brand-muted hover:text-brand-dark'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-bold transition-colors duration-300 ${
      isActive
        ? 'text-brand-dark'
        : 'text-brand-muted hover:text-brand-dark'
    }`;

  return (
    <nav className="pt-10 pb-8 md:pt-14 md:pb-10 flex flex-row justify-between items-end gap-8 border-b border-brand-border mb-8 relative">
      <Link
        to="/"
        className="text-2xl md:text-3xl font-masthead text-brand-dark hover:text-brand-blue transition-colors duration-300 tracking-tighter leading-none pb-1 z-50"
        aria-label="MB Jalloh Home"
      >
        MB Jalloh
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-wrap gap-x-7 gap-y-4 pb-2 items-end">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.path} to={item.path} className={linkClass} end={item.path === '/'}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden text-brand-dark p-2 -mr-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-brand-bg/[0.98] z-40 flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
              end={item.path === '/'}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
