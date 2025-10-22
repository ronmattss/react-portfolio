import React from 'react';
import './About.css';
import { FaCode, FaLaptopCode, FaMobileAlt, FaGamepad } from 'react-icons/fa';
import CareerData from '../data/career.json';
import ProjectsData from '../data/projects.json';

const extractStartYear = (dates) => {
  if (!dates) return null;
  const match = dates.match(/(19|20)\d{2}/);
  return match ? parseInt(match[0], 10) : null;
};

const About = () => {
  const years = (() => {
    const yearsFound = CareerData.map(c => extractStartYear(c.dates)).filter(Boolean);
    if (!yearsFound.length) return '—';
    const earliest = Math.min(...yearsFound);
    const diff = new Date().getFullYear() - earliest;
    return `${diff}+`;
  })();

  const projectsCount = Array.isArray(ProjectsData) ? ProjectsData.length : '—';

  return (
    <section className="about-section max-w-6xl mx-auto px-4 py-12">
      <div className="about-grid">
        <div className="about-left">
          <ul className="service-list">
            <li>
              <div className="svc-icon"><FaCode /></div>
              <div className="svc-text">Software Development</div>
            </li>
            <li>
              <div className="svc-icon"><FaLaptopCode /></div>
              <div className="svc-text">Website Development</div>
            </li>
            <li>
              <div className="svc-icon"><FaMobileAlt /></div>
              <div className="svc-text">Mobile Development</div>
            </li>
            <li>
              <div className="svc-icon"><FaGamepad /></div>
              <div className="svc-text">Game Development</div>
            </li>
          </ul>
        </div>

        <div className="about-right">
          <h3 className="about-title">About me</h3>
          <p className="about-copy">I build production ready software and game prototypes, and I design reliable test automation and CI/CD solutions. I work across the stack — web and mobile front-ends, backend services, and containerized deployments — with an emphasis on automation, maintainable frameworks, and shipping polished demos and products using C#, JavaScript, React, Unity and modern DevOps tooling.</p>

          <div className="about-stats">
            <div className="stat">
              <div className="stat-num">{projectsCount}</div>
              <div className="stat-label">Completed Projects</div>
            </div>

            <div className="stat">
              <div className="stat-num">95%</div>
              <div className="stat-label">Client satisfaction</div>
            </div>

            <div className="stat">
              <div className="stat-num">{years}</div>
              <div className="stat-label">Years of experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;