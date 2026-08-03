import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

// These React routes immediately hard-navigate to static HTML that has its own Meta Pixel.
// Skip SPA PageView here to avoid a double fire (SPA + static).
const STATIC_HTML_REDIRECTS = new Set([
  '/aios',
  '/aios-certified',
  '/plan',
  '/apply',
  '/install-call',
  '/install-call-complete',
]);

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

    if (STATIC_HTML_REDIRECTS.has(location.pathname)) {
      return;
    }

    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location.pathname, location.search]);

  return null;
};

export default MetaPixelPageView;
