import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8002/product')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id != productId))
    }

    return(
        <div>
            <ProductForm/>
            <hr/>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    );
}

export default Main;

