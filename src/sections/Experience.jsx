import React, {useEffect, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react"
import { FiExternalLink } from "react-icons/fi";


const Experience = ({scrollRef, showExperience, setShowExperience}) => {

    useEffect(() => {
        let frameId;
        let lastOffset = null;
        const handleScrollPosition = () => {
            if (!scrollRef.current) return;

            const offset = scrollRef.current.offset;

            const roundedOffset = parseFloat(offset.toFixed(1));
            const roundedLastOffset = parseFloat(lastOffset?.toFixed(1) ?? -1);
            if (roundedOffset !== roundedLastOffset) {
                lastOffset = offset;
                const shouldShowExperience = offset >= 0.5 && offset < 0.8
                setShowExperience(prev => (prev !== shouldShowExperience ? shouldShowExperience : prev));
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


    return (
        <AnimatePresence initial={false}>
            {showExperience &&
                <motion.div
                    key="about"
                    className={`absolute top-1/2 py-10 translate overflow-y-auto -translate-x-1/2 -translate-y-1/2 pt-5 bg-[rgba(10,25,47,0.85)] left-1/2 flex flex-col items-center justify-start w-[90%] sm:w-[60%] 2xl:w-1/3 h-[70%] 2xl:h-[50%] z-10 rounded-[18px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-with-1 scrollbar-track-transparent`}
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
                    <div className="flex flex-col gap-5 2xl:gap-0 w-3/4 text-white font-sans">
                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start gap-10">
                                <div>
                                    <p className="font-bold text-lg">San Diego Supercomputer Center</p>
                                    <p className="text-[12px] text-gray-300">August 2023 - February 2024</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex-1 flex flex-col justify-start gap-5">
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
                                <div className="flex-1 ml-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-end -mt-5">
                                        <img
                                            src="/assets/neurores2.png"
                                            alt="Description of image"
                                            className="w-32 md:w-3/4 h-auto rounded-lg shadow-lg col-span-1 border-2"
                                        />

                                        <img
                                            src="/assets/neurores1.png"
                                            alt="Description of image"
                                            className="w-32 md:w-3/4 h-auto rounded-lg shadow-lg col-span-1 border-2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <div className="flex flex-row justify-start gap-10">
                                <div>
                                    <p className="font-bold text-lg">San Diego Supercomputer Center</p>
                                    <p className="text-[12px] text-gray-300">August 2023 - February 2024</p>
                                    <p className="text-[12px] text-gray-300">Software Engineer</p>
                                </div>
                            </div>
                            <div className="flex flex-row">
                                <div className="flex-1 flex flex-col justify-start gap-5">
                                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                                        <li>Collaborated with a team of 8 to develop a roommate-finder app in React Native for students at University of California, San Diego.</li>
                                        <li>Utilized Firebase Cloud to build an in-app messaging system.</li>
                                    </ul>
                                    {/*<a*/}
                                    {/*    href="https://apps.apple.com/gb/app/neurores/id1345523598"*/}
                                    {/*    target="_blank"*/}
                                    {/*    className="text-sm underline ml-4 flex flex-row items-center gap-2"*/}
                                    {/*>*/}
                                    {/*    View Work*/}
                                    {/*    <FiExternalLink />*/}
                                    {/*</a>*/}
                                </div>
                                <div className="flex-1 ml-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-end -mt-10">
                                        <img
                                            src="/assets/birdnest1.png"
                                            alt="Description of image"
                                            className="w-32 md:w-3/4 h-auto rounded-[20px] shadow-lg col-span-1 "
                                        />

                                        <img
                                            src="/assets/birdnest2.png"
                                            alt="Description of image"
                                            className="w-32 md:w-3/4 h-auto rounded-lg shadow-lg col-span-1"
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
