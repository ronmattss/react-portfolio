import React, { useRef } from "react";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/Navbar";
import Career from "../components/Career";
import CareerData from "../data/career.json";
import Projects from "../components/Projects";
import ProjectsData from "../data/projects.json";
import QuickSkills from "../components/QuickSkills";
import About from "../components/About";

// Home Page

/**
 * 
 * @returns 
 *                 pets.map(pet => (
                    <Pet
                        animal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id} />
                ))
 */

const Home = () => {
    // const [apod, setApod] = useState(null);
    const home = useRef(null);
    const fields = useRef(null);
    const project = useRef(null);
    const contact = useRef(null);
    const scrollDown = (ref) => {
        // console.log(ref);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth',
        });
    };

    // async function setUpApod() {
    //     let apodObject = null;
    //     apodObject =  await GetLatestApod();
    //     setApod(apodObject);
    // }

    // useEffect(() => { setUpApod() }, [])


    const projects = ProjectsData;


    return (
        <div className="bg-custom-dark-primary">
            <div ref={home}></div>
            <NavBar home={() => { scrollDown(home) }} fields={() => { scrollDown(fields) }} projects={() => { scrollDown(project) }} contacts={() => { scrollDown(contact) }} />
            <Landing />
            {/* Hero → About → Skills → Projects → Experience → Contact */}
            <About />
            <QuickSkills />

            {/* Projects */}
            <div ref={project} id="projects"></div>
            <Projects projects={projects} title={"Personal Projects"} />

            {/* Professional Experience (fields ref attached for scrolling) */}
            <div id="career" ref={fields} className="px-4">
                <Career positions={CareerData} />
            </div>
             
            <div ref={contact}></div>
            <ContactForm />
            <Footer home={() => { scrollDown(home) }} />
        </div>

    )
}

export default Home;