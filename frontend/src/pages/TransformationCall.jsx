import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';

const TransformationCall = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const benefits = [
    {
      title: 'A Clear Picture of Your AI Opportunities',
      description: "We'll analyze your current operations and identify the 3-5 highest-leverage areas where AI creates real value—not generic advice, but specific to your business model."
    },
    {
      title: 'Your Personalized Implementation Roadmap',
      description: "You'll get a prioritized sequence of what to automate first for the fastest ROI. No more wondering 'where do I even start?'"
    },
    {
      title: 'Realistic Time and Cost Expectations',
      description: "We'll be honest about what AI can and can't solve for your specific situation, including rough timelines and investment ranges."
    },
    {
      title: 'Answers to Your Questions',
      description: "Bring your skepticism. Bring your concerns. We'll address them directly - no hype, no BS."
    }
  ];

  const frustrations = [
    "You're working harder just to maintain, not to grow",
    "Competitors seem to be moving faster with lower overhead",
    "Every AI 'expert' sounds like a marketer selling courses and not an operator who's built real businesses",
    "You've tried ChatGPT but can't figure out how to make it actually run your business",
    "The information overload is paralyzing and everyone has a different opinion on 'the right way'"
  ];

  const rightForYou = [
    "You run an established business doing $500K–$5M in revenue",
    "You've proven product-market fit and have real customers",
    "You're spending too much time on operations and not enough on growth",
    "You know AI could help but you're paralyzed by the noise",
    "You're ready to invest in systems, not just learn about them",
    "You value time freedom as much as revenue growth"
  ];

  const notForYou = [
    "You're still validating your business idea",
    "You're looking for 'get rich quick' AI tricks",
    "You want free consulting with no intention to invest",
    "You're an enterprise company with complex procurement processes",
    "You think AI is magic and don't want to understand the fundamentals"
  ];

  const differentiators = [
    {
      title: 'Systems over tools.',
      description: "We don't teach 'how to use ChatGPT.' We design systems where the AI layer is replaceable."
    },
    {
      title: 'Implementation over information.',
      description: "We install what works. We don't sell courses about what might work."
    },
    {
      title: 'Business-first thinking.',
      description: "AI is a means, not an end. We solve business problems—not 'AI problems.'"
    },
    {
      title: 'Skepticism as a feature.',
      description: "We filter for what actually works. Most AI content is marketing, we are here to build."
    }
  ];

  const testimonials = [
    {
      quote: "I went from 3 hours of daily newsletter production to 5 minutes. That's 14+ hours per week I got back. The system just runs.",
      author: "Newsletter Founder"
    },
    {
      quote: "We were producing 15 articles per day at 45 minutes each. Now it takes 2 minutes per article. 93% reduction in production time. We finally have time for strategy.",
      author: "Content Company CEO"
    },
    {
      quote: "The call was the most valuable 30 minutes I've spent on AI. No hype. No pitch. Just honest answers about what would actually work for my business.",
      author: "Agency Owner"
    }
  ];

  const faqs = [
    {
      question: 'Is this a sales call?',
      answer: "It's a strategy call. We'll discuss your business, identify opportunities, and recommend next steps. If working together makes sense, we'll discuss options. If not, you'll still leave with valuable insights. No pressure, no aggressive closing tactics."
    },
    {
      question: 'What do I need to prepare?',
      answer: "Just come ready to discuss your business honestly. From what's working, what's not, where you're spending too much time. The more context you share, the more specific our recommendations."
    },
    {
      question: "What if I'm not ready to implement yet?",
      answer: "That's fine. Many people use this call to get clarity before committing to anything. You'll walk away knowing exactly what AI could do for your business and what implementation would look like. It's valuable information whether you act now or later."
    },
    {
      question: "I'm not technical. Is this still for me?",
      answer: "Absolutely. Most of our clients aren't technical. They're business owners who understand their business deeply but don't want to learn to code. That's exactly who we work with. We handle the technical implementation; you handle the business decisions."
    },
    {
      question: 'How is this different from all the other AI consultants?',
      answer: "We are not AI experts who learned business. We are business owner who recognized AI as a leverage opportunity. 17 years of building real businesses means we understand your problems because we've lived them. We don't sell courses or hype. We install systems that work."
    }
  ];


  return (
    <>
      <Helmet>
        <title>Book Your AI Transformation Call | LevReg.Ai</title>
        <meta name="description" content="Identify the 3-5 AI systems that will transform your business in 90 days. Free 30-minute strategy call with a 17-year business operator." />
        <meta name="keywords" content="AI transformation call, AI discovery session, AI consultation, business AI strategy" />
        <link rel="canonical" href="https://levreg.ai/transformation-call" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/transformation-call" />
        <meta property="og:title" content="Book Your AI Transformation Call | LevReg.Ai" />
        <meta property="og:description" content="Identify the 3-5 AI systems that will transform your business in 90 days." />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="Book Your AI Transformation Call | LevReg.Ai" />
        <meta name="twitter:description" content="Identify the 3-5 AI systems that will transform your business in 90 days." />
      </Helmet>
      
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
        {/* Hero Section */}
        <section className="relative py-24 px-6">
          <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 -left-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
            <div className={`absolute bottom-1/4 -right-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} mb-8`}>
              <Calendar className={`w-4 h-4 ${theme.badgeIcon}`} />
              <span className={`text-sm ${theme.badgeText} font-medium`}>Free AI Transformation Call</span>
            </div>
            
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              Identify the 3-5 AI Systems That Will{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
                Transform Your Business
              </span>{' '}
              in the Next 30 Days
            </h1>
            
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-4xl mx-auto leading-relaxed`}>
              Schedule a free 30-minute AI Transformation Call and get a personalized roadmap for automating your marketing and operations - designed by a 17-year business operator, not a Silicon Valley guru.
            </p>
            
            <Link to="/book-call">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300 mb-4"
              >
                Schedule Your Free AI Transformation Call
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <p className={`${theme.textTertiary} text-sm`}>
              Limited spots available. No sales pitch. Just honest answers.
            </p>
          </div>
        </section>

        {/* What You'll Get Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${theme.textPrimary}`}>
              In 30 Minutes, You&apos;ll Walk Away With:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 ${theme.shadow}`}
                >
                  <CheckCircle className={`w-6 h-6 ${theme.textAccent} flex-shrink-0 mt-1`} />
                  <div>
                    <h3 className={`text-xl font-bold mb-3 ${theme.textPrimary}`}>{benefit.title}</h3>
                    <p className={`${theme.textSecondary} leading-relaxed`}>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Agitation Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${theme.textPrimary}`}>
              You Know AI Matters.
              <br />
              <span className={theme.textAccent}>But You&apos;re Stuck.</span>
            </h2>
            
            <div className={`${theme.textSecondary} text-lg leading-relaxed space-y-6`}>
              <p>
                You&apos;ve built a successful business. You&apos;ve proven product-market fit. You&apos;ve managed real revenue and solved real problems.
              </p>
              
              <p className={theme.textPrimary}>
                But lately, something&apos;s shifted:
              </p>
              
              <ul className="space-y-3 ml-6">
                {frustrations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${theme.textAccent} mt-1.5`}>•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className={`text-xl font-semibold ${theme.textPrimary} pt-4`}>
                You don&apos;t need more information. You need someone who&apos;s actually built businesses to show you what works.
              </p>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/book-call">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
                >
                  Schedule Your Free AI Transformation Call
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
              This Call Is For <span className={theme.textAccent}>Established Business Owners</span>
              <br />
              Ready to Build Leverage
            </h2>
            <p className={`text-xl ${theme.textTertiary} text-center mb-16`}>
              Make sure this is the right fit
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Right for you */}
              <div className={`p-8 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} ${theme.shadow}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                  This is right for you if:
                </h3>
                <ul className="space-y-4">
                  {rightForYou.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0 mt-0.5`} />
                      <span className={theme.textSecondary}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Not for you */}
              <div className={`p-8 rounded-2xl ${theme.cardBg} border ${theme.cardBorder} ${theme.shadow}`}>
                <h3 className={`text-2xl font-bold mb-6 ${isDark ? 'text-red-400' : 'text-red-600'}`}>
                  This is NOT for you if:
                </h3>
                <ul className="space-y-4">
                  {notForYou.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} flex-shrink-0 mt-0.5`} />
                      <span className={theme.textSecondary}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Credibility Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-center ${theme.textPrimary}`}>
              Why We Are Different From
              <br />
              <span className={theme.textAccent}>the AI Gurus</span>
            </h2>
            
            <div className={`${theme.textSecondary} text-lg leading-relaxed space-y-6 mb-12`}>
              <p>
                We&apos;re not AI experts who learned business. We&apos;re business owners who recognized that AI is the biggest leverage opportunity since the internet.
              </p>
              
              <p>
                After 17 years building, scaling, and selling marketing businesses, managing millions in ad spend and watching the industry change under our feet multiple times, we&apos;ve learned to recognize real shifts from hype cycles.
              </p>
              
              <p>
                AI is a real shift. But most of what you&apos;re seeing online is noise designed to sell courses, not build businesses. It&apos;s why we founded LevRegAi.
              </p>
              
              <p className={`text-xl font-semibold ${theme.textPrimary}`}>
                Our approach is different:
              </p>
            </div>
            
            <div className="space-y-6">
              {differentiators.map((item, idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.shadow}`}
                >
                  <h3 className={`text-xl font-bold mb-2 ${theme.textPrimary}`}>{item.title}</h3>
                  <p className={`${theme.textSecondary} leading-relaxed`}>{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/book-call">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
                >
                  Schedule Your Free AI Transformation Call
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 text-center ${theme.textPrimary}`}>
              What <span className={theme.textAccent}>Clients Are Saying:</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card 
                  key={idx}
                  className={`${theme.cardBg} ${theme.cardBorder} transition-all duration-300 ${theme.shadow}`}
                >
                  <CardContent className="p-8">
                    <div className={`text-6xl ${theme.textAccent} mb-4 leading-none`}>"</div>
                    <p className={`${theme.textSecondary} mb-6 leading-relaxed italic`}>
                      {testimonial.quote}
                    </p>
                    <p className={`${theme.textPrimary} font-semibold`}>
                      ~ {testimonial.author}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.textPrimary}`}>
              Why <span className={theme.textAccent}>Schedule Now?</span>
            </h2>
            
            <div className={`${theme.textSecondary} text-lg leading-relaxed space-y-6`}>
              <p>
                We put a lot of energy into these Transformation Audits. That means limited availability typically 8-10 spots per month.
              </p>
              
              <p>
                More importantly: the businesses implementing AI infrastructure right now are building leverage their competitors won&apos;t be able to match. In 12-18 months, AI won&apos;t be a competitive advantage - it&apos;ll be table stakes.
              </p>
              
              <p>
                Every week you wait, businesses in your market are automating what you&apos;re still doing manually.
              </p>
              
              <p className={`text-xl font-semibold ${theme.textPrimary} pt-4`}>
                The question isn&apos;t &apos;should I explore AI?&apos; It&apos;s &apos;how much longer can I afford not to?&apos;
              </p>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-8 ${theme.textPrimary}`}>
              Ready to See What AI Can
              <br />
              <span className={theme.textAccent}>Actually Do for Your Business?</span>
            </h2>
            
            <Link to="/book-call">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
              >
                Schedule Your Free AI Transformation Call
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <p className={`${theme.textTertiary}`}>
              30 minutes. No pitch. Just honest answers.
              <br />
              Limited spots available each month.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
              Frequently Asked <span className={theme.textAccent}>Questions</span>
            </h2>
            <p className={`text-xl ${theme.textTertiary} text-center mb-16`}>
              Everything you need to know about the transformation call
            </p>
            
            <div className="space-y-6">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className={`p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 ${theme.shadow}`}
                >
                  <h3 className={`text-xl font-bold mb-3 ${theme.textPrimary}`}>{faq.question}</h3>
                  <p className={`${theme.textSecondary} leading-relaxed`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-12 ${theme.textPrimary}`}>
              Your Competition Isn&apos;t Waiting.
              <br />
              <span className={theme.textAccent}>Why Should You?</span>
            </h2>
            
            <Link to="/book-call">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
              >
                Schedule Your Free AI Transformation Call
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default TransformationCall;
