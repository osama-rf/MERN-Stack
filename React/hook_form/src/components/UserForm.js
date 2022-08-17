import React, {useState} from "react";

const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
    e.preventDefault();
    const newUser = {fname, lname, email, password, confirmPassword};
    console.log("Welcome", newUser);
    };

    return(
        <div>
        <form onSubmit={createUser}>
            <div>
                <label>First Name:</label>
                <input type="text" onChange={(e) =>
                setFname(e.target.value)} value={fname}/>
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={(e) =>
                setLname(e.target.value)} value={lname}/>
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text" onChange={(e) =>
                setEmail(e.target.value)} value={email}/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" onChange={(e) =>
                setPassword(e.target.value)} value={password}/>
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="password" onChange={(e) =>
                setConfirmPassword(e.target.value)} value={confirmPassword}/>
            </div>

            <input type="submit" value="Create User"/>
        </form>

            <div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Confirm Password</th>
                    </tr>
                    <tr>
                        <td>{fname}</td>
                        <td>{lname}</td>
                        <td>{email}</td>
                        <td>{password}</td>
                        <td>{confirmPassword}</td>
                    </tr>
                </table>
            </div>
        </div>

    );
};

export default UserForm;

