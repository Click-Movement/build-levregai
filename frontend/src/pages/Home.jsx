import React from 'react';
import { ArrowRight, Zap, Target, Users, TrendingUp, BarChart, CheckCircle, Sparkles, Clock, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Speed Without Chaos',
      description: 'Tasks that took hours now take minutes. Your team moves faster without cutting corners or sacrificing quality.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Accuracy at Scale',
      description: 'AI catches mistakes before they happen. Formatting errors, missed follow-ups, inconsistent messaging—all gone.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Employees Who Level Up',
      description: "Your team doesn't get replaced. They get equipped. They do better work, feel more capable, and drive more value."
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: 'Profit Margins Get Better',
      description: 'Do more with the same team. Lower cost per output. Higher revenue per employee. Better margins without sacrificing quality.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Systems That Stick',
      description: "We don't just train your people—we install workflows, dashboards, and prompts that become part of how your business runs."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'ROI You Can Measure',
      description: 'Faster turnaround times. Fewer errors. Higher output. Lower stress. All trackable. All real.'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We audit your workflows, talk to your team, and identify where AI will create the biggest impact across every role.'
    },
    {
      number: '02',
      title: 'Custom Build',
      description: 'We design role-specific AI systems with prompts, workflows, dashboards, and automations built for your actual business.'
    },
    {
      number: '03',
      title: 'Team Training',
      description: 'We train your employees hands-on. No fluff. No theory. Just practical, role-based enablement they can use immediately.'
    },
    {
      number: '04',
      title: 'Ongoing Support',
      description: 'Your business evolves. So do your systems. We refine, optimize, and scale your AI infrastructure as you grow.'
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-500/20 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">AI Employee Enablement</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Triple Your Team&apos;s Output
            </span>
            <br />
            Without Hiring a Single Person
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            LevReg.AI builds custom AI systems for every role in your business, so your employees work smarter, faster, and more accurately. No tech degree required.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Your AI Enablement Plan
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-blue-500/30 hover:border-blue-500 hover:bg-blue-950/30 px-8 py-6 text-lg transition-all duration-300"
              onClick={() => scrollToSection('how-it-works')}
            >
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section id="origin" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Why <span className="text-blue-400">LevReg.AI</span> Exists
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              You&apos;re a CEO. You&apos;re running payroll, managing customers, putting out fires, and trying to grow. You know AI could help. You&apos;ve heard the stories. The productivity gains. The speed. The accuracy.
            </p>
            <p>
              But here&apos;s the problem: <span className="text-white font-semibold">You don&apos;t have time to become an AI expert.</span> And your team doesn&apos;t either. So nothing changes. Your competitors start moving faster. Your team stays buried in manual work. And you&apos;re left wondering when you&apos;ll ever catch up.
            </p>
            <p>
              That&apos;s exactly why we built LevReg.AI. We don&apos;t teach theory. We don&apos;t sell you a course and wish you luck. <span className="text-blue-400 font-semibold">We come into your business, assess your workflows, and install role-specific AI systems that your team can use immediately.</span>
            </p>
            
            <div className="grid md:grid-cols-2 gap-4 my-8 pt-8">
              {[
                'Customer support gets faster response templates and smarter routing systems.',
                'Marketing gets campaign automation and content frameworks.',
                'Sales gets prospecting tools and follow-up workflows.',
                'Operations gets process documentation and error-catching systems.'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-blue-950/20 border border-blue-500/10">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl font-semibold text-white pt-4">
              We handle the training. We build the systems. Your team shows up and starts winning.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What Happens When Your Team Goes
            <span className="text-blue-400"> AI-First</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            Transform your entire organization with measurable, immediate results
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx} 
                className="bg-[#0f0f0f] border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-xl bg-blue-950/30 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-950/50 transition-colors duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            From Overwhelmed to AI-Enabled
            <span className="text-blue-400"> in 4 Steps</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            A proven process that transforms your team from AI-curious to AI-powered
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-2xl bg-[#0a0a0a] border border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-600/30">
                  {step.number}
                </div>
                <div className="mt-6">
                  <h3 className="text-2xl font-bold mb-3 text-white">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg group"
              onClick={() => scrollToSection('contact')}
            >
              Start Your AI Transformation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Proof & Trust Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Built for <span className="text-blue-400">Real Businesses</span>,
            <br />Not Tech Companies
          </h2>
          
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
              LevReg.AI was designed for small business owners who don't have time to learn AI, but need their teams to use it. We've worked with customer support teams drowning in tickets, marketing departments stuck on repetitive tasks, sales teams losing deals to slow follow-up, and operations managers buried in manual workflows.
            </p>
            <p className="text-xl text-white font-semibold">
              The result? Teams that move faster, work smarter, and deliver better outcomes without hiring more people or working longer hours.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">40-60%</div>
                <div className="text-gray-400">Time Saved on Tasks</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">10-20hrs</div>
                <div className="text-gray-400">Saved Per Employee/Week</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">30 Days</div>
                <div className="text-gray-400">to Full ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Stop Waiting.
            <span className="text-blue-400"> Start Winning.</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Your competitors are already using AI. Your team is already overwhelmed. The only question is: how long will you wait to close the gap?
          </p>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group mb-6 transition-all duration-300"
          >
            Book Your AI Enablement Call
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-gray-400">
            Free discovery session. No pressure. Just clarity on what AI can do for your business.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;