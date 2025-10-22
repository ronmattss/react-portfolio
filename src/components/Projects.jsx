import React, { useState, useRef, useEffect } from "react";
import "./Career.css";
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const Projects = ({ projects, title = "Projects" }) => {
    const items = projects || [];
    const [openIndex, setOpenIndex] = useState(null);
    const detailsRefs = useRef([]);

    useEffect(() => {
        // ensure all details panels start closed
        detailsRefs.current.forEach(el => {
            if (el) {
                el.style.maxHeight = '0px';
                el.style.opacity = '0';
            }
        });
    }, [projects]);

    const toggleDetails = (idx, e) => {
        if (e && e.stopPropagation) e.stopPropagation();

        const el = detailsRefs.current[idx];
        if (!el) {
            setOpenIndex(openIndex === idx ? null : idx);
            return;
        }

        // if another panel is open, close it first
        if (openIndex !== null && openIndex !== idx) {
            const prev = detailsRefs.current[openIndex];
            if (prev) {
                prev.style.maxHeight = prev.scrollHeight + 'px';
                // force reflow then collapse
                requestAnimationFrame(() => {
                    prev.style.transition = 'max-height 380ms cubic-bezier(.2,.9,.2,1), opacity 260ms ease';
                    prev.style.maxHeight = '0px';
                    prev.style.opacity = '0';
                });
            }
        }

        if (openIndex === idx) {
            // collapse
            el.style.maxHeight = el.scrollHeight + 'px';
            // ensure transition set
            el.style.transition = 'max-height 380ms cubic-bezier(.2,.9,.2,1), opacity 260ms ease';
            requestAnimationFrame(() => {
                el.style.maxHeight = '0px';
                el.style.opacity = '0';
            });
            setOpenIndex(null);
        } else {
            // expand
            el.style.transition = 'none';
            el.style.maxHeight = '0px';
            el.style.opacity = '0';
            // set to scrollHeight to allow transition
            requestAnimationFrame(() => {
                el.style.transition = 'max-height 420ms cubic-bezier(.2,.9,.2,1), opacity 360ms ease';
                el.style.maxHeight = el.scrollHeight + 'px';
                el.style.opacity = '1';
            });
            setOpenIndex(idx);
        }
    };

    return (
        <section className="projects-section max-w-6xl mx-auto px-4 py-12">
            <h2 className="section-title">{title === 'Personal Projects' ? 'Featured Projects' : title}</h2>
            <div className="timeline">
                {items.map((p, idx) => (
                    <article key={p.key ?? idx} className="career-item flex flex-col items-start cursor-pointer" onClick={(e) => toggleDetails(idx, e)}>
                        <div className="w-full">
                            <header className="flex items-start justify-between w-full">
                                <div>
                                    {p.type && (
                                        <div className="project-type-badge mb-2">{p.type}</div>
                                    )}
                                    <h3 className="text-xl md:text-2xl font-semibold text-white">{p.name}</h3>
                                    <p className="text-sm text-gray-300">{p.short || ''}</p>
                                </div>
                                <div className="flex gap-2">
                                    {p.link && (
                                        <a href={p.link} target="_blank" rel="noreferrer noopener" className="text-sm px-3 py-1 rounded bg-custom-navy-accent text-white hover:opacity-90" onClick={(e)=>e.stopPropagation()} aria-label={`Open live demo for ${p.name}`}>
                                            <FiExternalLink className="inline-block mr-2" />Live
                                        </a>
                                    )}
                                    {p.repo && (
                                        <a href={p.repo} target="_blank" rel="noreferrer noopener" className="text-sm px-3 py-1 rounded bg-custom-navy-sky text-white hover:opacity-90" onClick={(e)=>e.stopPropagation()} aria-label={`Open repository for ${p.name}`}>
                                            <FaGithub className="inline-block mr-2" />Repo
                                        </a>
                                    )}
                                    <button onClick={(e) => toggleDetails(idx, e)} className="text-sm px-3 py-1 rounded bg-custom-navy-accent text-white hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-navy-accent" aria-expanded={openIndex === idx} aria-controls={`project-details-${idx}`}>
                                        {openIndex === idx ? 'Hide' : 'Details'}
                                    </button>
                                </div>
                            </header>

                            <div className="mt-3 text-gray-300">
                                <p className="mb-3">{p.description}</p>
                            </div>

                            <div id={`project-details-${idx}`} ref={el => detailsRefs.current[idx] = el} className={`project-details w-full`}>
                                {/* Show image inside expanded details if available */}
                                {p.image && (
                                    <div className="mb-3 w-full rounded overflow-hidden">
                                        <img src={p.image} alt={p.name} className="object-cover w-full max-h-72 mx-auto" loading="lazy" />
                                    </div>
                                )}

                                {p.purpose && (
                                    <div className="mb-3 text-gray-300">
                                        <h4 className="font-semibold mb-2">Purpose</h4>
                                        <p>{p.purpose}</p>
                                    </div>
                                )}

                                {p.tech && (
                                    <div className="flex flex-wrap gap-2 career-tech mb-3">
                                        {p.tech.map((t, k) => (
                                            <span key={k} className="career-tech-chip">{t}</span>
                                        ))}
                                    </div>
                                )}
                                {p.highlights && (
                                    <ul className="list-disc list-inside text-gray-300 mb-3">
                                        {p.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;