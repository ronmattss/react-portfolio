import React, { useState } from "react";
import { FaGamepad, FaAndroid, FaLaptopCode, FaGlobe } from "react-icons/fa";


const Features = ({ projectTitle, projectDescription, projectImage }) => {
    const [visible, setVisibility] = useState(false);

    return (
        <div className="m-4 text-start bg-transparent h-auto w-96 shadow-md transition ease-in-out  hover:scale-110" onClick={() => setVisibility(!visible)}>
            {/* Icon and Tech name */}
            <div className="">
                <div className="flex items-end h-60   bg-cover " style={{ backgroundImage: `url(${projectImage})` }}>
                    <div className=" text-custom-navy-sky bg-gradient-to-r  from-slate-900   font-bold text-3xl  ">
                        <h1 className="ml-3 mr-10  my-1" >{projectTitle}</h1>
                    </div>
                </div>
                {/* <hr className="flex justify-left my-3" /> */}
                {/* Hide bottom section if not hovered, controlled in top most div*/}
                <div className={`bg-custom-navy-sky h-48  ${visible ? "block " : "hidden"}`}>
                    <div>
                        <div className="mx-4 ">
                            <p className="mb-4 my-6 text-center text-xl inline-block">{projectDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const FeaturesSection = ({ features }) => {
    const defaultFeatures = [
        { title: "Game Development", description: "I love making games — designing mechanics, prototyping and shipping small playable experiences." },
        { title: "Software Development", description: "Building desktop and backend systems using .NET and Node.js, focusing on reliability and clean architecture." },
        { title: "Web Development", description: "Creating responsive React applications, component-driven UIs and frontend tooling." },
        { title: "Mobile / Android", description: "Exploring mobile UI and apps; experience with native Android and cross-platform frameworks." }
    ];

    const items = (features && features.length) ? features : defaultFeatures;
    const icons = [FaGamepad, FaLaptopCode, FaGlobe, FaAndroid];

    return (
        <section id="features" className="py-12">
            <div className="max-w-6xl mx-auto px-6 md:px-12">
                <h2 className="text-4xl font-extrabold text-center mb-8 tracking-wide text-gray-200">Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-gray-800 to-gray-700 text-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                        >
                            <div className="text-6xl mb-4 text-yellow-300">
                                {feature.icon ? feature.icon : React.createElement(icons[index % icons.length])}
                            </div>
                            <h3 className="text-3xl font-bold mb-2 text-yellow-300">{feature.title}</h3>
                            <p className="text-gray-300 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
