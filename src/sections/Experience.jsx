import React, {useEffect, useRef, useState} from 'react'
import {Html, Scroll, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import 'react-vertical-timeline-component/style.min.css';
import { gsap } from "gsap";
import {useGSAP} from "@gsap/react";

const Experience = (props) => {

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
                zIndexRange={[2, 0]}
                ref={expRef}
                transform
                portal={{ current: gl.domElement.parentNode }}
            >
                {shouldRender &&
                    <section className="flex">
                        <ol className="sm:flex" style={{pointerEvents: 'auto'}}>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                        <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </div>
                                    <div className="hidden sm:flex w-full h-1 bg-white"></div>
                                </div>
                                <div className="mt-3 sm:pe-8 border-2 mr-10 p-5" style={{
                                    background: "linear-gradient(135deg, #2D006A,#2D008A, #00FFFF)",
                                    opacity: 0.85,
                                    borderRadius: 12,
                                    height: "350px",
                                    width: "350px"
                                }}>
                                    <h3 className="text-lg font-semibold text-white">Software Engineer Intern</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-white-700">San Diego Supercomputer Center</time>
                                    <time className="block mb-2 text-sm font-normal leading-none text-white-700">Jun 2022 - Sep 2022</time>
                                    <ul className="list-disc pl-5 text-base font-exo text-white">
                                        <li>
                                            Collaborated with a team of 8 to develop a roommate-finder app in React Native for UCSD students.
                                        </li>
                                        <li>
                                            Built 5+ reusable UI components for multiple buttons, sliders, and image holders.
                                        </li>
                                        <li>
                                            Utilized Firebase Cloud to build an in-app messaging system.
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="relative mb-6 sm:mb-0">
                                <div className="flex items-center">
                                    <div className="z-10 flex items-center justify-center w-6 h-6 rounded-full ring-0 bg-blue-900 sm:ring-8 ring-gray-900 shrink-0">
                                        <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                        </svg>
                                    </div>
                                    <div className="hidden sm:flex w-full h-1 bg-white"></div>
                                </div>
                                <div className="mt-3 sm:pe-8 border-2 p-5" style={{
                                    background: "linear-gradient(135deg, #2D006A,#2D008A, #00FFFF)",
                                    opacity: 0.85,
                                    borderRadius: 12,
                                    height: "350px",
                                    width: "350px"
                                }}>
                                    <h3 className="text-lg font-semibold text-white">Software Engineer</h3>
                                    <time className="block mb-2 text-sm font-normal leading-none text-white-700">San Diego Supercomputer Center</time>
                                    <time className="block mb-2 text-sm font-normal leading-none text-white-700">Aug 2023 - Feb 2024</time>
                                    <ul className="list-disc pl-5 text-base font-exo text-white">
                                        <li>
                                            Contributed to NeuroRes development, an iOS chat-based mobile app for 200+ neuroscience residents and attending physicians.
                                        </li>
                                        <li>
                                            Built 10+ REST APIs for notifications, posts/comments, and chat services in Node.js and Go.
                                        </li>
                                        <li>
                                            Integrated with the security system Shibboleth/SAML to support web-based single sign-on.
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ol>
                        <group ref={closeRef} >
                            <button
                                ref={closeRef}
                                onClick={() => {
                                    props.setShowExp(false)
                                    handleCloseMouseLeave()
                                }}
                                onMouseEnter={handleCloseMouseEnter}
                                onMouseLeave={handleCloseMouseLeave}
                                className="ml-10 bg-yellow-300 border-black border-2 text-black rounded-full w-10 h-10 text-3xl font-semibold hover:border-white"
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

export default Experience
