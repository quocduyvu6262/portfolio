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
            position={[-30,16,-30]}
            style={{
                pointerEvents: 'none',
            }}
        >
            <section className={`w-full transition-opacity duration-300 ${opacity ? 'opacity-100' : 'opacity-0'}`}
                     style={{
                         width: '240%',
                     }}
            >
                <p className={`hero_tag text-gray-800`}>
                    About Me
                </p>
                <p className={`sm:text-3xl text-2xl font-large text-black font-exo leading-relaxed tracking-wide`}>
                    I am currently pursuing a master in Computer Science at Texas A&M University, where I mostly focus on distributed system and fullstack development.
                </p>
            </section>
        </Html>
    )
}

export default About