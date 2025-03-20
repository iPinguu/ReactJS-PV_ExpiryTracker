import React from "react";
// import Image from "next/image";

export default function DisplayImage ({img}) {
    
    return (
        <div>
            <img src={img.src} alt={img.alt}/>
        </div>
    );
};
