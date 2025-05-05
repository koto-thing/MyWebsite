import { useState } from "react";
import SearchBar from "./SearchBar.tsx";
import AlbumGrid from "./AlbumGrid.tsx";
import albumsData from "./albumsData.ts";
import "../../../styles/section/music/AlbumGallery.css";

const AlbumGallery = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedAlbum, setSelectedAlbum] = useState(null);

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

    return (
        <div className={`Album-Gallery ${selectedAlbum ? "Blurred-Background" : ""}`}>
            <SearchBar value={searchTerm} onSearch={handleSearch} />

            {!selectedAlbum && (
                <AlbumGrid
                    albums={currentAlbums}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onNext={() => setCurrentPage((p) => Math.min(p + 1, totalPages - 1))}
                    onPrev={() => setCurrentPage((p) => Math.max(p - 1, 0))}
                />
            )}
        </div>
    );
};

export default AlbumGallery;