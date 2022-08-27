import React, {useState} from "react";
import axios from 'axios'
import {Link} from "react-router-dom";

const ProductList = (props) => {


    return(
        <div>
            <ul>
            {props.product.map((product, index) =>
                <li key={index}>
                    <Link to={'/product/' + product._id}>{product.title}</Link>
                </li>
            )}
            </ul>


        </div>
    )
}

export default ProductList;