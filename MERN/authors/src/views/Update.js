import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import FormAuthor from "../components/FormAuthor";


const Update = (props) => {
    const {_id} = useParams();
    const [authors, setAuthors] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/author/' + _id)
            .then(res => {setAuthors(res.data)
            setLoaded(true)})
            .catch(err => console.error(err));
    }, []);

    const updateAuthor = name => {
        axios.put('http://localhost:8000/author/' + _id , name)
            .then(res => console.log(res))
            .catch(err => console.error(err))
    }

    return(
        <div>
            {loaded && (
                <FormAuthor onSubmitProp={updateAuthor}
                            initialName={authors.name}
                            />
            )}
        </div>
    )
}

export default Update;