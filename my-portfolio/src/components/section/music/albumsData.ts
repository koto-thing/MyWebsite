import { Album } from "./Album";

const albumsData: Album[] = [
    {
        id: 1,
        title: "Puzzle Knights(パズルナイツ)",
        image: `${import.meta.env.BASE_URL}albums/PuzzleKnights.png`,
        coverUrl: `${import.meta.env.BASE_URL}albums/PuzzleKnights.png`,
        artist: "Koto",
        description: "2025年 春みんげ～",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/PuzzleKnights.png`,
        tracks: [
            { id: "1", title: "Tutorial & Stage 1", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Minge2025SpringStage01.ogg` },
            { id: "2", title: "Stage 1 Story", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "3", title: "Stage 2", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage02.ogg`},
            { id: "4", title: "Track04", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "5", title: "Track05", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "6", title: "Track06", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "7", title: "Track07", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
            { id: "8", title: "Track08", duration: "111", audioUrl: `${import.meta.env.BASE_URL}music/PuzzleKnights/Stage01_story.mp3`},
        ],
    },
    {
        id: 2,
        title: "ArgoHazard(アルゴハザード)",
        image: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        artist: "Koto",
        description: "2024年 夏みんげ～",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        tracks: [
            { id: "1", title: "ACT1", duration: "225", audioUrl: `${import.meta.env.BASE_URL}music/ArgoHazard/ACT1.ogg`},
            { id: "2", title: "ACT2", duration: "225", audioUrl: `${import.meta.env.BASE_URL}music/ArgoHazard/ACT2.ogg`},
            { id: "3", title: "ACT3", duration: "225", audioUrl: `${import.meta.env.BASE_URL}music/ArgoHazard/ACT3.ogg`},
            { id: "4", title: "MiniGame", duration: "225", audioUrl: `${import.meta.env.BASE_URL}music/ArgoHazard/SubGameBGM.ogg`},
            { id: "5", title: "Title", duration: "225", audioUrl: `${import.meta.env.BASE_URL}music/ArgoHazard/Title.mp3`},
        ],
    },
    {
        id: 3,
        title: "すごろくゲーム",
        image: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        coverUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        artist: "Koto",
        description: "2025年 新入生オリエンテーションで発表したすごろくゲームの曲",
        thumbnailUrl: `${import.meta.env.BASE_URL}albums/Album02.svg`,
        tracks: [
            { id: "1", title: "Stage", duration: "222", audioUrl: `${import.meta.env.BASE_URL}music/DiceGame/Stage.wav`},
            { id: "2", title: "MiniGame", duration: "222", audioUrl: `${import.meta.env.BASE_URL}music/DiceGame/MiniGame.wav`},
        ],
    },
];
export default albumsData;