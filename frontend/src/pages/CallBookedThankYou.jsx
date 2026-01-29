import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';

const CallBookedThankYou = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const preparationSteps = [
    {
      title: 'Think About Your Biggest Time Drains',
      description: "What tasks eat up your time every week? Where are you doing repetitive work that doesn't require your expertise? These are usually the highest-leverage automation opportunities."
    },
    {
      title: 'Know Your Numbers (Roughly)',
      description: "What's your approximate revenue? How many leads do you get per month? How long does it take to respond to them? Having these rough numbers helps us identify where AI creates the biggest ROI."
    },
    {
      title: 'Bring Your Skepticism',
      description: "You've probably seen a lot of AI hype. Good. Bring your tough questions. The more honest our conversation, the more valuable your roadmap will be."
    },
    {
      title: "Be Ready to Share What's Working (and What's Not)",
      description: "The best recommendations come from understanding your whole picture—not just where you're struggling, but what's already working well."
    }
  ];

  const caseExamples = [
    'Newsletter Production: 3 hours/day → 5 minutes/day',
    'Content at Scale: 45 min/article → 2 min/article (93% reduction)',
    'Legal Documentation: Attorney-dependent → automated with compliance',
    'Team Operations: Constant check-ins → daily automated briefings'
  ];

  return (
    <>
      <Helmet>
        <title>Thank You | Your Call is Booked | LevReg.Ai</title>
        <meta name="description" content="Your AI transformation call is confirmed. Here's how to prepare for maximum value." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://levreg.ai/thank-you" />
      </Helmet>
      
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
        {/* Hero Section */}
        <section className="relative py-24 px-6">
          <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 -left-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
            <div className={`absolute bottom-1/4 -right-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-600 mb-8 mx-auto`}>
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              You&apos;re Confirmed.
              <br />
              <span className={theme.textAccent}>Here&apos;s What Happens Next.</span>
            </h1>
            
            <div className={`${theme.textSecondary} text-lg md:text-xl max-w-3xl mx-auto leading-relaxed space-y-4`}>
              <p>
                Your AI Transformation Call is scheduled. You should receive a calendar invitation in your inbox within the next few minutes.
              </p>
              <p>
                If you don&apos;t see it, check your spam folder or reach out to{' '}
                <a 
                  href="mailto:team@levreg.ai" 
                  className={`${theme.textAccent} hover:underline font-medium`}
                >
                  team@levreg.ai
                </a>
                .
              </p>
            </div>
          </div>
        </section>

        {/* Preparation Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
              How to Get the Most
              <br />
              <span className={theme.textAccent}>From Your Call:</span>
            </h2>
            <p className={`text-xl ${theme.textTertiary} text-center mb-16`}>
              A little preparation goes a long way
            </p>
            
            <div className="space-y-8">
              {preparationSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className={`relative p-8 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} transition-all duration-300 ${theme.shadow}`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg`}>
                      {idx + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold mb-3 ${theme.textPrimary}`}>{step.title}</h3>
                      <p className={`${theme.textSecondary} leading-relaxed text-lg`}>{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* While You Wait Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
              While You&apos;re Here:
              <br />
              <span className={theme.textAccent}>See What&apos;s Possible</span>
            </h2>
            <p className={`text-xl ${theme.textSecondary} text-center mb-12`}>
              Want to see real examples of what AI systems can do for established businesses?
            </p>
            
            <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-8 md:p-12 ${theme.shadow} mb-12`}>
              <p className={`${theme.textSecondary} text-lg mb-8`}>
                Browse our case studies to see how other business owners have automated their operations:
              </p>
              
              <ul className="space-y-4 mb-8">
                {caseExamples.map((example, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${theme.textAccent} mt-1.5`}>•</span>
                    <span className={`${theme.textPrimary} text-lg font-medium`}>{example}</span>
                  </li>
                ))}
              </ul>
              
              <Link to="/case-studies">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group w-full md:w-auto"
                >
                  Read the Full Case Studies
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${theme.textPrimary}`}>
              Questions <span className={theme.textAccent}>Before Your Call?</span>
            </h2>
            
            <div className={`${theme.cardBg} border ${theme.cardBorder} rounded-2xl p-8 md:p-12 text-center ${theme.shadow}`}>
              <p className={`${theme.textSecondary} text-lg mb-6 leading-relaxed`}>
                If anything comes up or you need to reschedule, just reply to your calendar invitation or email:
              </p>
              
              <a 
                href="mailto:team@levreg.ai" 
                className={`inline-block text-2xl font-bold ${theme.textAccent} hover:underline mb-8`}
              >
                team@levreg.ai
              </a>
              
              <div className={`pt-8 border-t ${theme.border}`}>
                <div className={`inline-flex items-start gap-3 ${isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border rounded-xl p-6 text-left max-w-2xl`}>
                  <BookOpen className={`w-6 h-6 ${theme.textAccent} flex-shrink-0 mt-1`} />
                  <div>
                    <p className={`${theme.textPrimary} font-semibold mb-2`}>Pro Tip:</p>
                    <p className={`${theme.textSecondary}`}>
                      Add the call to your calendar now and set a reminder 15 minutes before. This ensures you have time to prepare and we can dive right in.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Message Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textPrimary}`}>
              We&apos;re Excited to
              <br />
              <span className={theme.textAccent}>Connect With You</span>
            </h2>
            
            <p className={`text-xl ${theme.textSecondary} leading-relaxed`}>
              This is the start of something transformative. See you soon!
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CallBookedThankYou;
