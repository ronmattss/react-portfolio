import React, { useState } from "react";


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

export default Features;
