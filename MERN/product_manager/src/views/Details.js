import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState([])
    const {_id} = useParams();

    useEffect(() => {
        axios.get('http://localhost:8002/product/' + _id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
        </div>
    )
}

export default Details;