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
      // Allow SPA navigations to count as new page views.
      window.__levregMetaPageView = false;
      window.fbq('track', 'PageView');
      window.__levregMetaPageView = true;
    }
  }, [location.pathname, location.search]);

  return null;
};

export default MetaPixelPageView;
