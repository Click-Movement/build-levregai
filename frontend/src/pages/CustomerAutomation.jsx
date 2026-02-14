import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { X, Zap, Shield, TrendingUp, Users, Target, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../components/ui/accordion';
import { toast } from 'sonner';

const CustomerAutomation = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    monthlyLeads: '',
    challenge: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast.success('Thank you! We\'ll respond within 24 hours to schedule your free automation audit.');
    setFormData({
      fullName: '',
      email: '',
      company: '',
      phone: '',
      monthlyLeads: '',
      challenge: ''
    });
  };

  const brokenModels = [
    {
      title: 'The Agency',
      subtitle: 'The Black Box',
      problems: [
        'Slow communication loops',
        'Zero control over process',
        'Opaque reporting',
        'High monthly retainers'
      ]
    },
    {
      title: 'The Software',
      subtitle: 'The DIY Trap',
      problems: [
        'No strategy included',
        'Leads still go cold',
        'Requires manual management',
        'Disconnected tools'
      ]
    },
    {
      title: 'The Hiring',
      subtitle: 'The Scale Wall',
      problems: [
        'Human capacity limits',
        'Inconsistent performance',
        'High fixed costs (Salaries)',
        'Slow ramp (3-6 months)'
      ]
    }
  ];

  const howItWorksSteps = [
    {
      number: '01',
      title: 'Step 1: Audit',
      days: 'Days 1-3',
      items: [
        'Define automation scope',
        'Identify bottlenecks & leaks',
        'Analyze current conversion data',
        'Map your customer journey'
      ]
    },
    {
      number: '02',
      title: 'Step 2: Setup',
      days: 'Days 4-10',
      items: [
        'Assign Certified Architect',
        'Integrate with your CRM',
        'Train AI on your sales scripts',
        'Configure Voice, Email, Chat channels'
      ]
    },
    {
      number: '03',
      title: 'Step 3: Launch',
      days: 'Days 11-14',
      items: [
        'Run pilot with 10% of leads',
        'Monitor & optimize performance',
        'Scale to 100% traffic',
        'Continuous improvement loop'
      ]
    }
  ];

  const lifecycleEngines = [
    {
      title: 'Acquisition Engine',
      subtitle: 'Stop the Revenue Leak',
      features: [
        'Instant Speed-to-Lead',
        '24/7 Qualification',
        'Multi-Channel Outreach',
        'Auto-Booking'
      ]
    },
    {
      title: 'Scalability Engine',
      subtitle: 'Clone Your Best Closer',
      features: [
        'Process Replication',
        'Perfect Follow-Up',
        'Objection Handling',
        'Human Handoff'
      ]
    },
    {
      title: 'Reactivation Engine',
      subtitle: 'Mine Your CRM',
      features: [
        'Dormant Lead Wake-Up',
        'Database Segmentation',
        'Long-Term Nurture',
        'Revenue Recovery'
      ]
    }
  ];

  const caseStudies = [
    {
      type: 'SaaS Company',
      scale: '500 Leads/Month',
      headline: 'From 2% to 8% Conversion',
      beforeLabel: 'Before (Manual Follow-Up)',
      beforeValue: '2%',
      afterLabel: 'After (Acquisition Engine)',
      afterValue: '8%',
      revenue: '$180,000',
      revenueLabel: 'Additional Revenue/Month',
      quote: '"We went from losing 98% of our inbound leads to converting 8%. The Acquisition Engine paid for itself in the first week."'
    },
    {
      type: 'Professional Services',
      scale: '10K Dormant Leads',
      headline: '$2.4M Recovered from CRM',
      beforeLabel: 'Dormant Leads Contacted',
      beforeValue: '10,000',
      afterLabel: 'Reactivation Rate',
      afterValue: '12%',
      revenue: '$2,400,000',
      revenueLabel: 'Revenue Recovered (12 mo)',
      quote: '"Our CRM was a graveyard. The Reactivation Engine turned it into our highest-ROI channel."'
    }
  ];

  const faqs = [
    {
      question: 'Will AI sound robotic or impersonal?',
      answer: 'No. Our AI is trained on your actual sales scripts, tone, and brand voice. It mirrors your best performers. Most prospects can\'t tell the difference between AI and human interaction until they\'re told.'
    },
    {
      question: 'What if my industry is too complex for AI?',
      answer: 'We\'ve deployed automation in industries from healthcare to financial services to professional services. Complexity is handled through strategic human handoff—AI qualifies, humans close. Your Certified Architect configures exactly when that transition happens.'
    },
    {
      question: 'How much does this cost?',
      answer: 'Pricing depends on your lead volume and automation scope. Most clients see full ROI within 30-60 days. We\'ll give you exact numbers during your automation audit.'
    },
    {
      question: 'How long does implementation take?',
      answer: '14 days from audit to launch. That includes CRM integration, AI training, and pilot deployment.'
    },
    {
      question: 'What if the AI makes a mistake?',
      answer: 'Your Certified Automation Architect monitors AI conversations daily and intervenes when needed. We also build in escalation protocols so complex or sensitive conversations route to humans immediately.'
    },
    {
      question: 'Do I need to replace my current CRM or tools?',
      answer: 'No. We integrate with your existing stack—Salesforce, HubSpot, Pipedrive, or custom CRMs. You keep using what works.'
    },
    {
      question: 'What happens to my sales team?',
      answer: 'They level up. Instead of chasing cold leads and doing manual follow-up, they focus on high-value conversations with qualified prospects. AI handles the grunt work; humans handle the strategy.'
    },
    {
      question: 'Is this just a chatbot?',
      answer: 'No. This is full lifecycle automation across Voice, Email, and Chat. It\'s not a widget on your website—it\'s infrastructure that powers your entire customer journey from first touch to reactivation.'
    },
    {
      question: 'What if I don\'t have enough leads to justify automation?',
      answer: 'If you\'re getting fewer than 50 leads per month, automation might be premature. But if you\'re above that threshold and losing deals to slow follow-up, you\'re leaving revenue on the table.'
    },
    {
      question: 'How do I know this will work for my business?',
      answer: 'Book an automation audit. We\'ll analyze your lead flow, conversion data, and customer journey. If automation isn\'t the right fit, we\'ll tell you. If it is, you\'ll see exactly where the revenue leaks are and how we\'ll fix them.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Customer Automation | AI Speed. Human Strategy. Zero Bottlenecks</title>
        <meta name="description" content="The infrastructure that combines AI-powered engagement with human strategic oversight to accelerate the customer lifecycle from lead to advocate." />
        <meta name="keywords" content="customer automation, AI automation, lead conversion, CRM automation, sales automation, lifecycle engine" />
        <link rel="canonical" href="https://levreg.ai/automation" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Roboto+Mono:wght@400;700&display=swap" rel="stylesheet" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/automation" />
        <meta property="og:title" content="Customer Automation | AI Speed. Human Strategy. Zero Bottlenecks" />
        <meta property="og:description" content="The infrastructure that combines AI-powered engagement with human strategic oversight to accelerate the customer lifecycle from lead to advocate." />
        <meta property="og:site_name" content="LevReg.Ai" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
        <meta name="twitter:title" content="Customer Automation | AI Speed. Human Strategy. Zero Bottlenecks" />
        <meta name="twitter:description" content="The infrastructure that combines AI-powered engagement with human strategic oversight to accelerate the customer lifecycle." />
      </Helmet>
      
      <div className="automation-theme min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-foreground">
              CustomerAutomation
            </h1>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight tracking-tight text-foreground text-shadow-glow">
              AI Speed. Human Strategy. Zero Bottlenecks.
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
              <a href="#contact-form">
                <Button 
                  size="lg" 
                  className="glow-cyan-hover font-automation-mono text-lg font-bold uppercase tracking-wider px-12 py-6 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Schedule Your Ai Automation Audit
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Three Broken Models Section */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              The Three Broken Models
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              You are caught between expensive agencies, disconnected tools, and the slow pace of hiring.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {brokenModels.map((model, idx) => (
                <Card 
                  key={idx} 
                  className="bg-card border-border border transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{model.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{model.subtitle}</p>
                    <ul className="space-y-3">
                      {model.problems.map((problem, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3 text-muted-foreground">
                          <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <span>{problem}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Defining Customer Automation Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              Defining Customer Automation
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-12">
              It's not a tool. It's not a service. It's infrastructure.
            </p>
            
            <Card className="bg-card border-primary/30 border-2 mb-16">
              <CardContent className="p-12 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
                  The Definition
                </h3>
                <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground">
                  The infrastructure that combines <span className="text-primary font-semibold">AI-powered engagement</span> with <span className="text-primary font-semibold">human strategic oversight</span> to accelerate the customer lifecycle from lead to advocate.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">AI Speed</h3>
                  <p className="text-muted-foreground text-lg">
                    Instant execution across Voice, Email, and Chat — 24/7.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Human Strategy</h3>
                  <p className="text-muted-foreground text-lg">
                    Managed by Certified Automation Architects.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8 text-center">
                  <Target className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-2xl font-bold mb-3 text-foreground">Lifecycle Scope</h3>
                  <p className="text-muted-foreground text-lg">
                    Automation across Acquisition, Conversion, Retention, Reactivation.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              From audit to launch in 14 days. No long ramp. No technical complexity.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {howItWorksSteps.map((step, idx) => (
                <div 
                  key={idx}
                  className="relative p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary flex items-center justify-center text-2xl font-bold text-primary-foreground shadow-lg">
                    {step.number}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{step.title}</h3>
                    <p className="text-lg text-primary mb-4 font-semibold">{step.days}</p>
                    <ul className="space-y-2">
                      {step.items.map((item, iIdx) => (
                        <li key={iIdx} className="flex items-start gap-2 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lifecycle Engine Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              The Lifecycle Engine
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              One unified system. Three distinct phases. Zero revenue leaks.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {lifecycleEngines.map((engine, idx) => (
                <Card 
                  key={idx} 
                  className="bg-card border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-2 text-foreground">{engine.title}</h3>
                    <p className="text-lg text-primary mb-6 font-semibold">{engine.subtitle}</p>
                    <ul className="space-y-3">
                      {engine.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3 text-muted-foreground">
                          <ChevronRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Managed by Architects Section */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              Managed by Architects
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Automation without oversight is dangerous. That's why we include the human.
            </p>
            
            <Card className="bg-card border-primary/30 border-2 mb-12">
              <CardContent className="p-12">
                <h3 className="text-3xl font-bold mb-4 text-primary text-center">
                  CertifiedAutomationArchitect
                </h3>
                <p className="text-xl text-muted-foreground text-center mb-8">
                  Not a support rep. Not a VA. A strategic partner trained to design, monitor, and optimize your Lifecycle Engine.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8">
                  <Shield className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">System Design</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    They map your customer journey and configure the AI to mirror your best sales processes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8">
                  <Target className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Active Oversight</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    They monitor AI conversations daily, intervening if quality drops or complexity spikes.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                <CardContent className="p-8">
                  <TrendingUp className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">Continuous Optimization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    They analyze conversion data to tweak scripts, prompts, and timing for better results.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real Results Section */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              Real Results
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              From revenue leaks to revenue engines.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {caseStudies.map((study, idx) => (
                <Card 
                  key={idx} 
                  className="bg-card border-border border transition-all duration-300"
                >
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <p className="text-sm uppercase tracking-wider text-primary font-semibold mb-1">
                        {study.type} &bull; {study.scale}
                      </p>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                      {study.headline}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between items-center p-4 bg-secondary border border-border">
                        <span className="text-sm text-muted-foreground">{study.beforeLabel}</span>
                        <span className="text-2xl font-bold text-foreground">{study.beforeValue}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-secondary border border-border">
                        <span className="text-sm text-muted-foreground">{study.afterLabel}</span>
                        <span className="text-2xl font-bold text-primary">{study.afterValue}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-primary/20 border border-primary/30">
                        <span className="text-sm text-muted-foreground">{study.revenueLabel}</span>
                        <span className="text-2xl font-bold text-primary">{study.revenue}</span>
                      </div>
                    </div>
                    
                    <blockquote className="text-muted-foreground italic text-lg border-l-4 border-primary pl-4">
                      {study.quote}
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground text-center mb-16">
              The answers to the questions you're already thinking.
            </p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-card border-border border px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline text-lg font-semibold px-6 py-4 group">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA Form Section */}
        <section id="contact-form" className="py-24 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-center text-foreground tracking-tight">
              Stop Buying Tools.
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-primary tracking-tight">
              Start Building Your Engine.
            </h3>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Schedule Your Automation Audit
            </p>
            
            <Card className="bg-card border-border border">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground font-semibold">
                      Full Name *
                    </Label>
                    <Input 
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground font-semibold">
                      Email *
                    </Label>
                    <Input 
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-foreground font-semibold">
                      Company *
                    </Label>
                    <Input 
                      id="company"
                      name="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground font-semibold">
                      Phone
                    </Label>
                    <Input 
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="monthlyLeads" className="text-foreground font-semibold">
                      Monthly Inbound Leads (Approx.)
                    </Label>
                    <Input 
                      id="monthlyLeads"
                      name="monthlyLeads"
                      type="text"
                      value={formData.monthlyLeads}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <div>
                    <Label htmlFor="challenge" className="text-foreground font-semibold">
                      Tell Us About Your Biggest Challenge
                    </Label>
                    <Textarea 
                      id="challenge"
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleInputChange}
                      className="mt-2 bg-secondary border-border text-foreground"
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full glow-cyan-hover font-automation-mono text-lg font-bold uppercase tracking-wider h-14 bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Request Your Audit
                  </Button>

                  <p className="text-center text-sm text-muted-foreground pt-2">
                    * We'll respond within 24 hours to schedule your free automation audit
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomerAutomation;
