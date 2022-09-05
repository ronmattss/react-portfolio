import React from "react";

const Landing = () => {
    return (
        <div>
            <div class="grid grid-rows-1 gap-10 h--auto {bg-slate-400} ">
                <div className="grid grid-cols-1 md:grid-cols-1 {bg-slate-500} mt-52 lg:mt-40 lg:mx-14">
                    <div className="flex justify-center  grid-rows-2 items-center w-auto {bg-slate-800}">
                        <div className="w-max h-max lg:w-1/2 md:h-auto">
                            <div>
                                <h2 className="text-center text-custom-navy-sky text-4xl lg:text-7xl lg:text-center md:w-auto ">HI, I'M RON A GRADUATING COMPUTER SCIENCE STUDENT</h2>
                                <p class="text-custom-navy-sky my-3 text-center lg:text-center">Game Developer | Software Developer | Full-Stack Developer | Mobile App Developer</p>
                            </div>
                            <div className=" grid grid-rows-2 h-auto">
                                <div className="flex justify-center content-center my-1">
                                    <button onClick={() =>{window.open("https://shadedgames.azurewebsites.net/Project","")}} className="bg-custom-navy-accent text-white active:bg-teal-100 hover:bg-teal-400 hover:text-gray-100 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                    >                                View All Projects
                                    </button>

                                    <button onClick={() =>{window.open("/assets/Data/CV-Rivera, Ron Matthew R..pdf","")}} className="bg-custom-navy-sky text-custom-dark-secondary active:bg-teal-100 hover:bg-teal-400 hover:text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                                    >                                Download CV
                                    </button>
                                </div>
                            </div>
                        </div>


                    </div>
                    {/* This can be broken down to another Component */}
                    {/* <div className="flex justify-center items-center w-auto bg-slate-500">
                        <div className="rounded-full flex justify-center w-max h-max mx-2 my-2">
                            <img className="rounded-full w-3/4 h-3/4" src="/assets/images/2x2hhe.png" alt="profile" />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Landing;
