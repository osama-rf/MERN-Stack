import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, useHistory} from "react-router-dom";

const PetDetails = (props) => {
    const [pet, setPet] = useState([]);
    const [buttonLike, setButtonLike] = useState(true)
    const {_id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        axios.get('http://localhost:8007/pet/' + _id)
            .then(res => setPet(res.data))
            .catch(err => console.error(err));
    }, [buttonLike]);

    const handleDelete = (_id) => {
        axios.delete(`http://localhost:8001/api/pet/${_id}`).then(res => {
            console.log(res.data)
            history('/pet/')
        }).catch(err => {console.log(err)})
    }

    const handleLike = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8007/pet/${_id}`,
            { likes: pet.likes + 1 }).then(res => {
            console.log(res.data)
            setButtonLike(false)
        }).catch(err => console.log(err.response))
    }

    return(
        <div>
            <h1>Pet Shelter</h1>
            <h2>Details about: {pet.petName}</h2>
            <button onClick={ () => {handleDelete([pet._id])}}>Adopt {pet.petName}</button>

            <div>
                <p>Pet type: {pet.petType}</p>
                <p>Description: {pet.description}</p>
                <p>Pet Skills: {pet.firstSkill} {pet.secondSkill} {pet.thirdSkill}</p>
            </div>

            <span><button disabled={buttonLike ===
                false} onClick={(e) => handleLike(e)}>Like {pet.petName}</button>
                {pet.likes} like(s)</span>
        </div>
    )
}

export default PetDetails;