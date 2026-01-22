import React, {useEffect, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react"
import { FiExternalLink } from "react-icons/fi";


const Experience = ({scrollRef, showExperience, setShowExperience, isScrolling, setIsScrolling, isScrollingRef}) => {

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
                const shouldShow = offset >= 0.55 && offset < 0.70
                setShowExperience(prev => (prev !== shouldShow ? shouldShow : prev));
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
    }, [scrollRef, setShowExperience]);

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
        <AnimatePresence initial={false}>
            {showExperience &&
                <motion.div
                    key="about"
                    className={`absolute top-1/2 pb-5 translate overflow-y-auto -translate-x-1/2 -translate-y-1/2 pt-3 bg-[rgba(10,25,47,0.85)] w-[85%] sm:w-3/4 max-w-[1000px] max-h-[70vh] left-1/2 flex flex-col items-center justify-start z-10 rounded-[18px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-with-1 scrollbar-track-transparent`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="sticky top-0 right-0 flex justify-end w-full px-3">
                        <button onClick={() => setShowExperience(false)}>
                            <IoMdClose color="white" size={30} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 w-3/4 text-white font-sans">

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="src/assets/robinhood-logo.png"
                                        className="w-full h-full rounded-lg object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Robinhood</p>
                                    <p className="text-[12px] text-gray-300">Incoming May 2026 - August 2026</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer Intern</p>
                                </div>
                            </div>
                            <div className="flex xl:flex-row flex-col gap-14">
                                <div className="flex-1 flex flex-col justify-start gap-5">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Will build Swift-based, production-quality iOS and watchOS features.</li>
                                        <li>Will collaborate with cross-functional teams to design, implement, and launch mobile experiences.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="src/assets/tesla-logo.png"
                                        className="w-full h-full object-contain rounded-lg"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">Tesla</p>
                                    <p className="text-[12px] text-gray-300">Jan 2026 - May 2026</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer Intern</p>
                                </div>
                            </div>
                            <div className="flex xl:flex-row flex-col gap-14">
                                <div className="flex-1 flex flex-col justify-start gap-5">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Design, develop, and maintain front-end features for web and mobile applications for Automated Diagnostics team.</li>
                                        <li>Collaborate with cross-functional teams to implement feature and resolve technical issues.</li>
                                        <li>Participate in code reviews, debugging, and testing.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="src/assets/nytimes-logo.png"
                                        className="w-full h-full rounded-lg object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">The New York Times</p>
                                    <p className="text-[12px] text-gray-300">June 2025 - August 2025</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer Intern</p>
                                </div>
                            </div>
                            <div className="flex xl:flex-row flex-col gap-14">
                                <div className="flex-1 flex flex-col justify-start gap-5">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Spearheaded the implementation of full Dark Mode support for the native iOS Games App.</li>
                                        <li>Resolved critical theme inconsistency bugs between UIKit/SwiftUI views and embedded web views.</li>
                                        <li>Built an in-app setting to let users universally apply their preferred theme mode across the app.</li>
                                        <li>Participated in New York Times Maker Week 2025 and built a Games/Friends Widget that displays real-time gameplay
                                            data directly on the home screen.</li>
                                    </ul>
                                </div>
                                <div className="flex-1 -mt-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-end gap-5">
                                        <img
                                            src="/assets/nyt1.PNG"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-[18px] shadow-lg col-span-1 border-2"
                                        />

                                        <img
                                            src="/assets/nyt2.PNG"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-[18px] shadow-lg col-span-1 border-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="w-14 h-14 rounded-lg border-white-600 border-2 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="src/assets/sdsc-logo.png"
                                        className="w-full h-full rounded-lg object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">San Diego Supercomputer Center</p>
                                    <p className="text-[12px] text-gray-300">August 2023 - February 2024</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex xl:flex-row flex-col gap-14">
                                <div className="flex-1 flex flex-col justify-start gap-2">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Key contributor in development of NeuroRes, an iOS chat app for 200+ neuroscience professionals, receiving positive stakeholder feedback.</li>
                                        <li>Utilized Swift UI to create a responsive interface featuring interactive calendars, neuroscience journal blogs, communication channels, and image collections, following MVVM architecture.</li>
                                    </ul>
                                    <a
                                        href="https://apps.apple.com/gb/app/neurores/id1345523598"
                                        target="_blank"
                                        className="text-sm ml-4 underline flex flex-row items-center gap-2"
                                    >
                                        View Work
                                        <FiExternalLink />
                                    </a>
                                </div>
                                <div className="flex-1 -mt-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-end gap-5">
                                        <img
                                            src="/assets/neurores2.png"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-[18px] shadow-lg col-span-1 border-2"
                                        />

                                        <img
                                            src="/assets/neurores1.png"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-[18px] shadow-lg col-span-1 border-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start items-center gap-4">
                                <div className="w-14 h-14 rounded-lg border-white-600 border-2 flex items-center justify-center flex-shrink-0">
                                    <img
                                        src="src/assets/sdsc-logo.png"
                                        className="w-full h-full rounded-lg object-contain"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-lg">San Diego Supercomputer Center</p>
                                    <p className="text-[12px] text-gray-300">June 2022 - September 2022</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer Intern</p>
                                </div>
                            </div>
                            <div className="flex xl:flex-row flex-col gap-14">
                                <div className="flex-1 flex flex-col justify-start gap-5">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Collaborated with a team of 8 to develop a roommate-finder app in React Native for students at University of California, San Diego.</li>
                                        <li>Utilized Firebase Cloud to build an in-app messaging system.</li>
                                    </ul>
                                </div>
                                <div className="flex-1 -mt-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-end gap-5">
                                        <img
                                            src="/assets/birdnest1.png"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-lg shadow-lg col-span-1"
                                        />

                                        <img
                                            src="/assets/birdnest2.png"
                                            alt="Description of image"
                                            className="w-full h-auto rounded-lg shadow-lg col-span-1"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
export default Experience
