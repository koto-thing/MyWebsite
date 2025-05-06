import React from "react";
import "../styles/Header.css";

type Props = {
    onNavClick: (page: string) => void;
};

const Header: React.FC<Props> = ({ onNavClick }) => {
    return (
        <header className="Header">
            {/* Logo or Title */}
            <div className="Header_Left">
                <a onClick={() => onNavClick("home")}>ことのポートフォリオ</a>
            </div>

            {/* ページの移動先 */}
            <nav>
                <ul className="Header_Right">
                    <li>
                        <span onClick={() => onNavClick("about")}>ABOUT</span>
                    </li>
                    <li>
                        <span onClick={() => onNavClick("music")}>MUSIC</span>
                    </li>
                    <li>
                        <span onClick={() => onNavClick("projects")}>PROJECTS</span>
                    </li>
                    <li>
                        <span onClick={() => onNavClick("info")}>INFO</span>
                    </li>
                    <li>
                        <span onClick={() => onNavClick("contact")}>CONTACT</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;