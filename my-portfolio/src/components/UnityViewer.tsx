import React from "react";

interface UnityViewerProps {
    buildPath: string;
}

const UnityViewer: React.FC<UnityViewerProps> = ({ buildPath }) => {
    return (
        <div style = {{ width: "1920px", height: "1080px" }} >
            <iframe
                title = { `Unity WebGL - ${buildPath}`}
                src = {`/unity/${buildPath}/index.html`}
                width = "100%"
                height = "100%"
                style = {{ border: "none", backgroundColor: "#000" }}
            ></iframe>
        </div>
    );
};

export default UnityViewer;