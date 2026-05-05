import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const TYPEFORM_EMBED_JS = 'https://embed.typeform.com/next/embed.js';

const CroApply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const runTypeformLoad = () => {
      if (typeof window.tf?.load === 'function') {
        window.tf.load();
      }
    };

    const existingScript = document.querySelector('script[src*="embed.typeform.com/next/embed.js"]');
    if (existingScript) {
      // SPA revisit: embed.js only auto-scans on full page load; re-scan for this route’s nodes.
      queueMicrotask(runTypeformLoad);
      return;
    }

    const script = document.createElement('script');
    script.src = TYPEFORM_EMBED_JS;
    script.async = true;
    document.body.appendChild(script);
    // First load: library initializes snippets present when the script finishes loading.
  }, []);

  return (
    <>
      <Helmet>
        <title>Apply — Ai Chief Revenue Officer | LevReg AI</title>
        <meta
          name="description"
          content="We build you an Ai Chief Revenue Officer in 2 days. Apply to get started."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/apply" />
      </Helmet>

      <div className="min-h-screen bg-white text-neutral-950">
        <section className="relative min-h-screen flex flex-col items-center px-6 py-20">
          <div className="max-w-3xl mx-auto text-center relative z-10 mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-black">
              We Will Build You An{' '}
              <span className="text-brand">Ai Chief Revenue Officer</span>
              {' '}In 2 Days!
            </h1>
            <p className="mt-5 text-lg md:text-xl text-neutral-600 font-medium leading-relaxed">
              Fill out the application below to get started
            </p>
          </div>

          <div className="w-full max-w-3xl relative z-10 flex-1 min-h-[600px]">
            <div
              className="w-full min-h-[600px] rounded-xl"
              data-tf-live="01KQTNDX79CYBWJ97DQ0GT44XF"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CroApply;
