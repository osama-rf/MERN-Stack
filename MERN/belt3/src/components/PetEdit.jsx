// import React, {useState, useEffect} from "react";
// import axios from "axios";
// import {Link, useHistory, useParams} from "react-router-dom";
//
// const PetEdit = (props) => {
//     const [petName, setPetName] = useState('')
//     const [petNameError, setPetNameError] = useState('')
//     const [petType, setPetType] = useState('')
//     const [petTypeError, setPetTypeError] = useState('')
//     const [description, setDescription] = useState('')
//     const [descriptionError, setDescriptionError] = useState('')
//     const [firstSkill, setFirstSkill] = useState('')
//     const [secondSkill, setSecondSkill] = useState('')
//     const [thirdSkill, setThirdSkill] = useState('')
//     const [error, setError] = useState([])
//     const {_id} = useParams()
//     const history = useHistory()
//
//     useEffect( () => {
//         axios.get('http://localhost:8007/pet/edit' + _id)
//             .then(res => {
//                 console.log(res.data)
//                 setPetName(res.data.petName)
//                 setPetType(res.data.petType)
//                 setDescription(res.data.description)
//                 setFirstSkill(res.data.firstSkill)
//                 setSecondSkill(res.data.secondSkill)
//                 setThirdSkill(res.data.thirdSkill)
//             }) .catch(err => console.log(err.res))
//     }, [])
//
//     const handleUpdate = (e) => {
//         e.preventDefault()
//         const putData = {
//             petName, petType, description, firstSkill, secondSkill, thirdSkill
//         }
//
//         axios.put('http://localhost:8007/pet/' + _id, putData)
//             .then(res => {
//                 console.log(res.data)
//                 setError({})
//                 history.push("/pet/")
//             })
//             .catch(err => console.log('Error', setError(err.response.data.errors)))
//     }
//
//     const dashboard = () => {
//         history.push('/pet');
//     }
//
//     return(
//         <div>
//             <div>
//                 <button onClick={() => {dashboard()}}>back to home</button>
//                 <h1>Pet Shelter</h1>
//             </div>
//
//             <h2>Edit information of: {petName} </h2>
//
//             <form onSubmit={handleUpdate}>
//                 {error.map((errors, i) => <p key={i}>{errors}</p> )}
//                 <p>
//                     <label>Pet name:</label>
//                     <input type={"text"} value={petName} onChange={(e) => {setPetName(e.target.value)}}/>
//                     {petNameError}
//                 </p>
//
//                 <p>
//                     <label>Pet Type:</label>
//                     <input type={"text"} value={petType} onChange={(e) => {setPetType(e.target.value)}}/>
//                     {petTypeError}
//                 </p>
//
//                 <p>
//                     <label>Description:</label>
//                     <textarea name={description} value={description} onChange={(e) => {setDescription(e.target.value)}}></textarea>
//                     {descriptionError}
//                 </p>
//
//                 <h2>Pet Skills (Optional)</h2>
//                 <p>
//                     <label>Pet Skill 1:</label>
//                     <input type={"text"} value={firstSkill} onChange={(e) => {setFirstSkill(e.target.value)}}/>
//                 </p>
//                 <p>
//                     <label>Pet Skill 2:</label>
//                     <input type={"text"} value={secondSkill} onChange={(e) => {setSecondSkill(e.target.value)}}/>
//                 </p>
//                 <p>
//                     <label>Pet Skill 2:</label>
//                     <input type={"text"} value={thirdSkill} onChange={(e) => {setThirdSkill(e.target.value)}}/>
//                 </p>
//
//                 <input type={'submit'} value={'Add Pet'}/>
//             </form>
//         </div>
//     )
// }
//
// export default PetEdit;