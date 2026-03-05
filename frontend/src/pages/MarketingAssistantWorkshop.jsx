import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, X, Clock, Zap, CalendarDays } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const THRIVECART_URL = 'https://cmo.thrivecart.com/ai-marketing-assistant-workshop/';

const walkAwayItems = [
  'Your own AI marketing assistant, built live during the training and ready to use that same day',
  'A system customized to your specific business, audience, and voice — not a one-size-fits-all template',
  'The ability to generate multiple marketing angles for any product, service, or offer on demand',
  'An assistant that produces emails, social posts, ad copy, and sales messaging in minutes',
  'Content that sounds like you wrote it — because the assistant is trained on your voice and your market',
  'The confidence to stop second-guessing your marketing and start publishing faster than ever',
];

const forYouItems = [
  'You\'re a business owner or entrepreneur who handles your own marketing (or wishes it were a lot easier)',
  'You\'ve tried AI tools but the output felt generic, robotic, and unhelpful',
  'You\'re spending too many hours every week on content and copy that should be faster to produce',
  'You want a marketing assistant that works for your business specifically — not a generic chatbot',
  'You\'re ready to stop working harder and start working smarter',
];

const notForYouItems = [
  'You think AI is a passing fad and aren\'t interested in new tools',
  'You\'re looking for a magic button that does everything without any effort (you\'ll need to show up and build alongside us)',
  'You already have a full marketing team handling everything and don\'t need to speed up your own output',
];

const deliverables = [
  '90-minute live, hands-on session (not a recording — you\'ll build in real time)',
  'Walk out with a working AI marketing assistant customized to your business',
  'Generate angles, copy, emails, and social content on demand — in minutes',
  'An assistant that sounds like you, not a robot',
  'Live Q&A so you leave with zero questions',
];

const timeBreakdown = [
  { hours: '3–4 hrs', task: 'Brainstorming marketing angles and messaging' },
  { hours: '2–3 hrs', task: 'Writing and rewriting emails and social posts' },
  { hours: '1–2 hrs', task: 'Trying to make content not sound generic' },
  { hours: '1+ hrs', task: 'Second-guessing your copy before you hit publish' },
];

const MarketingAssistantWorkshop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Install Your AI Marketing Assistant in 90 Minutes | LevReg.Ai</title>
        <meta name="description" content="A hands-on live training where you'll build and install a custom AI marketing assistant that handles your daily marketing in minutes instead of hours. Only $100." />
        <link rel="canonical" href="https://levreg.ai/workshop/marketing-assistant" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/workshop/marketing-assistant" />
        <meta property="og:title" content="Install Your AI Marketing Assistant in 90 Minutes" />
        <meta property="og:description" content="A hands-on live training where you'll build a custom AI marketing assistant for your business. Only $100." />
        <meta property="og:site_name" content="LevReg.Ai" />
      </Helmet>

      <div className="workshop-theme min-h-screen bg-background text-foreground">

        {/* SECTION 1: HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">
              Live Virtual Workshop — Only $100
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-foreground text-shadow-green">
              Install Your Own AI Marketing Assistant in 90 Minutes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-4 leading-relaxed">
              A hands-on live training where you'll build and install a custom AI marketing assistant that handles your daily marketing in minutes instead of hours — ready to use the moment you leave.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-10">
              <CalendarDays className="w-5 h-5" />
              <span>Thursday, March 12, 2026 — 2:00 PM EST</span>
            </div>
            <a href={THRIVECART_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Reserve Your Seat — $100
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              Limited seats available. Once they're filled, registration closes.
            </p>
          </div>
        </section>

        {/* SECTION 2: PAIN / COST */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-foreground tracking-tight">
              Let me ask you something honest.
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed space-y-4 text-center mb-16">
              <p>
                How many hours did you spend last week staring at a blank screen, trying to come up with the right words for your marketing?
              </p>
              <p>
                The social post. The email. The ad. The angle that would actually make someone stop scrolling and pay attention.
              </p>
              <p>
                If you're like most business owners, the answer is: <span className="text-foreground font-semibold">too many.</span>
              </p>
              <p>
                And here's what makes it worse. You know AI is supposed to help. You've probably even tried ChatGPT a few times. But the output felt… generic. Robotic. Not like you. So you went back to doing it the hard way.
              </p>
              <p>
                That's because typing a question into a chatbot isn't the same as having a marketing assistant that actually understands your business, your voice, and your audience.
              </p>
              <p className="text-foreground font-semibold text-xl pt-4">
                What if you could install one that does?
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-extrabold mb-8 text-center text-foreground tracking-tight">
              Here's What "Doing It Yourself"{' '}
              <span className="text-primary">Actually Costs You</span>
            </h3>
            <Card className="bg-card border-2 border-primary/30 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="space-y-4 mb-6">
                  {timeBreakdown.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">
                        <span className="text-foreground font-bold">{item.hours}</span> {item.task}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-6 text-center">
                  <p className="text-2xl font-extrabold text-primary mb-2">= 7–10+ hours per week of grinding.</p>
                  <p className="text-muted-foreground">
                    That's 30–40 hours a month you could be spending closing deals, serving clients, or building something that actually grows your business.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 3: THE SOLUTION */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              Introducing:{' '}
              <span className="text-primary">Install Your AI Marketing Assistant</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-12 space-y-4 text-center">
              <p>
                This isn't a lecture about AI. It's not a demo where you watch someone else do the work. And it's definitely not a surface-level overview of "10 AI tools you should try."
              </p>
              <p>
                This is a live, hands-on training where you will actually build and install your own AI marketing assistant — from scratch, in real time, with guidance every step of the way.
              </p>
              <p>
                By the end of this 90-minute session, you'll have a working AI marketing assistant customized to your business — one that can generate marketing angles, write copy, create social content, and draft emails on demand.
              </p>
              <p className="text-foreground font-semibold">
                You're not subscribing to someone else's tool. You're not learning theory. You're walking out with something you built yourself that's ready to work for your business the moment the training ends.
              </p>
            </div>

            <h3 className="text-2xl font-extrabold text-foreground mb-8 text-center">What You'll Walk Away With</h3>
            <div className="max-w-3xl mx-auto space-y-4 mb-12">
              {walkAwayItems.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <p className="text-muted-foreground leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href={THRIVECART_URL} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Reserve Your Seat — $100
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 4: BEFORE / AFTER */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              What Your Marketing Looks Like{' '}
              <span className="text-primary">After This Training</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
              <Card className="bg-card border border-destructive/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-destructive mb-4">BEFORE</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You sit down to write a marketing email. You stare at the screen. You draft something, delete it, try again. An hour later, you have something that's "good enough." You repeat this every time you need to create content.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-2 border-primary/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">AFTER</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    You open your AI marketing assistant, tell it what you need, and in minutes you have a polished draft that sounds like you and speaks directly to your audience. You review it, adjust if needed, and hit publish. Done. On to the next thing that actually grows your business.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-foreground font-semibold text-lg mt-10">
              Same you. Same business. Different speed. Different energy. Different results.
            </p>
          </div>
        </section>

        {/* SECTION 5: URGENCY / COMPETITIVE */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
              This Isn't Just About Saving Time.{' '}
              <span className="text-primary">It's About Staying Competitive.</span>
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>Here's the reality nobody wants to say out loud:</p>
              <p className="text-foreground font-semibold text-xl">
                AI isn't coming. It's here. And it's moving fast.
              </p>
              <p>
                The entrepreneurs who install AI into their business now are going to pull ahead. They'll produce more content, test more angles, reach more customers, and do it all in a fraction of the time.
              </p>
              <p>
                The ones who wait? They'll keep working 10x harder for the same results. And they'll wonder why their competitors seem to be everywhere while they're still stuck grinding out one social post at a time.
              </p>
              <p className="text-foreground font-semibold">
                This training is the on-ramp. In 90 minutes, you go from "I know I should be using AI" to "I just installed an AI marketing assistant that's already working for my business."
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-foreground tracking-tight">
              Is This Training <span className="text-primary">For You?</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-2 border-primary/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">This training is for you if:</h3>
                  <div className="space-y-4">
                    {forYouItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-destructive/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">This probably isn't for you if:</h3>
                  <div className="space-y-4">
                    {notForYouItems.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* SECTION 7: WHAT YOU GET */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-foreground tracking-tight">
              Here's What <span className="text-primary">You Get</span>
            </h2>

            <Card className="bg-primary/10 border-2 border-primary/40 max-w-2xl mx-auto">
              <CardContent className="p-8 md:p-10">
                <div className="text-center mb-8">
                  <p className="text-primary font-medium tracking-wide uppercase text-sm mb-2">Live Virtual Training</p>
                  <h3 className="text-2xl font-extrabold text-foreground">Install Your AI Marketing Assistant</h3>
                </div>
                <div className="space-y-4 mb-8">
                  {deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-border pt-6 text-center">
                  <p className="text-muted-foreground text-sm mb-2">Investment</p>
                  <p className="text-5xl font-extrabold text-primary mb-2">$100</p>
                  <p className="text-muted-foreground text-sm mb-8">
                    That's less than what most entrepreneurs waste in a single week on marketing tasks their AI assistant could handle in minutes.
                  </p>
                  <a href={THRIVECART_URL} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="w-full glow-green-hover text-lg font-bold h-14 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    >
                      Reserve Your Seat — $100
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* SECTION 8: THE MATH */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
              Let's Do <span className="text-primary">the Math</span>
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto mb-10">
              <p>
                If your AI marketing assistant saves you just 5 hours a week — and it will save you more — that's <span className="text-foreground font-bold">20 hours a month</span> you get back.
              </p>
              <p>
                What's your time worth?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
              <Card className="bg-card border border-border">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-1">At $50/hour</p>
                  <p className="text-3xl font-extrabold text-foreground">$1,000<span className="text-lg text-muted-foreground font-normal">/mo</span></p>
                  <p className="text-muted-foreground text-sm mt-1">in reclaimed time</p>
                </CardContent>
              </Card>
              <Card className="bg-card border-2 border-primary/30">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground text-sm mb-1">At $100/hour</p>
                  <p className="text-3xl font-extrabold text-primary">$2,000<span className="text-lg text-muted-foreground font-normal">/mo</span></p>
                  <p className="text-muted-foreground text-sm mt-1">in reclaimed time</p>
                </CardContent>
              </Card>
            </div>

            <p className="text-foreground font-semibold text-xl max-w-2xl mx-auto">
              You're investing $100 once to get back thousands of dollars in productive time every single month.
            </p>
            <p className="text-primary font-semibold mt-2">
              The return starts the same day you attend.
            </p>
          </div>
        </section>

        {/* SECTION 9: UPSELL TEASE */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-foreground tracking-tight">
              Want to Go Even Deeper?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              After the live training, you'll have the option to join an in-depth workshop where we take your AI marketing assistant to the next level — building complete marketing systems, automating your content pipeline, and turning your assistant into a full marketing engine for your business.
            </p>
            <p className="text-foreground font-semibold mb-6">
              But first things first. The live training gives you a working assistant and everything you need to start saving hours immediately.
            </p>
            <Link to="/workshop" className="text-primary hover:underline font-medium">
              Learn about the full AI OS Workshop &rarr;
            </Link>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight text-shadow-green">
              Stop Grinding.{' '}
              <span className="text-primary">Start Installing.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-2 max-w-2xl mx-auto leading-relaxed">
              In 90 minutes, you'll have an AI marketing assistant doing what used to take you all week.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary font-medium mb-10">
              <CalendarDays className="w-5 h-5" />
              <span>Thursday, March 12, 2026 — 2:00 PM EST</span>
            </div>
            <a href={THRIVECART_URL} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Reserve Your Seat — $100
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-muted-foreground text-sm mt-4">
              $100 | Live Virtual Training | 90 Minutes | Install Your AI Marketing Assistant
            </p>

            <div className="max-w-2xl mx-auto mt-16 text-left space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">P.S.</span> You're not signing up for a class. You're installing something into your business that starts working for you the moment the training ends. Ninety minutes from now, you'll have an AI marketing assistant handling the work that used to eat up your entire week.
              </p>
              <p>
                <span className="text-foreground font-semibold">P.P.S.</span> A year from now, there will be two kinds of business owners: the ones who installed AI into their business early, and the ones still trying to catch up. This training puts you in the first group for $100.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default MarketingAssistantWorkshop;
