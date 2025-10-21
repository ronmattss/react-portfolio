import React, { useState, useEffect, useRef } from "react";
import "./Landing.css";

const Landing = () => {
    const roles = [
        " SOFTWARE DEVELOPER",
        " FULL-STACK DEVELOPER",
        " MOBILE APP DEVELOPER"
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
        const featuresEl = document.getElementById("features");
        if (!featuresEl) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setArrowVisible(!entry.isIntersecting);
                });
            },
            { root: null, threshold: 0.25 }
        );

        observer.observe(featuresEl);

        return () => observer.disconnect();
    }, []);

    const handleScrollToFeatures = (e) => {
        e.preventDefault();
        const el = document.getElementById("features");
        if (!el) return;
        const offset = -20; // small offset from top
        const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
        window.scrollTo({ top, behavior: "smooth" });
    };

    return (
        <div className="min-h-[60vh] md:min-h-screen flex items-center justify-center relative">
            <div className="text-center px-6 md:px-12">
                <h2 className="text-custom-navy-sky text-4xl lg:text-7xl lg:text-center md:w-auto leading-tight">
                    HI, I'M RON
                </h2>
                <p className="text-custom-navy-sky my-3 text-center lg:text-center text-2xl font-medium">
                    A <span className={`role ${visible ? 'visible' : 'hidden'}`}>{displayedText}<span className="caret" /></span>
                </p>
                <div className="flex justify-center content-center my-1 gap-4">
                    <button
                        onClick={() => { window.open("https://shadedgames.azurewebsites.net/Project", ""); }}
                        className="bg-custom-navy-accent text-white active:bg-teal-100 hover:bg-teal-400 hover:text-gray-100 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
                        type="button"
                    >
                        View All Projects
                    </button>

                    <button
                        onClick={() => { window.open("/assets/Data/Ron Resume .pdf", ""); }}
                        className="bg-custom-navy-sky text-custom-dark-secondary active:bg-teal-100 hover:bg-teal-400 hover:text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
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
    );
};

export default Landing;
