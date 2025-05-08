import React, { useState } from 'react';
import AboutSection from "./components/section/about/AboutSection.tsx";
import Header from './components/Header';
import HomeSection from "./components/section/home/HomeSection.tsx";
import MusicSection from "./components/section/music/MusicSection.tsx";
import InfoSection from "./components/section/InfoSection.tsx";
import ProjectsSection from "./components/section/ProjectsSection.tsx";
import ContactSection from "./components/section/contact/ContactSection.tsx";
import {BackgroundScene} from "./components/BackgroundScene.tsx";

import './App.css';

const App: React.FC = () => {
    const [activePage, setActivePage] = useState("home");
    const [fadeState, setFadeState] = useState<"fade-in" | "fade-out">("fade-in");

    const handleNavClick = (page: string) => {
        if(page === activePage) {
            return;
        }

        setFadeState("fade-out");
        setTimeout(() => {
            setActivePage(page);
            setFadeState("fade-in");
        }, 300);
    };

    const renderSection = () => {
        switch (activePage) {
            case "home":
                return <HomeSection />;
            case "about":
                return <AboutSection />;
            case "music":
                return <MusicSection />;
            case "projects":
                return <ProjectsSection />;
            case "info":
                return <InfoSection />;
            case "contact":
                return <ContactSection />;
            default:
                return <div>ページが見つかりません</div>;
        }
    };

    const backgroundImageForPage: { [key: string]: string } = {
        home: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
        about: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
        music: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
        projects: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
        info: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
        contact: `${import.meta.env.BASE_URL}img/LightHouse.jpg`,
    };

    const currentBackground = backgroundImageForPage[activePage] ?? `${import.meta.env.BASE_URL}img/LightHouse.jpg`;

    return (
        <div>
            <div style={{ position: "fixed", width: "100vw", height: "100vh", zIndex: -1}}>
                <BackgroundScene imageUrl={currentBackground} />
            </div>

            <Header onNavClick={handleNavClick} />
            <main className={`content ${fadeState}`}>
                {renderSection()}
            </main>
        </div>
    );
};

export default App;