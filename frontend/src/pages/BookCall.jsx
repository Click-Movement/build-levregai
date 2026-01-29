import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';

const BookCall = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    document.head.appendChild(script);
    
    script.onload = () => {
      // Initialize Cal.com
      if (window.Cal) {
        window.Cal("init", "30min", {origin:"https://app.cal.com"});
        
        window.Cal.ns = window.Cal.ns || {};
        window.Cal.ns["30min"] = window.Cal.ns["30min"] || function() {};
        
        window.Cal.ns["30min"]("inline", {
          elementOrSelector:"#my-cal-inline-30min",
          config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
          calLink: "levregai/30min",
        });
        
        window.Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
      }
    };
    
    return () => {
      // Cleanup: remove script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Your AI Transformation Call | LevReg.Ai</title>
        <meta name="description" content="Schedule your free 30-minute AI transformation call. Choose a time that works for you." />
        <meta name="keywords" content="book call, schedule meeting, AI consultation, transformation call" />
        <link rel="canonical" href="https://levreg.ai/book-call" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/book-call" />
        <meta property="og:title" content="Book Your AI Transformation Call | LevReg.Ai" />
        <meta property="og:description" content="Schedule your free 30-minute AI transformation call. Choose a time that works for you." />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="Book Your AI Transformation Call | LevReg.Ai" />
        <meta name="twitter:description" content="Schedule your free 30-minute AI transformation call. Choose a time that works for you." />
      </Helmet>
      
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
        {/* Hero Section */}
        <section className="relative py-16 px-6">
          <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
          
          <div className="max-w-5xl mx-auto text-center relative z-10 mb-8">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} mb-6`}>
              <Calendar className={`w-4 h-4 ${theme.badgeIcon}`} />
              <span className={`text-sm ${theme.badgeText} font-medium`}>Schedule Your Call</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl font-bold mb-4 leading-tight ${theme.textPrimary}`}>
              Book Your Free
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
                AI Transformation Call
              </span>
            </h1>
            
            <p className={`text-lg md:text-xl ${theme.textSecondary} max-w-2xl mx-auto leading-relaxed`}>
              Choose a time that works best for you. We'll discuss your business, identify AI opportunities, and create a personalized roadmap.
            </p>
          </div>

          {/* Cal.com Embed Container */}
          <div className="max-w-4xl mx-auto relative z-10">
            <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-4 md:p-8 ${theme.shadow}`}>
              <div 
                id="my-cal-inline-30min" 
                style={{
                  width: '100%',
                  height: '700px',
                  overflow: 'auto'
                }}
                className={`${isDark ? '[&_*]:!text-white [&_button]:!bg-blue-600 [&_button]:!text-white' : ''}`}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <p className={`${theme.textTertiary} text-sm`}>
              30 minutes · Free · No obligation · Pure value
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default BookCall;
