import React, { useState } from "react";

const Career = ({ positions }) => {
    const items = (positions && positions.length) ? positions : [
        {
            company: "Sample Studios",
            role: "Software Engineer",
            dates: "2021 — Present",
            summary: "Worked on building reliable web services and internal tools.",
            tech: ["React", ".NET", "SQL"],
            highlights: [
                "Led migration of monolith to microservices.",
                "Improved API performance by 40%.",
            ]
        }
    ];

    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Professional Experience</h2>
                <div className="space-y-4">
                    {items.map((pos, i) => (
                        <article key={i} className="bg-white/5 rounded-lg p-4 md:p-6 shadow-sm">
                            <header className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-semibold">{pos.role}</h3>
                                    <p className="text-sm text-gray-300">{pos.company} • <span className="text-gray-400">{pos.dates}</span></p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => toggle(i)}
                                        aria-expanded={openIndex === i}
                                        className="text-sm px-3 py-1 rounded bg-custom-navy-accent text-white hover:opacity-90 focus:outline-none"
                                    >
                                        {openIndex === i ? 'Hide' : 'Details'}
                                    </button>
                                </div>
                            </header>

                            <div className={`mt-4 transition-all duration-300 ${openIndex === i ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                <p className="text-gray-300 mb-3">{pos.summary}</p>
                                {pos.highlights && (
                                    <ul className="list-disc list-inside text-gray-300 mb-3">
                                        {pos.highlights.map((h, idx) => (
                                            <li key={idx}>{h}</li>
                                        ))}
                                    </ul>
                                )}
                                {pos.tech && (
                                    <div className="flex flex-wrap gap-2">
                                        {pos.tech.map((t, k) => (
                                            <span key={k} className="text-xs px-2 py-1 rounded bg-white/6">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;