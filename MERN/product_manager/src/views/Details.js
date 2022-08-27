import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";

const Details = (props) => {
    const [product, setProduct] = useState([])
    const {_id} = useParams();
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:8002/product/' + _id)
            .then(res => setProduct(res.data))
            .catch(err => console.error(err));
    }, []);

    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8002/product/' + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.error(err))
        history.push("/product")
    }

    return (
        <div>
            <p>Product: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/product/${product._id}/edit`}>Edit</Link>
            <button onClick={(e) => {deleteProduct(product._id)}}>
                Delete
            </button>
        </div>
    )
}

export default Details;