import React, { useEffect, useRef, useState } from 'react'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react"

const About = ({ scrollRef, showAbout, setShowAbout, isScrolling, setIsScrolling, isScrollingRef }) => {

    useEffect(() => {
        let frameId;
        let lastOffset = null;
        const handleScrollPosition = () => {
            if (!scrollRef.current) return;

            const offset = scrollRef.current.offset;

            const roundedOffset = parseFloat(offset.toFixed(1));
            const roundedLastOffset = parseFloat(lastOffset?.toFixed(1) ?? -1);
            if (roundedOffset !== roundedLastOffset && !isScrollingRef.current) {
                lastOffset = offset;
                const shouldShowAbout = offset >= 0.2 && offset < 0.4
                setShowAbout(prev => (prev !== shouldShowAbout ? shouldShowAbout : prev));
            }

            frameId = requestAnimationFrame(handleScrollPosition);
        };
        const interval = setInterval(() => {
            const scrollElement = scrollRef.current?.el;
            if (scrollElement) {
                scrollElement.addEventListener('scroll', handleScrollPosition);
                clearInterval(interval)
            }
        }, 100)
        return () => {
            clearInterval(interval)
            const scrollElement = scrollRef.current?.el;
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScrollPosition);
            }
            cancelAnimationFrame(frameId)
        };
    }, [scrollRef, setShowAbout]);

    useEffect(() => {
        if (isScrolling) {
            const timeout = setTimeout(() => {
                isScrollingRef.current = false
                setIsScrolling(false)
            }, 1000); // 1000ms timeout to allow smooth scrolling to finish

            return () => clearTimeout(timeout); // Cleanup timeout if the component unmounts or state changes
        }
    }, [isScrolling]);

    return (
        <>
            <AnimatePresence initial={false}>
                {showAbout &&
                    <motion.div
                        key="about"
                        className={`absolute top-1/2 translate overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-[rgba(10,25,47,0.85)] left-1/2 flex items-start justify-center w-[85%] sm:w-2/3 max-w-[750px] max-h-[70vh] sm:h-auto z-10 rounded-[18px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-with-1 scrollbar-track-transparent`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="fixed top-3 right-0 flex justify-end w-full px-3">
                            <button onClick={() => setShowAbout(false)}>
                                <IoMdClose color="white" size={30} />
                            </button>
                        </div>
                        <div className="flex overflow-auto sm:flex-row items-start justify-center w-full p-10">

                            <div className="md:flex flex-1 justify-center hidden">
                                <div className="min-w-[120px] w-1/2 rounded-full border-gray-400 border-[2px] shadow-lg overflow-hidden">
                                    <img
                                        src="/assets/avatar.jpg"
                                        alt="Description of image"
                                        className="w-full h-full object-cover transition-transform duration-300"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-1 flex-col sm:p-0 p-5 gap-5">
                                <p className="text-3xl text-white font-bold">Tony Vu</p>
                                <div className="flex flex-row gap-2">
                                    <a href="https://github.com/quocduyvu6262" target="_blank" className="flex flex-row gap-2 border-2 items-center p-1 rounded-md">
                                        <FaGithubSquare color="white" size={20} />
                                        <p className="text-sm text-white font-sans font-semibold">Github</p>
                                    </a>
                                    <a href="https://www.linkedin.com/in/duyquocvu/" target="_blank" className="flex flex-row gap-2 border-2 items-center p-1 rounded-md">
                                        <FaLinkedin color="white" size={20} />
                                        <p className="text-sm text-white font-sans font-semibold">Linkedin</p>
                                    </a>
                                    <a href="mailto:quocduyvu6262@gmail.com" target="_blank" className="flex flex-row gap-2 border-2 items-center p-1 rounded-md">
                                        <MdEmail color="white" size={20} />
                                        <p className="text-sm text-white font-sans font-semibold">Email</p>
                                    </a>
                                </div>
                                <p className="font-sans text-white">I'm a Master's student in Computer Science at Texas A&M University, specializing in cloud computing and distributed systems. Previously, I worked for a year in full-stack and iOS development.</p>
                                <div className="gap-3 flex flex-col">
                                    <p className="text-2xl text-white font-semibold">Education</p>
                                    <div>
                                        <p className="text-xl text-white font-semibold">Texas A&M University</p>
                                        <p className="text-sm text-white-700">Master of Science in Computer Science</p>
                                    </div>
                                    <div>
                                        <p className="text-xl text-white font-semibold">University of California, San Diego</p>
                                        <p className="text-sm text-white-700">Bachelor of Science in Mathematics</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </motion.div>
                }
            </AnimatePresence>
        </>
    )
}
export default About
