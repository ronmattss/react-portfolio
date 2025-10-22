import React, { useEffect, useState } from 'react';
import './Timeline.css';
import CareerData from '../data/career.json';

const Timeline = ({ offset = 120 }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const observers = [];
    CareerData.forEach((_, idx) => {
      const el = document.getElementById(`career-item-${idx}`);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(idx);
        });
      }, { root: null, threshold: 0.45 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const scrollTo = (idx) => {
    const el = document.getElementById(`career-item-${idx}`);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <aside className="timeline-container" aria-hidden>
      <div className="timeline-line" />
      <ul className="timeline-list">
        {CareerData.map((c, i) => (
          <li key={i} className={`timeline-node ${active === i ? 'active' : ''}`} onClick={() => scrollTo(i)} title={`${c.title} @ ${c.company}`}>
            <span className="node-dot" />
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Timeline;