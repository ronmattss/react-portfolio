import React from 'react';
import './ScrollGuide.css';

const ScrollGuide = ({ targetId = 'career' }) => {
  const handleClick = () => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 20;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="scroll-guide" aria-hidden>
      <div className="guide-line">
        <span className="marker" />
        <span className="marker" />
        <span className="marker" />
      </div>
      <button className="guide-chevron" onClick={handleClick} aria-label="Scroll to experience">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
};

export default ScrollGuide;