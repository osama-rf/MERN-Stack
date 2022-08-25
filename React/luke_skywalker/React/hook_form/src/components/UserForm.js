import React, {useState} from "react";



const UserForm = (props) => {
    const [fname, setFname] = useState("");
    const [fnameError, setFnameError] = useState("")

    const [lname, setLname] = useState("");
    const [lnameError, setLnameError] = useState("")

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const [MatchPass, setMatchPass] = useState("");

    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    const handleFirstName = (e) => {
        setFname(e.target.value)
        if (e.target.value.length < 2) {
            setFnameError("First name must be at least 2 characters!");
        } else {
            setFnameError("")
        }
    }

    const handleLastName = (e) => {
        setLname(e.target.value)
        if (e.target.value.length < 2) {
            setLnameError("Last name must be at least 2 characters!");
        } else {
            setLnameError("")
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
        if (e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters!");
        } else {
            setEmailError("")
        }
    }

    const handlePass = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("password must be at least 8 characters!");
        } else {
            setPasswordError("")
            setPassword(e.target.value);
            handlePassword()
        }
    }

    const handlePasswordConfirm = (e) => {
        setConfirmPassword(e.target.value)
        if (e.target.value.length < 8) {
            setPasswordError("Confirm password must be at least 8 characters!");
        } else {
            setPasswordError("")
            setConfirmPassword(e.target.value);
            handlePassword()
        }
    }

    const handlePassword = () => {
        console.log(password)
        console.log(confirmPassword)
        if (password !== confirmPassword) {
            setMatchPass("Confirm password doesn't match the password!")
        } else {
            return ("");
        }
    }

    const createUser = (e) => {
    e.preventDefault();
    const newUser = {fname, lname, email, password, confirmPassword};
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
    };

    const formMessage = () =>{
        if (hasBeenSubmitted) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };

    return(
        <div>
        <form onSubmit={createUser}>
            {
                hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>First Name:</label>
                <input type="text" onChange={ handleFirstName } />
                {
                    fnameError ?
                        <p style={{color: 'red'}}>{fnameError}</p> :
                            ''
                }
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" onChange={ handleLastName } />
                {
                    lnameError ?
                        <p style={{color: 'red'}}>{lnameError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Email Address:</label>
                <input type="text" onChange={ handleEmail } />
                {
                    emailError ?
                        <p style={{color: 'red'}}>{emailError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Password:</label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ?
                        <p style={{color: 'red'}}>{passwordError}</p> :
                        ''
                }
            </div>
            <div>
                <label>Confirm Password:</label>
                <input type="text" onChange={ handlePasswordConfirm } />
                {
                    confirmPasswordError ?
                        <p style={{color: 'red'}}>{confirmPasswordError}</p> :
                        ''
                }

                <p>
                    {
                        MatchPass ?
                            <p style={{color: 'red'}}>{MatchPass}</p> :
                            ''
                    }
                </p>
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
// export default MovieForm;

