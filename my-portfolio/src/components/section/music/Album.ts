export type Album = {
    id: number;
    title: string;
    artist: string;
    coverUrl: string;
    thumbnailUrl: string;
    tracks: Track[];
}