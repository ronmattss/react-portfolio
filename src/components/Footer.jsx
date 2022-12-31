import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
const Footer = ({ home }) => {
    return (
        <div className="divide-y divide-zinc-700">
            <div></div>
            <nav className="bg-custom-dark-secondary text-center grid grid-rows-2">
                <h1 className="mt-4 text-custom-navy-sky"><button onClick={home}>Home</button></h1>
                <li className="m-2 flex justify-center gap-4">
                    <IconContext.Provider value={{ className: "shared-class", size: 35, color: 'rgb(245, 242, 231)' }}>
                        <ul onClick={() => { window.open("https://www.linkedin.com/in/ronmattss/", "") }} className="inline-block"><FaLinkedin /></ul>
                        <ul onClick={() => { window.open("https://twitter.com/ShadedGames", "") }} className="inline-block"><FaTwitter /></ul>
                        <ul onClick={() => { window.open("https://github.com/ronmattss", "") }} className="inline-block"><FaGithub /></ul>
                        {/* <ul onClick={() => { window.open("https://shadedgames.azurewebsites.net/Project", "") }} className="inline-block"><FaDiscord /></ul> */}
                    </IconContext.Provider>
                </li>
                <p className="m-2 mb-3 text-custom-navy-sky">© 2022 - Ron Matthew Rivera</p>
            </nav>
        </div>

    )
}





export default Footer;