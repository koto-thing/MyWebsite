import React from "react";
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
                        📧 メールを送る
                    </a>

                    <a
                        href="https://github.com/koto-thing"
                        className="contact-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        🐙 GitHub プロフィールを見る
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;