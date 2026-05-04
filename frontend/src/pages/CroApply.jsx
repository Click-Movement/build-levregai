import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const CroApply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
          </div>

          <div className="w-full max-w-3xl relative z-10 flex-1" style={{ minHeight: '600px' }}>
            <iframe
              title="Ai Chief Revenue Officer application"
              src="https://natekennedymd.typeform.com/to/F8N4PIrt"
              style={{
                width: '100%',
                height: '100%',
                minHeight: '600px',
                border: 'none',
                borderRadius: '12px',
              }}
              allow="camera; microphone; autoplay; encrypted-media;"
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default CroApply;
