import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle } from 'lucide-react';

const AiOsWorkshopConfirmed = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Application Confirmed — AI OS Workshop | LevReg AI</title>
        <meta name="description" content="Your AI OS Workshop application has been received. We will contact you shortly." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/workshop/confirmed" />
      </Helmet>

      <div className="workshop-theme min-h-screen bg-background text-foreground">
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto text-center relative z-10">
            <div className="flex justify-center mb-8">
              <CheckCircle className="w-20 h-20 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-foreground text-shadow-green">
              Confirmed! We Will Contact You Shortly.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Thank you for applying to the AI OS Workshop. Our team will review your application and reach out to you soon.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiOsWorkshopConfirmed;
