import React, {useRef, useState} from 'react'
import NameLogo from "./sections/NameLogo.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import NavBar from "./sections/NavBar.jsx";
import Experience from "./sections/Experience.jsx";

const App = () => {

    const scrollRef = useRef();
    const [showAbout, setShowAbout] = useState(false)
    const [showExperience, setShowExperience] = useState(false)
    return (
        <main>
            <Hero scrollRef={scrollRef}/>
            <NavBar scrollRef={scrollRef} showAbout={showAbout} setShowAbout={setShowAbout} setShowExperience={setShowExperience}/>
            <About scrollRef={scrollRef} showAbout={showAbout} setShowAbout={setShowAbout}/>
            <Experience scrollRef={scrollRef} showExperience={showExperience} setShowExperience={setShowExperience}/>
        </main>
    )
}
export default App
