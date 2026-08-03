import { useEffect } from 'react';

/**
 * Hard-navigates to a static HTML page in /public (outside the SPA shell).
 */
const StaticHtmlRedirect = ({ to }) => {
  useEffect(() => {
    if (window.location.pathname !== to) {
      window.location.replace(to);
    }
  }, [to]);

  return null;
};

export default StaticHtmlRedirect;
