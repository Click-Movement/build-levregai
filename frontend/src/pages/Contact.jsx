import React, { useState } from 'react';
import { ArrowRight, Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { useToast } from '../hooks/use-toast';
import { useTheme } from '../context/ThemeContext';
import { getThemeClasses } from '../utils/themeClasses';

const Contact = () => {
  const { toast } = useToast();
  const { isDark } = useTheme();
  const theme = getThemeClasses(isDark);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    teamSize: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Received!",
        description: "We'll be in touch within 24 hours to schedule your discovery call.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        teamSize: '',
        message: ''
      });
    }, 1000);
  };

  const callDetails = [
    'Where your team is losing time to manual, repetitive work',
    'Which roles would benefit most from AI enablement',
    'What systems you should build specifically for your workflows',
    'How quickly you&apos;d see measurable productivity gains',
    'What it would cost to make your entire team AI-enabled'
  ];

  const prepItems = [
    'A general sense of which roles or departments feel most overwhelmed',
    'Any workflows you know are inefficient or time-consuming',
    'Your goals for productivity improvement'
  ];

  return (
    <div className={`min-h-screen ${theme.bgPrimary} ${theme.textPrimary}`}>
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className={`absolute inset-0 ${theme.bgGradient} via-transparent to-transparent pointer-events-none`} />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${theme.badgeBg} border ${theme.badgeBorder} mb-8`}>
            <Calendar className={`w-4 h-4 ${theme.badgeIcon}`} />
            <span className={`text-sm ${theme.badgeText} font-medium`}>Free Discovery Call</span>
          </div>
          
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 leading-tight ${theme.textPrimary}`}>
            Let&apos;s Build Your
            <br />
            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-blue-400 to-blue-600' : 'from-blue-600 to-blue-500'}`}>
              AI-First Business
            </span>
          </h1>
          
          <p className={`text-xl md:text-2xl ${theme.textSecondary} mb-12 max-w-3xl mx-auto leading-relaxed`}>
            Book a free discovery call and find out exactly how AI can transform your team&apos;s productivity.
          </p>
        </div>
      </section>

      {/* What Happens on the Call */}
      <section className={`py-16 px-6 ${theme.bgSecondary}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-center ${theme.textPrimary}`}>
            Here&apos;s What Happens
            <span className={theme.textAccent}> on the Call</span>
          </h2>
          
          <p className={`text-xl ${theme.textTertiary} text-center mb-12`}>
            This isn&apos;t a sales pitch. It&apos;s a strategy session. We&apos;ll talk about:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {callDetails.map((detail, idx) => (
              <div 
                key={idx}
                className={`flex items-start gap-4 p-6 rounded-xl ${theme.cardBg} border ${theme.cardBorder} ${theme.borderHover} transition-all duration-300 ${theme.shadow}`}
              >
                <CheckCircle className={`w-6 h-6 ${theme.textAccent} flex-shrink-0 mt-1`} />
                <p className={`${theme.textSecondary} leading-relaxed`}>{detail}</p>
              </div>
            ))}
          </div>
          
          <p className={`text-xl ${theme.textPrimary} font-semibold text-center`}>
            You&apos;ll walk away with clarity. Whether you work with us or not, you&apos;ll know exactly what AI can do for your business.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className={`py-24 px-6 ${theme.bgPrimary}`}>
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className={`text-3xl font-bold mb-6 ${theme.textPrimary}`}>
                Schedule Your
                <span className={theme.textAccent}> Discovery Session</span>
              </h2>
              <p className={`${theme.textTertiary} mb-8`}>
                Fill out the form below and we&apos;ll reach out within 24 hours to schedule your call.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText}`}
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText}`}
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Company Name *
                  </label>
                  <Input
                    id="company"
                    name="company"
                    type="text"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText}`}
                    placeholder="Your Company"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText}`}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                
                <div>
                  <label htmlFor="teamSize" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Team Size
                  </label>
                  <Input
                    id="teamSize"
                    name="teamSize"
                    type="text"
                    value={formData.teamSize}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText}`}
                    placeholder="e.g., 5-10 employees"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${theme.inputLabel} mb-2`}>
                    Tell us about your biggest challenges
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${theme.inputBg} ${theme.inputBorder} focus:border-blue-500 ${theme.inputText} resize-none`}
                    placeholder="What are your team's biggest productivity bottlenecks?"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg group transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Schedule Discovery Call'}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <p className={`text-sm ${theme.textTertiary} text-center`}>
                  Free. No pressure. Just clarity on what AI can do for your business.
                </p>
              </form>
            </div>
            
            {/* Additional Info */}
            <div className="space-y-8">
              <Card className={`${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-blue-950/30' : 'bg-blue-50'} flex items-center justify-center flex-shrink-0`}>
                      <Clock className={`w-6 h-6 ${theme.textAccent}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>Call Duration</h3>
                      <p className={theme.textTertiary}>45-60 minutes</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-blue-950/30' : 'bg-blue-50'} flex items-center justify-center flex-shrink-0`}>
                      <CheckCircle className={`w-6 h-6 ${theme.textAccent}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme.textPrimary} mb-4`}>What to Prepare</h3>
                      <ul className="space-y-3">
                        {prepItems.map((item, idx) => (
                          <li key={idx} className={`flex items-start gap-2 ${theme.textTertiary} text-sm`}>
                            <span className={`${theme.textAccent} mt-1`}>•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className={`${theme.cardBg} ${theme.cardBorder} ${theme.shadow}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-blue-950/30' : 'bg-blue-50'} flex items-center justify-center flex-shrink-0`}>
                      <ArrowRight className={`w-6 h-6 ${theme.textAccent}`} />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme.textPrimary} mb-2`}>What Happens Next</h3>
                      <p className={`${theme.textTertiary} mb-4`}>
                        If we&apos;re a fit, we&apos;ll build a custom AI enablement plan for your business.
                      </p>
                      <p className={theme.textTertiary}>
                        If we&apos;re not, we&apos;ll point you in the right direction.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 border border-red-200 mb-8">
            <AlertCircle className="w-4 h-4 text-red-600" />
            <span className="text-sm text-red-700 font-medium">Time-Sensitive</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            You&apos;re Not Behind
            <span className="text-blue-600"> — Yet</span>
          </h2>
          
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Right now, you&apos;re in the window. AI adoption is accelerating. The businesses that move now will dominate their markets. The ones that wait will spend years playing catch-up.
            </p>
            <p className="text-black font-semibold">
              Your team wants to work smarter. Your customers expect faster, better service. Your bottom line needs more output without more overhead.
            </p>
            <p className="text-2xl text-blue-600 font-bold pt-4">
              This is how you get all three.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
