import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { AIOS_LANDING_HTML } from './aiosMarkup';
import './AiosLanding.css';

const AiosLanding = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const root = document.getElementById('aios-plans-root');
    if (!root) return undefined;

    const selectPlan = (key) => {
      root.querySelectorAll('.aios-plan').forEach((el) => {
        const selected = el.getAttribute('data-plan') === key;
        el.classList.toggle('is-selected', selected);
        el.setAttribute('aria-selected', selected ? 'true' : 'false');
        const badge = el.querySelector('.aios-plan-badge');
        if (selected && !badge) {
          const div = document.createElement('div');
          div.className = 'aios-plan-badge';
          div.textContent = 'SELECTED';
          el.prepend(div);
        } else if (!selected && badge) {
          badge.remove();
        }
      });
    };

    const onClick = (e) => {
      const plan = e.target.closest('.aios-plan');
      if (!plan || !root.contains(plan)) return;
      selectPlan(plan.getAttribute('data-plan'));
    };

    const onKey = (e) => {
      if (e.key !== 'Enter' && e.key !== ' ') return;
      const plan = e.target.closest('.aios-plan');
      if (!plan || !root.contains(plan)) return;
      e.preventDefault();
      selectPlan(plan.getAttribute('data-plan'));
    };

    root.addEventListener('click', onClick);
    root.addEventListener('keydown', onKey);
    return () => {
      root.removeEventListener('click', onClick);
      root.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <div className="aios-page">
      <Helmet>
        <title>Leverage AiOS — Install the system. Place the operator.</title>
        <meta
          name="description"
          content="We install Leverage AiOS, the operating system that runs your marketing, sales, and support with AI. Then we place an AiOS-Certified Operator to run it."
        />
        <link rel="canonical" href="https://levreg.ai/aios" />
      </Helmet>

      <div dangerouslySetInnerHTML={{ __html: AIOS_LANDING_HTML }} />
    </div>
  );
};

export default AiosLanding;
