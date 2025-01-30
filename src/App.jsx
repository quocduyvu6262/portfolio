import React, {useRef, useState} from 'react'
import NameLogo from "./sections/NameLogo.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import NavBar from "./sections/NavBar.jsx";
import Experience from "./sections/Experience.jsx";
import Project from "./sections/Project.jsx";

const App = () => {

    const scrollRef = useRef();
    const [showAbout, setShowAbout] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    const [showProject, setShowProject] = useState(false)
    const [isScrolling, setIsScrolling] = useState(false)
    const isScrollingRef = useRef(false)
    return (
        <main>
            <Hero scrollRef={scrollRef}/>
            <NavBar
                scrollRef={scrollRef}
                showAbout={showAbout}
                setShowAbout={setShowAbout}
                setShowExperience={setShowExperience}
                setShowProject={setShowProject}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
                isScrollingRef={isScrollingRef}
            />
            <About
                scrollRef={scrollRef}
                showAbout={showAbout}
                setShowAbout={setShowAbout}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
                isScrollingRef={isScrollingRef}
            />
            <Experience
                scrollRef={scrollRef}
                showExperience={showExperience}
                setShowExperience={setShowExperience}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
                isScrollingRef={isScrollingRef}
            />
            <Project
                scrollRef={scrollRef}
                showProject={showProject}
                setShowProject={setShowProject}
                isScrolling={isScrolling}
                setIsScrolling={setIsScrolling}
                isScrollingRef={isScrollingRef}
            />
        </main>
    )
}
export default App
