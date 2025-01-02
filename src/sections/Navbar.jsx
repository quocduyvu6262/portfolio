import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {
    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a" onClick={() => {
                        let scroll = 100;
                        if (name === "About") scroll = 0.3
                        if (name === "Work") scroll = 0.571
                        if (name === "Contact") scroll = 1
                        console.log(scroll)
                        window.scrollTo({
                            top: 5000,
                            behavior: "smooth", // Smooth scrolling effect
                        });
                    }}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    )
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <header className="fixed top-0 left-0 z-50">
            <div className="">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <button className="text-neutral-600 font-bold text-2xl hover:text-black transition-colors">Tony Vu</button>
                </div>
            </div>
        </header>
    )
}
export default Navbar
