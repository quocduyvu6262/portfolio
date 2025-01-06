import React, {useEffect, useRef, useState} from 'react'
import {Html, Scroll, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import 'react-vertical-timeline-component/style.min.css';
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const Project = (props) => {

    const [isOpen, setIsOpen] = useState(true);
    const { gl } = useThree();
    const scroll = useScroll();
    const textRef = useRef();
    const htmlRef = useRef();
    const closeRef = useRef();
    const expRef = useRef();
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
        if (expRef.current) { // Check if the ref is set
            if (props.show) {
                setShouldRender(true)
                gsap.fromTo(
                    expRef.current,
                    { autoAlpha: 0, y: -20 }, // Initial state (hidden and shifted up)
                    { autoAlpha: 1, y: 0, duration: 1, ease: "power3.out" } // Final state (visible and centered)
                );
            } else {
                // Animate the View out
                gsap.to(expRef.current, {
                    autoAlpha: 0,
                    y: -20,
                    duration: 0.3,
                });
            }
        }
    }, [props.show]);

    const handleCloseMouseEnter = () => {
        document.body.style.cursor = "pointer";
        gsap.to(closeRef.current, {
            scale: 1.03,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    const handleCloseMouseLeave = () => {
        document.body.style.cursor = "default";
        gsap.to(closeRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
        });
    };

    if (expRef.current) {
        expRef.current.parentElement.style.pointerEvents = 'none'
    }

    return (
        <>
            <Html
                ref={expRef}
                transform
                portal={{ current: gl.domElement.parentNode }}
            >
                {shouldRender &&
                    <section className="flex">
                        <div className="mt-3 sm:pe-8 border-2 mr-10 p-5" style={{
                            background: "linear-gradient(135deg, #2D006A,#2D008A, #00FFFF)",
                            opacity: 0.85,
                            borderRadius: 12,
                            height: "350px",
                            width: "350px",
                            pointerEvents: 'auto',
                        }}>
                            <h3 className="text-lg font-semibold text-white">{props.project.title}</h3>
                            <time className="block mb-2 text-sm font-normal leading-none text-white-700">{props.project.date}</time>
                            <time className="block mb-2 text-sm font-normal leading-none text-white-700">{props.project.link}</time>
                            <ul className="list-disc pl-5 text-base font-exo text-white">
                                {props.project.content.map( (content, index) =>
                                    <li key={index}>{content}</li>
                                )}
                            </ul>
                        </div>
                        <group ref={closeRef} >
                            <button
                                ref={closeRef}
                                onClick={() => {
                                    props.setShowExp(false)
                                    handleCloseMouseLeave()
                                }}
                                onMouseEnter={handleCloseMouseEnter}
                                onMouseLeave={handleCloseMouseLeave}
                                className="mt-2 bg-yellow-300 border-black border-2 text-black rounded-full w-10 h-10 text-3xl font-semibold hover:border-white"
                                aria-label="close"
                                style={{
                                    pointerEvents: 'auto',
                                }}
                            >
                                &times;
                            </button>
                        </group>
                    </section>
                }
            </Html>
        </>
    );
};

export default Project
