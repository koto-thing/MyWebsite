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
                        <a href="#home" className="hover:underline">Home</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:underline">About</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:underline">Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;