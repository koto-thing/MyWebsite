import React from "react";
import AnimatedContent from "../../AnimatedContent.tsx";
import "../../../styles/section/home/HomeSection.css";

const HomeSection: React.FC = () => {
    return (
        <div className="HomeSection">
            <div className="String">
                <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                config={{ tension: 50, friction: 25 }}
                initialOpacity={0}
                animateOpacity={true}
                scale={1}
                threshold={0.1}
                delay={0}
                >
                    <h1>WELCOME TO</h1>
                    <h2>GOTO KENTA'S PORTFOLIO</h2>
                </AnimatedContent>
            </div>
        </div>
    );
};

export default HomeSection;