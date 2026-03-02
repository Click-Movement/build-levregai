import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, X, Users, Brain, Zap, Target, FileText, Copy, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqItems = [
  {
    q: 'Do we need any technical skills or coding experience?',
    a: 'No. Everything we build uses tools you already have access to — like ChatGPT and Claude. No coding, no custom development, no IT department required.',
  },
  {
    q: 'Can I bring team members?',
    a: 'Absolutely. If you have key team members — department heads, senior operators, or people who will be working with the AI employees day-to-day — you\'re welcome to bring them. The workshop works great whether it\'s just you or you plus your core team. The more of your people who are in the room, the faster adoption happens afterward.',
  },
  {
    q: 'What tools do we need?',
    a: 'Paid accounts for ChatGPT (Plus or Team) and/or Claude (Pro). That\'s it. We build inside the native project features of these platforms — no additional software required.',
  },
  {
    q: 'How is this different from hiring an AI consultant or buying a course?',
    a: 'Courses give you theory. Consultants give you recommendations. We give you a working system — built live, with your data, alongside you. You don\'t leave with a plan. You leave with AI employees that are already producing output and the knowledge to manage them yourself.',
  },
  {
    q: 'What if I\'ve already been using AI in my business?',
    a: 'Good — that means you have context and likely some training materials ready to go. Most businesses using AI are doing it at the task level with no overarching strategy. We\'ll restructure that into a role-based operating system that\'s dramatically more effective.',
  },
  {
    q: 'Will the AI employees work autonomously after the workshop?',
    a: 'They\'ll work with you and your team immediately. Full autonomy comes over time as you validate their output and layer in automation. We follow a "prove then automate" philosophy — which is how you avoid expensive mistakes and build real trust in the system.',
  },
  {
    q: 'What kind of results can I expect?',
    a: 'Most clients see immediate capacity gains — best people reclaim hours per week, critical work that was stalled gets moving, and new strategic capabilities come online that they couldn\'t afford to hire for. The compound effect over 90 days is where it gets significant.',
  },
  {
    q: 'What happens after the workshop?',
    a: 'Within 48 hours, you receive the complete workshop playbook — all outputs, SOPs, and your implementation roadmap. Every AI employee has a check-in date built into the roadmap. We recommend bi-weekly check-ins for the first 90 days and a half-day refresh at the 6-month mark (available separately).',
  },
  {
    q: 'Is my company data safe?',
    a: 'We use the native security features of platforms like ChatGPT and Claude. Your data stays in your accounts, in your projects. We don\'t store, access, or retain any of your proprietary information after the workshop.',
  },
];

const frameworkSteps = [
  {
    number: '1',
    title: 'Think in Roles, Not Tasks',
    description: 'We don\'t build "a GPT that writes emails." We build an AI Head of Marketing who understands your positioning, your competitive landscape, your scorecard, and your quarterly goals — and then recommends what your team should execute and why.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    number: '2',
    title: 'Clone Your Best People',
    description: 'Your best employee is your biggest bottleneck. The AI OS starts by duplicating them — capturing how they think, what they know, and how they make decisions — so their expertise is available on demand, without pulling them off their highest-leverage work.',
    icon: <Copy className="w-6 h-6" />,
  },
  {
    number: '3',
    title: 'Plug the Gaps',
    description: 'Can\'t afford a CFO? Build one. Need a sales analyst crunching pipeline data at a level no human has time for? Done. The AI OS fills the roles your org chart needs but your budget or talent pool can\'t support yet.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    number: '4',
    title: 'Follow the Hiring Process',
    description: 'Every AI employee gets recruited, onboarded, trained, validated, and upleveled — just like a real hire. Clear job descriptions. Proprietary training materials. Ongoing performance reviews. This is what makes them actually useful instead of generically smart.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    number: '5',
    title: 'Prove, Then Automate',
    description: 'We don\'t start with fancy automations. We start with AI employees you interact with directly — testing their output, correcting their mistakes, building trust. Only after they\'ve proven themselves do we layer on automation.',
    icon: <Shield className="w-6 h-6" />,
  },
];

const problems = [
  {
    title: 'AI Overwhelm',
    description: 'A new tool every week. A new agent, workflow, or automation promising to change everything. You can\'t keep up, and the more you try, the further behind you feel. Nothing sticks. Nothing compounds. You\'re collecting tools instead of building a system.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'A-Player Overwhelm',
    description: 'Your best people — the ones you\'d clone if you could — are buried. They\'re doing $500/hour thinking wedged between $15/hour tasks because there\'s nobody to hand things to. Every new initiative dies on someone\'s already-full plate.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Missing Unicorns',
    description: 'There are roles you need but can\'t afford. Or can\'t find. A great analyst, a CFO, a head of marketing — any of them would change the game. But the budget or the talent pool keeps saying "not yet." So critical work just... doesn\'t get done.',
    icon: <Target className="w-6 h-6" />,
  },
];

const day1Deliverables = [
  {
    title: 'A clear North Star for your AI strategy',
    description: 'We don\'t jump into building. We start by defining what success looks like for your business in the next 12-24 months and how AI accelerates that vision. You\'ll lock in a specific, ambitious AI goal that becomes the filter for every decision in the workshop.',
  },
  {
    title: '2-3 measurable success metrics',
    description: 'A goal without metrics is a wish. You\'ll define exactly how you\'ll know your AI OS is working — concrete numbers your business can track, like hours reclaimed, roles filled, capacity gained, or revenue impacted.',
  },
  {
    title: 'Real-world AI inspiration tailored to your business',
    description: 'We research and review how other companies — inside and outside your industry — are using AI employees and operating systems to grow. You\'ll see what\'s working in the real world and pull the ideas that apply to your situation.',
  },
  {
    title: 'A complete AI Org Chart design',
    description: 'You\'ll map out the specific AI employee roles your business needs — not 36 generic templates, but the 5-8 roles that address your actual bottlenecks, gaps, and growth goals. Each role comes with a clear hypothesis: "If we build this, then this happens."',
  },
];

const day2Deliverables = [
  {
    title: '5-8 custom AI employees — live and working',
    description: 'We build each AI employee together, inside ChatGPT and/or Claude. Every one gets a custom job description tailored to your brand, your processes, and your standards. We upload your proprietary training materials — brand guides, SOPs, scorecards, competitive intel — so they know your business from day one.',
  },
  {
    title: 'Validated, stress-tested output',
    description: 'We don\'t just build and hope for the best. We put every AI employee through real scenarios from your business — correcting mistakes, filling gaps, and iterating until they perform like they\'ve been on your team for months.',
  },
  {
    title: 'Documented SOPs for every AI role',
    description: 'Every AI employee comes with a clear standard operating procedure: who uses it, when, how to interact with it, what "good" looks like, and how to feed it new information over time. No guesswork after you leave.',
  },
  {
    title: 'A 90-day implementation roadmap',
    description: 'We map each AI employee to a timeline — what launches immediately, what needs additional training, and what comes online over the next 90 days and beyond. Every role gets an owner and a check-in date so nothing falls through the cracks.',
  },
  {
    title: 'A complete workshop playbook',
    description: 'Everything from both days — the strategy, the AI employees, the SOPs, the roadmap — captured in a single playbook delivered within 48 hours. Your reference guide for running and scaling the system going forward.',
  },
];

const totalDeliverables = [
  'A clear AI strategy with a defined North Star goal and 2-3 measurable success metrics',
  '5-8 custom AI employees built, trained, and validated on your business',
  'Documented SOPs for every AI employee role',
  'A 90-day implementation roadmap with owners and check-in dates',
  'A complete workshop playbook delivered within 48 hours',
  'The knowledge to manage, improve, and scale your AI OS independently',
];

const forYou = [
  'You run a real business with real operations, real team members, and real complexity',
  'You\'ve tried AI tools and gotten inconsistent, underwhelming results — not because AI doesn\'t work, but because nobody showed you how to make it work for your business',
  'Your best people are maxed out and you need to multiply their capacity without multiplying your headcount',
  'You have roles you need filled — strategist, analyst, assistant, copywriter — but the budget or talent isn\'t there yet',
  'You want a system, not a hack. Something that compounds over time and makes your entire company more capable',
  'You\'re ready to commit two days to build something that changes how your business runs',
];

const notForYou = [
  'You\'re pre-revenue or still figuring out what you sell',
  'You want a fully automated, hands-off AI solution (that doesn\'t exist yet — and anyone selling it is lying)',
  'You\'re looking for a course you can "get to later"',
  'You don\'t have any existing processes, documentation, or institutional knowledge to train AI on',
];

const processSteps = [
  {
    number: '1',
    title: 'Apply below.',
    description: 'Takes about 5 minutes. Tell us about your business and what you\'re looking to accomplish.',
  },
  {
    number: '2',
    title: 'We review and respond within 48 hours.',
    description: 'If it looks like a fit, we schedule a short call to align on scope, logistics, and pre-workshop prep.',
  },
  {
    number: '3',
    title: 'Pre-workshop prep.',
    description: 'We\'ll send you a short list of materials to gather — brand guides, SOPs, scorecards, process docs — anything that will make your AI employees smarter from day one.',
  },
  {
    number: '4',
    title: 'We build your AI OS together.',
    description: 'Two days. Real strategy. Real output. A system you can run the day after the workshop ends.',
  },
];

const AiOsWorkshop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>AI OS Workshop | Build Your AI Operating System in 2 Days | LevReg.Ai</title>
        <meta name="description" content="Leverage the 2-Day AI Takeover to automate 80% of your busywork. Build an AI-Powered Command Center to run your entire business — even if you don't know a thing about technology." />
        <link rel="canonical" href="https://levreg.ai/workshop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://levreg.ai/workshop" />
        <meta property="og:title" content="AI OS Workshop | Build Your AI Operating System in 2 Days" />
        <meta property="og:description" content="Leverage the 2-Day AI Takeover to automate 80% of your busywork. Build an AI-Powered Command Center to run your entire business." />
        <meta property="og:site_name" content="LevReg.Ai" />
      </Helmet>

      <div className="workshop-theme min-h-screen bg-background text-foreground">

        {/* SECTION 1: HERO */}
        <section className="relative min-h-screen flex items-center justify-center px-6 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">
              The Art of Building a Business That Runs Itself
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-foreground text-shadow-green">
              Leverage The "2-Day AI Takeover" To Automate 80% of Your Busywork and Free Yourself to Actually Grow Your Business.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Now you can build an AI-Powered "Command Center" to run your entire business... even if you don't know a thing about technology
            </p>
            <Link to="/workshop/apply">
              <Button
                size="lg"
                className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Apply for Your AI OS Workshop
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              Limited to 5 companies per month. Application required.
            </p>
          </div>
        </section>

        {/* SECTION 2: PROBLEM AGITATION */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              You Don't Have an AI Problem.{' '}
              <span className="text-primary">You Have an AI Mess.</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 text-center">
              <p>
                You've tried ChatGPT. Maybe Claude. Probably a handful of "game-changing" tools that changed nothing.
              </p>
              <p>
                You watched the tutorials. Ran a few prompts. Got mediocre results. Moved on. Maybe your team has too — everyone doing their own thing with AI, none of it connected, none of it compounding.
              </p>
              <p>And now you're stuck in one of three places:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {problems.map((problem, idx) => (
                <Card key={idx} className="bg-card border-border border transition-all duration-300 hover:border-primary/50">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-5">
                      {problem.icon}
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{problem.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto text-center">
              Here's the uncomfortable truth: The gap between companies that are <em>using</em> AI and companies that are <em>leveraging</em> AI is growing every single week. And playing with prompts isn't going to close it.
            </p>
          </div>
        </section>

        {/* SECTION 3: THE SHIFT / BIG IDEA */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              Strategy First. AI Second.{' '}
              <span className="text-primary">That's What Makes This Work.</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 text-center">
              <p>
                Most AI workshops hand you a bunch of prompts, walk through a demo, and wish you luck.
              </p>
              <p>
                That's like hiring ten employees on the same day with no org chart, no job descriptions, and no plan for who does what.
              </p>
              <p className="text-foreground font-semibold">
                The AI OS Workshop is built differently.
              </p>
              <p>
                We don't start with technology. We start by helping you get crystal clear on where your business is going, what success actually looks like, and exactly where AI fits into that picture. Then we build the system — together, live, in real time.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: 'Strategy before software.',
                  text: 'We don\'t skip to the tech. We start by defining a clear North Star for your AI strategy — what you\'re building toward and how you\'ll measure it.',
                  icon: <Brain className="w-5 h-5" />,
                },
                {
                  title: 'The process is structured and facilitated.',
                  text: 'This isn\'t a brainstorm or an open-ended discussion. Every step is designed to produce clear decisions and real output — not just ideas.',
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  title: 'Decisions get made — not deferred.',
                  text: 'You make the calls at every stage. No "let\'s circle back" or "we\'ll figure it out later." By the end of Day 2, everything is decided, built, and documented.',
                  icon: <CheckCircle className="w-5 h-5" />,
                },
                {
                  title: 'You leave with real things built, not just a strategy deck.',
                  text: 'By the end of the workshop, your AI employees are live, trained, validated, and documented with SOPs you can use immediately.',
                  icon: <Zap className="w-5 h-5" />,
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-foreground font-semibold text-lg mt-12">
              This isn't a planning meeting. It's a strategic buildout.
            </p>
            <div className="text-center mt-10">
              <Link to="/workshop/apply">
                <Button
                  size="lg"
                  className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Apply for Your AI OS Workshop
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 4: THE FRAMEWORK */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              The AI OS Framework:{' '}
              <span className="text-primary">Roles, Not Tasks</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 text-center">
              <p>
                Most people use AI like a calculator — punch in a question, get an answer, move on.
              </p>
              <p>
                That's task-level thinking. It's why most businesses get task-level results from AI.
              </p>
              <p>The AI OS framework is built on a fundamentally different approach:</p>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {frameworkSteps.map((step, idx) => (
                <div key={idx} className="relative p-8 bg-card border border-border rounded-xl hover:border-primary/50 transition-all duration-300 group">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: THE WORKSHOP (WHAT YOU GET) */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              What Happens in Your{' '}
              <span className="text-primary">2-Day AI OS Workshop</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 text-center">
              <p>
                This isn't a webinar. It's not a course. It's not "watch us demo and figure it out yourself."
              </p>
              <p>
                This is two full days of intensive, hands-on work where we build your complete AI Operating System alongside you — strategy, AI employees, SOPs, and a roadmap to keep it all moving forward.
              </p>
              <p>
                You can also bring key team members if you'd like — the process works whether it's just you or you plus your core leadership.
              </p>
            </div>

            {/* Day 1 */}
            <div className="mb-12">
              <Card className="bg-card border-2 border-primary/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 px-8 py-5 border-b border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        D1
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-foreground">DAY 1: STRATEGY & DESIGN</h3>
                        <p className="text-primary text-sm font-medium">You arrive with questions. You leave with total clarity.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Day 1 is about getting clear — on where your business is going, where AI fits, and exactly which AI employees will move the needle most.
                    </p>
                    <p className="text-foreground font-semibold mb-6">By the end of Day 1, you will have:</p>
                    <div className="space-y-6">
                      {day1Deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-primary font-medium italic mt-8 text-sm">
                      You end Day 1 knowing exactly what you're building and why — before a single AI employee gets created.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Day 2 */}
            <div className="mb-12">
              <Card className="bg-card border-2 border-primary/30 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-primary/10 px-8 py-5 border-b border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                        D2
                      </div>
                      <div>
                        <h3 className="text-2xl font-extrabold text-foreground">DAY 2: BUILD & LAUNCH</h3>
                        <p className="text-primary text-sm font-medium">You arrive with a strategy. You leave with a working system.</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-8">
                    <p className="text-muted-foreground leading-relaxed mb-8">
                      Day 2 is about turning your Day 1 strategy into real, functioning AI employees — built, trained, tested, and documented.
                    </p>
                    <p className="text-foreground font-semibold mb-6">By the end of Day 2, you will have:</p>
                    <div className="space-y-6">
                      {day2Deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                          <div>
                            <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                            <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-primary font-medium italic mt-8 text-sm">
                      You end Day 2 with a complete, working AI Operating System — not a plan for one, but the actual thing, built and ready to run.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Total Deliverables */}
            <Card className="bg-primary/10 border-2 border-primary/40">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-extrabold text-foreground mb-6 text-center">TOTAL WORKSHOP DELIVERABLES</h3>
                <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                  {totalDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <div className="text-center mt-10">
              <Link to="/workshop/apply">
                <Button
                  size="lg"
                  className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Apply for Your AI OS Workshop
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHO THIS IS FOR */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              This Is For <span className="text-primary">Operators</span>, Not Experimenters
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              The AI OS Workshop is built for a very specific type of business owner.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-2 border-primary/30">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">This is for you if:</h3>
                  <div className="space-y-4">
                    {forYou.map((item, idx) => (
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
                  <h3 className="text-xl font-bold text-foreground mb-6">This is NOT for you if:</h3>
                  <div className="space-y-4">
                    {notForYou.map((item, idx) => (
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

        {/* SECTION 7: THE COST OF WAITING */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">
              Every Week You Wait,{' '}
              <span className="text-primary">the Gap Gets Wider</span>
            </h2>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-4 max-w-3xl mx-auto">
              <p>Here's what's happening right now in your market:</p>
              <p>
                Your competitors aren't just "using AI." They're building AI operating systems — structured, strategic, and integrated into how their companies actually run.
              </p>
              <p>
                They're cloning their best people. Filling gaps on their org charts. Giving their teams leverage that compounds week after week.
              </p>
              <p>
                Meanwhile, most business owners are still at the prompt level. Still trying a new tool every Monday. Still getting generic output that sounds like it was written by a college intern.
              </p>
              <p className="text-foreground font-semibold text-xl pt-4">
                The difference between those two categories isn't talent. It isn't budget. It's that the companies pulling ahead stopped playing with AI tools and started building AI systems.
              </p>
              <p className="text-primary font-semibold">
                That's exactly what this workshop does — in two days.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 8: CTA / APPLICATION FORM */}
        <section id="apply" className="py-24 px-6 bg-secondary">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-foreground tracking-tight">
              Ready to Build Your{' '}
              <span className="text-primary">AI Operating System?</span>
            </h2>
            <div className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed mb-16 space-y-4 text-center">
              <p>
                The AI OS Workshop is a 2-day, done-with-you engagement built around your business.
              </p>
              <p>
                Because every business is different, we start with an application. This lets us understand your company, your goals, and your current state — so we can confirm fit and come fully prepared to deliver maximum impact.
              </p>
            </div>

            {/* Process Steps */}
            <div className="grid md:grid-cols-4 gap-6 mb-16 max-w-4xl mx-auto">
              {processSteps.map((step, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-foreground text-sm mb-2">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link to="/workshop/apply">
                <Button
                  size="lg"
                  className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                >
                  Apply for Your AI OS Workshop
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <p className="text-muted-foreground text-sm mt-4">
                Limited availability. We work with a small number of companies each month to maintain quality and preparation.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 9: FAQ */}
        <section className="py-24 px-6 bg-background">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-foreground tracking-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className="bg-card border border-border rounded-xl px-6 hover:border-primary/50 transition-all duration-300"
                >
                  <AccordionTrigger className="text-foreground font-semibold text-left py-5 hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* SECTION 10: FINAL CTA */}
        <section className="py-24 px-6 bg-secondary">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-foreground tracking-tight text-shadow-green">
              Stop Playing With AI.{' '}
              <span className="text-primary">Start Running Your Business on It.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Apply for the AI OS Workshop and build the AI Operating System your business has been missing.
            </p>
            <Link to="/workshop/apply">
              <Button
                size="lg"
                className="glow-green-hover text-lg font-bold px-12 py-7 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
              >
                Apply Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="text-muted-foreground text-sm mt-4">
              Limited spots each month. Application takes ~5 minutes.
            </p>
          </div>
        </section>

      </div>
    </>
  );
};

export default AiOsWorkshop;
