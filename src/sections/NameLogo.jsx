import React, {useState} from 'react'
import {navLinks} from "../constants/index.js";


const NameLogo = () => {
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
export default NameLogo
