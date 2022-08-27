import React, {useEffect, useState} from "react";
import axios from 'axios';
import {Link} from "react-router-dom";
import DeleteButton from "./DeleteButton";

const ListAuthor = (props) => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/author")
            .then(res => setAuthors(res.data))
            .catch(err => console.error(err))
    }, [authors])

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId))
    }

    return (
        <div>
            <h1>Favorite authors</h1>

            <table>
                <thead>
                <tr>
                    <td>Authors</td>
                    <td>Action available</td>
                </tr>
                </thead>

                <tbody>

                {authors.map( (authors, i) =>{
                    return(
                        <tr key={i}>
                            <td>{authors.name}</td>
                            <td>
                                {/*<Link to={"/author/edit/"+author._id}>*/}
                                {/*    EDIT*/}
                                {/*</Link>*/}
                                <Link to={`/author/${authors._id}/edit`}>Edit</Link>

                                <DeleteButton authorId={authors._id} seccessCallback={
                                    () => removeFromDom(authors._id)
                                }/>
                            </td>
                        </tr>
                    )
                })}
                </tbody>


            </table>
        </div>
    )
}

export default ListAuthor;