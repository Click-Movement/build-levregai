/**
 * public/aios/ still holds about.html, our-talent.html, and assets.
 * Funnel routes may keep public/*/assets folders. webpack-dev-server
 * treats those folders as static directories and can 301 /slug → /slug/.
 * Force the SPA shell for these exact paths so React routes render
 * (static sibling HTML/assets stay untouched).
 */
module.exports = function setupProxy(app) {
  const spaExact = [
    '/aios',
    '/aios/',
    '/plan',
    '/plan/',
    '/apply',
    '/apply/',
    '/install-call',
    '/install-call/',
    '/install-call-complete',
    '/install-call-complete/',
  ];

  app.get(spaExact, (req, res, next) => {
    req.url = '/index.html';
    next();
  });
};
