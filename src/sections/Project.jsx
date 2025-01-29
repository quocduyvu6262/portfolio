import React, {useEffect, useState} from 'react'
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react"
import { FiExternalLink } from "react-icons/fi";


const Project = ({scrollRef, showProject, setShowProject, isScrolling, setIsScrolling, isScrollingRef}) => {

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
                const shouldShow = offset >= 0.9
                setShowProject(prev => (prev !== shouldShow ? shouldShow : prev));
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
    }, [scrollRef, setShowProject]);

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
            {showProject &&
                <motion.div
                    key="about"
                    className={`absolute top-1/2 pt-5 pb-10 translate overflow-y-auto -translate-x-1/2 -translate-y-1/2 bg-[rgba(10,25,47,0.85)] left-1/2 flex flex-col items-center justify-start w-[90%] sm:w-[60%] 2xl:w-1/3 h-[70%] 2xl:h-[50%] z-10 rounded-[18px] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-with-1 scrollbar-track-transparent`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="sticky top-0 right-0 flex justify-end w-full px-3">
                        <button onClick={() => setShowProject(false)}>
                            <IoMdClose color="white" size={30} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-10 w-full items-center">
                        <div className="w-3/4 space-y-4">
                            <img
                                src="/assets/comments-analyzer2.png"
                                alt="Description of image"
                                className="w-full md:rounded-[30px] rounded-[22px] border-[2px] h-auto shadow-lg"
                            />
                            <div className="flex flex-row gap-5 w-full justify-between font-sans text-white">
                                <div className="flex-1 font-bold text-lg">Youtube Comments Toxicity Analyzer</div>
                                <div className="flex-1 text-gray-400 text-[14px] space-y-1">
                                    <div>Developed web application with Next.js and FastAPI to analyze social media comments toxicity. Integrated Google Perspective machine to quantify toxicity score.</div>
                                    <a
                                        href="https://github.com/quocduyvu6262/comments-toxicity-analyzer"
                                        target="_blank"
                                        className="underline flex flex-row items-center gap-2"
                                    >
                                        View Project
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/4 space-y-4">
                            <img
                                src="/assets/ussf1.png"
                                alt="Description of image"
                                className="w-full md:rounded-[30px] rounded-[22px] h-auto shadow-lg"
                            />
                            <div className="flex flex-row gap-5 w-full justify-between font-sans text-white">
                                <div className="flex-1 font-bold text-lg">GRC Controls Automation</div>
                                <div className="flex-1 text-gray-400 text-[14px] space-y-1">
                                    <div>Collaborated with a team of 7 to develop a Ruby on Rails SaaS application for scanning Docker image vulnerability, and streamlining compliance management with role-based access control.</div>
                                    <a
                                        href="https://github.com/quocduyvu6262/USSF-GRC-Controls"
                                        target="_blank"
                                        className="underline flex flex-row items-center gap-2"
                                    >
                                        View Project
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/4 space-y-4">
                            <img
                                src="/assets/trafficcontrol1.png"
                                alt="Description of image"
                                className="w-full md:rounded-[30px] rounded-[22px] border-[2px] h-auto shadow-lg"
                            />
                            <div className="flex flex-row gap-5 w-full justify-between font-sans text-white">
                                <div className="flex-1 font-bold text-lg">Traffic Signal Control</div>
                                <div className="flex-1 text-gray-400 text-[14px] space-y-1">
                                    <div>Collaborated with a team of 2 to integrate the Continual Backpropagation algorithm into the Deep-Q Networks
                                        model to improve adaptability in non-stationary traffic signal control environments.</div>
                                    <a
                                        href="https://github.com/masarkar-tamu/CSCE-642-Continual-Learning"
                                        target="_blank"
                                        className="underline flex flex-row items-center gap-2"
                                    >
                                        View Project
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="w-3/4 space-y-4">
                            <img
                                src="/assets/notetakingapp1.png"
                                alt="Description of image"
                                className="w-full md:rounded-[30px] rounded-[22px] border-[2px] h-auto shadow-lg"
                            />
                            <div className="flex flex-row gap-5 w-full justify-between font-sans text-white">
                                <div className="flex-1 font-bold text-lg">Note Taking App</div>
                                <div className="flex-1 text-gray-400 text-[14px] space-y-1">
                                    <div>Developed a note-taking app that enables users to share their notes with others.</div>
                                    <a
                                        href="https://github.com/cse110-fa22-group5/cse110-fa22-group5"
                                        target="_blank"
                                        className="underline flex flex-row items-center gap-2"
                                    >
                                        View Project
                                        <FiExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}
export default Project
