import React from "react";

const BoxDisplay = (props) => {
    return(
        <div style={{display:'flex'}}>
            {props.colorList.map((item) =>
                <div style={{width: 100, height:100, margin:20, background:item}}></div>
            )}
        </div>
    )
}
export default BoxDisplay;