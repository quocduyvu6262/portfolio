import React, {useEffect, useRef, useState} from 'react'
import {Html, Scroll, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";

const About = ({scrollRef}) => {
    const { gl } = useThree();
    const scroll = useScroll();
    const [opacity, setOpacity] = useState(false);
    useFrame(() => {
        setOpacity(scroll.offset > 0.15 && scroll.offset < 0.5)
    })
    return (
        <Html
            portal={{ current: gl.domElement.parentNode }}
            position={[-30,20,-30]}
            style={{
                pointerEvents: 'none',
            }}
        >
            <section className={`transition-opacity duration-300 ${opacity ? 'opacity-100' : 'opacity-0'}`}
                     style={{
                         width: '300%',
                     }}
            >
                <p className={`hero_tag text-gray-800`}>
                    About Me
                </p>
                <p className={`sm:text-3xl text-2xl font-large text-black font-exo leading-relaxed tracking-wide`}>
                    I am currently pursuing a Master's in Computer Science at Texas A&M University, focusing on cloud computing and distributed systems. Previously, I received a Bachelor's degree in Mathematics from UC San Diego. Feel free to explore my projects, and connect!
                </p>
            </section>
        </Html>
    )
}

export default About