import React, { useState, useEffect, useRef } from "react";
import "./Landing.css";
import TriangleBackground from "./TriangleBackground";
import CareerData from '../data/career.json';
import ProjectsData from '../data/projects.json';

const Landing = () => {
    const roles = [
        " SOFTWARE DEVELOPMENT",
        " GAME DEVELOPMENT",
        " UI & TEST AUTOMATION",
        " WEB DEVELOPMENT",
        " FULL-STACK DEVELOPMENT",
        " MOBILE / ANDROID DEVELOPMENT",
        " CI/CD & DEVOPS"
    ];

    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [displayedText, setDisplayedText] = useState(roles[0]);
    const [visible, setVisible] = useState(true);
    const [arrowVisible, setArrowVisible] = useState(true);

    const cycleRef = useRef(null);
    const typingRef = useRef(null);

    useEffect(() => {
        // initialize typing for first role
        setDisplayedText(roles[0]);

        const displayDuration = 2500; // time each role stays visible (ms)
        const fadeDuration = 300; // fade out/in duration (ms)
        let index = 0;

        function typeText(text) {
            clearInterval(typingRef.current);
            setDisplayedText("");
            let i = 0;
            typingRef.current = setInterval(() => {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
                if (i >= text.length) {
                    clearInterval(typingRef.current);
                }
            }, 35); // typing speed
        }

        cycleRef.current = setInterval(() => {
            // fade out
            setVisible(false);
            setTimeout(() => {
                index = (index + 1) % roles.length;
                setCurrentRole(roles[index]);
                // after fade, type new text
                typeText(roles[index]);
                // fade in
                setVisible(true);
            }, fadeDuration);
        }, displayDuration + fadeDuration + (roles[0].length * 35));

        return () => {
            clearInterval(cycleRef.current);
            clearInterval(typingRef.current);
        };
    }, []);

    useEffect(() => {
        // Observe the career section; fall back to features if career isn't present
        const targetIds = ["career", "features"];
        let observedEl = null;
        for (const id of targetIds) {
            const el = document.getElementById(id);
            if (el) {
                observedEl = el;
                break;
            }
        }

        if (!observedEl) {
            // No target found — keep arrow visible
            setArrowVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setArrowVisible(!entry.isIntersecting);
                });
            },
            { root: null, threshold: 0.25 }
        );

        observer.observe(observedEl);

        return () => observer.disconnect();
    }, []);

    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const el = document.getElementById("career") || document.getElementById("features");
        if (!el) return;
        const offset = -20; // small offset from top
        const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    // compute quick stats
    const extractStartYear = (dates) => {
        if (!dates) return null;
        const match = dates.match(/(19|20)\d{2}/);
        return match ? parseInt(match[0], 10) : null;
    };

    const yearsExperience = (() => {
        const yearsFound = CareerData.map(c => extractStartYear(c.dates)).filter(Boolean);
        if (!yearsFound.length) return '—';
        const earliest = Math.min(...yearsFound);
        const diff = new Date().getFullYear() - earliest;
        return `${diff}+ yrs`;
    })();

    const projectsCount = Array.isArray(ProjectsData) ? ProjectsData.length : '—';

    return (
        <div className="min-h-[60vh] md:min-h-screen flex items-center justify-center relative">
            <TriangleBackground />
            <div className="landing-content section-padding">
                <div className="text-center px-6 md:px-12">
                    <h2 className="text-custom-navy-sky text-4xl lg:text-7xl lg:text-center md:w-auto leading-tight font-extrabold">
                        HI, I'M RON
                    </h2>
                    <p className="text-custom-navy-sky my-2 text-center lg:text-center text-2xl font-semibold">
                        Software & Game Developer focused on automation, backend systems, and Unity prototypes.
                    </p>
                    <p className="text-custom-navy-sky my-2 text-center lg:text-center text-xl font-medium">
                        <span className={`role ${visible ? 'visible' : 'hidden'}`}>{displayedText}<span className="caret" /></span>
                    </p>
                    <div className="landing-stats mt-4 mb-2">
                        <button onClick={handleScrollToFeatures} className="stat-chip" type="button">{yearsExperience}</button>
                        <div className="stat-chip">{projectsCount} Personal Projects</div>
                        <div className="stat-chip">Open to opportunities</div>
                    </div>
                    <div className="flex justify-center content-center my-1 gap-4">
                        <button
                            onClick={handleScrollToFeatures}
                            className="btn-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg ease-linear transition-all duration-150"
                            type="button"
                        >
                            View Experience
                        </button>

                        <button
                            onClick={() => { window.open("/assets/Data/Resume - Rivera, Ron Matthew.pdf", ""); }}
                            className="btn-secondary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button"
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                <button
                    onClick={handleScrollToFeatures}
                    className={`scroll-indicator ${arrowVisible ? '' : 'hidden'}`}
                    aria-label="Scroll to features"
                >
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5v14M19 12l-7 7-7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Landing;
