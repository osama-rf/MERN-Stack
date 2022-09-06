import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import {useHistory} from "react-router-dom";

const CreatePet = (props) => {
    const [petName, setPetName] = useState('')
    const [petNameError, setPetNameError] = useState('')
    const [petType, setPetType] = useState('')
    const [petTypeError, setPetTypeError] = useState('')
    const [description, setDescription] = useState('')
    const [descriptionError, setDescriptionError] = useState('')
    const [firstSkill, setFirstSkill] = useState('')
    const [secondSkill, setSecondSkill] = useState('')
    const [thirdSkill, setThirdSkill] = useState('')
    const [error, setError] = useState([])
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8006/pet/new', {
            petName,
            petType,
            description,
            firstSkill,
            secondSkill,
            thirdSkill
        })
            .then(res => setError([]))
            .catch(err => {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }

    const dashboard = () => {
        history.push('/pet');
    }

    return (
        <div>
            <div>
        <button onClick={() => {dashboard()}}>back to home</button>
        <h1>Pet Shelter</h1>
            </div>

            <h2>Know a pet needing a home?</h2>

            <form onSubmit={onSubmitHandler}>
                {error.map((errors, i) => <p key={i}>{errors}</p> )}
                <p>
                    <label>Pet name:</label>
                    <input type={"text"} value={petName} onChange={(e) => {setPetName(e.target.value)}}/>
                    {petNameError}
                </p>

                <p>
                    <label>Pet Type:</label>
                    <input type={"text"} value={petType} onChange={(e) => {setPetType(e.target.value)}}/>
                    {petTypeError}
                </p>

                <p>
                    <label>Description:</label>
                    <textarea name={description} value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
                    {descriptionError}
                </p>

                <h2>Pet Skills (Optional)</h2>
                <p>
                    <label>Pet Skill 1:</label>
                    <input type={"text"} value={firstSkill} onChange={(e) => {setFirstSkill(e.target.value)}}/>
                </p>
                <p>
                    <label>Pet Skill 2:</label>
                    <input type={"text"} value={secondSkill} onChange={(e) => {setSecondSkill(e.target.value)}}/>
                </p>
                <p>
                    <label>Pet Skill 2:</label>
                    <input type={"text"} value={thirdSkill} onChange={(e) => {setThirdSkill(e.target.value)}}/>
                </p>

                <input type={'submit'} value={'Add Pet'}/>
            </form>
        </div>
    )
}

export default CreatePet;