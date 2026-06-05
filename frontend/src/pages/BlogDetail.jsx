import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';
import { getBlogArticleBySlug, getRelatedArticles } from '../data/blogData';

const CTA_URL = '/book-call';

const renderSection = (section, index) => {
  // ── Regular text section (no explicit type) ──
  if (!section.type) {
    return (
      <div key={index} className="block">
        {section.heading && <h2 id={section.id}>{section.heading}</h2>}
        {section.content && section.content.split('\n\n').map((p, idx) => <p key={idx}>{p}</p>)}
        {section.list && (
          <ul>{section.list.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        )}
        {section.conclusion && <p>{section.conclusion}</p>}
        {section.assumptionsList && (
          <ul>{section.assumptionsList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        )}
        {section.actualContent && <p>{section.actualContent}</p>}
        {section.warningSignsList && (
          <ul>{section.warningSignsList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        )}
        {section.action && <p className="lead-p">{section.action}</p>}
        {section.insight && !section.before && <p>{section.insight}</p>}
        {section.advantagesList && (
          <ul>{section.advantagesList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        )}
        {section.warning && <p>{section.warning}</p>}

        {section.before && Array.isArray(section.before) && (
          <div className="block">
            <div className="block">
              <div className="lbl">Before implementation</div>
              <ul>{section.before.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </div>
            <div className="block">
              <div className="lbl accent">After implementation</div>
              <ul>{section.after.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </div>
            {section.insight && <p>{section.insight}</p>}
            {section.quote && <p style={{ color: 'var(--accent)', fontWeight: 600 }}>{section.quote}</p>}
            {section.result && <p>{section.result}</p>}
          </div>
        )}

        {section.moraleROI && (
          <div className="block">
            <div className="block">
              <div className="lbl">The morale ROI</div>
              <ul>{section.moraleROI.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            </div>
            {section.scaleROI && (
              <div className="block">
                <div className="lbl">The scale ROI</div>
                <ul>{section.scaleROI.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
              </div>
            )}
            {section.clientQuote && <p style={{ color: 'var(--accent)', fontStyle: 'italic' }}>{section.clientQuote}</p>}
          </div>
        )}

        {section.badApproach && (
          <div className="block">
            <div className="panel-bad">
              <div className="lbl bad">Bad approach</div>
              <p>{section.badApproach}</p>
            </div>
            <div className="panel-good">
              <div className="lbl accent">Good approach</div>
              <p>{section.goodApproach}</p>
            </div>
            {section.principle && <p style={{ color: 'var(--accent)', fontWeight: 600 }}>{section.principle}</p>}
            {section.examples && <p>{section.examples}</p>}
            {section.examplesList && (
              <ul>{section.examplesList.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            )}
            {section.conclusion && <p>{section.conclusion}</p>}
          </div>
        )}
      </div>
    );
  }

  // ── Bulleted list ──
  if (section.type === 'list') {
    return <ul key={index}>{section.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>;
  }

  // ── Comparison (before / after) ──
  if (section.type === 'comparison') {
    return (
      <div key={index} className="two-col">
        <div className="card" style={{ margin: 0 }}>
          <h3>{section.before.title}</h3>
          <ul>{section.before.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
        <div className="card" style={{ margin: 0, borderColor: 'var(--accent)' }}>
          <h3>{section.after.title}</h3>
          <ul>{section.after.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
      </div>
    );
  }

  // ── Quote / callout ──
  if (section.type === 'quote') {
    return (
      <div key={index} className="callout">
        <p className="q">"{section.content}"</p>
        {section.context && <p style={{ color: 'var(--muted)' }}>{section.context}</p>}
      </div>
    );
  }

  // ── Callout box ──
  if (section.type === 'callout') {
    return (
      <div key={index} className="callout-dark">
        <p className="big" dangerouslySetInnerHTML={{ __html: section.content }} />
        {section.subtext && <p>{section.subtext}</p>}
      </div>
    );
  }

  // ── Questions ──
  if (section.type === 'questions') {
    return (
      <div key={index} className="block">
        {section.questions.map((q, idx) => (
          <div key={idx} className="card">
            <div className="row-head">
              <span className="num-badge">{q.number}</span>
              <h3>{q.question}</h3>
            </div>
            <p style={{ marginBottom: 0 }}>{q.answer}</p>
          </div>
        ))}
        {section.conclusion && section.conclusion.split('\n\n').map((p, idx) => <p key={idx}>{p}</p>)}
      </div>
    );
  }

  // ── Example (wrong / right) ──
  if (section.type === 'example') {
    return (
      <div key={index} className="card">
        <h3>{section.title}</h3>
        <div className="panel-bad">
          <div className="lbl bad">The answer approach</div>
          <p style={{ fontStyle: 'italic' }}>"{section.wrong}"</p>
        </div>
        <div className="panel-good">
          <div className="lbl accent">The outcome approach</div>
          <p style={{ fontStyle: 'italic' }}>"{section.right}"</p>
        </div>
        {section.explanation && <p>{section.explanation}</p>}
        {section.key && <div className="callout"><p>{section.key}</p></div>}
      </div>
    );
  }

  // ── Service ──
  if (section.type === 'service') {
    return (
      <div key={index} className="card">
        <div className="row-head">
          <span className="num-badge">{section.number}</span>
          <h3>{section.title}</h3>
        </div>
        <p>{section.content}</p>
        {section.items && <ul>{section.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>}
        {section.systems && section.systems.map((sys, idx) => (
          <div key={idx} className="panel-good">
            <div className="lbl accent">{sys.name}</div>
            <ul>{sys.features.map((f, fidx) => <li key={fidx}>{f}</li>)}</ul>
          </div>
        ))}
        {section.footer && <p style={{ color: 'var(--accent)', fontStyle: 'italic', marginBottom: 0 }}>{section.footer}</p>}
      </div>
    );
  }

  // ── Costs ──
  if (section.type === 'costs') {
    return (
      <div key={index} className="block">
        {section.costs.map((cost, idx) => (
          <div key={idx} className="card">
            <h3>{cost.title}</h3>
            <p>{cost.description}</p>
            {cost.calculation && <p style={{ fontSize: '14px' }}>{cost.calculation}</p>}
            <p className="price-tag" style={{ marginBottom: 0 }}>{cost.total}</p>
          </div>
        ))}
        <div className="callout-dark">
          <p className="big">{section.totalCost}</p>
          <p>{section.comparison}</p>
          <p style={{ color: '#fff', fontWeight: 600, marginBottom: 0 }}>{section.roi}</p>
        </div>
      </div>
    );
  }

  // ── Red / green flags ──
  if (section.type === 'flags') {
    return (
      <div key={index} className="two-col">
        <div>
          <div className="lbl bad" style={{ fontSize: '12px', marginBottom: '12px' }}>Red flags</div>
          {section.redFlags.map((flag, idx) => (
            <div key={idx} className="panel-bad">
              <strong style={{ color: 'var(--fg)' }}>{flag.title}</strong>
              <p style={{ marginTop: '6px', marginBottom: 0 }}>{flag.description}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="lbl accent" style={{ fontSize: '12px', marginBottom: '12px' }}>Green flags</div>
          {section.greenFlags.map((flag, idx) => (
            <div key={idx} className="panel-good">
              <strong style={{ color: 'var(--fg)' }}>{flag.title}</strong>
              <p style={{ marginTop: '6px', marginBottom: 0 }}>{flag.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── System (problem / solution / result) ──
  if (section.type === 'system') {
    return (
      <div key={index} className="card">
        <div className="row-head">
          <span className="num-badge">{section.number}</span>
          <h3>{section.title}</h3>
        </div>
        <div className="block">
          <div className="lbl">The problem</div>
          <p>{section.problem}</p>
        </div>
        <div className="block">
          <div className="lbl accent">The system</div>
          <ul>{section.solution.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
        </div>
        <div className="panel-good">
          <div className="lbl accent">Typical result</div>
          <p style={{ color: 'var(--fg)', fontWeight: 500, marginBottom: 0 }}>{section.result}</p>
        </div>
      </div>
    );
  }

  // ── Pricing ──
  if (section.type === 'pricing') {
    return (
      <div key={index} className="block">
        {section.models.map((model, idx) => (
          <div key={idx} className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
              <h3 style={{ marginBottom: 0 }}>{model.name}</h3>
              <span className="price-tag">{model.price}</span>
            </div>
            <p style={{ marginTop: '10px', marginBottom: 0 }}>{model.description}</p>
          </div>
        ))}
        {section.factors && (
          <div className="callout">
            <div className="lbl accent">What determines price</div>
            <ul>{section.factors.map((f, idx) => <li key={idx}>{f}</li>)}</ul>
          </div>
        )}
      </div>
    );
  }

  // ── Industries ──
  if (section.type === 'industries') {
    return (
      <div key={index} className="block">
        {section.list.map((industry, idx) => (
          <div key={idx} className="card">
            <h3>{industry.name}</h3>
            <p>{industry.description}</p>
            <div className="panel-good">
              <p style={{ marginBottom: 0 }}><strong style={{ color: 'var(--fg)' }}>Why it works:</strong> {industry.why}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // ── Question groups ──
  if (section.type === 'question-groups') {
    return (
      <div key={index} className="block">
        {section.groups.map((group, idx) => (
          <div key={idx} className="block">
            <div className="lbl accent">{group.category}</div>
            <ol className="ol">{group.questions.map((q, qidx) => <li key={qidx}>{q}</li>)}</ol>
          </div>
        ))}
      </div>
    );
  }

  // ── Options ──
  if (section.type === 'options') {
    return (
      <div key={index} className="block">
        {section.options.map((option, idx) => (
          <div key={idx} className="card">
            <div className="row-head">
              <span className="num-badge">{option.number}</span>
              <h3>Option {option.number}: {option.title}</h3>
            </div>
            <p>{option.description}</p>
            <p style={{ fontStyle: 'italic', marginBottom: 0 }}>{option.reality}</p>
          </div>
        ))}
        {section.conclusion && (
          <div className="callout-dark"><p style={{ color: '#fff', marginBottom: 0, whiteSpace: 'pre-line' }}>{section.conclusion}</p></div>
        )}
      </div>
    );
  }

  // ── Role ──
  if (section.type === 'role') {
    return (
      <div key={index} className="card">
        <div className="row-head">
          <span className="num-badge">{section.number}</span>
          <h3>{section.title}</h3>
        </div>
        <div className="block">
          <div className="lbl">The human problem</div>
          <p>{section.humanProblem}</p>
        </div>
        <div className="block">
          <div className="lbl accent">The AI solution</div>
          <p>{section.aiSolution}</p>
        </div>
        <div className="panel-good">
          <div className="lbl accent">Result</div>
          <p style={{ marginBottom: 0 }}>{section.result}</p>
        </div>
      </div>
    );
  }

  // ── Criteria (replace / keep) ──
  if (section.type === 'criteria') {
    return (
      <div key={index} className="block">
        <div className="two-col">
          <div className="panel-good">
            <div className="lbl accent">Replace when</div>
            <ul>{section.replaceWhen.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
          </div>
          <div className="panel-bad">
            <div className="lbl bad">Keep when</div>
            <ul>{section.keepWhen.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
          </div>
        </div>
        {section.test && (
          <div className="callout"><p><strong style={{ color: 'var(--fg)' }}>The test: </strong>{section.test}</p></div>
        )}
      </div>
    );
  }

  // ── Timeline ──
  if (section.type === 'timeline') {
    return (
      <div key={index} className="block">
        {section.weeks.map((week, idx) => (
          <div key={idx} className="card">
            <div className="row-head">
              <span className="week-tag">{week.week}</span>
              <h3>{week.title}</h3>
            </div>
            <p style={{ marginBottom: 0 }}>{week.description}</p>
          </div>
        ))}
        {section.summary && (
          <div className="panel-good">
            <p style={{ color: 'var(--fg)', fontWeight: 600, marginBottom: section.comparison ? '8px' : 0 }}>{section.summary}</p>
            {section.comparison && <p style={{ marginBottom: 0 }}>{section.comparison}</p>}
          </div>
        )}
      </div>
    );
  }

  // ── ROI ──
  if (section.type === 'roi') {
    return (
      <div key={index} className="block">
        <div className="two-col">
          <div className="card" style={{ margin: 0 }}>
            <h3>{section.before.title}</h3>
            <ul>{section.before.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: 0 }}>{section.before.total}</p>
          </div>
          <div className="card" style={{ margin: 0, borderColor: 'var(--accent)' }}>
            <h3>{section.after.title}</h3>
            <ul>{section.after.items.map((item, idx) => <li key={idx}>{item}</li>)}</ul>
            <p style={{ fontStyle: 'italic', fontSize: '14px', marginBottom: 0 }}>{section.after.total}</p>
          </div>
        </div>
        {section.savings && (
          <div className="callout-dark" style={{ textAlign: 'center' }}><p className="big" style={{ marginBottom: 0 }}>{section.savings}</p></div>
        )}
      </div>
    );
  }

  return null;
};

const BlogDetail = () => {
  const { slug } = useParams();
  const article = getBlogArticleBySlug(slug);
  const relatedArticles = getRelatedArticles(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="lr2">
        <section className="section wrap" style={{ textAlign: 'center' }}>
          <h1 className="headline" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>Article not found</h1>
          <div className="hero-ctas" style={{ justifyContent: 'center', marginTop: '24px' }}>
            <Link to="/blog" className="btn btn-primary btn-lg">← Back to insights</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="lr2">
      <Helmet>
        <title>{`${article.title} | LevReg.AI`}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.tags.join(', ')} />
        <link rel="canonical" href={`https://levreg.ai/blog/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://levreg.ai/blog/${slug}`} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:site_name" content="LevReg.AI" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@levregai" />
      </Helmet>

      {/* Breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="breadcrumb-inner">
          <Link to="/">Home</Link>
          <span className="sep" aria-hidden="true">/</span>
          <Link to="/blog">Insights</Link>
          <span className="sep" aria-hidden="true">/</span>
          <span className="here">Article</span>
        </div>
      </nav>

      {/* Header */}
      <section className="page-hero wrap">
        <div className="hero-eyebrow">
          <span className="mono-label k">{article.category}</span>
        </div>
        <h1>{article.title}</h1>
        <p className="lede">{article.subtitle}</p>
      </section>

      {/* Body */}
      <section className="section wrap" style={{ paddingTop: 'clamp(16px, 2vw, 32px)' }}>
        <div className="article">
          {article.content.introduction.split('\n\n').map((p, idx) => (
            idx === 0 ? <p key={idx} className="lead-p">{p}</p> : <p key={idx}>{p}</p>
          ))}

          {article.content.sections.map((section, index) => renderSection(section, index))}

          {/* FAQ */}
          {article.content.faq && article.content.faq.length > 0 && (
            <>
              <h2>Frequently asked questions</h2>
              {article.content.faq.map((item, idx) => (
                <div key={idx} className="card">
                  <h3>{item.question}</h3>
                  <p style={{ marginBottom: 0 }}>{item.answer}</p>
                </div>
              ))}
            </>
          )}

          {/* Related links */}
          {article.content.relatedLinks && article.content.relatedLinks.length > 0 && (
            <div className="callout" style={{ marginTop: '40px' }}>
              <div className="lbl accent">Continue your journey</div>
              <ul style={{ marginTop: '12px', marginBottom: 0 }}>
                {article.content.relatedLinks.map((link, idx) => (
                  <li key={idx}><Link to={link.url} style={{ color: 'var(--accent)' }}>{link.text}</Link></li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="section wrap">
          <div className="s-head">
            <div className="left">
              <span className="num">// More</span>
              <h2>Related <em>insights</em>.</h2>
            </div>
            <div className="right">
              <p>More practical guides on installing AI in real businesses.</p>
            </div>
          </div>
          <div className="lr-grid cols-3">
            {relatedArticles.map((rel) => (
              <Link key={rel.id} to={`/blog/${rel.slug}`} className="lr-card">
                <span className="eyebrow">{rel.category}</span>
                <h3>{rel.title}</h3>
                {rel.subtitle && <p className="lead">{rel.subtitle}</p>}
                <span className="more">Read article <span className="arrow" aria-hidden="true">→</span></span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Ready to transform <em>your business</em>?</h2>
          <p>Reading about AI is one thing. Installing systems that transform your business is another. Let's build your implementation roadmap.</p>
          <div className="btns">
            <a href={CTA_URL} className="btn btn-primary btn-lg">BOOK A DISCOVERY CALL →</a>
            <Link to="/blog" className="btn btn-lg">← View all insights</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
