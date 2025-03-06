import React from "react";
// import Image from "next/image";

const DisplayImage = ({imageAddr, altText}) => {
    return (
        <div>
            <img src={imageAddr} alt={altText}/>
        </div>
    );
};

export default DisplayImage;