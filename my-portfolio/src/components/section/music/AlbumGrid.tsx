import AlbumCard from "./AlbumCard";
import "../../../styles/section/music/AlbumGrid.css";

type Album = {
    id: number;
    title: string;
    image: string;
    coverUrl: string;
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
}

const handleAlbumClick = (album: Album, rect: DOMRect, setSelectedAlbum: (album: Album | null) => void) => {
    setSelectedAlbum(album);
    setOriginRect(rect);
}

const AlbumGrid = ({ albums, currentPage, totalPages, onNext, onPrev, onPageChange, direction }: AlbumGridProps) => {
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
                        onClick={(rect) => handleAlbumClick(album, rect, setSlectedAlbum, setOriginRect)}
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

            (selectedAlbum && ({
                <div className="Album-Overlay">
                    <div className="Album-Overlay-Content">
                        <img src={selectedAlbum.coverUrl} alt={selectedAlbum.title} />
                        <h2>{selectedAlbum.title}</h2>
                        <TrackList albumId={selectedAlbum.id} />
                        <button onClick={() => setSelectedAlbum(null)}>閉じる</button>
                    </div>
                </div>
            }))

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