import React, {useState} from "react";

const BoxForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewColor(color)
        setColor("")
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            />
            <input type="submit" value={"Add Color"}/>
        </form>
    )
}

export default BoxForm;