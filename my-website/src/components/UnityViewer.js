import React from "react";  

const UnityViewer = () => {
    return (
        <div style = {{ width: "100%", height: "600px"}}>
            <iframe
                title = "Unity WebGL"
                src = {`${process.env.PUBLIC_URL}/unity/index.html`}
                width = "100%"
                height = "100%"
                frameBorder = "0"
                allowFullScreen
                ></iframe>
        </div>
    );
};

export default UnityViewer;