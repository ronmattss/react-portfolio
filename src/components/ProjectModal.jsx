import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="pm-overlay" onClick={onClose} role="dialog" aria-modal="true">
            <div className="pm-content" onClick={(e) => e.stopPropagation()}>
                <button className="pm-close" onClick={onClose} aria-label="Close">×</button>

                {project.image && (
                    <div className="pm-image">
                        <img src={project.image} alt={project.name} />
                    </div>
                )}

                <div className="pm-body">
                    <h3 className="pm-title">{project.name}</h3>
                    {project.type && <div className="pm-type">{project.type}</div>}
                    <p className="pm-description">{project.description}</p>

                    {project.tech && (
                        <div className="pm-tech">
                            {project.tech.map((t, i) => (
                                <span key={i} className="pm-tech-chip">{t}</span>
                            ))}
                        </div>
                    )}

                    <div className="pm-actions">
                        {project.link && <a href={project.link} target="_blank" rel="noreferrer" className="pm-btn primary">View Live</a>}
                        {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="pm-btn">Repository</a>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;