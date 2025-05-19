import { Track } from './Track.ts';
import "../../../styles/section/music/TrackList.css";

export const TrackList = ({ tracks }: { tracks: Track[] }) => {
    return (
        <ul>
            {tracks.map((track) => (
                <li key={track.id}>
                    {track.title}
                    <button>PLAY</button>
                </li>
            ))}
        </ul>
    );
};
