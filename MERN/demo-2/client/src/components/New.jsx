import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState(""); 
    const [age, setAge] = useState();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/users/new', {
            name,
            age
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    return (

        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
            <p>
                <label>Age</label><br/>
                <input type="text" onChange={(e)=>setAge(e.target.value)} value={age}/>
            </p>
            <input type="submit"/>
        </form>
    )
}

export default Form;