import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import TrackList from "./TrackList.tsx";
import { Album } from "./Album.ts";
import "../../../styles/section/music/AnimatedAlbumOverlay.css";
import {Track} from "./Track.ts";

export const AnimatedAlbumOverlay = ({
    album,
    originRect,
    onClose,
}: {
    album: Album;
    originRect: DOMRect;
    onClose: () => void;
}) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const playerRef = useRef<Tone.Player | null>(null);
    const [animating, setAnimating] = useState(true);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        const overlay = overlayRef.current;
        if(!overlay) return;

        const finalX = 250;
        const finalY = 300;

        overlay.style.position = "fixed";
        overlay.style.left = `${originRect.left}px`;
        overlay.style.top = `${originRect.top}px`;
        overlay.style.width = `${originRect.width}px`;
        overlay.style.height = `${originRect.height}px`;
        overlay.style.transform = "scale(0.4)";
        overlay.style.transition = "all 0.5s ease";
        overlay.style.transformOrigin = "top left";

        requestAnimationFrame(() => {
            overlay.style.left = `${finalX}px`;
            overlay.style.top = `${finalY}px`;
            overlay.style.width = "300px";
            overlay.style.height = "300px";
            overlay.style.transform = "scale(0.7)";
            overlay.style.transformOrigin = "top left";
        });

        const timer = setTimeout(() => setAnimating(false), 400);
        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        const overlay = overlayRef.current;
        if (!overlay) return;

        setClosing(true);
        overlay.style.left = `${originRect.left}px`;
        overlay.style.top = `${originRect.top}px`;
        overlay.style.width = `${originRect.width}px`;
        overlay.style.height = `${originRect.height}px`;
        overlay.style.transform = "scale(0.4)";
        overlay.style.transition = "all 0.5s ease";
        overlay.style.transformOrigin = "top left";
        
        playerRef.current?.stop();

        setTimeout(() => {
            setClosing(false);
            onClose();
        }, 500);
    };

    const handleTrackSelect = async (track: Track) => {
        console.log("Starting Tone...");
        await Tone.start();
        console.log("Tone started. Playing", track.audioUrl);

        try {
            playerRef.current?.stop();
            const player = new Tone.Player({
                url: track.audioUrl,
                loop: true,
                autostart: true,
                onload: () => {
                    console.log("Audio loaded!");
                },
                onerror: (error) => {
                    console.error("Error loading audio", error);
                }
            }).toDestination();

            playerRef.current = player;
        } catch (e) {
            console.error("Error in Tone.Player", e);
        }
    };

    return (
        <div className="Album-Overlay">
            <div ref={overlayRef} className="Album-Overlay-Animated-Card">
                <img src={album.coverUrl} alt={album.title} />
            </div>

            {!animating && !closing && (
                <div className="Album-Overlay-Content">
                    <h2>{album.title}</h2>
                    <h3>{album.artist}</h3>
                    <p>{album.description}</p>
                    <TrackList
                        items={album.tracks}
                        showGradients={true}
                        enableArrowNavigation={true}
                        onItemSelect={handleTrackSelect}
                        maxVisibleItems={99}
                    />

                    <div className="Album-Overlay-Buttons">
                        <button onClick={handleClose}>CLOSE</button>
                    </div>
                </div>
            )}
        </div>
    );
};