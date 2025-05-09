import { Track } from './Track';

export type Album = {
    id: number;
    title: string;
    image: string;
    coverUrl: string;
    artist: string;
    thumbnailUrl: string;
    tracks: Track[];
};