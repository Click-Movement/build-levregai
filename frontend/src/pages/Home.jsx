import React from 'react';
import { Helmet } from 'react-helmet-async';

// CTA destinations.
const DISCOVERY_URL = '/book-call';

const Home = () => {
  return (
    <div className="lr2">
      <Helmet>
        <title>LevReg.AI — Install AI properly.</title>
        <meta
          name="description"
          content="LevReg.AI installs an AI workforce focused on driving revenue for your business, built on frameworks from 21 years of operating experience."
        />
      </Helmet>

      {/* ─── HERO ────────────────────────────────────── */}
      <section className="hero wrap" data-screen-label="01 Hero">
        <div className="hero-eyebrow">
          <span className="dot" aria-hidden="true"></span>
          <span className="mono-label k">CURRENTLY ACCEPTING NEW CLIENTS</span>
        </div>

        <div className="hero-grid stacked">
          <div>
            <h1 className="headline" id="hero-headline">
              <em>Leverage</em> AI properly and watch your <em>profits</em> soar.
            </h1>
            <p className="hero-sub">
              LevReg.AI installs an Ai workforce focused on driving revenue for your business. All based on frameworks built on 21 years of operating experience.
            </p>
            <div className="hero-ctas">
              <a href={DISCOVERY_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
              <a href="#method" className="btn btn-lg">See the Method</a>
            </div>
          </div>

          <aside className="hero-rail" aria-label="Operating record">
            <div className="stat">
              <span className="lbl">Operating record</span>
              <span className="num">
                21
                <small style={{ fontFamily: 'var(--mono)', fontSize: '.4em', letterSpacing: '.05em', marginLeft: '8px', color: 'var(--muted)' }}>YRS</small>
              </span>
              <span className="sub">Marketing &amp; ops leadership - Virtual CMO for some of the largest online-education brands.</span>
            </div>
            <div className="stat">
              <span className="lbl">Daily audience</span>
              <span className="num">M+</span>
              <span className="sub">Subscribers tuning into the in-house media company every weekday.</span>
            </div>
            <div className="stat">
              <span className="lbl">Built first, sold second</span>
              <span className="num">→</span>
              <span className="sub">AI Workforce installed in our own businesses before we offered it to yours.</span>
            </div>
          </aside>
        </div>

        {/* Meta bar */}
        <div className="hero-meta">
          <span><b>Est.</b> 21 yrs operating · founded by Nate Kennedy</span>
          <span className="sep" aria-hidden="true"></span>
          <span><b>Coverage</b> US · CA · UK · AU</span>
          <span className="sep" aria-hidden="true"></span>
          <span>STATUS ● CURRENTLY ONBOARDING CLIENTS</span>
        </div>
      </section>

      {/* ─── MARQUEE ─────────────────────────────────── */}
      <section className="marquee" aria-label="Operating principles">
        <div className="marquee-track">
          <div className="marquee-item"><em>Install</em>, don't experiment.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item"><em>Fractional</em> AI Specialist.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Built in our businesses <em>first</em>.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Outcomes over output.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Own your stack.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item"><em>Install</em>, don't experiment.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item"><em>Fractional</em> AI Specialist.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Built in our businesses <em>first</em>.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Outcomes over output.<span className="dot" aria-hidden="true"></span></div>
          <div className="marquee-item">Own your stack.<span className="dot" aria-hidden="true"></span></div>
        </div>
      </section>

      {/* ─── STORY ───────────────────────────────────── */}
      <section className="section wrap" data-screen-label="02 Story">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 01 — Why us</span>
            <h2>21 years of operating before helping you <em>Leverage</em> AI.</h2>
          </div>
          <div className="right">
            <p>Most AI consultants are teaching you what they read last weekend. We installed AI inside our own businesses and our partners' then watched it move the line on revenue, margin, and team capacity. So we made a practice of it.</p>
          </div>
        </div>

        <div className="story-grid">
          <div>
            <p className="story-quote">"We didn't study AI. We shipped it in our companies, our partners' companies then other companies started asking how. So this is how."</p>
            <div className="story-by">
              <span className="av" aria-hidden="true"></span>
              <span>Nate Kennedy · Founder, LevReg.AI</span>
            </div>
          </div>

          <div className="bio-grid">
            <div className="bio-cell">
              <span className="k">// Operating</span>
              <span className="v">21<small>yrs</small></span>
              <span className="d">Marketing, growth, and operating leadership across education, media, and DTC.</span>
            </div>
            <div className="bio-cell">
              <span className="k">// Virtual CMO</span>
              <span className="v">10<small>yrs</small></span>
              <span className="d">Fractional CMO for some of the largest online-education brands in the category.</span>
            </div>
            <div className="bio-cell">
              <span className="k">// Media co.</span>
              <span className="v">M+</span>
              <span className="d">Owner-operator of a media company with millions of daily subscribers.</span>
            </div>
            <div className="bio-cell">
              <span className="k">// AI installs</span>
              <span className="v">In‑house first</span>
              <span className="d">Every system we install in your business was first installed in ours.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── METHOD / SERVICES ──────────────────────── */}
      <section id="method" className="section wrap" data-screen-label="03 Method">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 02 — Method</span>
            <h2>Three doors. <em>One</em> install path.</h2>
          </div>
          <div className="right">
            <p>Every engagement starts the same way: an AI Audit. From there you either hand the build to our team, retain us for ongoing consulting, and/or embed a Fractional AI Specialist inside your company to run the system day to day.</p>
          </div>
        </div>

        <div className="services">
          <div className="svc">
            <span className="svc-num">A · 01 / Audit</span>
            <h3>AI <em>Audit</em></h3>
            <p>A diagnostic of your business, workflow by workflow, to find where AI actually pays back. You get a written install plan, ROI ranking, and risk map. Yours to keep.</p>
            <ul>
              <li>Workflow + tooling inventory</li>
              <li>ROI &amp; risk ranking, by system</li>
              <li>Written 90-day install plan</li>
              <li>Executive readout + board doc</li>
            </ul>
            <div className="svc-foot">
              <span>14 days · fixed scope</span>
              <span className="price">From $1,500</span>
            </div>
          </div>

          <div className="svc featured">
            <span className="svc-num">B · 02 / Build</span>
            <h3>Development &amp; <em>Consulting</em></h3>
            <p>We install the systems the audit recommends. The agents, automations, data plumbing and we sit in the room while your team learns to run them. Production from week one.</p>
            <ul>
              <li>Agent &amp; workflow build-out</li>
              <li>Data + tooling integration</li>
              <li>Operating playbooks, written for you</li>
              <li>Weekly senior consulting</li>
            </ul>
            <div className="svc-foot">
              <span>60 – 90 days · scoped</span>
              <span className="price">Custom pricing</span>
            </div>
          </div>

          <div className="svc">
            <span className="svc-num">C · 03 / Operate</span>
            <h3>Fractional AI <em>Specialist</em></h3>
            <p>We embed a trained AI operating specialist inside your business to own the system after launch optimizing your ai workforce, agents, integrations, and reporting every week. Fractional time, full ownership.</p>
            <ul>
              <li>Dedicated, fractional specialist</li>
              <li>Weekly optimization &amp; tuning</li>
              <li>Monthly executive scorecard</li>
              <li>Backed by the LevReg.AI bench</li>
            </ul>
            <div className="svc-foot">
              <span>Month to month · retained</span>
              <span className="price">From $2,500/mo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROCESS ─────────────────────────────────── */}
      <section className="section wrap" data-screen-label="04 Process">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 03 — Process</span>
            <h2>How the <em>install</em> actually works.</h2>
          </div>
          <div className="right">
            <p>No deck-ware. No six-month "discovery." We start with a paid audit, ship in 60–90 days, and leave behind a system your team owns. Four phases, no surprises.</p>
          </div>
        </div>

        <div className="process">
          <div className="step">
            <span className="step-num">0<em>1</em></span>
            <h4>Audit</h4>
            <p>Two weeks. We map every workflow, score it for AI leverage, and write the install plan you'd hand to a board.</p>
            <span className="step-meta">Week 1 – 2</span>
          </div>
          <div className="step">
            <span className="step-num">0<em>2</em></span>
            <h4>Install</h4>
            <p>We build agents, automations, and data plumbing in your stack — not a sandbox. Production-grade from day one.</p>
            <span className="step-meta">Week 3 – 10</span>
          </div>
          <div className="step">
            <span className="step-num">0<em>3</em></span>
            <h4>Train</h4>
            <p>Your team learns to run it, and we embed a Fractional AI Specialist — or certify one of yours.</p>
            <span className="step-meta">Week 8 – 12</span>
          </div>
          <div className="step">
            <span className="step-num">0<em>4</em></span>
            <h4>Operate</h4>
            <p>Weekly tuning, monthly executive scorecard, quarterly review against the install plan. You own the system.</p>
            <span className="step-meta">Ongoing</span>
          </div>
        </div>
      </section>

      {/* ─── SPECIALIST FEATURE ───────────────────────── */}
      <section id="operators" className="operator" data-screen-label="05 Specialist">
        <div className="operator-inner">
          <div>
            <span className="mono-label" style={{ color: 'rgba(255,255,255,.7)' }}>// 04 — Embedded specialists</span>
            <h2 style={{ marginTop: '18px' }}>A <em>specialist</em> on your team. Not a Slack channel and a prayer.</h2>
            <p>Every system we install needs someone to run it every week — tuning agents, rewriting prompts, watching the data, killing the things that aren't working. We train and embed that person, fractionally. They sit on your org chart, report to you, and are backed by the LevReg.AI bench.</p>
            <div className="hero-ctas">
              <a href={DISCOVERY_URL} className="btn btn-primary btn-lg" style={{ background: 'var(--accent)', borderColor: 'var(--accent)' }}>Embed a Specialist <span className="arrow">→</span></a>
              <a href="#method" className="btn btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,.4)' }}>How they're trained</a>
            </div>
          </div>

          <aside className="op-id-card" aria-label="Sample specialist ID">
            <div className="seal">AI<br />Specialist<br />Lv. III</div>
            <div className="op-id-row">
              <span className="k">// Specialist</span>
              <span className="v disp">M. Alvarez</span>
            </div>
            <div className="op-id-row">
              <span className="k">// Cert ID</span>
              <span className="v">LV-RG-0247</span>
            </div>
            <div className="op-id-row">
              <span className="k">// Specialty</span>
              <span className="v">Revenue ops · agentic workflows</span>
            </div>
            <div className="op-id-row">
              <span className="k">// Embedded</span>
              <span className="v">Acme Health · 11 mo · ongoing</span>
            </div>
            <div className="op-id-row">
              <span className="k">// Cadence</span>
              <span className="v">Weekly tune · Monthly readout</span>
            </div>
            <div className="op-id-row">
              <span className="k">// Throughput</span>
              <div className="op-id-bars" aria-hidden="true">
                <span style={{ height: '18%' }}></span>
                <span style={{ height: '42%' }}></span>
                <span style={{ height: '30%' }}></span>
                <span style={{ height: '64%' }}></span>
                <span style={{ height: '78%' }}></span>
                <span style={{ height: '90%' }}></span>
                <span style={{ height: '72%' }}></span>
                <span style={{ height: '96%', background: '#0EA5E9' }}></span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── PROOF ──────────────────────────────────── */}
      <section id="proof" className="section wrap" data-screen-label="06 Proof">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 05 — In production</span>
            <h2>Installed inside companies that <em>ship</em>.</h2>
          </div>
          <div className="right">
            <p>We have work industry leaders to install revenue driving Ai systems into their business. Designed from frameworks developed over the past 21 years.</p>
          </div>
        </div>

        <div className="logos" role="list" aria-label="Client categories">
          <div className="logo-cell" role="listitem">Education Co.</div>
          <div className="logo-cell" role="listitem">Media Group</div>
          <div className="logo-cell" role="listitem">DTC Brand</div>
          <div className="logo-cell" role="listitem">Health Network</div>
          <div className="logo-cell" role="listitem">B2B SaaS</div>
          <div className="logo-cell" role="listitem">Pro Services</div>
        </div>

        <div className="cases">
          {/* ── Case · Mark Evans DM (Education) ── */}
          <article className="case">
            <div className="img mock">
              <div className="case-mock" aria-label="Mark Evans DM deal-flow agent dashboard">
                <div className="cm-bar">
                  <div className="cm-dots"><span></span><span></span><span></span></div>
                  <div className="cm-title"><b>MARK EVANS DM</b> <span>/ deal-flow agent</span></div>
                  <div className="cm-status"><span className="cm-live">LIVE</span> <span>BUILD 3.4.1</span></div>
                </div>
                <div className="cm-sub">
                  <span>Sales-ops install · Week 14</span>
                  <span>Autonomous</span>
                </div>
                <div className="cm-stats">
                  <div className="cm-stat">
                    <span className="cm-k">Cycle time</span>
                    <span className="cm-v">38<small>h</small></span>
                    <span className="cm-d">was 9 days · ▼ 90%</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Throughput</span>
                    <span className="cm-v accent">+62%</span>
                    <span className="cm-d">deals qualified / wk</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Agent actions</span>
                    <span className="cm-v">1,284</span>
                    <span className="cm-d">last 7 days</span>
                  </div>
                </div>
                <div className="cm-rows">
                  <div className="cm-rowhead">Deal queue</div>
                  <div className="cm-row">
                    <span className="cm-id">DM-4471</span>
                    <span className="cm-label">Inbound investor lead</span>
                    <span className="cm-pill run">RUN</span>
                  </div>
                  <div className="cm-row">
                    <span className="cm-id">DM-4470</span>
                    <span className="cm-label">Follow-up sequence drafted</span>
                    <span className="cm-pill done">DONE</span>
                  </div>
                </div>
              </div>
            </div>
            <h4>Cut sales-ops cycle time from 9 days to 38 hours.</h4>
            <div className="meta"><span><b>+62%</b> throughput</span><span>Mark Evans DM · 14 weeks</span></div>
          </article>

          {/* ── Case · NewsFlash (Media) ── */}
          <article className="case">
            <div className="img mock">
              <div className="case-mock" aria-label="NewsFlash editorial pipeline dashboard">
                <div className="cm-bar">
                  <div className="cm-dots"><span></span><span></span><span></span></div>
                  <div className="cm-title"><b>NEWSFLASH</b> <span>/ editorial pipeline</span></div>
                  <div className="cm-status"><span className="cm-live">SHIPPING</span> <span>ISSUE 612</span></div>
                </div>
                <div className="cm-sub">
                  <span>3 tools → 1 agentic pipeline</span>
                  <span>−$182K run-rate</span>
                </div>
                <div className="cm-stats">
                  <div className="cm-stat">
                    <span className="cm-k">Time to publish</span>
                    <span className="cm-v">11<small>min</small></span>
                    <span className="cm-d">source → inbox · was 4h+</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Daily reach</span>
                    <span className="cm-v">3.0<small>M</small></span>
                    <span className="cm-d">5-min read · 1 operator</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Run-rate</span>
                    <span className="cm-v accent">−$182K</span>
                    <span className="cm-d">annual · saved</span>
                  </div>
                </div>
                <div className="cm-rows">
                  <div className="cm-rowhead">Today's run log</div>
                  <div className="cm-row">
                    <span className="cm-id">06:00</span>
                    <span className="cm-label">Issue 612 assembled</span>
                    <span className="cm-pill run">SHIP</span>
                  </div>
                  <div className="cm-row">
                    <span className="cm-id">05:54</span>
                    <span className="cm-label">Fact-check pass · 2 flagged</span>
                    <span className="cm-pill done">DONE</span>
                  </div>
                </div>
              </div>
            </div>
            <h4>Replaced 3 production tools with one agentic pipeline.</h4>
            <div className="meta"><span><b>−$182k</b> annual run-rate</span><span>NewsFlash · 9 weeks</span></div>
          </article>

          {/* ── Case · Healthier Rx (DTC) ── */}
          <article className="case">
            <div className="img mock">
              <div className="case-mock" aria-label="Healthier Rx research specialist dashboard">
                <div className="cm-bar">
                  <div className="cm-dots"><span></span><span></span><span></span></div>
                  <div className="cm-title"><b>HEALTHIER RX</b> <span>/ research specialist</span></div>
                  <div className="cm-status"><span className="cm-live">EMBEDDED</span> <span>MONTH 11</span></div>
                </div>
                <div className="cm-sub">
                  <span>Fractional specialist · weekly ops</span>
                  <span>+3.4× capacity</span>
                </div>
                <div className="cm-stats">
                  <div className="cm-stat">
                    <span className="cm-k">This week</span>
                    <span className="cm-v">14</span>
                    <span className="cm-d">optimizations shipped</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Studies indexed</span>
                    <span className="cm-v">1,240<small>+</small></span>
                    <span className="cm-d">48 compounds profiled</span>
                  </div>
                  <div className="cm-stat">
                    <span className="cm-k">Answer accuracy</span>
                    <span className="cm-v accent">97%</span>
                    <span className="cm-d">clinician-reviewed</span>
                  </div>
                </div>
                <div className="cm-rows">
                  <div className="cm-rowhead">Research assistant · live answer</div>
                  <div className="cm-row qa">
                    <span className="cm-id">READER</span>
                    <span className="cm-label">Beginner BPC-157 protocol for joint pain?</span>
                  </div>
                  <div className="cm-row qa">
                    <span className="cm-id">RX</span>
                    <span className="cm-label">250–500 mcg / day, subcutaneous, 4–6 weeks.</span>
                    <span className="cm-pill done">SOURCED</span>
                  </div>
                </div>
              </div>
            </div>
            <h4>Embedded Specialist owns 14 weekly optimizations.</h4>
            <div className="meta"><span><b>+3.4×</b> capacity</span><span>Healthier Rx · ongoing 11 mo</span></div>
          </article>
        </div>
      </section>

      {/* ─── MANIFESTO ─────────────────────────────── */}
      <section id="manifesto" className="manifesto wrap" data-screen-label="07 Manifesto">
        <div className="manifesto-grid">
          <div>
            <span className="mono-label k">// 06 — Manifesto</span>
          </div>
          <div>
            <p>We built AI inside our own companies first. It moved the line on revenue, margin, and team capacity in ways a deck couldn't. So we kept going and partners asked us to do the same in theirs.</p>
            <p>This is the practice that came out of it. Specialists, not advisors. Installs, not strategies. Systems your team owns, not subscriptions we manage on the side.</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ────────────────────────────────────── */}
      <section id="faq" className="section wrap" data-screen-label="08 FAQ">
        <div className="s-head stacked">
          <div className="left">
            <span className="num">// 07 — Questions</span>
            <h2>You probably want to know.</h2>
          </div>
          <div className="right">
            <p>If we haven't answered it here, ask in the audit call. We'd rather be honest than salesy.</p>
          </div>
        </div>

        <div className="faq">
          <details open>
            <summary>How is this different from hiring an "AI consultant"?<span className="icon" aria-hidden="true">+</span></summary>
            <div className="a">We installed AI inside our own operating companies before we ever sold a service. Most "AI consultants" are teaching you what they read last weekend. We're shipping systems we run ourselves, with operators we trained not advice from a deck.</div>
          </details>
          <details>
            <summary>What does a Fractional AI Specialist actually do?<span className="icon" aria-hidden="true">+</span></summary>
            <div className="a">They own the system after install. Weekly: tune prompts and agents, watch usage and data, kill workflows that aren't earning, propose new ones. Monthly: executive scorecard. They sit on your team, fractionally, and are backed by our bench.</div>
          </details>
          <details>
            <summary>Do you work with companies that haven't started with AI?<span className="icon" aria-hidden="true">+</span></summary>
            <div className="a">Often the best ones. Zero legacy, zero bad habits, faster install. The audit identifies where to start so you don't waste the first 90 days on the wrong problem.</div>
          </details>
          <details>
            <summary>What if we already have an internal AI lead?<span className="icon" aria-hidden="true">+</span></summary>
            <div className="a">Great. We train them through the same program as our specialists, hand them the playbooks, and back them with our bench when they need it.</div>
          </details>
          <details>
            <summary>What does an install actually cost?<span className="icon" aria-hidden="true">+</span></summary>
            <div className="a">We start with a discovery call to make sure you are ready to Leverage Ai.  If you are we schedule an Audit and that starts at $1500 one time. The development cost for your customized the Ai workforce depends on the scope. Our Fractional Ai Specialists start at $2,500/month. </div>
          </details>
        </div>
      </section>

      {/* ─── FINAL CTA ─────────────────────────────── */}
      <section id="contact" className="cta-final" data-screen-label="09 CTA">
        <div className="cta-final-inner">
          <span className="mono-label k">// 08 — Next step</span>
          <h2 style={{ marginTop: '24px' }}>Stop researching. Start leveraging.</h2>
          <div className="row">
            <a href={DISCOVERY_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
            <a href="mailto:nate@levreg.ai" className="btn btn-lg">MESSAGE NATE DIRECTLY</a>
            <span className="availability">CURRENTLY ACCEPTING NEW AUDITS</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
