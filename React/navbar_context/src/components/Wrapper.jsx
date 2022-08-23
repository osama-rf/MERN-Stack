import React, {useState} from "react";
import UserContext from "../contexts/UserContext";

const Wrapper = (props) => {
    const [name, setName] = useState("Osama Refae");
    const {children} = props

    return (
        <UserContext.Provider value = {{name, setName}}>{children}</UserContext.Provider>
    );
}

export default Wrapper;