import React, {useState} from "react";
import axios from "axios";

export default (props) => {
    const {initialName, onSubmitProp} = props;

    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp(
            name
        );
    }

    return (
        <div>
        <h1>Favorite authors</h1>
        <p>Add a new author:</p>
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Author Name:</label> <br/>
                <input type={'text'} name={name} value={name} onChange={(e) => setName(e.target.value)} />
            </p>
            <input type={"submit"} value={"Submit"}/>
        </form>
        </div>
    )
}

