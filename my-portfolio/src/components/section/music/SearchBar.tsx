import "../../../styles/section/music/SearchBar.css";

type SearchBarProps = {
    value: string;
    onSearch: (term: string) => void;
};

const SearchBar = ({ value, onSearch }: SearchBarProps) => {
    return (
        <div className="Search-Bar">
            <input
            type="text"
            placeholder="SEARCH ALBUMS..."
            value={value}
            onChange={(e) => onSearch(e.target.value)}
            className="Input-Field"
            />
        </div>
    );
};

export default SearchBar;