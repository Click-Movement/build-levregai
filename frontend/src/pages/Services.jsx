import React from 'react';
import { ArrowRight, CheckCircle, Headphones, Megaphone, TrendingUp, FileText, Settings, Users, Zap, Target, BarChart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';

const Services = () => {
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  const roles = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: 'Customer Support',
      problem: 'Your support team is drowning. Tickets pile up. Response times slip. Quality suffers. Customers get frustrated.',
      solution: 'We build AI-powered response systems, routing workflows, and knowledge base tools that help your team resolve issues faster and more accurately.',
      result: 'Faster responses. Happier customers. A support team that&apos;s finally ahead of the queue.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: 'Marketing',
      problem: 'Your marketing team is stuck in production mode. Writing emails, drafting posts, designing campaigns—everything takes forever.',
      solution: 'We install AI content frameworks, campaign automation tools, and creative systems that let your marketers focus on strategy while AI handles the heavy lifting.',
      result: 'More campaigns. Better messaging. Less time spinning your wheels.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Sales',
      problem: 'Your sales team is juggling too much. Prospecting, follow-ups, proposals, CRM updates—leads fall through the cracks.',
      solution: 'We create AI-driven prospecting tools, follow-up automation, and proposal generation systems that keep your pipeline moving.',
      result: 'More conversations. Faster follow-up. Higher close rates.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Admin',
      problem: 'Your admin team is the backbone of your business—but they&apos;re buried in repetitive, time-consuming tasks.',
      solution: 'We build AI systems that automate scheduling, document creation, data entry, and communication workflows.',
      result: 'More time for strategic work. Less time on admin drudgery.',
      color: 'from-orange-500 to-amber-500'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Operations',
      problem: 'Your operations processes are inconsistent. Knowledge lives in people&apos;s heads. New hires take forever to ramp up.',
      solution: 'We document, optimize, and AI-enhance your operational workflows—creating systems that scale as you grow.',
      result: 'Operations that run like clockwork. Teams that scale without chaos.',
      color: 'from-red-500 to-rose-500'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Leadership',
      problem: 'You&apos;re making decisions with incomplete information. You don&apos;t have time to synthesize data, research options, or scenario-plan.',
      solution: 'We create AI-powered decision support systems, strategic planning tools, and executive communication workflows.',
      result: 'Clarity when you need it. Confidence in your decisions. Time back in your day.',
      color: 'from-indigo-500 to-blue-500'
    }
  ];

  const deliverables = [
    'Custom AI Workflows: Built specifically for your team&apos;s roles and responsibilities.',
    'Prompt Libraries: Pre-tested, ready-to-use prompts for every common task.',
    'Training Sessions: Hands-on enablement with your actual team, using your actual workflows.',
    'Implementation Support: We don&apos;t train and disappear. We help you deploy and refine.',
    'Performance Dashboards: Track productivity improvements and ROI in real time.',
    'Ongoing Optimization: As your business evolves, your AI systems evolve with you.'
  ];

  const metrics = [
    { value: '40-60%', label: 'Reduction in task completion time' },
    { value: '25-50%', label: 'Increase in output per employee' },
    { value: '70-80%', label: 'Decrease in formatting and consistency errors' },
    { value: '50-70%', label: 'Faster onboarding for new hires' },
    { value: '10-20hrs', label: 'Saved per employee per week' }
  ];

  const scrollToContact = () => {
    window.location.href = '/discovery';
  };

  return (
    <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} mb-8`}>
            <Zap className={`w-4 h-4 ${theme.badgeIcon}`} />
            <span className={`text-sm ${theme.badgeText} font-medium`}>Programs & Training</span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
            AI Employee Enablement
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
              Programs
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
            Role-specific training and systems that make your entire team more productive—immediately.
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className={`py-16 px-6 ${theme.bgSecondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${theme.textPrimary}`}>
            This Isn&apos;t a Course.
            <br />
            <span className={theme.textAccent}>It&apos;s a Business Upgrade.</span>
          </h2>
          
          <div className={`space-y-4 text-lg ${theme.textSecondary} leading-relaxed`}>
            <p>
              Most AI training teaches theory. LevReg.AI installs systems. We don&apos;t hand your team a chatbot and say "good luck." We build workflow-specific, role-specific, use-case-specific AI infrastructure designed around what your employees actually do every day. Then we train them to use it. Hands-on. Real scenarios. Immediate results.
            </p>
            <p className={`text-xl font-semibold ${theme.textPrimary} pt-4`}>
              By the time we&apos;re done, your team isn&apos;t just AI-aware—they&apos;re AI-enabled.
            </p>
          </div>
        </div>
      </section>

      {/* Role-Specific Training */}
      <section className={`py-24 px-6 ${theme.bgPrimary}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-center ${theme.textPrimary}`}>
            Role-Specific
            <span className={theme.textAccent}> AI Enablement</span>
          </h2>
          <p className={`text-xl ${theme.textTertiary} text-center mb-16 max-w-3xl mx-auto`}>
            Custom AI systems built for every role in your business
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((role, idx) => (
              <Card 
                key={idx} 
                className={`${theme.cardBg} ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 group ${theme.shadow}`}
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${role.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {role.icon}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-4 ${theme.textPrimary}`}>{role.title}</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className={`${isDark ? 'text-red-400' : 'text-red-500'} font-semibold mb-2 text-sm uppercase tracking-wide`}>The Problem</h4>
                      <p className={`${theme.textTertiary} text-sm leading-relaxed`}>{role.problem}</p>
                    </div>
                    
                    <div>
                      <h4 className={`${theme.textAccent} font-semibold mb-2 text-sm uppercase tracking-wide`}>The Solution</h4>
                      <p className={`${theme.textTertiary} text-sm leading-relaxed`}>{role.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className={`${isDark ? 'text-green-400' : 'text-green-600'} font-semibold mb-2 text-sm uppercase tracking-wide`}>The Result</h4>
                      <p className={`${theme.textSecondary} text-sm font-medium leading-relaxed`}>{role.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">
            What You <span className="text-blue-600">Actually Get</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            This isn&apos;t vaporware. When you work with LevReg.AI, you receive:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {deliverables.map((item, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:border-blue-400 transition-all duration-300 shadow-sm"
              >
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productivity Metrics */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-black">
            The Numbers <span className="text-blue-600">Don&apos;t Lie</span>
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            Our clients see measurable gains across every function:
          </p>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {metrics.map((metric, idx) => (
              <div 
                key={idx}
                className="text-center p-8 rounded-xl bg-gray-50 border border-gray-200 hover:border-blue-400 transition-all duration-300 group"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500 mb-3">
                  {metric.value}
                </div>
                <div className="text-gray-600 text-sm leading-tight">{metric.label}</div>
              </div>
            ))}
          </div>
          
          <p className="text-center text-xl text-black font-semibold mt-12">
            These aren&apos;t projections. They&apos;re results.
          </p>
        </div>
      </section>

      {/* Pricing CTA Section */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Investment That Is a
            <span className="text-blue-600"> Multiplier</span>
          </h2>
          
          <p className="text-xl text-gray-700 mb-6 leading-relaxed">
            When your team works 60% faster, produces better work, and makes fewer mistakes, the ROI is immediate. Most clients see payback within 30 days.
          </p>
          
          <p className="text-lg text-gray-600 mb-12">
            Want specifics? Let&apos;s talk about your team, your workflows, and your goals.
          </p>
          
          <Link to="/discovery">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
            >
              Get a Custom Quote
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
