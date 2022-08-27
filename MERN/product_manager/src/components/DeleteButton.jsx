import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
export default props => {
    const {productId, successCallback} = props;
    const history = useHistory()


    const deleteProduct = e => {
        axios.delete('http://localhost:8002/product/' + productId)
            .then(res => {
                successCallback();
            })
        history.push("/product")
    }

    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}