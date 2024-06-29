import React from "react";

const ExternalButton = ({ text, url }) => {
    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <button
            style={{ backgroundColor: "#bbf245", padding: "10px", marginBottom: "10px", borderRadius: "10px" }}
            onClick={handleClick}>{text}</button>
    );
}

export default ExternalButton;