import React from "react";

const DisplayImage= ({imageAddr, altText}) => {
    return (
        <div>
            <img src={imageAddr} alt={altText}/>
        </div>
    );
};

export default DisplayImage;