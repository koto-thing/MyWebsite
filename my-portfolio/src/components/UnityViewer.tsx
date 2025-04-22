import React from "react";

interface UnityViewerProps { buildPath: string; }

const UnityViewer: React.FC<UnityViewerProps> = ({ buildPath }) => {
    return (
        <div style = {{ width: "100%", height: "600px", marginBottom: "20px" }}>
            <iframe
                title = { `Unity WebGL - ${buildPath}`}
                src = {`/unity/${buildPath}/index.html`}
                width = "100%"
                height = "100%"
                frameBorder = "0"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default UnityViewer;