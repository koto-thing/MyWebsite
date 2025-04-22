import React, { useState } from 'react';
import UnityViwer from './components/UnityViewer';
import TrackList from './components/TrackList';
import './App.css';

const App: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
    
    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    
    return (
        <div className={isDarkMode ? "dark-mode" : "light-mode"}>
            <button className="toggle-button" onClick={toggleMode}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            
            <h1 className="title">ことのポートフォリオ</h1>
            <UnityViwer buildPath="DroneGame" />
            
            <header className="text-3x1 font-bold mb-6">My Music Collection</header>
            <TrackList />
        </div>
    );
};

export default App;