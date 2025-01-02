import React, {useEffect, useRef, useState} from 'react'
import {Html, Scroll, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const Guide = () => {

    const { gl } = useThree();

    return (
        <>
            <Html
                transform
                scale={1}
                position={[-8, 4, 0]}
                rotation={[-Math.PI / 20, 0, 0]}
                portal={{ current: gl.domElement.parentNode }}
            >
                <section
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    className="border-2 p-3 text-center"
                    style={{
                        userSelect: 'none',
                        width: "340px",
                        borderRadius: 12,
                    }}
                >
                    <p className={`sm:text-xl text-2xl font-medium text-white font-generalsans leading-relaxed tracking-wide`}>
                        Tap on each object to view my software engineering projects
                    </p>
                </section>
            </Html>
        </>
    );
};

export default Guide
