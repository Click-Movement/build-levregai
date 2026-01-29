// Case Studies Data - All 10 AI Implementation Case Studies

export const pillars = {
  IMPLEMENTATION: 'Implementation Over Information',
  SYSTEMS: 'Systems Over Tools',
  AUTOMATION: 'Automation Before Delegation',
  LEVERAGE: 'Leverage Over Revenue',
  TIME_FREEDOM: 'Time Freedom Is the Real Metric'
};

export const pillarColors = {
  [pillars.IMPLEMENTATION]: 'from-blue-500 to-cyan-500',
  [pillars.SYSTEMS]: 'from-purple-500 to-indigo-500',
  [pillars.AUTOMATION]: 'from-green-500 to-emerald-500',
  [pillars.LEVERAGE]: 'from-orange-500 to-amber-500',
  [pillars.TIME_FREEDOM]: 'from-indigo-500 to-blue-600'
};

export const caseStudies = [
  {
    id: 8,
    slug: 'ai-gatekeeper-phone-receptionist',
    title: 'The AI Gatekeeper',
    subtitle: 'How a Local Business Reclaimed Their Phone Line',
    pillar: pillars.AUTOMATION,
    industry: 'Local Business',
    icon: 'Phone',
    problem: `A local business owner was drowning in phone calls. Not good calls—a flood of interruptions that pulled them away from actual work. Half were spam. The other half were a mix of tire-kickers, wrong numbers, and the occasional legitimate inquiry buried in the noise.

The obvious solution? Hire a receptionist. Someone to sit by the phone, screen calls, and route the important ones through.

But that's a $35,000+ annual commitment for what amounts to a filtering function. And human receptionists get overwhelmed, take breaks, call in sick, and can't work after hours when many calls come in.`,
    system: [
      'Built an AI voice receptionist that handles the entire front-line phone experience:',
      'Answers every call instantly—no hold music, no "please wait"',
      'Screens for intent: Is this a sales call? A spam call? A legitimate inquiry?',
      'Handles spam and robocalls automatically—they never reach the owner',
      'Books appointments directly into the calendar for qualified callers',
      'Transfers important calls to the owner with context: "This is [Name] calling about [Reason]"',
      'The system doesn\'t just answer calls. It makes decisions',
      'It knows the difference between a vendor pitch and a customer inquiry',
      'It can handle basic questions without escalation',
      'When a call matters, it routes it through with full context'
    ],
    result: `The owner went from being interrupted 20+ times daily to receiving only the calls that actually required their attention—typically 3-5 per day. Appointments now book automatically. Spam calls disappeared entirely. And they never hired that receptionist.`,
    metrics: {
      before: '20+ daily interruptions',
      after: '3-5 important calls',
      savings: '$35,000+/year',
      automation: 'Appointment booking'
    },
    quote: "If you're hiring for tasks that don't require judgment, you're building a job, not a business.",
    principle: `Before you hire someone to answer phones, ask: Does this task require human judgment, or just human-like interaction? Screening calls, booking appointments, and filtering spam don't require judgment. They require consistency. That's exactly what AI excels at.`
  },
  {
    id: 9,
    slug: 'sleeping-database-reactivation',
    title: 'The Sleeping Database',
    subtitle: 'How a Med Spa Reactivated Past Clients',
    pillar: pillars.LEVERAGE,
    industry: 'Healthcare & Wellness',
    icon: 'Database',
    problem: `A local med spa had a problem hiding in plain sight: a database full of past customers they weren't talking to.

These weren't cold leads. These were people who had already walked through the door, experienced the service, and paid for it. Many were overdue for their next appointment.

But reaching out to them required someone on staff to manually sort through records, identify who was due, make phone calls, send messages, and follow up.

Nobody had time for that. So the database sat there—thousands of potential appointments, completely dormant.

The owner knew the revenue was there. They just couldn't figure out how to unlock it without hiring someone whose entire job was making outbound calls.`,
    system: [
      'Built an outbound AI reactivation system that works the database automatically:',
      'Scans the customer database daily to identify clients due for service',
      'Initiates personalized outreach via phone and text',
      'Handles the conversation: "Hi [Name], it\'s been [X months] since your last [Service]. Would you like to book your next appointment?"',
      'Books appointments directly into the scheduling system',
      'Follows up with non-responders on a cadence—without being annoying',
      'The system doesn\'t blast everyone at once',
      'Works methodically through the database, prioritizing high-value clients and recent customers first',
      'Adapts timing based on response patterns',
      'Knows when to stop—no one gets harassed'
    ],
    result: `Past customer appointments increased by 25%. This wasn't new customer acquisition—it was revenue that already existed in their database, finally unlocked.

The med spa added significant monthly revenue without spending a dollar on advertising or hiring additional staff.`,
    metrics: {
      before: 'Dormant database',
      after: '25% increase',
      investment: '$0 on ads/staff',
      type: 'Existing customers'
    },
    quote: 'Revenue is what you make. Leverage is what you keep—in money and time.',
    principle: `Most businesses are sitting on untapped leverage. Before you spend money acquiring new customers, ask: Are we fully extracting value from the customers we already have? The highest-ROI marketing isn't always finding new people—it's reactivating the ones who already trust you.`
  },
  {
    id: 10,
    slug: 'five-minute-window-lead-response',
    title: 'The 5-Minute Window',
    subtitle: 'How AI Stopped Leads From Going Cold',
    pillar: pillars.TIME_FREEDOM,
    industry: 'Sales & Lead Generation',
    icon: 'Zap',
    problem: `A business owner had a good problem: too many inbound leads. Their marketing was working. Forms were being filled out. Phone calls were coming in. But their team couldn't keep up.

Here's the thing about inbound leads: speed matters. Data consistently shows that responding within 5 minutes versus 30 minutes can increase conversion rates by 8x or more. After an hour, most leads have moved on—they've contacted your competitor, lost interest, or simply forgotten why they reached out.

The owner's team was doing their best, but "their best" meant response times of 2-4 hours during business hours. After 5pm and on weekends? Leads sat until Monday morning.

They were generating leads and watching them go cold. The obvious fix—hire more people—would mean more overhead, more management, and still no coverage at 2am when leads don't stop coming in.`,
    system: [
      'Built a speed-to-lead AI system that responds to every inquiry within 5 minutes, 24/7:',
      'Monitors all lead sources: form submissions, phone calls, chat, email',
      'Initiates contact within 5 minutes via phone call AND text message',
      'Qualifies the lead: What do they need? What\'s their timeline? Are they a fit?',
      'Books qualified leads directly onto the sales calendar',
      'Works 24/7—weekends, holidays, 3am—whenever leads come in',
      'The AI doesn\'t just send a generic "thanks for reaching out" message',
      'It has a real conversation. It asks the right questions',
      'It pre-screens so the sales team only talks to qualified prospects',
      'Does this whether the lead comes in at 10am or 10pm'
    ],
    result: `Lead response time dropped from hours to under 5 minutes—every single time. The sales team now receives pre-qualified appointments instead of cold leads to chase.

Weekend and after-hours leads, previously lost, now convert at the same rate as business-hours leads. The owner's team works normal hours while the system works around the clock.`,
    metrics: {
      before: '2-4 hours response',
      after: 'Under 5 minutes',
      coverage: '24/7/365',
      conversion: '8x improvement'
    },
    quote: "If your business can't run without you, you don't own a business—you ARE the business.",
    principle: `The goal isn't to work more hours or hire more people to cover more hours. The goal is to build systems that work when you don't. A business that requires human presence to capture revenue isn't scalable—it's just a job with better marketing. True leverage means the system performs whether you're awake or not.`
  },
  {
    id: 1,
    slug: 'daily-newsletter-production',
    title: 'Daily Newsletter Production',
    subtitle: 'From 3 Hours to 5 Minutes Per Day',
    pillar: pillars.IMPLEMENTATION,
    industry: 'Content & Publishing',
    icon: 'FileText',
    problem: `A newsletter brand had built a successful daily publication—but success had become a trap. The founder spent 3 hours every single day producing content. That's 15+ hours per week on a repetitive process. Not strategy. Not growth. Just production.

They knew how to write their newsletter. They had their rules, their voice, their format. The knowledge wasn't the problem. The execution was eating their time.`,
    system: [
      'Documented everything: the decision rules, the formatting preferences, the voice guidelines, the research process',
      'Built an automated production system that follows those exact rules—every day, without prompting',
      'The system now produces a complete draft each morning based on their established methodology',
      'Same quality. Same voice. Same strategic approach. Zero manual production time'
    ],
    result: `3 hours per day → 5 minutes per day.

The founder now reviews, approves, and sends. That's it. They got 2 hours and 55 minutes back—every single day. Over 14 hours per week they can now spend on growth, partnerships, or simply not working.

This wasn't about 'using AI to write faster.' It was about installing a system that eliminated an entire category of work.`,
    metrics: {
      before: '3 hours/day',
      after: '5 minutes/day',
      timeSaved: '2h 55min daily',
      weeklySavings: '14+ hours/week'
    },
    quote: 'Information is free. Implementation is valuable. Installation is rare.',
    principle: `This case demonstrates why implementation beats information. The founder already knew how to write their newsletter—they'd been doing it successfully for years. What they needed wasn't more knowledge. They needed someone to install a system that codified their knowledge and ran it automatically. That's the gap we fill: taking what you already know works and turning it into infrastructure that compounds.`
  },
  {
    id: 2,
    slug: 'content-production-at-scale',
    title: 'Content Production at Scale',
    subtitle: '15 Articles Daily—From 45 Minutes Each to 2 Minutes Each',
    pillar: pillars.SYSTEMS,
    industry: 'Content & Publishing',
    icon: 'Edit3',
    problem: `A content company was producing 15 articles per day. Each piece took 30-45 minutes—and they had a team of writers doing the work. That's 7.5 to 11+ hours of daily labor, plus the management overhead of coordinating multiple people.

The content was good. The process was brutal. And scaling meant hiring more writers, which meant more management, more inconsistency, more overhead.`,
    system: [
      "Didn't just 'add AI' to their workflow—documented the entire system",
      'Captured how they research, how they structure, what their brand voice sounds like, what their quality standards are',
      'Built a production engine that follows those exact specifications',
      'Each morning, the system produces all 15 pieces in their documented voice',
      'The team shifted from production to quality control—reviewing and refining rather than creating from scratch'
    ],
    result: `30-45 minutes per article → 2 minutes per article.

That's a 93-95% reduction in production time. The team that used to spend their day writing now spends their day on strategy, distribution, and optimization.

More importantly: they can now scale content production without scaling headcount. The system handles volume. Humans handle judgment.`,
    metrics: {
      before: '30-45 min/article',
      after: '2 min/article',
      reduction: '93-95%',
      dailyVolume: '15 articles'
    },
    quote: "If your AI strategy is 'use this tool,' you don't have a strategy—you have a dependency.",
    principle: `This is systems thinking in action. We didn't hand them a tool and say 'figure it out.' We designed a complete production system where the AI layer is just one component. The voice documentation, the quality standards, the review process—those are the system. The AI is replaceable. The system is the asset.`
  },
  {
    id: 3,
    slug: 'private-lending-documentation',
    title: 'Private Lending Documentation',
    subtitle: 'From Attorney-Dependent to Automated—With Built-In Compliance',
    pillar: pillars.AUTOMATION,
    industry: 'Legal & Finance',
    icon: 'Scale',
    problem: `A private lender had a dangerous inconsistency problem. Every loan required multiple legal documents, but the process wasn't systematized. Sometimes documents were incomplete. Sometimes formatting varied. Sometimes critical clauses were missed.

In lending, documentation errors aren't just inefficient—they're liability. Every inconsistency is a potential legal exposure. The solution had been having an attorney draft each document set from scratch. Expensive, slow, and still dependent on a single point of failure.`,
    system: [
      'Built an automated document generation system',
      'The lender fills out one online form with the loan details',
      'The system produces all six required documents—properly formatted, legally consistent, with all required clauses in place',
      "The attorney's role shifted from drafting to reviewing",
      'Same legal oversight, fraction of the time and cost',
      'The system handles production; the attorney handles judgment calls'
    ],
    result: `One form submission → six complete loan documents, generated in minutes.

No more inconsistency. No more missing clauses. No more expensive attorney hours spent on repetitive drafting. The documents are right every time because the system follows the same rules every time.

Legal review time dropped significantly because attorneys are checking correct documents, not fixing errors.`,
    metrics: {
      before: 'Attorney drafts each set',
      after: '6 docs in minutes',
      consistency: '100%',
      output: 'One form → 6 documents'
    },
    quote: "If you're hiring for tasks that don't require judgment, you're building a job, not a business.",
    principle: `This is the 'automation before delegation' principle in high-stakes practice. The old model: pay attorneys to do repetitive document production. The new model: automate the production, pay attorneys for their actual expertise—legal judgment. Humans should do what requires judgment. Systems should do what requires consistency. When you flip that, you're paying premium rates for commodity work.`
  },
  {
    id: 4,
    slug: 'training-content-repurposing',
    title: 'Training Content Repurposing',
    subtitle: 'From Manual Post-Production to Automatic Asset Generation',
    pillar: pillars.LEVERAGE,
    industry: 'Coaching & Training',
    icon: 'Video',
    problem: `A business coach running a high-level group is doing weekly training calls. Great content. Engaged members. One problem: everything that happened after the call was manual.

Pull down transcripts. Edit transcripts. Create summaries. Download video. Edit video. Upload video. Extract highlights. Find member wins. Package for marketing.

They had added some AI touchpoints—summaries, mostly—but the process was still a time sink. Every week, the same post-production grind.`,
    system: [
      'Built an end-to-end content processing engine',
      'The moment a call ends, the system takes over:',
      'Pulls and processes the video automatically',
      'Extracts and cleans the transcript',
      'Generates a structured summary',
      'Identifies member questions and wins',
      'Packages everything for distribution and marketing',
      'No manual intervention required',
      'The system runs the same process every time, automatically triggered by call completion'
    ],
    result: `What used to take hours of post-production now happens automatically. The team wakes up to finished assets.

But the bigger win: those member wins and questions now get captured and used. Before, they were buried in recordings. Now they're extracted, organized, and ready for marketing—every single week.

The coach went from creating content to leveraging content. Same calls, significantly more value extracted.`,
    metrics: {
      before: 'Hours of manual work',
      after: 'Fully automated',
      frequency: 'Every week',
      extraValue: 'Wins & questions captured'
    },
    quote: 'Revenue is what you make. Leverage is what you keep—in money and time.',
    principle: `This is leverage in its purest form. The calls were already happening. The content already existed. But without a system to extract and distribute that value, most of it was lost. Leverage isn't about working more. It's about extracting more value from work you're already doing. This system turned one weekly call into a content engine.`
  },
  {
    id: 5,
    slug: 'community-intelligence-extraction',
    title: 'Community Intelligence Extraction',
    subtitle: 'Turning Group Engagement Into Marketing Intelligence—Automatically',
    pillar: pillars.SYSTEMS,
    industry: 'Community & Marketing',
    icon: 'Users',
    problem: `A large, active Facebook group was generating massive engagement: wins, questions, challenges, success stories. All of it valuable. All of it getting lost in the scroll.

The marketing team knew this data was gold for refining avatars, improving campaigns, and understanding what resonates. But manually monitoring and extracting insights from hundreds of daily posts? Not sustainable. The information existed—it just wasn't accessible.`,
    system: [
      'Built an intelligence agent that monitors the group continuously',
      'Every day, it:',
      'Scans all new posts and comments',
      'Categorizes by type: wins, questions, challenges, testimonials',
      'Extracts patterns and recurring themes',
      'Compiles an organized report for the marketing team',
      'Routes support issues to the right people automatically',
      'The community keeps behaving naturally',
      'The system captures the intelligence behind the scenes'
    ],
    result: `The marketing team now starts each day with an organized intelligence brief. No more digging through posts. No more missing critical feedback. No more relying on memory or random sampling.

Campaigns improved because they're now built on real, current community language—not assumptions from six months ago. Support response times improved because issues surface immediately.

The team shifted from monitoring to executing. The system handles surveillance; humans handle strategy.`,
    metrics: {
      before: 'Manual monitoring',
      after: 'Daily intelligence brief',
      coverage: '100% of posts',
      impact: 'Improved campaigns & support'
    },
    quote: "If your AI strategy is 'use this tool,' you don't have a strategy—you have a dependency.",
    principle: `This is systems thinking applied to community management. The tool (the AI agent) matters less than the system it enables: continuous intelligence extraction feeding directly into marketing and support operations. The output isn't 'AI summaries.' It's a decision-making advantage that compounds over time.`
  },
  {
    id: 6,
    slug: 'team-visibility-and-communication',
    title: 'Team Visibility and Communication',
    subtitle: 'From Operational Blindness to Daily Clarity',
    pillar: pillars.TIME_FREEDOM,
    industry: 'Operations & Management',
    icon: 'Calendar',
    problem: `A business owner had no visibility into what their team was actually doing each day. No shared system. No consistent communication. Just fragmented updates and guesswork.

The result: constant interruptions to check on progress, questions getting stuck because no one knew who to ask, team members duplicating work because they couldn't see what others were doing. The owner was spending mental energy on coordination instead of leadership.`,
    system: [
      'Installed a structured daily operations system',
      'Team members log activities, tasks, and questions in one place',
      'An AI agent processes everything overnight and delivers an end of day briefing to the owner:',
      'What each person completed yesterday',
      'What each person is working on today',
      'What questions need answers',
      'Where potential bottlenecks exist',
      'The team sees the same information—creating natural coordination without meetings'
    ],
    result: `The owner went from constantly checking in to receiving one clear report. Questions that used to create delays now get surfaced and answered same day. Team members started coordinating naturally because they could see each other's work.

But the real result: the owner stopped being the communication bottleneck. The system handles information flow. The owner handles decisions that actually require their judgment.`,
    metrics: {
      before: 'Constant check-ins',
      after: 'One daily report',
      impact: 'Natural team coordination',
      ownerRole: 'Strategic decisions only'
    },
    quote: "If your business can't run without you, you don't own a business—you ARE the business.",
    principle: `Time freedom isn't about working fewer hours—it's about spending those hours on what matters. This owner was spending significant mental energy on 'what's everyone doing?' energy that created zero value. The system didn't add capability. It removed friction. That's often where the biggest leverage lives.`
  },
  {
    id: 7,
    slug: 'brand-voice-and-content-system',
    title: 'Brand Voice and Content System',
    subtitle: 'From Writer\'s Block to Consistent Output—On Autopilot',
    pillar: pillars.IMPLEMENTATION,
    industry: 'Content & Marketing',
    icon: 'Sparkles',
    problem: `A business owner knew they needed consistent content—newsletters, social posts, subscriber communication. They also knew their brand had a specific voice. The problem wasn't capability. It was execution.

Every piece of content meant staring at a blank page, fighting writer's block, trying to remember 'how do I say this in my voice?' The knowledge existed in their head. Getting it out consistently was the bottleneck.`,
    system: [
      'Started by extracting what was already there: analyzing their existing content, identifying their voice patterns, documenting their avatar\'s language and pain points',
      'Built that into an automated content system',
      'The system now produces newsletters and social content that sounds like them—because it was trained on how they actually communicate',
      'Not generic AI output. Their voice, systematized'
    ],
    result: `Writer's block eliminated. Consistent content production without the mental drain of starting from scratch.

The owner now reviews and refines rather than creates from zero. Same voice. Same quality. Fraction of the mental energy. Content happens on schedule because it's systematized, not dependent on motivation or inspiration.`,
    metrics: {
      before: 'Writer\'s block',
      after: 'Consistent output',
      effort: 'Review vs. create',
      consistency: 'On schedule'
    },
    quote: 'The gap isn\'t knowledge. Everyone knows they \'should\' be using AI. The gap is implementation.',
    principle: `This is the implementation gap in action. The owner knew what good content looked like. They knew their voice. They knew their audience. What they didn't have was a system that turned that knowledge into consistent execution. We didn't teach them about content. We installed the system that makes content happen.`
  }
];

// Helper function to get case study by slug
export const getCaseStudyBySlug = (slug) => {
  return caseStudies.find(study => study.slug === slug);
};

// Helper function to get related case studies (same pillar, different study)
export const getRelatedCaseStudies = (currentSlug, limit = 3) => {
  const currentStudy = getCaseStudyBySlug(currentSlug);
  if (!currentStudy) return [];
  
  const related = caseStudies
    .filter(study => 
      study.slug !== currentSlug && 
      study.pillar === currentStudy.pillar
    );
  
  // If not enough in same pillar, add from other pillars
  if (related.length < limit) {
    const others = caseStudies
      .filter(study => 
        study.slug !== currentSlug && 
        study.pillar !== currentStudy.pillar
      )
      .slice(0, limit - related.length);
    return [...related, ...others];
  }
  
  return related.slice(0, limit);
};

// Get unique industries
export const getIndustries = () => {
  return [...new Set(caseStudies.map(study => study.industry))];
};

// Filter case studies by pillar
export const filterByPillar = (pillar) => {
  if (!pillar || pillar === 'all') return caseStudies;
  return caseStudies.filter(study => study.pillar === pillar);
};

// Filter case studies by industry
export const filterByIndustry = (industry) => {
  if (!industry || industry === 'all') return caseStudies;
  return caseStudies.filter(study => study.industry === industry);
};
