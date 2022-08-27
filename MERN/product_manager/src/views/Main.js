import React, {useEffect, useState} from "react";
import ProductForm from "../components/ProductForm";
import axios from "axios";
import ProductList from "../components/ProductList";

const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8002/product')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    }, []);

    useEffect(() => {
        console.log('Product', products);
    }, [products])

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId))
    }

    const createProduct = product => {
        axios.post('http://localhost:8002/product/new', product)
            .then(res => {
                setProducts([
                    ...products,
                    res.data
                ])
            })
            .catch((e) => {
                console.error('Unable to add product', e);
            })
    }

    return(
        <div>
            <ProductForm
                onSubmitProp={createProduct}
                initialTitle=""
                initialPrice=""
                initialDescripiton=""
            />
            <hr/>
            {
                loaded &&
                <ProductList
                    product={products}
                    removeFromDom={removeFromDom}
                />
            }
        </div>
    );
}

export default Main;

