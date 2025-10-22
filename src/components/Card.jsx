import React from "react";
import { FaUnity } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { AiOutlineDesktop } from "react-icons/ai";
import { ImAndroid } from "react-icons/im";
import { IconContext } from "react-icons/lib";

const Card = ({ field, fieldExpertize }) => {
    // This will be a card that will contain the following info:
    /**
     * Tech icon Tech name
     * Description
     * Tools used list
     */
    function IconSelector(field) {
        switch (field) {
            case "Game Development":
                return (<FaUnity className = "float-left mx-2 my-6" />)
            case "Software Development":
                return (<AiOutlineDesktop className="float-left mx-2 my-6" />)
            case "Web Development":
                return (<BsGlobe2 className="float-left mx-2 my-6" />)
            case "Android Development":
                return (<ImAndroid className="float-left mx-2 my-6" />)
            default:
                return (<BsGlobe2 className="float-left mx-2 my-6" />)

        }
    }

    return (
        <div className="w-full max-w-md bg-white/6 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1">
            {/* Icon and Tech name */}
            <div className="">
                <IconContext.Provider value={{ className: "shared-class", size: 50 }}>
                    {IconSelector(field)}
                </IconContext.Provider>
                <div className="mx-4 mb-3 ">
                    <h1 className="text-left font-bold text-4xl flex justify-left">{field}</h1>

                    {/* <hr className="flex justify-left my-3" /> */}
                </div>
                <div className="divide-y divide-zinc-400">
                    <div></div>
                    <div className="mx-4">
                        <p className="mb-4 text-center inline-block">{fieldExpertize}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card


/**
 * 
 * {/* <h1 className="  mt-9 text-center text-2xl">Things I do in Game Dev</h1>
                    <div className="flex justify-center">
                        <li className="list-none ">
                            <ul> Game Design </ul>
                            <ul> Game Mechanics </ul>
                            <ul> Dialogue Systems </ul>
                            <ul> Combat Systems </ul>
                            <ul> Designing Systems </ul>
                            <ul> NPC AI </ul>
                        </li>
                    </div>
                    <h1 className=" mt-5 text-center text-2xl">Dev tools:</h1>
                    <div className="flex justify-center">
                        <li className="list-none mb-3">
                            <ul> Unity Game Engine </ul>
                            <ul> Visual Studio Code </ul>
                            <ul> Jetbrain's Rider </ul>
                            <ul> Draw.io </ul>
                            <ul> Adobe Photoshop </ul>
                            <ul> Aseprite </ul>
                            <ul> Blender </ul>
                        </li>
                    </div> */
