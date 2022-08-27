import React, {useEffect, useState} from "react";
import ListAuthor from "../components/ListAuthor";
import axios from "axios";
import FormAuthor from "../components/FormAuthor";

const Create = (props) => {

    const createAuthor = name => {
        axios.post('http://localhost:8000/author/new', {name})
            .then(res => {
                console.log(res)
            })
            .catch((e) => {
                console.error('Unable too add author', e);
            })
    }

    return (
        <div>
            <FormAuthor
                onSubmitProp={createAuthor}
                initialName={""}
                />
        </div>
    )
}

export default Create;