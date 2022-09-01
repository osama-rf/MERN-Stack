import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState(); 
    const [age, setAge] = useState();
    const[error, setError] = useState([])
    const [nameError, setNameError] = useState(""); 
    const [ageError, setAgeError] = useState("");
    
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            name,
            age
        })
            .then(res=>setError([]))
            .catch(err=> {
                const errorObj = err.response.data.errors
                let errArr = []
                for (const key of Object.keys(errorObj)){
                    errArr.push(errorObj[key].message)
                }
                setError(errArr)
            })
    }

    const handleName = (e) =>{
        if(e.target.value.length < 1){
            setNameError("name is required")
        }
        else if(e.target.value.length<3){
            setNameError("name has to be more than 3 characters")
        }
        else{
            setNameError("")
        }
        setName(e.target.value)
    }

    const handleAge = (e) =>{
        if(e.target.value.length < 1){
            setAgeError("age is required")
        }
        else{
            setAgeError("")
        }
        setAge(e.target.value)
    }

    return (

        <form onSubmit={onSubmitHandler}>
            {error.map((error,i) => <p key={i}>{error}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={handleName} value={name}/>
                {nameError}
            </p>
            <p>
                <label>Age</label><br/>
                <input type="text" onChange={handleAge} value={age}/>
                {ageError}
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Form;