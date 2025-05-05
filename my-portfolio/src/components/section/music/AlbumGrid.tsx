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
}

const AlbumGrid = ({ albums, currentPage, totalPages, onNext, onPrev }: AlbumGridProps) => {
    return (
        <div className="Album-Grid-Container">
            <div className="Album-Grid">
                {albums.map((album) => (
                    <div key={album.id} className="Album-Card">
                        <img src={album.coverUrl} alt={album.title} />
                    </div>
                ))}
            </div>

            <div className="Page-Nation">
                <button onClick={onPrev} disabled={currentPage === 0}>
                    ←
                </button>
                <span>{currentPage + 1} / {totalPages}</span>
                <button onClick={onNext} disabled={currentPage >= totalPages - 1}>
                    →
                </button>
            </div>
        </div>
    );
};

export default AlbumGrid;