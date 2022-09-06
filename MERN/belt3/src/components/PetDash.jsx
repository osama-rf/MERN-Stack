import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";

const PetDash = (props) => {
    const [pets, setPets] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8007/pet/')
            .then(res => setPets(res.data))
            .catch(err => console.error(err))
    }, [pets])

    const history = useHistory();

    const petPage = (_id) => {
        history.push(`/pet/${_id}`);
    }

    return(
        <div>
            <Link to={'/pet/new'}><button>add a pet to the shelter</button></Link>

            <table>
                <thead>
                <tr>
                    <td>Pet Name</td>
                    <td>Type</td>
                    <td>Actions</td>
                </tr>
                </thead>

                <tbody>

                {pets.map( (pet, idx) =>{
                    return(
                        <tr key={idx}>
                            <p>{pet.petName}</p>
                            <td>
                                <p>{pet.petType}</p>
                            </td>
                            <td>
                                <button  onClick={ ()=> {petPage([pet._id])}}>View Pet</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>
        </div>
    )
}

export default PetDash;