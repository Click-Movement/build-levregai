import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './Build.css';

const Build = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="build-page">
      <Helmet>
        <title>LevregAi: Build &amp; Deploy AI Employees</title>
        <meta
          name="description"
          content="The complete system for building AI employees that run your business, trained on your brand, connected to your tools, and executing real workflows without supervision."
        />
      </Helmet>

      <div className="build-wrap">
        <header className="build-header">
          <div className="build-logo">LevregAi</div>
          <a href="#enroll" className="build-nav-cta">Enroll</a>
        </header>

        <div className="build-eyebrow">Build &amp; Deploy AI Employees</div>
        <h1 className="build-h1">The next wave of business growth won&apos;t be built on headcount.</h1>

        <p className="build-lede">
          The companies pulling ahead right now aren&apos;t hiring faster. They&apos;re building differently, with AI employees trained on
          their business, connected to their tools, and executing real workflows without supervision.
        </p>

        <div className="build-video" onClick={() => setShowVideo(true)} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && setShowVideo(true)}>
          {showVideo ? (
            <iframe
              title="LevregAi Overview"
              src=""
              style={{ width: '100%', height: '100%', border: 0, borderRadius: '12px' }}
            />
          ) : (
            <>
              <div className="build-play-btn" />
              <div className="build-video-label">Watch the 4-minute overview</div>
            </>
          )}
        </div>

        <div className="build-cta-cluster">
          <a href="#option-coaching" className="build-btn build-btn-primary">Course + 1:1 Coaching Call</a>
          <a href="#option-course" className="build-btn build-btn-secondary">Unlock Full Course ($2500 Value) For $199</a>
        </div>
        <p className="build-cta-note">Lifetime access. Self-paced. All bonuses included.</p>

        <section className="build-section">
          <h2>Build a business that runs at full capacity, even when you&apos;re not in the room.</h2>
          <p>That&apos;s not a metaphor. It&apos;s the practical outcome of replacing human-bandwidth-dependent operations with AI employees that are trained on your business, connected to your tools, and capable of executing your workflows without supervision.</p>
          <p>Most founders spend years trying to build a business that doesn&apos;t need them for every decision. They hire, they delegate, they document, and they still end up as the bottleneck. The reason isn&apos;t effort. It&apos;s that every solution they&apos;ve tried still depends on human bandwidth, and human bandwidth has a ceiling.</p>
          <p><strong>AI employees don&apos;t.</strong> They work around the clock, they never lose context, they never have a bad day, and when built correctly they produce output that is consistent with your brand and your standards every single time.</p>
          <p className="build-pull">Our curriculum gives you the complete system for building this workforce, including the one step almost everyone skips: building your Business Brain.</p>
          <p>This is the leverage you&apos;ve been looking for. It&apos;s available right now. And it&apos;s built on tools most founders already pay for.</p>
        </section>

        <section className="build-section">
          <h2>AI tools promised to fix this. They didn&apos;t.</h2>
          <p>When AI exploded onto the scene, every founder had the same reaction. <em>Finally, something that can actually take work off the plate.</em> Something that doesn&apos;t need onboarding, doesn&apos;t call in sick, and doesn&apos;t require a performance review.</p>
          <p>But most businesses are still using AI the same way they use a search engine. You type in a question, you get an answer, you move on. It&apos;s useful. It saves a few minutes. But the business still runs on people, the bottlenecks are still there, and the to-do list didn&apos;t get any shorter.</p>
          <p className="build-pull">The gap between &quot;using AI&quot; and &quot;running AI employees&quot; is enormous, and almost nobody is talking about it.</p>
          <p>Instead of hiring a person every time a new function needs to be covered, you build an AI employee, one that is trained specifically on your business, connected to your actual tools, and capable of executing real workflows without being supervised every step of the way.</p>
          <p>These aren&apos;t chatbots. They aren&apos;t prompt templates you copy and paste. They are purpose-built agents that operate inside your systems, handle your processes, and produce real output, the kind that used to require a full-time hire.</p>
          <p>The businesses running this model aren&apos;t just saving money. They&apos;re moving faster, making decisions with better information, and operating at a level of consistency that a human team simply cannot match.</p>
        </section>

        <section className="build-section">
          <h2>The missing piece isn&apos;t better AI. It&apos;s knowing how to build with it.</h2>
          <p>Most founders who try to implement AI agents hit the same dead end. They watch a tutorial, they set up a tool, they spend a weekend tinkering, and nothing actually changes in how the business runs. The agent doesn&apos;t quite fit. The workflow breaks down. It takes more time to manage than it saves.</p>
          <p>The technology works. The problem is that nobody has given them a clear framework for how to think about AI employees, where to start, how to train them properly, and how to plug them into a real business without creating more chaos.</p>
          <p><strong>That framework is exactly what Agentic Leverage was built to deliver.</strong> You don&apos;t need more tools. You need a system. And once you have it, the way you build and run your business changes permanently.</p>
        </section>

        <section className="build-section">
          <h2>Who this is built for</h2>
          <p>This program was designed for founders, operators, and business owners who are serious about building leverage into their company, not just experimenting with AI on the side.</p>
          <div className="build-list">
            <div className="build-list-item"><h3>You&apos;re approaching your next hire</h3><p>And wondering whether there&apos;s a smarter way to scale before you add more headcount.</p></div>
            <div className="build-list-item"><h3>You have a team but you&apos;re still the bottleneck</h3><p>Everything still flows through you, no matter how much you&apos;ve delegated.</p></div>
            <div className="build-list-item"><h3>You&apos;ve tried AI tools and walked away underwhelmed</h3><p>What you were missing wasn&apos;t effort. It was the right architecture.</p></div>
          </div>
          <p style={{ marginTop: '24px' }}>You don&apos;t need a technical background. You don&apos;t need to know how to code. You need a clear process, the right starting point, and a framework that actually maps to how real businesses operate.</p>
        </section>

        <section className="build-section">
          <h2>What this program helps you do</h2>
          <div className="build-list">
            <div className="build-list-item"><h3>Understand the 4 types of AI Employees</h3><p>The core archetypes of AI agents and which ones fit your operational needs, so you stop guessing and start building with a clear blueprint.</p></div>
            <div className="build-list-item"><h3>Choose the right stack</h3><p>Cut through the noise. We show you the exact stack that actually works, so you&apos;re not wasting time on tools that won&apos;t deliver.</p></div>
            <div className="build-list-item"><h3>Design Human-in-the-Loop workflows</h3><p>Maintain quality control while scaling automation. The goal isn&apos;t to remove humans. It&apos;s to free them for higher-leverage work.</p></div>
            <div className="build-list-item"><h3>Pick the right first AI employee to build</h3><p>Identify the highest-leverage bottleneck in your business and automate it immediately. This one decision changes everything.</p></div>
            <div className="build-list-item"><h3>Deploy your first agent into production</h3><p>Step-by-step guidance to ship an agent that&apos;s trained on your brand, connected to your tools, and running in your real workflows.</p></div>
            <div className="build-list-item"><h3>Build an AI Org Chart</h3><p>Map out your future workforce and design how human and AI agents collaborate, so your business scales without chaos.</p></div>
            <div className="build-list-item"><h3>Prioritize the 3 departments AI excels at</h3><p>Discover where AI provides the most immediate ROI in your business and where to focus your buildout first.</p></div>
            <div className="build-list-item"><h3>Build your Business AI Brain</h3><p>Before any AI agent can perform at a high level, it needs to understand your business frameworks, processes, and standards the way your best employee does.</p></div>
          </div>
        </section>

        <section className="build-section" id="curriculum">
          <h2>Agentic Leverage Curriculum</h2>
          <div className="build-module"><div className="build-module-num">Module 1</div><h3>The Operating System Shift</h3><ul><li>Why the old model of hiring for every problem is breaking down</li><li>How AI employees differ from AI tools, and why the distinction changes everything</li><li>What it actually looks like when a business runs on agents instead of people</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 2</div><h3>The 4 Types of AI Employees</h3><ul><li>The four core archetypes every AI-powered business needs</li><li>How to identify which type solves your most urgent bottleneck</li><li>Real examples of each type running inside live businesses</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 3</div><h3>The 3 Departments That Excel With AI Agents</h3><ul><li>The three areas of your business where AI delivers the fastest, highest ROI</li><li>How to prioritize your buildout so you get results in weeks, not months</li><li>Case studies from real businesses running this model right now</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 4</div><h3>Choosing Your Stack</h3><ul><li>The tools that actually work vs. the ones that just make great demos</li><li>How to build inside platforms you already pay for</li><li>What to ignore so you don&apos;t lose six months to tool research</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 5</div><h3>Human in the Loop</h3><ul><li>Why full automation is the wrong goal, and what to do instead</li><li>How to design review checkpoints that keep quality high without slowing you down</li><li>The handoff framework that makes agents feel like trusted team members</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 6</div><h3>Building Your Business Brain</h3><ul><li>Why most AI agents underperform, and how a missing foundation is almost always the cause</li><li>The extraction process for capturing your company&apos;s frameworks, standards, voice, and operating logic</li><li>How to turn your Business Brain into the single source of truth every agent references</li><li>How this replaces the onboarding problem, for new agents and new hires alike</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 7</div><h3>Building Your First AI Employee</h3><ul><li>The exact process to train an agent on your brand, voice, and workflows</li><li>How to connect it to your real tools so it executes, not just advises</li><li>The launch checklist that gets your first agent live this week</li></ul></div>
          <div className="build-module"><div className="build-module-num">Module 8</div><h3>The AI Org Chart</h3><ul><li>How to map your current operations and identify every agent opportunity</li><li>The org chart framework that shows exactly where humans and agents collaborate</li><li>How to present this to your team so they embrace it instead of resist it</li></ul></div>
        </section>

        <section className="build-section">
          <h2>Bonuses included</h2>
          <div className="build-bonus">
            <div className="build-bonus-tag">Bonus 1</div>
            <h3>Your First 3 AI Employees: Done-For-You Blueprints</h3>
            <p>You don&apos;t have to start from scratch. We&apos;re handing you the exact blueprints for the three agents that deliver the fastest results in most businesses.</p>
            <ul>
              <li><strong>Market Research Analyst</strong>Continuously monitors your market, competitors, and customer signals so you always know what&apos;s shifting before it hits you.</li>
              <li><strong>Marketing Content Creator</strong>Trained on your brand voice and content strategy, producing on-brand content at scale without a full creative team.</li>
              <li><strong>Sales Call Analyst</strong>Reviews your sales calls, surfaces objections, tracks conversion patterns, and feeds insights back into your sales process automatically.</li>
            </ul>
          </div>
          <div className="build-bonus"><div className="build-bonus-tag">Bonus 2</div><h3>The Prompt Database</h3><p>Access our internal database of high-converting, battle-tested prompts, organized by use case, department, and agent type. Stop writing prompts from scratch. Start from what already works.</p></div>
          <div className="build-bonus"><div className="build-bonus-tag">Bonus 3</div><h3>The Future of AI Operators: How to Get Paid as One</h3><p>This bonus is worth the entire course. Once you know how to build AI employees, you have a skill businesses are actively paying for right now. This module shows you exactly how to turn your new capabilities into cashflow, helping other businesses build their AI workforce and getting paid well to do it.</p></div>
        </section>

        <section className="build-section">
          <h2>Frequently asked questions</h2>
          <details><summary>What&apos;s included in the course?</summary><p>You get all eight modules, the three done-for-you AI employee blueprints, the Prompt Database, and the AI Operators bonus. Everything is self-paced and yours to keep.</p></details>
          <details><summary>Who should take this course?</summary><p>Founders, CEOs, and leaders who want to scale their operations without scaling their headcount. Also powerful for solopreneurs who want to build the infrastructure for their next stage of growth.</p></details>
          <details><summary>How much AI experience do I need?</summary><p>None required. Most people who join us are already using AI occasionally, but this program is designed to work whether you&apos;re a beginner or someone who&apos;s been experimenting for a while and wants a real system.</p></details>
          <details><summary>What&apos;s included in the 1:1 Coaching Call?</summary><p>The coaching call is a private session where we map your specific business, identify your highest-leverage AI employee opportunity, and build a custom roadmap for your first deployment. You leave with a clear action plan, not just more information.</p></details>
          <details><summary>Do I get lifetime access?</summary><p>Yes. Once you enroll, the course and all bonuses are yours to keep and revisit as your business grows.</p></details>
        </section>

        <section className="build-section" id="enroll">
          <h2>Ready to get started?</h2>
          <p>Choose the option that fits your situation and start building the business that runs because you built something that works.</p>
          <div className="build-pricing">
            <div className="build-price-card" id="option-course">
              <div className="build-price-label">Option 1</div>
              <h3>Course Only</h3>
              <p className="build-desc">All eight modules, all three bonuses, and lifetime access.</p>
              <div className="build-price-amount">$199<span>one-time</span></div>
              <a href="#" className="build-btn build-btn-secondary">Enroll Now</a>
            </div>
            <div className="build-price-card featured" id="option-coaching">
              <span className="build-featured-tag">Most Popular</span>
              <div className="build-price-label">Option 2</div>
              <h3>Course + 1:1 Coaching Call</h3>
              <p className="build-desc">Everything in the course, plus a private session where we map your business and build your custom deployment roadmap together.</p>
              <div className="build-price-amount">$499<span>one-time</span></div>
              <a href="#" className="build-btn build-btn-primary">Work 1:1 With Us</a>
            </div>
          </div>
        </section>

        <footer className="build-footer">
          <p>Questions? Reach us at <a href="mailto:team@levregai.com">team@levregai.com</a></p>
          <p style={{ marginTop: '8px' }}>&copy; {new Date().getFullYear()} LevregAi. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Build;
