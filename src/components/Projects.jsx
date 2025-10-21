import React from "react";

const Projects = ({ projects }) => {
    const items = projects || [];

    return (
        <div className="w-full">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                    {items.map((p, idx) => (
                        <div key={p.key ?? idx} className="bg-white/5 rounded-lg overflow-hidden shadow-lg w-80">
                            <div className="h-48 bg-gray-800 flex items-center justify-center overflow-hidden">
                                {p.image ? (
                                    <img src={p.image} alt={p.name} className="object-cover h-full w-full" />
                                ) : (
                                    <div className="text-gray-400">No image</div>
                                )}
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                                <p className="text-sm text-gray-300">{p.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;