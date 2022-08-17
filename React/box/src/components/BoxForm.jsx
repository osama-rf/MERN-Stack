import React, {useState} from "react";

const BoxForm = (props) => {
    const [ color, setColor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newBox = {color: color};

        props.onNewBox(newBox);
        setColor("");
    };

    return(
        <form className="header" onSubmit={handleSubmit}>
            <h1 className="welcome">Welcome to Box Generator</h1>
            <div className="input">
                <input
                className="form-control m-2 w-50"
                type="text"
                placeholder="Enter Color Here"
                name="color"
                onChange={(e) => setColor(e.target.value)}
                value={color}
                ></input>

                <input type="submit" className="m-2 btn btn-secondary" value="submit"/>
            </div>
        </form>
    )
}

export default BoxForm;