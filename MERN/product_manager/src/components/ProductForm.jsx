import React, {useState} from "react";
import axios from "axios";

export default (props) => {
    // const [title, setTitle] = useState("");
    // const [price, setPrice] = useState("");
    // const [description, setDescription] = useState("");
    //
    // const onSubmitHandler = e => {
    //     e.preventDefault();
    //     axios.post('http://localhost:8002/product/new', {
    //         title,
    //         price,
    //         description
    //     })
    //         .then(res => console.log(res))
    //         .catch(err => console.log(err))
    // }
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;

    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({
            title,
            price,
            description
        });
    }



    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title:</label> <br/>
                <input type={"text"} name={title} value={title} type={"text"} onChange={(e) => {setTitle(e.target.value)}} />
            </p>
            <p>
                <label>Price:</label> <br/>
                <input type={'text'} name={price} value={price} type={"text"} onChange={(e) => {setPrice(e.target.value)}} />
            </p>
            <p>
                <label>Description:</label> <br/>
                <textarea value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
            </p>

            <input type={"submit"} value={"Submit"}/>
        </form>
    )
}