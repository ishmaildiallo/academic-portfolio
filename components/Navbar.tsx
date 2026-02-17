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
    `text-lg transition-colors duration-200 ${
      isActive
        ? 'text-white border-b border-white'
        : 'text-brand-gray hover:text-white'
    }`;

  const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-2xl font-bold transition-colors duration-200 ${
      isActive
        ? 'text-white'
        : 'text-brand-gray hover:text-white'
    }`;

  return (
    <nav className="py-10 md:py-16 flex flex-row justify-between items-end gap-8 border-b border-white/10 mb-8 relative">
      <Link
        to="/"
        className="text-2xl md:text-3xl font-masthead text-white hover:text-brand-blue transition-colors tracking-tighter leading-none pb-1 z-50"
        aria-label="MB Jalloh Home"
      >
        MB Jalloh
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex flex-wrap gap-x-8 gap-y-4 pb-3">
        {NAV_ITEMS.map((item) => (
          <NavLink key={item.path} to={item.path} className={linkClass}>
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Mobile hamburger button */}
      <button
        className="md:hidden text-white p-2 -mr-2 z-50 relative"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 animate-fade-in md:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={mobileLinkClass}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};
