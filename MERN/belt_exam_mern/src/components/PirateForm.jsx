import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import axios from "axios";

const PirateForm = (props) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [image, setImage] = useState("");
    const [imageError, setImageError] = useState("");
    const [numberChests, setNumberChests] = useState(0);
    const [position, setPosition] = useState("");
    const [positionError, setPositionError] = useState("");
    const [catchPhrase, setCatchPhrase] = useState("");
    const [catchPhraseError, setCatchPhraseError] = useState("");
    const [pegLeg, setPegLeg] = useState(true);
    const [eyePatch, setEyePatch] = useState(true);
    const [hookHand, setHookHand] = useState(true);
    const [error, setError] = useState([])
    const history = useHistory();

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8008/pirate/new', {
            name, image, numberChests, catchPhrase, position, pegLeg, hookHand, eyePatch
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

    const homePage = () => {
        history.push(`/pirate`);
    }

    return (
        <div>
            <h1>Add Pirate</h1>
            <button  onClick={ ()=> {homePage()}}>Crew Board</button>
            <form onSubmit={onSubmitHandler}>
                {error.map((errors, i) => <p key={i}>{errors}</p>)}
                <p>
                    <label>Pirate name:</label>
                    <input type={"text"} value={name} onChange={(e) => {setName(e.target.value)}}/>
                    {nameError}
                </p>

                <p>
                    <label>Pirate Image:</label>
                    <input type={"text"} value={image} onChange={(e) => {setImage(e.target.value)}}/>
                    {imageError}
                </p>

                <p>
                    <label># of Treasure Chests:</label>
                    <input type={"number"} value={numberChests} onChange={(e) => {setNumberChests(e.target.value)}}/>
                </p>

                <p>
                    <label>Pirate's Catch Phrase:</label>
                    <textarea name={catchPhrase} value={catchPhrase} onChange={(e) => {setCatchPhrase(e.target.value)}}></textarea>
                    {catchPhraseError}
                </p>
                <div>
                <label>Crew Position:</label>
                <select name={position} value={position} onChange={(e) => {setPosition(e.target.value)}}>
                    <option>Crew Position</option>
                    <option value={"Captain"}>Captain</option>
                    <option value={"First Mate"}>First Mate</option>
                    <option value={"Quarter Master"}>Quarter Master</option>
                    <option value={"Boatswain"}>Boatswain</option>
                    <option value={"Powder Monkey"}>Powder Monkey</option>
                </select>
                {positionError}
                </div>
                <div className="checkBundle">
                    <input type="checkbox" name="pegLeg" checked={pegLeg} onChange={(e)=>setPegLeg(e.target.checked)}/>
                    <label>Peg Leg</label>
                </div>
                <div className="checkBundle">
                    <input type="checkbox" name="eyePatch" id="eyePatch" checked={eyePatch} onChange={(e)=>setEyePatch(e.target.checked)}/>
                    <label>Eye Patch</label>
                </div>
                <div className="checkBundle">
                    <input type="checkbox" name="hookHand" id="hookHand" checked={hookHand} onChange={(e)=>setHookHand(e.target.checked)}/>
                    <label>Hook Hand</label>
                </div>

                <input type={"submit"} value={"Add Pirate"}/>
            </form>
        </div>
    )
}

export default PirateForm;