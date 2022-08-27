import React from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

export default props => {
    const {authorId, seccessCallback} = props;
    const history = useHistory()

    const deleteAuthor = e => {
        axios.delete('http://localhost:8000/author/delete/' + authorId)
            .then(res => {
                seccessCallback();
            })
        history.push('/author')
    }

    return(
        <button onClick={deleteAuthor}>
            Delete
        </button>
    )
}