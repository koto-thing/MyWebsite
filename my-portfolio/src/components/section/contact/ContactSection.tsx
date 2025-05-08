import React from "react";
import { getFavicon } from "../../FaviconGetter";
import "../../../styles/section/contact/ContactSection.css";

const ContactSection: React.FC = () => {
    return (
        <div>
            <div className="contact-container">
                <h2>CONTACT</h2>

                <div className="contact-buttons">
                    <a
                        href="mailto:gotoukenta62@gmail.com"
                        className="contact-button"
                    >
                        <img src={getFavicon("https://google.com")} alt="Gmail Favicon" style={{width: "16px", marginRight: "8px"}} />
                        Email
                    </a>

                    <a
                        href="https://github.com/koto-thing"
                        className="contact-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={getFavicon("https://github.com")} alt="GitHub Favicon" style={{ width: "16px", marginRight: "8px"}} />
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;