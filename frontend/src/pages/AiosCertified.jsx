import React from 'react';
import { Helmet } from 'react-helmet-async';
import LandingFooter from '../components/LandingFooter';
import './AiosCertified.css';

// Swap these when live.
const AUDIT_URL = '#';
const CURRICULUM_URL = '#curriculum';

const faqs = [
  {
    q: 'How is this different from hiring an assistant or an EA placement?',
    a: "A placement firm's product is the person. Ours is the system the person runs. Their training lives in the employee's head and leaves when they do. AiOS lives in your business and stays.",
  },
  {
    q: "I've been burned before. Why is this time different?",
    a: "Because you're not betting on a person this time. The system is installed before the operator arrives, the operator is certified on it before they see your business, and the meter shows you what shipped every week. The risk you got burned by is the exact risk this structure removes.",
  },
  {
    q: 'Do I have to learn AI?',
    a: "No. That's the point. The operator manages the AI layer and reports to you. You stay the CEO.",
  },
  {
    q: 'What does the operator actually do all day?',
    a: "They run the engines. They keep marketing shipping, sales following up, and support resolving. They manage the AI, maintain the system, and write your weekly meter report. You'll see the work, not manage it.",
  },
  {
    q: 'What happens if the operator quits?',
    a: 'The machine stays. Your context, your engines, and your workflows live in your business, not in their head. We place a new certified operator into the same running system.',
  },
  {
    q: 'I already use ChatGPT. Why would I need this?',
    a: "A chat window with no context produces generic output, which is why the seats go unused. AiOS is your business's context wired into engines that ship real work... with a trained human accountable for it.",
  },
  {
    q: "What's the commitment?",
    a: 'Start with the free Leverage Audit. If it makes sense, most owners start with the Pilot, read the meter for a month, and decide from evidence.',
  },
];

const compareRows = [
  ['Find a better person, hope they stay', 'Install the system, then staff it'],
  ['Knowledge lives in the employee\'s head', 'Knowledge lives in your business'],
  ['Inputs on a brochure', 'Outputs on a meter'],
  ['The hire leaves, you start over', 'Fire the operator, keep the machine'],
  ['You stay the operator, with helpers', 'You run the company'],
];

const testimonials = [
  {
    arc: 'Shipped output / revenue result',
    body: 'Client name, company, before state, specific shipped-output or revenue result, timeframe.',
    who: 'PLACEHOLDER · Client Name, Company',
  },
  {
    arc: 'Burned by previous hire → week one',
    body: 'Client name, company — burned by previous hire arc → operator shipping in week one.',
    who: 'PLACEHOLDER · Client Name, Company',
  },
  {
    arc: 'Operator transition → machine stayed',
    body: 'Client name, company — operator transition story → "the machine stayed."',
    who: 'PLACEHOLDER · Client Name, Company',
  },
];

const AiosCertified = () => {
  return (
    <>
    <div className="lr2 aios-certified">
      <Helmet>
        <title>AiOS-Certified Operator — LevReg.AI</title>
        <meta
          name="description"
          content="We install AiOS — the operating system that runs your marketing, sales, and support with AI — then place an AiOS-Certified Operator to run it. Book your free Leverage Audit."
        />
        <link rel="canonical" href="https://levreg.ai/aios-certified" />
      </Helmet>

      <div className="ac-brand-bar">
        <a href="https://levreg.ai" aria-label="LevReg.AI home">
          <img className="brand-logo" src="/LevReg_BlackBlue.png" alt="LevReg.AI" />
        </a>
        <span className="product-name">AiOS-Certified Operator</span>
      </div>

      {/* ─── HERO ────────────────────────────────────── */}
      <section className="hero wrap">
        <div className="hero-eyebrow ac-reveal">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">System first. Hire second.</span>
        </div>

        <div className="hero-grid stacked">
          <div>
            <h1 className="headline ac-reveal ac-reveal-d1">
              You&apos;re the CEO on paper, but your activities say <em>operator</em>.
            </h1>
            <div className="hero-sub ac-reveal ac-reveal-d2">
              <p style={{ marginBottom: '0.85em' }}>
                We install AiOS. The operating system that runs your marketing, sales, and support with AI.
              </p>
              <p style={{ marginBottom: '0.85em' }}>
                Then we place an AiOS-Certified Operator to run it.
              </p>
              <p style={{ marginBottom: '0.85em' }}>
                The work ships every week and you get the updates.
              </p>
              <p style={{ marginBottom: 0 }}>
                And you get back the job only you can do.
              </p>
            </div>
            <div className="hero-ctas ac-reveal ac-reveal-d3">
              <a href={AUDIT_URL} className="btn btn-primary btn-lg">Book Your Leverage Audit →</a>
              <a href="#how-it-works" className="btn btn-lg">See how AiOS works</a>
            </div>
            <p className="hero-fine">
              Free. 30 minutes. You leave with a map of where your business leaks hours, context, and money. Whether we work together or not.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AUTHORITY ───────────────────────────────── */}
      <section className="ac-authority wrap">
        <div className="ac-authority-inner">
          <p>
            Built by Nate Kennedy. 21 years as the hired gun behind 7 and 8 figure businesses. 7 companies built and sold. $100M+ in ad spend managed. Rebuilt his own company on AI after a $250K month became a $9K month.
          </p>
          <div className="ac-placeholder-chips" aria-label="Results placeholders">
            <span className="ac-chip"><span className="tag">PLACEHOLDER</span> Operators placed</span>
            <span className="ac-chip"><span className="tag">PLACEHOLDER</span> Verified client results</span>
          </div>
        </div>
      </section>

      {/* ─── CALENDAR TEST ───────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 01 — The calendar test</span>
            <h2>Run the calendar test.</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>Open last week.</p>
          <p>Count the hours only a CEO could have spent.</p>
          <p>Now count the hours spent approving, chasing, explaining, and fixing.</p>
          <p className="pull">That second number is why growth stalled.</p>
          <p>Not because you aren&apos;t working hard enough.</p>
          <p>Because you&apos;re working two jobs...</p>
          <p>...and the operator job is eating the CEO alive.</p>
        </div>
      </section>

      <div className="rule wrap" aria-hidden="true"></div>

      {/* ─── FAILED HANDOFFS ─────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 02 — What you already tried</span>
            <h2>You already tried to hand it off.</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>The VA who needed a walkthrough for everything. You spent more time managing them than doing it yourself.</p>
          <p>The agency retainer that sent a monthly PDF you couldn&apos;t connect to revenue.</p>
          <p>Maybe a &quot;top 1%&quot; placement. Five times the cost. Better. But still waiting on your context, your approvals, your answers.</p>
          <p>And the AI tools that were supposed to change everything. The seats are still sitting there, unused.</p>
          <p className="pull">Every one of those fixes had the same flaw.</p>
          <p>Each one handed your business to someone who had to carry the whole thing in their head.</p>
          <p>So every road led back through you.</p>
        </div>
      </section>

      <div className="rule wrap" aria-hidden="true"></div>

      {/* ─── THESIS ──────────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 03 — The wrong order</span>
            <h2>You didn&apos;t hire wrong. You hired in the wrong order.</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>The entire placement industry runs on one sequence.</p>
          <p className="pull">Person first. System never.</p>
          <p>They vet harder. Train longer. Certify more.</p>
          <p>Then they drop that person into the same chaos that burned out the last one.</p>
          <p>And when that person leaves, everything they knew leaves with them.</p>
          <p>The industry warns you that AI without an operator is a liability.</p>
          <p>True.</p>
          <p>Here&apos;s the half nobody says out loud.</p>
          <p className="pull">An operator without a system is just another hire you have to manage.</p>
        </div>
      </section>

      {/* ─── HOW IT WORKS ────────────────────────────── */}
      <section id="how-it-works" className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 04 — System first</span>
            <h2>System first. Hire second.</h2>
          </div>
          <div className="right">
            <p>AiOS is the operating system we install in your business before anyone is hired. One OS. Three engines.</p>
          </div>
        </div>

        <div className="ac-engine-grid">
          <article className="ac-engine">
            <span className="k">Engine 01</span>
            <h3>Marketing that ships</h3>
            <p>Emails, campaigns, content, and ads that go out every week and sound like you.</p>
          </article>
          <article className="ac-engine">
            <span className="k">Engine 02</span>
            <h3>Sales that follows up</h3>
            <p>Every lead touched, every pipeline stage moved, nothing going cold in a forgotten inbox.</p>
          </article>
          <article className="ac-engine">
            <span className="k">Engine 03</span>
            <h3>Support that resolves</h3>
            <p>Customers answered fast, in your voice, without landing on your desk.</p>
          </article>
        </div>

        <div className="s-head stacked" style={{ marginTop: '72px', marginBottom: '40px' }}>
          <div className="left">
            <span className="num">Here&apos;s how it goes in</span>
            <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 44px)' }}>Audit. Install. Place. Meter.</h2>
          </div>
        </div>

        <div className="process">
          <div className="step">
            <div className="step-num">0<em>1</em></div>
            <h4>The Leverage Audit</h4>
            <p>We map where your business leaks hours, context, and money... and which processes still live in someone&apos;s head.</p>
          </div>
          <div className="step">
            <div className="step-num">0<em>2</em></div>
            <h4>The Install</h4>
            <p>We build the engines from your actual business. Your voice. Your offers. Your customers. Your way of deciding.</p>
          </div>
          <div className="step">
            <div className="step-num">0<em>3</em></div>
            <h4>The Placement</h4>
            <p>An AiOS-Certified Operator steps into a running machine. Productive in days. The industry&apos;s average handoff takes 100.</p>
          </div>
          <div className="step">
            <div className="step-num">0<em>4</em></div>
            <h4>The Meter</h4>
            <p>Every week, a written report of what shipped. Per engine. In plain numbers.</p>
          </div>
        </div>
      </section>

      <div className="rule wrap" aria-hidden="true"></div>

      {/* ─── OUTPUTS ─────────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 05 — Outputs, not inputs</span>
            <h2>Ask any placement firm one question. What shipped last week?</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>You&apos;ll hear about vetting ratios.</p>
          <p>Training hours.</p>
          <p>Certificates.</p>
          <p>Those are inputs. Inputs are what you&apos;re asked to take on faith.</p>
          <p className="pull">AiOS reports outputs.</p>
          <p>What marketing shipped. What sales touched. What support resolved.</p>
          <p>In writing. Every week.</p>
          <p>You don&apos;t trust the ROI. You read it.</p>
        </div>
      </section>

      {/* ─── COMPARISON ──────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 06 — Side by side</span>
            <h2>The old way vs AiOS.</h2>
          </div>
        </div>
        <table className="ac-compare">
          <thead>
            <tr>
              <th scope="col">The old way</th>
              <th scope="col">AiOS</th>
            </tr>
          </thead>
          <tbody>
            {compareRows.map(([oldWay, aios]) => (
              <tr key={oldWay}>
                <td>{oldWay}</td>
                <td>{aios}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* ─── OPERATOR ────────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 07 — About the operator</span>
            <h2>Certified on the machine they&apos;ll run.</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>AiOS-Certified Operators are trained and certified on the system before they ever see your business.</p>
          <p>Not certified in general. Certified on AiOS... the machine they&apos;ll be running in your company.</p>
          <p>The certificate belongs to the system, and the system belongs to you.</p>
          <p>
            We publish what the certification actually covers. The curriculum, the exam, what fails a candidate.{' '}
            <a href={CURRICULUM_URL} className="ac-inline-link">Certification curriculum</a>
            .
          </p>
          <p>No black box. No &quot;trust our vetting.&quot;</p>
        </div>
      </section>

      {/* ─── ORIGIN ──────────────────────────────────── */}
      <section className="ac-origin">
        <div className="section wrap">
          <div className="s-head stacked">
            <div className="left">
              <span className="num">// 08 — Where this came from</span>
              <h2>This came out of a $9K month.</h2>
            </div>
          </div>
          <div className="ac-prose">
            <p>My company was doing $250K a month. Overhead was $85K a month. Most of it people doing repetitive work.</p>
            <p>Then one month, revenue dropped to $9K.</p>
            <p>The $85K didn&apos;t care.</p>
            <p>I didn&apos;t rehire my way out.</p>
            <p>I rebuilt. One process at a time. System first. People only where a system needed hands.</p>
            <p>Smaller team. More profit. Out of the daily grind.</p>
            <p>And a business that no longer depended on any one person&apos;s memory. Including mine.</p>
            <p>AiOS is that rebuild, turned into a product.</p>
            <p>I place the operator last because I learned the hard way what happens when people are the system.</p>
            <p className="ac-signoff">— Nate Kennedy</p>
          </div>
        </div>
      </section>

      {/* ─── THE SWAP ────────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 09 — The swap</span>
            <h2>Then the swap happens.</h2>
          </div>
        </div>
        <div className="ac-prose">
          <p>The operator takes the operator job.</p>
          <p>You take back the one only you can do.</p>
          <p>The strategy. The deals. The direction. The life the company was supposed to buy you.</p>
          <p className="pull">And you join the room.</p>
          <p>Every AiOS placement includes membership in the Uncommon CEO mastermind... owners who made the same move, comparing meters instead of war stories.</p>
          <p>Placement gets you the operator.</p>
          <p>It also gets you the room.</p>
        </div>
      </section>

      {/* ─── PRICING ─────────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 10 — Pricing</span>
            <h2>Three ways to start. One program.</h2>
          </div>
          <div className="right">
            <p>The numbers, flat.</p>
          </div>
        </div>

        <div className="ac-pricing">
          <div className="ac-price featured">
            <span className="term">Annual</span>
            <span className="amount">$36,000</span>
          </div>
          <div className="ac-price">
            <span className="term">Quarterly</span>
            <span className="amount">$10,800</span>
          </div>
          <div className="ac-price">
            <span className="term">Monthly</span>
            <span className="amount">$4,000</span>
          </div>
        </div>

        <p className="ac-price-note">
          Full install. All engines. A dedicated AiOS-Certified Operator. Weekly meter reports. Uncommon CEO membership included.
        </p>
        <p className="ac-price-note" style={{ marginTop: '16px' }}>
          Every premium placement firm charges about the same $36,000 a year. The difference is what&apos;s left if the person leaves. With them, a vacancy. With AiOS, your machine.
        </p>
      </section>

      {/* ─── GUARANTEE ───────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 11 — Guarantee</span>
            <h2>Our Guarantee</h2>
          </div>
        </div>
        <div className="ac-guarantees">
          <div className="ac-guarantee">
            <h3>The Machine Stays.</h3>
            <p>If your operator leaves or isn&apos;t the right fit, we certify and place another. The system never leaves your business.</p>
          </div>
          <div className="ac-guarantee">
            <h3>The 30-Day Meter.</h3>
            <p>If your first month&apos;s reports don&apos;t show real work shipped, you don&apos;t pay for month two.</p>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ────────────────────────────── */}
      <section className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 12 — Results</span>
            <h2>What clients say.</h2>
          </div>
          <div className="right">
            <p>Placeholders until verified results are live.</p>
          </div>
        </div>
        <div className="ac-quotes">
          {testimonials.map((t) => (
            <blockquote key={t.arc} className="ac-quote">
              <span className="arc">PLACEHOLDER · {t.arc}</span>
              <p className="body">{t.body}</p>
              <footer className="who">{t.who}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─────────────────────────────────────── */}
      <section id="faq" className="section wrap">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 13 — Questions</span>
            <h2>Questions founders ask first.</h2>
          </div>
        </div>
        <div className="faq">
          {faqs.map((item, i) => (
            <details key={item.q} open={i === 0}>
              <summary>
                {item.q}
                <span className="icon" aria-hidden="true">+</span>
              </summary>
              <div className="a">{item.a}</div>
            </details>
          ))}
        </div>
      </section>

      {/* ─── FINAL CTA ───────────────────────────────── */}
      <section id="audit" className="cta-band">
        <div className="cta-band-inner">
          <span className="mono-label k">// Next step</span>
          <h2 style={{ marginTop: '20px' }}>Book the Leverage Audit.</h2>
          <p>
            30 minutes. Free. We map where your business leaks hours, context, and money... and which processes still live in someone&apos;s head.
          </p>
          <p>
            You leave with the map either way. If AiOS fits, we&apos;ll show you exactly what the install would look like. If it doesn&apos;t, you&apos;ll know that too.
          </p>
          <div className="btns">
            <a href={AUDIT_URL} className="btn btn-primary btn-lg">Book Your Leverage Audit →</a>
          </div>
          <p className="fine">We certify and place a limited number of operators per month</p>
          <p className="ac-closer" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            The calendar test takes two minutes. Run it. Then decide which job you want to be doing next Monday.
          </p>
        </div>
      </section>
    </div>
    <LandingFooter />
    </>
  );
};

export default AiosCertified;
