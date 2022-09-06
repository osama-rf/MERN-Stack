import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";
import {Link} from "react-router-dom";
import 'bootstrap'

const PirateDash = (props) => {
    const [pirates, setPirates] = useState([])
    useEffect( () => {
        axios.get('http://localhost:8008/pirate')
            .then(res => setPirates(res.data))
            .catch(err => console.error(err))
    }, [pirates])

    const history = useHistory();

    const handleDelete = (_id) => {
        axios.delete("http://localhost:8008/pirate/delete/"+ _id)
            .then(res => console.log(res.data))
            .catch(err => console.error(err))
    }

    const viewPage = (_id) => {
        history.push(`/pirate/${_id}`);
    }

    return(
        <div>

            <Link to={'/pirate/new'}><button>Add Pirate</button></Link>

            <table>
                <thead>
                <tr>
                    <td>Pirate Name</td>
                    <td>Action</td>
                </tr>
                </thead>

                <tbody>

                {pirates.map( (pirate, idx) =>{
                    return(
                        <tr key={idx}>
                            <Link to={'/pirate/'+ pirate._id}><p>{pirate.name}</p></Link>
                            <td>
                                <button  onClick={ ()=> {viewPage([pirate._id])}}>View Pirate</button>
                                <button  onClick={ ()=> {handleDelete([pirate._id])}}>Walk the Plank</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>

            </table>

        </div>
    )
}

export default PirateDash;