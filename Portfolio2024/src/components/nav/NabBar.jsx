import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="py-2 px-10 fixed bottom-3 left-0 w-full bg-transparent flex justify-center desktop:px-10 z-50">

            <ul className="flex space-x-5 font-lexend font-extralight flex-col items-center movil:flex-row">
                <li className="text-primaryFont hover:text-details transition-colors duration-300 ">
                    <Link to="/home">Home</Link>
                </li>
                <li className="text-primaryFont hover:text-details transition-colors duration-300">
                    <Link to="/contact">About</Link>
                </li>
                <li className="text-primaryFont hover:text-details transition-colors duration-300">
                    <Link to="/portfolio">Portfolio</Link>
                </li>
                <li className="text-primaryFont hover:text-details transition-colors duration-300">
                    <Link to="/skills">Skills</Link>
                </li>
            </ul>

        </nav>
    );
}

export {NavBar};
