import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Award, TrendingUp, CheckCircle, Target, Lightbulb, Zap, Clock, FileText, Edit3, Scale, Video, Users, Calendar, Sparkles, Phone, Database } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';
import { caseStudies, pillars, pillarColors } from '../data/caseStudiesData';

const iconMap = {
  FileText: FileText,
  Edit3: Edit3,
  Scale: Scale,
  Video: Video,
  Users: Users,
  Calendar: Calendar,
  Sparkles: Sparkles,
  Phone: Phone,
  Database: Database,
  Zap: Zap
};

const CaseStudies = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const aggregateStats = [
    { value: '10', label: 'Success Stories' },
    { value: '93-95%', label: 'Time Reduction' },
    { value: '25%+', label: 'Revenue Increase' },
    { value: '24/7', label: 'System Availability' }
  ];

  const philosophyPillars = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Implementation Over Information',
      description: 'Information is free. Implementation is valuable. Installation is rare.',
      color: pillarColors[pillars.IMPLEMENTATION]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Systems Over Tools',
      description: "If your AI strategy is 'use this tool,' you don't have a strategy—you have a dependency.",
      color: pillarColors[pillars.SYSTEMS]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automation Before Delegation',
      description: "If you're hiring for tasks that don't require judgment, you're building a job, not a business.",
      color: pillarColors[pillars.AUTOMATION]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Leverage Over Revenue',
      description: 'Revenue is what you make. Leverage is what you keep—in money and time.',
      color: pillarColors[pillars.LEVERAGE]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Time Freedom',
      description: "If your business can't run without you, you don't own a business—you ARE the business.",
      color: pillarColors[pillars.TIME_FREEDOM]
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Implementation Case Studies | Real Results | LevReg.Ai</title>
        <meta name="description" content="See how businesses transformed with AI. From 3-hour tasks to 5 minutes, 15 daily articles automated, and more. Real implementations, real results." />
        <meta name="keywords" content="AI case studies, AI implementation examples, business automation results, AI transformation success stories" />
        <link rel="canonical" href="https://levreg.ai/case-studies" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/case-studies" />
        <meta property="og:title" content="AI Implementation Case Studies | Real Results | LevReg.Ai" />
        <meta property="og:description" content="See how businesses transformed with AI. From 3-hour tasks to 5 minutes, 15 daily articles automated, and more." />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="AI Implementation Case Studies | Real Results | LevReg.Ai" />
        <meta name="twitter:description" content="See how businesses transformed with AI. Real implementations, real results." />
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
              <Award className={`w-4 h-4 ${theme.badgeIcon}`} />
              <span className={`text-sm ${theme.badgeText} font-medium`}>Real Results</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              Real Businesses. Real Systems.
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
                Real Results.
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
              See how businesses like yours transformed their operations with AI. From 3-hour tasks to 5 minutes, manual processes to automated systems, and overwhelmed teams to empowered operations.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6">
              {aggregateStats.map((stat, idx) => (
                <div 
                  key={idx}
                  className={`text-center p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group`}
                >
                  <div className={`text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'} mb-3`}>
                    {stat.value}
                  </div>
                  <div className={`${theme.textTertiary} text-sm leading-tight`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className={`py-16 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => {
                const IconComponent = iconMap[study.icon];
                const pillarColor = pillarColors[study.pillar];
                
                return (
                  <Link key={study.id} to={`/case-studies/${study.slug}`}>
                    <Card 
                      className={`${theme.cardBg} ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group ${theme.shadow} h-full hover:scale-[1.02]`}
                    >
                      <CardContent className="p-8">
                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillarColor} flex items-center justify-center mb-6 text-white shadow-lg`}>
                          {IconComponent && <IconComponent className="w-8 h-8" />}
                        </div>
                        
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDark ? 'bg-blue-950/30 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                          {study.industry}
                        </div>
                        
                        <h3 className={`text-2xl font-bold mb-3 ${theme.textPrimary} group-hover:text-blue-500 transition-colors`}>
                          {study.title}
                        </h3>
                        
                        <p className={`text-lg font-semibold ${theme.textAccent} mb-4`}>
                          {study.subtitle}
                        </p>
                        
                        <p className={`${theme.textTertiary} leading-relaxed mb-6 line-clamp-3`}>
                          {study.problem.split('\n')[0]}
                        </p>
                        
                        <div className={`flex items-center gap-2 ${theme.textAccent} font-medium group-hover:gap-3 transition-all`}>
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
              Our Core <span className={theme.textAccent}>Principles</span>
            </h2>
            <p className={`text-xl ${theme.textTertiary} text-center mb-16 max-w-3xl mx-auto`}>
              Every case study demonstrates one of our fundamental principles for AI transformation
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {philosophyPillars.map((pillar, idx) => (
                <Card 
                  key={idx} 
                  className={`${theme.cardBg} ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group ${theme.shadow} ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                >
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                      {pillar.icon}
                    </div>
                    <h3 className={`text-xl font-bold mb-3 ${theme.textPrimary}`}>{pillar.title}</h3>
                    <p className={`${theme.textTertiary} leading-relaxed italic`}>"{pillar.description}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${theme.textPrimary}`}>
              Your Business
              <span className={theme.textAccent}> Could Be Next</span>
            </h2>
            
            <p className={`text-xl ${theme.textSecondary} mb-12 max-w-2xl mx-auto leading-relaxed`}>
              These aren't exceptional cases. They're what happens when you install AI systems built specifically for your business. Want similar results?
            </p>
            
            <a href="https://we.levreg.ai/transform" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
              >
                Start Your Ai Transformation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            
            <p className={`${theme.textTertiary} mt-6`}>
              Free discovery session. No pressure. Just clarity on what AI can do for your business.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
