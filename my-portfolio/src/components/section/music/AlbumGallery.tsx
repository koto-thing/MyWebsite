import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import AlbumGrid from "./AlbumGrid.tsx";
import { Album } from "./Album.ts";
import albumsData from "./albumsData.ts";
import "../../../styles/section/music/AlbumGallery.css";
import {AnimatedAlbumOverlay} from "./AnimatedAlbumOverlay.tsx";

const AlbumGallery = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");
    const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(null);
    const [originRect, setOriginRect] = useState<DOMRect | null>(null);

    const filteredAlbums = albumsData.filter((album) =>
        album.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const albumsPerPage = 10;
    const totalPages = Math.ceil(filteredAlbums.length / albumsPerPage);
    const currentAlbums = filteredAlbums.slice(
        currentPage * albumsPerPage,
        currentPage * albumsPerPage + albumsPerPage
    );

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        setCurrentPage(0);
        setSelectedAlbum(null);
    };

    const handlePageChange = (page: number) => {
        if(page === currentPage) return
        const clampedPage = Math.max(0, Math.min(page, totalPages - 1));
        setDirection(page > currentPage ? "right" : "left");
        setCurrentPage(clampedPage);
    };

    return (
        <div className={`Album-Gallery ${selectedAlbum ? "Blurred-Background" : ""}`}>
            <SearchBar value={searchTerm} onSearch={handleSearch} />

            <AlbumGrid
                albums={currentAlbums}
                currentPage={currentPage}
                totalPages={totalPages}
                onNext={() => handlePageChange(currentPage + 1)}
                onPrev={() => handlePageChange(currentPage - 1)}
                onPageChange={handlePageChange}
                direction={direction}
                setSelectedAlbum={setSelectedAlbum}
                setOriginRect={setOriginRect}
                selectedAlbum={selectedAlbum}
                originRect={originRect}
            />

            {selectedAlbum && originRect && (
                <AnimatedAlbumOverlay
                    album={selectedAlbum}
                    originRect={originRect}
                    onClose={() => setSelectedAlbum(null)}
                />
            )}
        </div>
    );
};

export default AlbumGallery;