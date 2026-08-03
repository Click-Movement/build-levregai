import { useEffect } from 'react';

/**
 * Hard-navigates to the static Leverage AiOS design at /aios/
 * (bundled HTML in public/aios — served as-is, outside the SPA shell).
 * Trailing slash keeps relative links (about.html, our-talent.html) correct.
 */
const AiosCertified = () => {
  useEffect(() => {
    // Prefer directory URL in production; fall back to explicit file for CRA public/.
    const target = '/aios/index.html';
    if (window.location.pathname !== target) {
      window.location.replace(target);
    }
  }, []);

  return null;
};

export default AiosCertified;
