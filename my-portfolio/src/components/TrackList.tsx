import React from "react";
import MusicPlayer from "./MusicPlayer";

interface Track { title: string; src: string }

const tracks: Track[] = [
    {
        title: "Track 1",
        src: "/music/Minge2025SpringStage01.ogg",
    },
    {
        title: "Track 2",
        src: "/music/track2.ogg"
    },
];

const TrackList: React.FC = () => {
    return (
        <div className="grid gap-6">
            {tracks.map((tracks, index) => (
                <div key={index} className="bg-zinc-800 p-4 rounded shadow-lg">
                    <h2 className="text-xl font-bold mb-2">{tracks.title}</h2>
                    <MusicPlayer src={tracks.src} />
                </div>
            ))}
        </div>
    );
}

export default TrackList;