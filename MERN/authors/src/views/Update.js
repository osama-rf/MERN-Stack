import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import FormAuthor from "../components/FormAuthor";
import qs from 'qs';


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

    const updateAuthor = async (name) => {
        // axios.put(`http://localhost:8000/author/${_id}`, {
        //     name
        // })
        //     .then(res => console.log(res))
        //     .catch(err => console.error(err))
        const data = qs.stringify({
            'name': name
        });

        try {
            const res = await axios.put(`http://localhost:8000/author/${_id}`, data, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            });

            console.log(res);
        } catch (e) {
            console.error(e)
        }

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