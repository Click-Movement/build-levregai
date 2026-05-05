import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const CroApplyConfirmed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Application Confirmed — Ai Chief Revenue Officer | LevReg AI</title>
        <meta
          name="description"
          content="Your Ai Chief Revenue Officer application has been received. We will contact you shortly."
        />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/apply/confirmed" />
      </Helmet>

      <div className="min-h-screen bg-white text-neutral-950">
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-20 h-20 text-brand" aria-hidden />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-black">
              <span className="text-brand">Confirmed!</span> We Will Contact You Shortly.
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Thank you for applying to work with us. Our team will review your application and reach out to you soon.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CroApplyConfirmed;
