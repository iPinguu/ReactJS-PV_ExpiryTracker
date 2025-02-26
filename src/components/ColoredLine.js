import React from "react";

const ColoredLine = ({color, width, margin}) => {
    return(
        <hr
         style={{
            color: color,
            backgroundColor: color,
            width: width,
            margin: margin
         }}
        />
    );
};

export default ColoredLine;