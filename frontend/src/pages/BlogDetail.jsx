import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle, X, Home, ChevronRight, Clock, User, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';
import { getBlogArticleBySlug, getRelatedArticles } from '../data/blogData';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  
  const article = getBlogArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
          <Link to="/blog">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderSection = (section, index) => {
    // Regular text section
    if (!section.type) {
      return (
        <div key={index} className={`space-y-4 text-lg ${theme.textSecondary} leading-relaxed`}>
          {section.heading && (
            <h2 id={section.id} className={`text-3xl md:text-4xl font-bold ${theme.textPrimary} mb-6 mt-12`}>
              {section.heading}
            </h2>
          )}
          {section.content && section.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          {section.list && (
            <ul className="space-y-2 ml-6 mt-4">
              {section.list.map((item, idx) => (
                <li key={idx} className="list-disc">{item}</li>
              ))}
            </ul>
          )}
          {section.conclusion && (
            <p className="mt-4">{section.conclusion}</p>
          )}
          {section.assumptionsList && (
            <ul className="space-y-2 ml-6">
              {section.assumptionsList.map((item, idx) => (
                <li key={idx} className="list-disc">{item}</li>
              ))}
            </ul>
          )}
          {section.actualContent && (
            <p className="mt-4">{section.actualContent}</p>
          )}
          {section.warningSignsList && (
            <ul className="space-y-2 ml-6">
              {section.warningSignsList.map((item, idx) => (
                <li key={idx} className="list-disc">{item}</li>
              ))}
            </ul>
          )}
          {section.action && (
            <p className={`text-2xl font-bold ${theme.textPrimary} mt-6`}>{section.action}</p>
          )}
          {section.insight && (
            <p className="mt-4">{section.insight}</p>
          )}
          {section.advantagesList && (
            <ul className="space-y-2 ml-6">
              {section.advantagesList.map((item, idx) => (
                <li key={idx} className="list-disc">{item}</li>
              ))}
            </ul>
          )}
          {section.warning && (
            <p className="mt-6">{section.warning}</p>
          )}
          {section.before && (
            <div className="mt-6 space-y-6">
              <div>
                <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-3`}>Before implementation:</h4>
                <ul className="space-y-2">
                  {section.before.map((item, idx) => (
                    <li key={idx} className={`${theme.textSecondary} italic`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-3`}>After implementation:</h4>
                <ul className="space-y-2">
                  {section.after.map((item, idx) => (
                    <li key={idx} className={`${theme.textSecondary} italic`}>{item}</li>
                  ))}
                </ul>
              </div>
              {section.insight && (
                <p className="mt-6">{section.insight}</p>
              )}
              {section.quote && (
                <p className={`${theme.textAccent} font-semibold mt-4`}>{section.quote}</p>
              )}
              {section.result && (
                <p className="mt-4">{section.result}</p>
              )}
            </div>
          )}
          {section.moraleROI && (
            <div className="mt-6 space-y-6">
              <div>
                <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-3`}>The morale ROI:</h4>
                <ul className="space-y-2 ml-6">
                  {section.moraleROI.map((item, idx) => (
                    <li key={idx} className="list-disc">{item}</li>
                  ))}
                </ul>
              </div>
              {section.scaleROI && (
                <div>
                  <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-3`}>The scale ROI:</h4>
                  <ul className="space-y-2 ml-6">
                    {section.scaleROI.map((item, idx) => (
                      <li key={idx} className="list-disc">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {section.clientQuote && (
                <p className={`${theme.textAccent} italic mt-6`}>{section.clientQuote}</p>
              )}
            </div>
          )}
          {section.badApproach && (
            <div className="mt-6 space-y-4">
              <div className={`p-4 rounded-lg ${isDark ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50 border-red-200'} border`}>
                <p className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-700'} mb-2`}>Bad approach:</p>
                <p className={theme.textSecondary}>{section.badApproach}</p>
              </div>
              <div className={`p-4 rounded-lg ${isDark ? 'bg-green-950/20 border-green-500/20' : 'bg-green-50 border-green-200'} border`}>
                <p className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-700'} mb-2`}>Good approach:</p>
                <p className={theme.textSecondary}>{section.goodApproach}</p>
              </div>
              {section.principle && (
                <p className={`${theme.textAccent} font-semibold mt-4`}>{section.principle}</p>
              )}
              {section.examples && (
                <p className="mt-4">{section.examples}</p>
              )}
              {section.examplesList && (
                <ul className="space-y-2 ml-6">
                  {section.examplesList.map((item, idx) => (
                    <li key={idx} className="list-disc">{item}</li>
                  ))}
                </ul>
              )}
              {section.conclusion && (
                <p className="mt-4">{section.conclusion}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    // Bulleted list
    if (section.type === 'list') {
      return (
        <ul key={index} className="space-y-3 ml-6 my-6">
          {section.items.map((item, idx) => (
            <li key={idx} className={`list-disc ${theme.textSecondary} text-lg`}>{item}</li>
          ))}
        </ul>
      );
    }

    // Comparison (Before/After)
    if (section.type === 'comparison') {
      return (
        <div key={index} className="my-12">
          <div className="grid md:grid-cols-2 gap-6">
            <div className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>{section.before.title}</h4>
              <ul className="space-y-3">
                {section.before.items.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${theme.textSecondary}`}>
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`p-6 rounded-xl ${isDark ? 'bg-blue-950/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>{section.after.title}</h4>
              <ul className="space-y-3">
                {section.after.items.map((item, idx) => (
                  <li key={idx} className={`flex items-start gap-2 ${theme.textSecondary}`}>
                    <CheckCircle className={`w-5 h-5 ${theme.textAccent} flex-shrink-0 mt-0.5`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      );
    }

    // Quote/Callout
    if (section.type === 'quote') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl ${isDark ? 'bg-blue-950/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border-l-4 ${isDark ? 'border-l-blue-400' : 'border-l-blue-600'}`}>
          <p className={`text-xl ${theme.textAccent} font-semibold italic mb-4`}>
            "{section.content}"
          </p>
          {section.context && (
            <p className={`${theme.textSecondary} leading-relaxed`}>{section.context}</p>
          )}
        </div>
      );
    }

    // Callout Box
    if (section.type === 'callout') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl bg-blue-600 text-white`}>
          <p className="text-xl font-bold mb-2" dangerouslySetInnerHTML={{ __html: section.content }} />
          {section.subtext && (
            <p className="text-blue-100">{section.subtext}</p>
          )}
        </div>
      );
    }

    // Questions List
    if (section.type === 'questions') {
      return (
        <div key={index} className="my-12 space-y-6">
          {section.questions.map((q, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <div className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-lg ${isDark ? 'bg-blue-950/30 text-blue-400' : 'bg-blue-100 text-blue-700'} flex items-center justify-center font-bold flex-shrink-0`}>
                  {q.number}
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>{q.question}</h4>
                  <p className={`${theme.textSecondary} leading-relaxed`}>{q.answer}</p>
                </div>
              </div>
            </div>
          ))}
          {section.conclusion && (
            <div className={`mt-6 text-lg ${theme.textSecondary} leading-relaxed space-y-4`}>
              {section.conclusion.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      );
    }

    // Example (Wrong/Right comparison)
    if (section.type === 'example') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
          <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-6`}>{section.title}</h3>
          
          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${isDark ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50 border-red-200'} border`}>
              <div className="flex items-start gap-3 mb-2">
                <X className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} flex-shrink-0 mt-0.5`} />
                <p className={`font-semibold ${isDark ? 'text-red-400' : 'text-red-700'}`}>The answer approach:</p>
              </div>
              <p className={`${theme.textSecondary} ml-8 italic`}>"{section.wrong}"</p>
            </div>
            
            <div className={`p-4 rounded-lg ${isDark ? 'bg-green-950/20 border-green-500/20' : 'bg-green-50 border-green-200'} border`}>
              <div className="flex items-start gap-3 mb-2">
                <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0 mt-0.5`} />
                <p className={`font-semibold ${isDark ? 'text-green-400' : 'text-green-700'}`}>The outcome approach:</p>
              </div>
              <p className={`${theme.textSecondary} ml-8 italic`}>"{section.right}"</p>
            </div>
            
            {section.explanation && (
              <p className={`${theme.textSecondary} leading-relaxed`}>{section.explanation}</p>
            )}
            
            {section.key && (
              <div className={`p-4 rounded-lg ${isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border`}>
                <p className={`${theme.textSecondary} leading-relaxed`}>{section.key}</p>
              </div>
            )}
          </div>
        </div>
      );
    }

    // Service (numbered service with items/systems)
    if (section.type === 'service') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xl font-bold`}>
              {section.number}
            </div>
            <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>{section.title}</h3>
          </div>
          
          <p className={`${theme.textSecondary} leading-relaxed mb-4`}>{section.content}</p>
          
          {section.items && (
            <ul className="space-y-2 ml-6 mb-4">
              {section.items.map((item, idx) => (
                <li key={idx} className={`list-disc ${theme.textSecondary}`}>{item}</li>
              ))}
            </ul>
          )}
          
          {section.systems && (
            <div className="space-y-4 mt-6">
              {section.systems.map((sys, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border`}>
                  <h4 className={`font-bold ${theme.textPrimary} mb-2`}>{sys.name}</h4>
                  <ul className="space-y-1">
                    {sys.features.map((feature, fidx) => (
                      <li key={fidx} className={`text-sm ${theme.textSecondary} flex items-start gap-2`}>
                        <span className="mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
          
          {section.footer && (
            <p className={`${theme.textAccent} font-semibold mt-6 italic`}>{section.footer}</p>
          )}
        </div>
      );
    }

    // Costs breakdown
    if (section.type === 'costs') {
      return (
        <div key={index} className="my-12 space-y-6">
          {section.costs.map((cost, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-3`}>{cost.title}</h4>
              <p className={`${theme.textSecondary} leading-relaxed mb-2`}>{cost.description}</p>
              {cost.calculation && (
                <p className={`${theme.textTertiary} text-sm mb-2`}>{cost.calculation}</p>
              )}
              <p className={`${theme.textAccent} font-bold text-lg`}>{cost.total}</p>
            </div>
          ))}
          
          <div className={`p-6 rounded-xl bg-blue-600 text-white`}>
            <p className="text-2xl font-bold mb-2">{section.totalCost}</p>
            <p className="text-blue-100 mb-4">{section.comparison}</p>
            <p className="text-xl font-bold">{section.roi}</p>
          </div>
        </div>
      );
    }

    // Red/Green Flags
    if (section.type === 'flags') {
      return (
        <div key={index} className="my-12 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-6`}>Red Flags:</h3>
            <div className="space-y-4">
              {section.redFlags.map((flag, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${isDark ? 'bg-red-950/20 border-red-500/20' : 'bg-red-50 border-red-200'} border`}>
                  <div className="flex items-start gap-3 mb-2">
                    <X className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} flex-shrink-0 mt-0.5`} />
                    <h4 className={`font-bold ${isDark ? 'text-red-400' : 'text-red-700'}`}>{flag.title}</h4>
                  </div>
                  <p className={`${theme.textSecondary} text-sm ml-8`}>{flag.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className={`text-2xl font-bold ${theme.textPrimary} mb-6`}>Green Flags:</h3>
            <div className="space-y-4">
              {section.greenFlags.map((flag, idx) => (
                <div key={idx} className={`p-4 rounded-lg ${isDark ? 'bg-green-950/20 border-green-500/20' : 'bg-green-50 border-green-200'} border`}>
                  <div className="flex items-start gap-3 mb-2">
                    <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0 mt-0.5`} />
                    <h4 className={`font-bold ${isDark ? 'text-green-400' : 'text-green-700'}`}>{flag.title}</h4>
                  </div>
                  <p className={`${theme.textSecondary} text-sm ml-8`}>{flag.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // System (problem/solution/result)
    if (section.type === 'system') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xl font-bold`}>
              {section.number}
            </div>
            <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>{section.title}</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-2`}>The Problem:</h4>
              <p className={`${theme.textSecondary} leading-relaxed`}>{section.problem}</p>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold ${theme.textAccent} mb-2`}>The System:</h4>
              <ul className="space-y-2 ml-6">
                {section.solution.map((item, idx) => (
                  <li key={idx} className={`list-disc ${theme.textSecondary}`}>{item}</li>
                ))}
              </ul>
            </div>
            
            <div className={`p-4 rounded-lg ${isDark ? 'bg-green-950/20 border-green-500/20' : 'bg-green-50 border-green-200'} border`}>
              <h4 className={`text-lg font-semibold ${isDark ? 'text-green-400' : 'text-green-700'} mb-2`}>Typical Result:</h4>
              <p className={`${theme.textSecondary} font-semibold`}>{section.result}</p>
            </div>
          </div>
        </div>
      );
    }

    // Pricing models
    if (section.type === 'pricing') {
      return (
        <div key={index} className="my-12 space-y-6">
          {section.models.map((model, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <div className="flex items-baseline justify-between mb-3">
                <h4 className={`text-xl font-bold ${theme.textPrimary}`}>{model.name}</h4>
                <span className={`text-2xl font-bold ${theme.textAccent}`}>{model.price}</span>
              </div>
              <p className={`${theme.textSecondary} leading-relaxed`}>{model.description}</p>
            </div>
          ))}
          
          {section.factors && (
            <div className={`p-6 rounded-xl ${isDark ? 'bg-blue-950/20 border-blue-500/20' : 'bg-blue-50 border-blue-200'} border mt-8`}>
              <h4 className={`text-lg font-bold ${theme.textPrimary} mb-3`}>What determines price:</h4>
              <ul className="space-y-2 ml-6">
                {section.factors.map((factor, idx) => (
                  <li key={idx} className={`list-disc ${theme.textSecondary}`}>{factor}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    // Industries list
    if (section.type === 'industries') {
      return (
        <div key={index} className="my-12 space-y-6">
          {section.list.map((industry, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-3`}>{industry.name}</h4>
              <p className={`${theme.textSecondary} leading-relaxed mb-3`}>{industry.description}</p>
              <div className={`p-3 rounded-lg ${isDark ? 'bg-blue-950/20' : 'bg-blue-50'}`}>
                <p className={`text-sm ${theme.textAccent} font-semibold`}>Why it works: {industry.why}</p>
              </div>
            </div>
          ))}
        </div>
      );
    }

    // Question groups
    if (section.type === 'question-groups') {
      return (
        <div key={index} className="my-12 space-y-8">
          {section.groups.map((group, idx) => (
            <div key={idx}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>{group.category}:</h4>
              <ol className="space-y-3 ml-6">
                {group.questions.map((q, qidx) => (
                  <li key={qidx} className={`${theme.textSecondary} leading-relaxed`}>
                    {qidx + 1}. {q}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      );
    }

    // Options (numbered choices)
    if (section.type === 'options') {
      return (
        <div key={index} className="my-12 space-y-6">
          {section.options.map((option, idx) => (
            <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <div className="flex items-start gap-4 mb-3">
                <div className={`w-10 h-10 rounded-lg ${isDark ? 'bg-blue-950/30 text-blue-400' : 'bg-blue-100 text-blue-700'} flex items-center justify-center font-bold flex-shrink-0`}>
                  {option.number}
                </div>
                <div className="flex-1">
                  <h4 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>Option {option.number}: {option.title}</h4>
                  <p className={`${theme.textSecondary} leading-relaxed mb-2`}>{option.description}</p>
                  <p className={`${theme.textTertiary} italic text-sm`}>{option.reality}</p>
                </div>
              </div>
            </div>
          ))}
          
          {section.conclusion && (
            <div className={`p-6 rounded-xl bg-blue-600 text-white mt-8`}>
              <p className="text-lg leading-relaxed whitespace-pre-line">{section.conclusion}</p>
            </div>
          )}
        </div>
      );
    }

    // Individual Role
    if (section.type === 'role') {
      return (
        <div key={index} className={`my-12 p-8 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xl font-bold`}>
              {section.number}
            </div>
            <h3 className={`text-2xl font-bold ${theme.textPrimary}`}>{section.title}</h3>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className={`text-lg font-semibold ${theme.textPrimary} mb-2`}>The Human Problem:</h4>
              <p className={`${theme.textSecondary} leading-relaxed`}>{section.humanProblem}</p>
            </div>
            
            <div>
              <h4 className={`text-lg font-semibold ${theme.textAccent} mb-2`}>The AI Solution:</h4>
              <p className={`${theme.textSecondary} leading-relaxed`}>{section.aiSolution}</p>
            </div>
            
            <div className={`p-4 rounded-lg ${isDark ? 'bg-green-950/20 border-green-500/20' : 'bg-green-50 border-green-200'} border`}>
              <h4 className={`text-lg font-semibold ${isDark ? 'text-green-400' : 'text-green-700'} mb-2`}>Result:</h4>
              <p className={`${theme.textSecondary} leading-relaxed`}>{section.result}</p>
            </div>
          </div>
        </div>
      );
    }

    // Criteria (Replace When / Keep When)
    if (section.type === 'criteria') {
      return (
        <div key={index} className="my-12 grid md:grid-cols-2 gap-6">
          <div className={`p-6 rounded-xl ${isDark ? 'bg-green-950/20 border-green-500/30' : 'bg-green-50 border-green-200'} border`}>
            <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>Replace When:</h4>
            <ul className="space-y-3">
              {section.replaceWhen.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${theme.textSecondary}`}>
                  <CheckCircle className={`w-5 h-5 ${isDark ? 'text-green-400' : 'text-green-600'} flex-shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={`p-6 rounded-xl ${isDark ? 'bg-red-950/20 border-red-500/30' : 'bg-red-50 border-red-200'} border`}>
            <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>Keep When:</h4>
            <ul className="space-y-3">
              {section.keepWhen.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-2 ${theme.textSecondary}`}>
                  <X className={`w-5 h-5 ${isDark ? 'text-red-400' : 'text-red-600'} flex-shrink-0 mt-0.5`} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {section.test && (
            <div className={`md:col-span-2 p-6 rounded-xl ${theme.cardBg} border-2 ${isDark ? 'border-blue-500/30' : 'border-blue-300'}`}>
              <p className={`text-lg ${theme.textSecondary} leading-relaxed`}>
                <span className={`font-semibold ${theme.textPrimary}`}>The test: </span>
                {section.test}
              </p>
            </div>
          )}
        </div>
      );
    }

    // Timeline
    if (section.type === 'timeline') {
      return (
        <div key={index} className="my-12 space-y-4">
          {section.weeks.map((week, idx) => (
            <div 
              key={idx}
              className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className={`px-3 py-1 rounded-lg ${isDark ? 'bg-blue-950/30 text-blue-400' : 'bg-blue-100 text-blue-700'} font-semibold text-sm whitespace-nowrap`}>
                  {week.week}
                </div>
                <div className="flex-1">
                  <h4 className={`text-lg font-bold ${theme.textPrimary} mb-2`}>{week.title}</h4>
                  <p className={`${theme.textSecondary} leading-relaxed`}>{week.description}</p>
                </div>
              </div>
            </div>
          ))}
          
          {section.summary && (
            <div className={`mt-6 p-6 rounded-xl ${isDark ? 'bg-blue-950/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border`}>
              <p className={`${theme.textPrimary} font-semibold mb-2`}>{section.summary}</p>
              {section.comparison && (
                <p className={`${theme.textSecondary}`}>{section.comparison}</p>
              )}
            </div>
          )}
        </div>
      );
    }

    // ROI Comparison
    if (section.type === 'roi') {
      return (
        <div key={index} className="my-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>{section.before.title}</h4>
              <ul className="space-y-2 mb-4">
                {section.before.items.map((item, idx) => (
                  <li key={idx} className={`${theme.textSecondary} text-sm`}>• {item}</li>
                ))}
              </ul>
              <p className={`${theme.textTertiary} text-sm italic border-t ${theme.border} pt-4`}>
                {section.before.total}
              </p>
            </div>
            
            <div className={`p-6 rounded-xl ${isDark ? 'bg-green-950/20 border-green-500/30' : 'bg-green-50 border-green-200'} border`}>
              <h4 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>{section.after.title}</h4>
              <ul className="space-y-2 mb-4">
                {section.after.items.map((item, idx) => (
                  <li key={idx} className={`${theme.textSecondary} text-sm`}>• {item}</li>
                ))}
              </ul>
              <p className={`${theme.textTertiary} text-sm italic border-t ${isDark ? 'border-green-500/30' : 'border-green-200'} pt-4`}>
                {section.after.total}
              </p>
            </div>
          </div>
          
          {section.savings && (
            <div className={`p-6 rounded-xl bg-blue-600 text-white text-center`}>
              <p className="text-2xl font-bold">{section.savings}</p>
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      <Helmet>
        <title>{`${article.title} | LevReg.Ai Blog`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <link rel="canonical" href={`https://levreg.ai/blog/${slug}`} />
        
        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://levreg.ai/blog/${slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.metaDescription} />
      </Helmet>
      
      <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
        {/* Breadcrumb Navigation */}
        <section className={`py-6 px-6 ${theme.bgSecondary} border-b ${theme.border}`}>
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-sm">
              <Link to="/" className={`${theme.textTertiary} hover:${theme.textAccent} transition-colors`}>
                <Home className="w-4 h-4" />
              </Link>
              <ChevronRight className={`w-4 h-4 ${theme.textTertiary}`} />
              <Link to="/blog" className={`${theme.textTertiary} hover:${theme.textAccent} transition-colors`}>
                Blog
              </Link>
              <ChevronRight className={`w-4 h-4 ${theme.textTertiary}`} />
              <span className={theme.textPrimary}>Article</span>
            </div>
          </div>
        </section>

        {/* Article Header */}
        <section className="relative py-16 px-6">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-6 ${isDark ? 'bg-blue-950/30 text-blue-300 border border-blue-500/20' : 'bg-blue-50 text-blue-700 border border-blue-200'}`}>
              {article.category}
            </div>
            
            {/* Title */}
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
              {article.title}
            </h1>
            
            {/* Subtitle */}
            <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-8 leading-relaxed`}>
              {article.subtitle}
            </p>
            
            {/* Meta Information */}
            <div className={`flex flex-wrap items-center gap-6 ${theme.textTertiary} text-sm border-t border-b ${theme.border} py-4`}>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(article.publishDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{article.readingTime}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className={`py-12 px-6 ${theme.bgSecondary}`}>
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className={`text-xl ${theme.textSecondary} leading-relaxed mb-12 space-y-4`}>
              {article.content.introduction.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            {/* Main Sections */}
            {article.content.sections.map((section, index) => renderSection(section, index))}
            
            {/* FAQ Section */}
            {article.content.faq && article.content.faq.length > 0 && (
              <div className="mt-20">
                <h2 className={`text-3xl md:text-4xl font-bold ${theme.textPrimary} mb-8`}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {article.content.faq.map((item, idx) => (
                    <div key={idx} className={`p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder}`}>
                      <h3 className={`text-xl font-bold ${theme.textPrimary} mb-3`}>
                        {item.question}
                      </h3>
                      <p className={`${theme.textSecondary} leading-relaxed`}>
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Related Links */}
            {article.content.relatedLinks && article.content.relatedLinks.length > 0 && (
              <div className={`mt-12 p-8 rounded-xl ${isDark ? 'bg-blue-950/20 border-blue-500/30' : 'bg-blue-50 border-blue-200'} border`}>
                <h3 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>Continue Your Journey</h3>
                <div className="space-y-3">
                  {article.content.relatedLinks.map((link, idx) => (
                    <Link 
                      key={idx}
                      to={link.url}
                      className={`flex items-center gap-2 ${theme.textAccent} hover:underline font-medium`}
                    >
                      <ArrowRight className="w-4 h-4" />
                      {link.text}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-24 px-6 ${theme.bgPrimary}`}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textPrimary}`}>
              Ready to Transform
              <span className={theme.textAccent}> Your Business?</span>
            </h2>
            
            <p className={`text-xl ${theme.textSecondary} mb-12 max-w-2xl mx-auto leading-relaxed`}>
              Stop burning through good people in bad roles. Let's talk about installing AI systems that improve morale and cut costs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/transformation-call">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
                >
                  Start Your AI Transformation
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/blog">
                <Button 
                  size="lg" 
                  variant="outline"
                  className={`${isDark ? 'border-blue-500/30 hover:border-blue-500 hover:bg-blue-950/30 hover:text-white' : 'border-blue-300 hover:border-blue-500 hover:bg-blue-50'} ${theme.textPrimary} px-10 py-7 text-xl transition-all duration-300`}
                >
                  <ArrowLeft className="mr-2 w-6 h-6" />
                  View All Articles
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogDetail;
