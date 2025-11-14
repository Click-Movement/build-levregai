import React from 'react';
import { ArrowRight, Target, Heart, Lightbulb, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Practicality Over Hype',
      description: 'We don&apos;t care about buzzwords. We care about results. If it doesn&apos;t make your team faster or better, we don&apos;t build it.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'People-First Technology',
      description: 'AI should make employees feel like superheroes, not make them feel replaceable. Every system we build puts humans in control.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Small Business Obsession',
      description: 'We&apos;re not building for enterprises. We&apos;re building for the businesses that can&apos;t afford to waste time or money on tools that don&apos;t work.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Accountability',
      description: 'We measure everything. If we say you&apos;ll see productivity gains, we track them. If something doesn&apos;t work, we fix it.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const scrollToContact = () => {
    window.location.href = '/contact';
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative py-24 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/10 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-500/20 mb-8">
            <Heart className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-300">Our Story</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            We Built <span className="text-blue-400">LevReg.AI</span> Because CEOs
            <br />
            Shouldn&apos;t Have to Become AI Experts
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            The story behind the mission to make every small business AI-first.
          </p>
        </div>
      </section>

      {/* Founder Story Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            It Started with a
            <span className="text-blue-400"> Simple Question</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
            <p className="text-2xl font-semibold text-white text-center mb-8">
              "Why are small businesses getting left behind?"
            </p>
            
            <p>
              We saw it everywhere. CEOs drowning in work. Teams buried in manual tasks. Everyone knowing AI could help, but no one having the time or expertise to make it happen.
            </p>
            
            <p>
              The big companies? They hire AI teams. They build internal systems. They move fast.
            </p>
            
            <p>
              Small businesses? They get sold courses. Generic chatbot access. Vague promises about "transformation." <span className="text-white font-semibold">That&apos;s not training. That&apos;s abandonment.</span>
            </p>
            
            <p className="text-xl text-white font-semibold pt-4">
              So we built something different. LevReg.AI isn&apos;t a course. It&apos;s not a tool. It&apos;s a full-service AI enablement partner that comes into your business, understands your workflows, and installs systems your team can actually use. We do the hard part, so you can focus on running your business.
            </p>
          </div>
        </div>
      </section>

      {/* AI-First Vision */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            What It Means to Be
            <span className="text-blue-400"> AI-First</span>
          </h2>
          
          <div className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 md:p-12">
            <p className="text-xl text-gray-300 leading-relaxed mb-6">
              An AI-first company doesn&apos;t replace humans with robots. It amplifies human capability with intelligent systems.
            </p>
            
            <div className="space-y-4 mt-8">
              {[
                'Your customer support team answers twice as many tickets without working longer hours.',
                'Your marketing team ships campaigns in days instead of weeks.',
                'Your operations run smoothly even when someone&apos;s on vacation.',
                'Your employees feel empowered, not overwhelmed.'
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300 text-lg">{text}</span>
                </div>
              ))}
            </div>
            
            <p className="text-xl text-white font-semibold mt-8 pt-8 border-t border-gray-800">
              That&apos;s what we&apos;re building. One small business at a time.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Technology <span className="text-blue-400">Enhances People.</span>
            <br />
            It Doesn&apos;t Replace Them.
          </h2>
          
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We believe in a future where AI makes work better—not scarcer. Where employees feel more capable, not more anxious. Where small businesses compete on speed and intelligence, not just budget. Where the tools are so good, so intuitive, and so specific to your needs that using them feels like an unfair advantage.
          </p>
          
          <p className="text-2xl text-white font-bold mt-8">
            That&apos;s not a distant dream. That&apos;s what we&apos;re installing right now.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            What <span className="text-blue-400">Drives Us</span>
          </h2>
          <p className="text-xl text-gray-400 text-center mb-16 max-w-2xl mx-auto">
            The principles that guide everything we build
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, idx) => (
              <Card 
                key={idx} 
                className="bg-[#0f0f0f] border-gray-800 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{value.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-lg">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 px-6 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-950/30 border border-red-500/20 mb-8">
            <Clock className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-300">Time Is Running Out</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Small Businesses Can&apos;t
            <br />
            <span className="text-blue-400">Afford to Wait</span>
          </h2>
          
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed mb-12">
            <p>
              AI isn&apos;t coming. It&apos;s here. Your competitors are using it. Your customers expect the speed and accuracy it enables. Your employees are burning out doing work that could be automated.
            </p>
            <p className="text-xl text-white font-semibold">
              The gap between AI-enabled businesses and everyone else is widening every day.
            </p>
            <p className="text-2xl text-white font-bold pt-4">
              You can close it. But only if you act now.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-xl group transition-all duration-300"
            onClick={scrollToContact}
          >
            Book Your Free Discovery Call
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            The <span className="text-blue-400">Impact</span> We&apos;re Making
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-[#0f0f0f] border border-gray-800">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-3">
                3x
              </div>
              <div className="text-gray-400">Average productivity increase</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-[#0f0f0f] border border-gray-800">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-3">
                30 Days
              </div>
              <div className="text-gray-400">To full ROI for most clients</div>
            </div>
            <div className="text-center p-8 rounded-xl bg-[#0f0f0f] border border-gray-800">
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600 mb-3">
                100%
              </div>
              <div className="text-gray-400">Focused on small businesses</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
