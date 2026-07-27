import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TITLE_MAP: Record<string, string> = {
  '/': 'Mohamed Bella Jalloh — Physician & Researcher',
  '/publications': 'Publications — MB Jalloh',
  '/research': 'Research — MB Jalloh',
  '/teaching': 'Teaching & Mentorship — MB Jalloh',
  '/blog': 'Writing — MB Jalloh',
  '/contact': 'Contact — MB Jalloh',
};

export function useDocumentTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    // Individual blog posts set their own title from the post data.
    if (path.startsWith('/blog/')) {
      return;
    }
    document.title = TITLE_MAP[path] || 'Mohamed Bella Jalloh';
  }, [location.pathname]);
}
