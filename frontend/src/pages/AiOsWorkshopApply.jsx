import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

const AiOsWorkshopApply = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Apply — AI OS Workshop | LevReg AI</title>
        <meta name="description" content="Apply to the AI OS Workshop. Limited to 5 companies per month." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/ai-os-workshop/apply" />
      </Helmet>

      <div className="workshop-theme min-h-screen bg-background text-foreground">
        <section className="relative min-h-screen flex flex-col items-center px-6 py-20">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10 mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-foreground text-shadow-green">
              Apply To Our AI OS Workshop
            </h1>
          </div>

          <div className="w-full max-w-3xl relative z-10 flex-1" style={{ minHeight: '600px' }}>
            <iframe
              title="AI OS Workshop Application"
              src="https://natekennedymd.typeform.com/to/GBdOid0V"
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

export default AiOsWorkshopApply;
