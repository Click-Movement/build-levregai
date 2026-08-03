/**
 * public/aios/ still holds about.html, our-talent.html, and assets.
 * webpack-dev-server treats that folder as a static directory and 301s
 * /aios → /aios/. Force the SPA shell for those exact paths so the
 * React route can render (static /aios/about.html etc. stay untouched).
 */
module.exports = function setupProxy(app) {
  app.get(['/aios', '/aios/'], (req, res, next) => {
    req.url = '/index.html';
    next();
  });
};
