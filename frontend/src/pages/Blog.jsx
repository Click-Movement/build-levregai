import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, BookOpen, Clock, Calendar, User } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';
import { blogArticles } from '../data/blogData';

const Blog = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <>
      <Helmet>
        <title>AI Strategy & Business Insights | LevReg.Ai Blog</title>
        <meta name="description" content="Practical insights on AI implementation, team management, and business operations. Learn how to leverage AI agents to improve your business." />
        <meta name="keywords" content="AI strategy, business automation, AI agents, team management, business insights" />
        <link rel="canonical" href="https://levreg.ai/blog" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/blog" />
        <meta property="og:title" content="AI Strategy & Business Insights | LevReg.Ai Blog" />
        <meta property="og:description" content="Practical insights on AI implementation, team management, and business operations." />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="AI Strategy & Business Insights | LevReg.Ai Blog" />
        <meta name="twitter:description" content="Practical insights on AI implementation, team management, and business operations." />
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
              <BookOpen className={`w-4 h-4 ${theme.badgeIcon}`} />
              <span className={`text-sm ${theme.badgeText} font-medium`}>Insights & Strategy</span>
            </div>
            
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              AI Insights for
              <br />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
                Smart Business Owners
              </span>
            </h1>
            
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
              Practical insights on AI implementation, team management, and building systems that scale without burning out your best people.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className={`py-16 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-7xl mx-auto">
            {blogArticles.length === 0 ? (
              <div className="text-center py-20">
                <p className={`text-xl ${theme.textTertiary}`}>Articles coming soon...</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogArticles.map((article) => (
                  <Link key={article.id} to={`/blog/${article.slug}`}>
                    <Card 
                      className={`${theme.cardBg} ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group ${theme.shadow} h-full hover:scale-[1.02]`}
                    >
                      <CardContent className="p-8">
                        {/* Category Badge */}
                        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${isDark ? 'bg-blue-950/30 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
                          {article.category}
                        </div>
                        
                        {/* Title */}
                        <h2 className={`text-2xl font-bold mb-3 ${theme.textPrimary} group-hover:text-blue-500 transition-colors line-clamp-3`}>
                          {article.title}
                        </h2>
                        
                        {/* Subtitle */}
                        <p className={`text-lg font-semibold ${theme.textAccent} mb-4 line-clamp-2`}>
                          {article.subtitle}
                        </p>
                        
                        {/* Excerpt */}
                        <p className={`${theme.textTertiary} leading-relaxed mb-6 line-clamp-3`}>
                          {article.excerpt}
                        </p>
                        
                        {/* Meta Info */}
                        <div className={`flex items-center gap-4 ${theme.textTertiary} text-sm mb-6 border-t ${theme.border} pt-4`}>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readingTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{formatDate(article.publishDate)}</span>
                          </div>
                        </div>
                        
                        {/* Read More Link */}
                        <div className={`flex items-center gap-2 ${theme.textAccent} font-medium group-hover:gap-3 transition-all`}>
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 ${theme.textPrimary}`}>
              Ready to Apply
              <span className={theme.textAccent}> These Insights?</span>
            </h2>
            
            <p className={`text-xl ${theme.textSecondary} mb-12 max-w-2xl mx-auto leading-relaxed`}>
              Reading about AI is one thing. Installing systems that transform your business is another. Let's build your implementation roadmap.
            </p>
            
            <Link to="/transformation-call">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
              >
                Start Your AI Transformation
                <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            
            <p className={`${theme.textTertiary} mt-6`}>
              Free discovery session. No pressure. Just clarity on what AI can do for your business.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;
