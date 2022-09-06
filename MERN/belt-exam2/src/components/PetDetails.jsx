import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";

const PetDetails = (props) => {
    const [Pet, setPet] = useState([]);
    const {_id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        axios.get('http://localhost:8006/pet/' + _id)
            .then(res => setPet(res.data))
            .catch(err => {console.log(err)})
    }, );

    const handleDelete = (_id) => {
        axios.delete('http://localhost:8006/pet/delete/' + _id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    return(
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {Pet.petName}</h2>
            <button onClick={ () => {handleDelete([Pet._id])}}>Adopt {Pet.petName}</button>

            <div>
                <p>Pet type: {Pet.petType}</p>
                <p>Description: {Pet.description}</p>
                <p>Pet Skills: {Pet.firstSkill} {Pet.secondSkill} {Pet.thirdSkill}</p>
            </div>
        </div>
    )
}

export default PetDetails;