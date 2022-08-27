import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";

const Update = (props) => {
    const {_id} = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');

    useEffect( () => {
        axios.get('http://localhost:8002/product/' + _id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, []);

    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:8002/product/' + _id, {
            title,
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    return(
        <div>
            <h1>Update Product</h1>
            <form onSubmit={updateProduct}>
                <p>
                    <label>Title:</label> <br/>
                    <input type={"text"} onChange={(e) => setTitle(e.target.value)} value={title}/>
                </p>
                <p>
                    <label>Price:</label> <br/>
                    <input type={"text"} onChange={(e) => setPrice(e.target.value)} value={price}/>
                </p>
                <p>
                    <label>Description:</label> <br/>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                </p>

                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    )
}

export default Update;