import React from "react";

type Props = {
    title: string;
    image: string;
};

const AlbumCard: React.FC<Props> = ({ title, image }) => {
    return (
        <div className="Album-Card" data-title={title}>
            <img src={image} alt={title} />
        </div>
    );
};

export default AlbumCard;