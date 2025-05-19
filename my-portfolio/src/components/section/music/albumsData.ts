import { Album } from "./Album";

const albumsData: Album[] = [
    {
        id: 1,
        title: "Puzzle Knights",
        image: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        artist: "Koto",
        description: "This is a sample album description.",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album01.svg`,
        tracks: [
            { id: "1", title: "Tutorial & Stage 1", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Minge2025SpringStage01.ogg` },
            { id: "2", title: "Stage 1 Story", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "3", title: "Track03", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "4", title: "Track04", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "5", title: "Track05", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "6", title: "Track06", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "7", title: "Track07", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "8", title: "Track08", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
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
            { id: "1", title: "Track 1", duration: "225", audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
            { id: "2", title: "Track 2", duration: "225", audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
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
            { id: "1", title: "Track 1", duration: "222", audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
            { id: "2", title: "Track 2", duration: "222", audioUrl: `${import.meta.env.BASE_URL}tracks/Track03.mp3`},
        ],
    },
];
export default albumsData;