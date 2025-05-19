import AlbumCard from "./AlbumCard";
import { Track } from "./Track";
import "../../../styles/section/music/AlbumGrid.css";

// アルバムのデータ型
type Album = {
    id: number;
    title: string;
    image: string;
    coverUrl: string;
    artist: string;
    description: string;
    thumbnailUrl: string;
    tracks: Track[];
};

// アルバムグリッドのプロパティ型
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

// アルバムクリック時の処理
const handleAlbumClick = (
    album: Album,
    rect: DOMRect,
    setSelectedAlbum: (album: Album | null) => void,
    setOriginRect: (rect: DOMRect | null) => void
) => {
    setSelectedAlbum(album);
    setOriginRect(rect);
};

// アルバムグリッドのコンポーネント
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