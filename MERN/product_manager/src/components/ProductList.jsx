import React, {useState} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ProductList = (props) => {
    const {removeFromDom} = props;

    // const deleteProduct = (productId) => {
    //     axios.delete('http://localhost:8002/product/' + productId)
    //         .then(res => {
    //             removeFromDom(productId)
    //         })
    //         .catch(err => console.error(err))
    // }

    return(
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>
                    <Link to={"/product/" + product._id}>
                        {product.title}
                    </Link>
                    |
                    {/*<button onClick={(e) => {deleteProduct(product._id)}}>*/}
                    {/*    Delete*/}
                    {/*</button>*/}
                    <DeleteButton productId={product._id} successCallback={
                        () => removeFromDom(product._id)
                    }/>
                </p>
            })}
        </div>
    )
}
export default ProductList;