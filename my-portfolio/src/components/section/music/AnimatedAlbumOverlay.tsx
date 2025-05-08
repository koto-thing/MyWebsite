import { useEffect, useRef, useState } from "react";
import { TrackList } from "./TrackList.tsx";
import { Album } from "./Album.ts";

const AnimatedAlbumOverlay = ({
    album,
    originRect,
    onClose,
}: {
    album: Album;
    originRect: DOMRect;
    onClose: () => void;
}) => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [animating, setAnimating] = useState(true);

    useEffect(() => {
        const overlay = overlayRef.current;
        if(!overlay) return;

        const finalX = window.innerWidth / 2 - 150;
        const finalY = window.innerHeight / 2 - 150;

        overlay.style.position = "fixed";
        overlay.style.left = `${originRect.left}px`;
        overlay.style.top = `${originRect.top}px`;
        overlay.style.width = `${originRect.width}px`;
        overlay.style.height = `${originRect.height}px`;
        overlay.style.transform = "scale(1)";
        overlay.style.transition = "all 0.5s ease";

        requestAnimationFrame(() => {
            overlay.style.left = `${finalX}px`;
            overlay.style.top = `${finalY}px`;
            overlay.style.width = "300px";
            overlay.style.height = "300px";
            overlay.style.transform = "scale(1.2)";
        });

        const timer = setTimeout(() => setAnimating(false), 400);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="Album-Overlay">
            <div ref={overlayRef} className="Album-Overlay-Animated-Card">
                <img src={album.coverUrl} alt={album.title} style={{ width: "100%", height: "100%"}} />
            </div>

            {!animating && (
                <div className="Album-Overlay-Content">
                    <h2>{album.title}</h2>
                    <TrackList albumId={album.id} />
                    <button onClick={onClose}>閉じる</button>
                </div>
            )}
        </div>
    );
};