import React, { useEffect, useState } from "react";
import "./QuickSkills.css";
import * as Icons from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import SkillsData from '../data/skills.json';

const QuickSkills = ({ skills = SkillsData }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="quick-skills py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6 gap-4 flex-col md:flex-row">
          <div className="text-left md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Tech Stack</h3>
            <p className="text-gray-300 mt-1">Core technologies and tools I use</p>
          </div>
          {/* CTA removed to avoid redundancy; hero/footer provide resume download */}
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 tech-grid">
          {skills.map((s, i) => {
            const Icon = Icons[s.key] || FaCode;
            return (
              <div key={i} className={`tech-item ${mounted ? 'reveal' : ''}`} title={s.name}>
                <div className="tech-bubble gradient">
                  <Icon className="tech-icon" />
                </div>
                <div className="tech-label">{s.name}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default QuickSkills;