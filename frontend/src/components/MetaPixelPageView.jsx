import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fires Meta Pixel PageView on SPA client-side navigations.
 * Skips the first mount because the base snippet in index.html already
 * tracks the initial PageView.
 */
const MetaPixelPageView = () => {
  const location = useLocation();
  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  return null;
};

export default MetaPixelPageView;
