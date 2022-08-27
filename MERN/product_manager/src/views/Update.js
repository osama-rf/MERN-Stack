import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";
import ProductForm from "../components/ProductForm";
import DeleteButton from "../components/DeleteButton";

const Update = (props) => {

    // const history = useNavigate();
    // const {_id} = props;
    // const [product, setProduct] = useState();
    // const [loaded, setLoaded] = useState(false);
    //
    // useEffect(() =>{
    //     axios.get('http://localhost:8002/product/' + _id)
    //         .then(res => {
    //             setProduct(res.data);
    //             setLoaded(true)
    //         })
    // }, [])
    //
    // const updateProduct = product => {
    //     axios.put('http://localhost:8002/product/' + _id, product)
    //         .then(res => console.log(res));
    // }
    //
    // return (
    //     <div>
    //         {loaded && (
    //             <>
    //             <ProductForm
    //                 onSubmitProp={updateProduct}
    //                 initialTitle={product.title}
    //                 initialPrice={product.price}
    //                 initialDescripiton={product.description}
    //             />
    //             </>
    //         )}
    //     </div>
    // )
    const {_id} = useParams();
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('');
    const history = useNavigate();

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
                <DeleteButton productId={_id} successCallback={()=>
                    history.push("/")
                }/>
                <input type={"submit"} value={"Submit"}/>
            </form>
        </div>
    )
}

export default Update;