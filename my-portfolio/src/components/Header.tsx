import React from "react";
import "../styles/Header.css";

const Header: React.FC = () => {
    return (
        <header className="Header">
            {/* Logo or Title */}
            <div className="Header_Left">
                My Portfolio
            </div>

            {/* ページの移動先 */}
            <nav>
                <ul className="Header_Right">
                    <li>
                        <a href="#home" className="hover:underline">HOME</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">ABOUT</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">PROJECTS</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">CONTACT</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;