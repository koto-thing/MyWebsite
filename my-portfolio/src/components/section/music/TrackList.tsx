import { useEffect, useState } from 'react';
import {Track} from './Track.ts';

export const TrackList = ({ albumId }: { albumId: number }) => {
    const [tracks, setTracks] = useState<Track[]>([]);

    useEffect(() => {
        fetch(`/api/albums/${albumId}/tracks`)
            .then(res => res.json())
            .then(setTracks);
    }, [albumId]);

    return (
        <ul>
            {tracks.map((track) => (
                <li key={track.id}>
                    {track.title}
                    ここにぼたん
                </li>
            ))}
        </ul>
    );
};