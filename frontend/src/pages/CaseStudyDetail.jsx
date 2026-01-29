import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle, Award, TrendingUp, ChevronRight, Home, FileText, Edit3, Scale, Video, Users, Calendar, Sparkles, Phone, Database, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';
import { getCaseStudyBySlug, getRelatedCaseStudies, pillarColors } from '../data/caseStudiesData';

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

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  
  const caseStudy = getCaseStudyBySlug(slug);
  const relatedStudies = getRelatedCaseStudies(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <Link to="/case-studies">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Case Studies
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[caseStudy.icon];
  const pillarColor = pillarColors[caseStudy.pillar];
  const metricsArray = Object.entries(caseStudy.metrics);

  return (
    <>
      <Helmet>
        <title>{`${caseStudy.title} - ${caseStudy.subtitle} | LevReg.Ai Case Study`}</title>
        <meta name="description" content={`${caseStudy.subtitle}. See how we helped transform this business with AI implementation. ${caseStudy.problem.substring(0, 100)}...`} />
        <meta name="keywords" content={`AI case study, ${caseStudy.industry}, ${caseStudy.title}, business automation, AI transformation`} />
        <link rel="canonical" href={`https://levreg.ai/case-studies/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://levreg.ai/case-studies/${slug}`} />
        <meta property="og:title" content={`${caseStudy.title} - ${caseStudy.subtitle}`} />
        <meta property="og:description" content={caseStudy.subtitle} />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content={`${caseStudy.title} - ${caseStudy.subtitle}`} />
        <meta name="twitter:description" content={caseStudy.subtitle} />
      </Helmet>
      
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
        {/* Breadcrumb Navigation */}
        <section className={`py-6 px-6 ${theme.bgSecondary} border-b ${theme.border}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className={`${theme.textTertiary} hover:${theme.textAccent} transition-colors`}>
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className={`w-4 h-4 ${theme.textTertiary}`} />
              <Link to="/case-studies" className={`${theme.textTertiary} hover:${theme.textAccent} transition-colors`}>
                Case Studies
              </Link>
              <ChevronRight className={`w-4 h-4 ${theme.textTertiary}`} />
              <span className={theme.textPrimary}>{caseStudy.title}</span>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-1/4 -left-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
            <div className={`absolute bottom-1/4 -right-32 w-96 h-96 ${theme.gradientBlur} rounded-full blur-3xl`} />
          </div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${pillarColor} flex items-center justify-center text-white shadow-lg`}>
                {IconComponent && <IconComponent className="w-10 h-10" />}
              </div>
              <div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-2 ${isDark ? 'bg-blue-950/30 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                  {caseStudy.industry}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ml-2 ${isDark ? 'bg-purple-950/30 text-purple-300 border border-purple-500/20' : 'bg-purple-50 text-purple-700 border border-purple-200'}`}>
                  {caseStudy.pillar}
                </div>
              </div>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              {caseStudy.title}
            </h1>
            
            <p className={`text-2xl md:text-3xl font-semibold ${theme.textAccent} mb-12`}>
              {caseStudy.subtitle}
            </p>
            
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metricsArray.map(([key, value], idx) => (
                <div 
                  key={idx}
                  className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder} text-center`}
                >
                  <div className={`text-2xl font-bold ${theme.textAccent} mb-2`}>
                    {value}
                  </div>
                  <div className={`text-xs ${theme.textTertiary} uppercase tracking-wide`}>
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className={`py-16 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-red-950/30' : 'bg-red-50'} flex items-center justify-center`}>
                <Award className={`w-6 h-6 ${isDark ? 'text-red-400' : 'text-red-600'}`} />
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.textPrimary}`}>The Problem</h2>
            </div>
            
            <div className={`space-y-4 text-lg ${theme.textSecondary} leading-relaxed`}>
              {caseStudy.problem.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* The System Section */}
        <section className={`py-16 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-blue-950/30' : 'bg-blue-50'} flex items-center justify-center`}>
                <TrendingUp className={`w-6 h-6 ${theme.textAccent}`} />
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.textPrimary}`}>The System We Installed</h2>
            </div>
            
            <div className="space-y-4">
              {caseStudy.system.map((item, idx) => (
                <div 
                  key={idx}
                  className={`flex items-start gap-4 p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300`}
                >
                  <CheckCircle className={`w-6 h-6 ${theme.textAccent} flex-shrink-0 mt-1`} />
                  <p className={`${theme.textSecondary} leading-relaxed text-lg`}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Result Section */}
        <section className={`py-16 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-green-950/30' : 'bg-green-50'} flex items-center justify-center`}>
                <CheckCircle className={`w-6 h-6 ${isDark ? 'text-green-400' : 'text-green-600'}`} />
              </div>
              <h2 className={`text-3xl md:text-4xl font-bold ${theme.textPrimary}`}>The Result</h2>
            </div>
            
            <div className={`space-y-4 text-lg ${theme.textSecondary} leading-relaxed`}>
              {caseStudy.result.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className={idx === 0 ? `text-2xl font-semibold ${theme.textPrimary}` : ''}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className={`py-16 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto">
            <Card className={`${theme.cardBg} border-2 ${isDark ? 'border-blue-500/30' : 'border-blue-300'}`}>
              <CardContent className="p-12">
                <div className={`text-center mb-8`}>
                  <div className={`inline-block px-4 py-2 rounded-full ${isDark ? 'bg-blue-950/30 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border mb-6`}>
                    <span className={`text-sm ${theme.textAccent} font-semibold uppercase tracking-wide`}>
                      Core Principle
                    </span>
                  </div>
                  <h2 className={`text-3xl md:text-4xl font-bold ${theme.textPrimary} mb-6`}>
                    {caseStudy.pillar}
                  </h2>
                  <p className={`text-2xl ${theme.textAccent} font-semibold italic mb-8`}>
                    "{caseStudy.quote}"
                  </p>
                </div>
                
                <div className={`text-lg ${theme.textSecondary} leading-relaxed space-y-4`}>
                  {caseStudy.principle.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Case Studies */}
        {relatedStudies.length > 0 && (
          <section className={`py-16 px-6 ${theme.bgSecondary}`}>
            <div className="max-w-7xl mx-auto">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme.textPrimary}`}>
                Related <span className={theme.textAccent}>Case Studies</span>
              </h2>
              <p className={`text-lg ${theme.textTertiary} mb-12`}>
                More examples of successful AI implementations
              </p>
              
              <div className="grid md:grid-cols-3 gap-8">
                {relatedStudies.map((study) => {
                  const RelatedIcon = iconMap[study.icon];
                  const relatedPillarColor = pillarColors[study.pillar];
                  
                  return (
                    <Link key={study.id} to={`/case-studies/${study.slug}`}>
                      <Card 
                        className={`${theme.cardBg} ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group ${theme.shadow} h-full hover:scale-[1.02]`}
                      >
                        <CardContent className="p-6">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${relatedPillarColor} flex items-center justify-center mb-4 text-white shadow-lg`}>
                            {RelatedIcon && <RelatedIcon className="w-7 h-7" />}
                          </div>
                          
                          <h3 className={`text-xl font-bold mb-2 ${theme.textPrimary} group-hover:text-blue-500 transition-colors`}>
                            {study.title}
                          </h3>
                          
                          <p className={`text-sm font-semibold ${theme.textAccent} mb-3`}>
                            {study.subtitle}
                          </p>
                          
                          <div className={`flex items-center gap-2 ${theme.textAccent} text-sm font-medium group-hover:gap-3 transition-all`}>
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
        )}

        {/* CTA Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textPrimary}`}>
              Want Similar Results
              <span className={theme.textAccent}> for Your Business?</span>
            </h2>
            
            <p className={`text-xl ${theme.textSecondary} mb-12 max-w-2xl mx-auto leading-relaxed`}>
              This isn't a unique case. It's what happens when you install AI systems built specifically for your workflows. Let's talk about what we can build for you.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://we.levreg.ai/transform" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
                >
                  Start Your Ai Transformation
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <Link to="/case-studies">
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`${isDark ? 'border-blue-500/30 hover:border-blue-500 hover:bg-blue-950/30 hover:text-white' : 'border-blue-300 hover:border-blue-500 hover:bg-blue-50'} ${theme.textPrimary} px-10 py-7 text-xl transition-all duration-300`}
                >
                  <ArrowLeft className="mr-2 w-6 h-6" />
                  View All Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudyDetail;
