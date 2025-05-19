import { Album } from "./Album";

const albumsData: Album[] = [
    {
        id: 1,
        title: "Sample Album 1",
        image: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        artist: "Koto",
        description: "This is a sample album description.",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        tracks: [
            { id: 1, title: "Track 1", duration: 111, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
            { id: 2, title: "Track 2", duration: 111, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
        ],
    },
    {
        id: 2,
        title: "Sample Album 2",
        image: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        artist: "Koto",
        description: "This is a sample album description.",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        tracks: [
            { id: 1, title: "Track 1", duration: 225, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
            { id: 2, title: "Track 2", duration: 225, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
        ],
    },
    {
        id: 3,
        title: "Sample Album 3",
        image: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        artist: "Koto",
        description: "This is a sample album description.",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        tracks: [
            { id: 1, title: "Track 1", duration: 222, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
            { id: 2, title: "Track 2", duration: 222, audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
        ],
    },
];
export default albumsData;