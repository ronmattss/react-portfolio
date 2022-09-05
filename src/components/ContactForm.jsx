import React, { useState } from "react";



const ContactForm = () => {

    const [subject, setSubject] = useState("I want to Collab");
    const [body, setBody] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <section className="text-gray-700 body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-custom-navy-sky">
                            Send me an Email
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-custom-navy-sky">
                            I'm always learning new stuff and I'm open to help you with your projects!
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-custom-navy-sky">
                                        Name
                                    </label>
                                    <input
                                        onChange={(e) => setSubject(e.target.value)}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label
                                        for="email"
                                        className="leading-7 text-sm text-custom-navy-sky"
                                    >
                                        Email
                                    </label>
                                    <input
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label
                                        for="message"
                                        className="leading-7 text-sm text-custom-navy-sky"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        onChange={(e) => setBody(e.target.value)}
                                        id="message"
                                        name="message"
                                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                    ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button onClick={() => { window.location.href = `mailto:ronmattss@gmail.com?subject=${"Potential Client: "+subject + " " + email}&body=${body}` }} className=" flex mx-auto text-white bg-custom-navy-accent border-0 py-2 px-8 focus:outline-none hover:bg-teal-400 rounded text-lg">
                                    Send
                                </button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                {/* <a className="text-custom-navy-accent" href="mailto:ronmattss@gmail.com">ronmattss@email.com</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactForm;