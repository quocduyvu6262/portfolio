import React, {useEffect, useState} from 'react'
import { GoHome } from "react-icons/go";
import { RxAvatar } from "react-icons/rx";
import { CgWorkAlt } from "react-icons/cg";
import { IoCodeSlashOutline } from "react-icons/io5";

const NavBar = ({scrollRef, showAbout, setShowAbout}) => {

    const [active, setActive] = useState("Home")
    const [isScrolling, setIsScrolling] = useState(false);

    const handleScroll = (page) => {
        if (scrollRef.current) {
            setIsScrolling(true)
            scrollRef.current.el.scrollTo({ top: window.innerHeight * page, behavior: 'smooth' });
        }
    }

    useEffect(() => {
        const handleScrollPosition = () => {
            if (scrollRef.current) {
                const scrollPosition = scrollRef.current.el.scrollTop;
                const page = Math.floor(scrollPosition / window.innerHeight);

                switch (page) {
                    case 0:
                        setActive('Home');
                        break;
                    case 1:
                        setActive('About');
                        break;
                    case 2:
                        setActive('Experience');
                        break;
                    case 3:
                        setActive('Projects');
                        break;
                    default:
                        break;
                }
            }
        };
        const scrollElement = scrollRef.current?.el;
        if (scrollElement && !isScrolling) {
            scrollElement.addEventListener('scroll', handleScrollPosition);
        }
        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScrollPosition);
            }
        };
    });

    useEffect(() => {
        if (isScrolling) {
            const timeout = setTimeout(() => {
                setIsScrolling(false);
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
                        setShowAbout(true)
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
