import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const sidebar = document.querySelector('[data-sidebar]');
    if (sidebar) {
      sidebar.scrollTop = 0;
    }

    window.scrollTo(0, 0);

    const h1 = document.querySelector('h1');
    if (h1) {
      h1.focus();
    }
  }, [pathname]);
};
