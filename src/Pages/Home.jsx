import React, { useRef } from "react";
import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Landing from "../components/Landing";
import NavBar from "../components/Navbar";
import ShortDescription from "../components/ShortDescription";







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


    const projects = [
        {
            key: 0,
            name: "Matrix Path",
            image: "/assets/img/MatrixPath.png",
            description: "A Procedural Path-building Puzzle game where you uncover paths to the exit, uses WFC to generate levels, and Fuzzy Logic to control how hard a level will be."
        },
        {
            key: 1,
            name: "Spirit Guardian",
            image: "/assets/img/SS1.jpg",
            description: "Spirit Guardian is a 2D Action-Adventure prototype with the theme of aswang belief of the Philippines"
        },
        {
            key: 2,
            name: "Combat System",
            image: "/assets/img/HackSlash.png",
            description: "A prototype of a Melee Combat System where it can handle any type of weapon."
        },
    ]


    return (
        <div className="bg-custom-dark-primary">
            <div ref={home}></div>
            <NavBar home={() => { scrollDown(home) }} fields={() => { scrollDown(fields) }} projects={() => { scrollDown(project) }} contacts={() => { scrollDown(contact) }} />
            <Landing />
            <ShortDescription header={"What I do"} />
            <div ref={fields}></div>
            <div className=" grid grid-cols-1 justify-items-center xl:grid-cols-3 2xl:mx-80">
                <Card field={"Game Development"} fieldExpertize={"I love making games, it's like a puzzle that you can actually play after you figure out how things work. I have years of experience designing and prototyping small games"} />
                <Card field={"Software Development"} fieldExpertize={"Software development is where I started, I am exposed to .net ecosystem where I experimented on a lot of it features. I also like creating Discord bots"} />
                <Card field={"Web Development"} fieldExpertize={"Building websites is fun, although I don't like designing the UI but I like creating React Components and handling Backend stuff using ASP.Net or NodeJS"} />
                <Card field={"Android Development"} fieldExpertize={"I tried exploring mobile app development using Android, but Flutter is much better on creating UI components"} />
            </div>
            <div ref={project}></div>
            <ShortDescription header={"Projects I made"} />
            <div className=" grid grid-cols-1 justify-items-center xl:grid-cols-3 2xl:mx-80">
                {
                    projects.map(project => (
                        <Features
                            key={project.key}
                            projectTitle={project.name}
                            projectImage={project.image}
                            projectDescription={project.description}
                        />
                    ))
                }
            </div>
            {/* <div className=" grid grid-cols-1 justify-items-center xl:grid-cols-3 2xl:mx-80">
                {
                    apod == null ? <div></div> : <Features projectImage={apod.hdurl} projectTitle={apod.title} projectDescription={apod.explanation} />
                }
            </div> */}
            <div ref={contact}></div>
            <ContactForm />
            <Footer home={() => { scrollDown(home) }} />
        </div>

    )
}

export default Home;