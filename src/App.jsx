import React, {useRef, useState} from 'react'
import NameLogo from "./sections/NameLogo.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import NavBar from "./sections/NavBar.jsx";

const App = () => {

    const scrollRef = useRef();
    const [showAbout, setShowAbout] = useState(false)
    return (
        <main>
            <NavBar scrollRef={scrollRef} showAbout={showAbout} setShowAbout={setShowAbout}/>
            <Hero scrollRef={scrollRef}/>
            <About scrollRef={scrollRef} showAbout={showAbout} setShowAbout={setShowAbout}/>
        </main>
    )
}
export default App
