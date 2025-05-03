import React from 'react';
import Dither from './Dither';
import '../styles/Background.css';

const Background: React.FC = () => {
    return (
        <div className="Background">
            <Dither
                waveColor={[0.5, 0.5, 0.5]}
                disableAnimation={false}
                enableMouseInteraction={true}
                mouseRadius={0.3}
                colorNum={4}
                waveAmplitude={0.3}
                waveFrequency={3}
                waveSpeed={0.05}
            />
        </div>
    );
}

export default Background;