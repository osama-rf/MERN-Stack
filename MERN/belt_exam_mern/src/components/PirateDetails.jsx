import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams, useHistory, Link} from "react-router-dom";

const PirateDetails = (props) => {
    const [pirate, setPirate] = useState([])
    const {_id} = useParams();
    const history = useHistory();

    useEffect(()=> {
        axios.get('http://localhost:8008/pirate/' + _id)
            .then(res => setPirate(res.data))
            .catch(err => {console.log(err)})
    }, []);

    return(
        <div>
            <h1>{pirate.name}</h1>
            <div>
                <img width={'200px'} src={pirate.image}/>
                <h2>{pirate.catchPhrase}</h2>
            </div>
            <div>
                <h3>About Pirate</h3>
                <p>Position: {pirate.position}</p>
                <p>Treasures: {pirate.numberChests}</p>
                {pirate.pegLeg && <p>Peg Leg: Yes</p>}
                {!pirate.pegLeg && <p>Peg Leg: No</p>}
                {pirate.eyePatch && <p>Eye Patch: Yes</p>}
                {!pirate.eyePatch && <p>Eye Patch: No</p>}
                {pirate.hookHand && <p>Hook Hand: Yes</p>}
                {!pirate.hookHand && <p>Hook Hand: No</p>}
            </div>
            <Link to={'/pirate'}><button>Back to home</button></Link>
        </div>
    )
}

export default PirateDetails;