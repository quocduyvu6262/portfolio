import React, {useEffect, useRef, useState} from 'react'
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { CgWorkAlt } from "react-icons/cg";
import { IoCodeSlashOutline } from "react-icons/io5";

const NavBar = ({scrollRef, showAbout, setShowAbout, setShowExperience}) => {

    const [active, setActive] = useState("Home")
    const [isScrolling, setIsScrolling] = useState(false);
    const isScrollingRef = useRef(false)
    const handleScroll = (page) => {
        if (scrollRef.current) {
            isScrollingRef.current = true
            setIsScrolling(true)
            scrollRef.current.el.scrollTo({ top: window.innerHeight * page, behavior: 'smooth' });
        }
    }

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
                if (offset >= 0.2 && offset < 0.5) setActive("About")
                else if (offset >= 0.5 && offset < 0.8) setActive("Experience")
                else if (offset >= 0.8) setActive("Projects")
                else setActive("Home")
            }
            if (!isScrollingRef.current) frameId = requestAnimationFrame(handleScrollPosition);
        };
        const interval = setInterval(() => {
            const scrollElement = scrollRef.current?.el;
            if (scrollElement && !isScrollingRef.current) {
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
    }, [scrollRef, setActive]);

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
        <div className="px-5 bg-[rgba(10,25,47,0.45)] text-white border-blue-400 items-center absolute top-5 z-20 left-1/2 rounded-[14px] h-[50px] flex flex-row gap-3 transform -translate-x-1/2 shadow-lg">
            <button
                onClick={() => {
                    setActive("Home")
                    handleScroll(0)
                }}
                className={`flex flex-row gap-3 items-center ${active === "Home" ? "bg-[rgba(50,65,95,1.8)]" : "hover:bg-[rgba(50,65,95,1.8)]"} py-1 px-3 rounded-[12px]`}>
                <GoHome size={22}/>
            </button>
            <div className="w-[2px] h-8 bg-blue-400 mx-auto"></div>
            <div className="flex flex-row gap-2 items-center">
                <button
                    onClick={() => {
                        setActive("About")
                        handleScroll(1)
                    }}
                    className={`flex flex-row gap-3 items-center ${active === "About" ? "bg-[rgba(50,65,95,1.8)]" : "hover:bg-[rgba(50,65,95,1.8)]"} py-1 px-3 rounded-[12px]`}>
                    <RxAvatar size={22}/>
                    <p className="sm:block hidden">About</p>
                </button>
                <button
                    onClick={() => {
                        setActive("Experience")
                        handleScroll(2)
                    }}
                    className={`flex flex-row gap-3 items-center ${active === "Experience" ? "bg-[rgba(50,65,95,1.8)]" : "hover:bg-[rgba(50,65,95,1.8)]"} py-1 px-3 rounded-[12px]`}>
                    <CgWorkAlt size={22}/>
                    <p className="sm:block hidden">Experience</p>
                </button>
                <button
                    onClick={() => {
                        setActive("Projects")
                        handleScroll(3)
                    }}
                    className={`flex flex-row gap-3 items-center ${active === "Projects" ? "bg-[rgba(50,65,95,1.8)]" : "hover:bg-[rgba(50,65,95,1.8)]"} py-1 px-3 rounded-[12px]`}>
                    <IoCodeSlashOutline size={22}/>
                    <p className="sm:block hidden">Projects</p>
                </button>
            </div>
        </div>
    )
}
export default NavBar
