import AlbumCard from "./AlbumCard";
import { AnimatedAlbumOverlay } from "./AnimatedAlbumOverlay";
import { Track } from "./Track";
import "../../../styles/section/music/AlbumGrid.css";

type Album = {
    id: number;
    title: string;
    image: string;
    coverUrl: string;
    artist: string;
    thumbnailUrl: string;
    tracks: Track[];
};

type AlbumGridProps = {
    albums: Album[];
    currentPage: number;
    totalPages: number;
    onNext: () => void;
    onPrev: () => void;
    onPageChange: (page: number) => void;
    direction: "left" | "right";
    setSelectedAlbum: (album: Album | null) => void;
    setOriginRect: (rect: DOMRect | null) => void;
    selectedAlbum: Album | null;
    originRect: DOMRect | null;
}

const handleAlbumClick = (
    album: Album,
    rect: DOMRect,
    setSelectedAlbum: (album: Album | null) => void,
    setOriginRect: (rect: DOMRect | null) => void
) => {
    setSelectedAlbum(album);
    setOriginRect(rect);
};

const AlbumGrid = ({
                       albums,
                       currentPage,
                       totalPages,
                       onNext,
                       onPrev,
                       onPageChange,
                       direction,
                       setSelectedAlbum,
                       setOriginRect,
                       selectedAlbum,
                       originRect
                   }: AlbumGridProps) => {
    return (
        <div className={`Album-Grid-Container ${selectedAlbum ? "blurred" : ""}`}>
            <div className={`Album-Grid Slide-${direction}`} key={currentPage}>
                {albums.map((album) => (
                    <AlbumCard
                        key={album.id}
                        title={album.title}
                        image={album.image}
                        caption={album.title}
                        imageHeight="200px"
                        imageWidth="200px"
                        onClick={(rect) => handleAlbumClick(album, rect, setSelectedAlbum, setOriginRect)}
                    />
                ))}
            </div>

            {selectedAlbum && originRect && (
                <AnimatedAlbumOverlay
                    album={selectedAlbum}
                    originRect={originRect}
                    onClose={() => setSelectedAlbum(null)}
                />
            )}

            <div className="Page-Nation">
                <button onClick={onPrev} disabled={currentPage === 0}>
                    ←
                </button>
                <div className="Page-Dots">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <div
                            key={index}
                            className={`Dot ${index === currentPage ? "Active" : ""}`}
                            onClick={() => onPageChange(index)}
                            style={{ cursor: 'pointer' }}
                        />
                    ))}
                </div>
                <button onClick={onNext} disabled={currentPage >= totalPages - 1}>
                    →
                </button>
            </div>
        </div>
    );
};

export default AlbumGrid;