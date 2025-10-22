import React from 'react';
import './QuickStats.css';
import CareerData from '../data/career.json';
import ProjectsData from '../data/projects.json';
import { FaRegClock, FaFolderOpen, FaHandshake } from 'react-icons/fa';

function extractStartYear(dates) {
  if (!dates) return null;
  const match = dates.match(/(19|20)\d{2}/);
  return match ? parseInt(match[0], 10) : null;
}

const QuickStats = ({ availability = 'Open to opportunities' }) => {
  const years = (() => {
    const yearsFound = CareerData.map(c => extractStartYear(c.dates)).filter(Boolean);
    if (!yearsFound.length) return '—';
    const earliest = Math.min(...yearsFound);
    const now = new Date();
    const diff = now.getFullYear() - earliest;
    return `${diff}+ yrs`;
  })();

  const projectsCount = Array.isArray(ProjectsData) ? ProjectsData.length : '—';

  return (
    <div className="quick-stats max-w-6xl mx-auto px-4 py-6">
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon"><FaRegClock /></div>
          <div className="stat-number">{years}</div>
          <div className="stat-label">Experience</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon"><FaFolderOpen /></div>
          <div className="stat-number">{projectsCount}</div>
          <div className="stat-label">Projects</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon"><FaHandshake /></div>
          <div className="stat-number">{availability}</div>
          <div className="stat-label">Availability</div>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;