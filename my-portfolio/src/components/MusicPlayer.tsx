import React, { useRef,  useState } from "react";

interface MusicPlayerProps { src: string; }

const MusicPlayer: React.FC<MusicPlayerProps> = ({ src }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    
    const togglePlay = (): void => {
        if (!audioRef.current) 
            return;
        
        if (isPlaying)
            audioRef.current.pause();
        else
            audioRef.current.play();
        
        setIsPlaying(!isPlaying);
    };
    
    return (
        <div className="flex items-center gap-4">
            <button
                onClick={togglePlay}
                className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded"
                >
                {isPlaying ? "⏸ Pause" : "▶ Play"}
            </button>
            
            <audio ref={audioRef} src={src} />
        </div>
    );
}

export default MusicPlayer;