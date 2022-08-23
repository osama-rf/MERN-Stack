import React from "react";
import {useParams} from "react-router-dom";

const Param = (props) => {
    const {param, colors, backgrounds} = useParams();
    const textStyle = {
        background: backgrounds,
        color: colors,
        padding: "30px",
        border: "solid black 2px"
    }

    return(
        <div>
            {
                isNaN(param) ?
                    <h2 style={textStyle}>The word is: {param}</h2>:
                    <h2 style={textStyle}>The Number is: {param}</h2>
            }
        </div>
    )
}

export default Param;

