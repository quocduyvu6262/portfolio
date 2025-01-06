import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame, useThree} from "@react-three/fiber";
import {Html, OrbitControls, Scroll, ScrollControls, useScroll} from "@react-three/drei";
import Island from "../components/Island.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import {getProject} from "@theatre/core";
import {editable as e, SheetProvider, PerspectiveCamera} from "@theatre/r3f";
import state from '../assets/state.json'
import CustomGeometryParticles from "../components/CustomGeometryParticles.jsx";
import About from "./About.jsx";
import {Github} from "../components/Github.jsx";
import {Linkedin} from "../components/Linkedin.jsx";
const sheet = getProject("Fly Through", {state: state}).sheet("Scene")
import { motion } from 'framer-motion';

const Hero = () => {
    const [showTitle, setShowTitle] = useState(true);
    const scrollRef = useRef();

    const handleScroll = () => {
        if (scrollRef.current) {
            var nextPage = 0
            let offset = scrollRef.current.offset
            if (offset <= 0.33) nextPage = 1
            else if (offset > 0.33 && offset <= 0.66) nextPage = 2
            else nextPage = 3
            scrollRef.current.el.scrollTo({ top: window.innerHeight * nextPage, behavior: 'smooth' });
        }
    }

    return (
        <section className="min-h-screen bg-white">
            <div className={`relative z-10 w-full mx-auto flex flex-col justify-start c-space gap-3`}
                 style={{ pointerEvents: 'none' }}>
                <p className={`sm:text-4xl text-2xl font-medium text-black font-generalsans mt-48
                            transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    Hi, I am Tony <span className="waving-hand">👋</span>
                </p>
                <p className={`hero_tag text-gray-800 transition-opacity duration-500 ${showTitle ? 'opacity-100' : 'opacity-0'}`}>
                    Building Things for Fun
                </p>
            </div>
            <div className="absolute items-center flex justify-center z-10 bottom-10 w-full" style={{ pointerEvents: 'none' }}>
                <button
                    onClick={handleScroll}
                    style={{
                        pointerEvents: 'auto'
                    }}
                >
                    <div className="w-[30px] h-[55px] rounded-3xl border-4 border-gray-300 flex justify-center">
                        <motion.div
                            animate={{
                                y: [10, 24, 10],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className='w-3 h-3 rounded-full bg-gray-300 mb-1'
                        />
                    </div>
                </button>
            </div>
            <div className="w-full h-full absolute inset-0 left-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <ScrollControls pages={3}>
                            <SheetProvider sheet={sheet}>
                                <PerspectiveCamera makeDefault position={[0, 0, 0]} theatreKey="Camera" fov={90}/>
                                <CustomGeometryParticles
                                    count={2000}
                                    shape="box"
                                    scale={30}
                                    position={[-5,4,0]}
                                    rotation={[0.2,-4,0]}
                                />
                                <About/>
                                <Island
                                    scale={0.007}
                                    setShowTitle={setShowTitle}
                                    pointerEvents="auto"
                                    scrollRef={scrollRef}
                                />
                                <group position={[-1.5,0,1]}>
                                    <Github
                                        rotation={[0,0.1,0]}
                                        position={[18,2,-0.4]}
                                    />
                                    <Linkedin
                                        rotation={[-0.2,-0.09,0]}
                                        position={[15,2,0]}
                                        scale={3}
                                    />
                                </group>
                                <ambientLight intensity={1}/>
                                <directionalLight position={[8, 4, 7]} intensity={6}/>
                            </SheetProvider>
                        </ScrollControls>
                    </Suspense>
                </Canvas>
            </div>
        </section>
    )
}
export default Hero
