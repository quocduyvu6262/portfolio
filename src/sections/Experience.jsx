import React, {useEffect} from 'react'
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence } from "motion/react"
import { FiExternalLink } from "react-icons/fi";
import { experiences } from '../constants';

const ExperienceCard = ({ experience }) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-start items-center gap-4">
                <div className={`w-14 h-14 rounded-lg ${experience.company == "San Diego Supercomputer Center" && 'border-2 border-white-600' } flex items-center justify-center flex-shrink-0`}>
                    <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="w-full h-full rounded-lg object-contain"
                    />
                </div>
                <div>
                    <p className="font-bold text-lg">{experience.company}</p>
                    <p className="text-[12px] text-gray-300">{experience.period}</p>
                    <p className="text-[12px] text-gray-300">{experience.role}</p>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-14">
                <div className="flex-1 flex flex-col justify-start gap-5">
                    <ul className="list-disc ml-4 space-y-2 text-[16px]">
                        {experience.description.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                    {experience.link && (
                        <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm ml-4 underline flex flex-row items-center gap-2"
                        >
                            View Work
                            <FiExternalLink />
                        </a>
                    )}
                </div>
                {experience.images && (
                    <div className="flex-1 -mt-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 place-items-end gap-5">
                            {experience.images.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`${experience.company} screenshot ${index + 1}`}
                                    className={`w-full h-auto rounded-[18px] shadow-lg col-span-1 border-2 ${image.includes("/assets/birdnest") && 'border-0'}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

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
            }, 1000);

            return () => clearTimeout(timeout);
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
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.id} experience={experience} />
                        ))}
                    </div>
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default Experience