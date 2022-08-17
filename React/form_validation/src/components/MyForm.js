import React, { useReducer } from 'react';

const initialState = {
    firstname: {
        value: '',
        error: null
    },
    lastname: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

function reducer(state, action) {
    return {
        ...state,
        [action.type]:{
            value:action.payload,
            error:action.error
        }
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    function handleChange(e) {
        const { name, value } = e.target;
        let error = null
        if (name == "firstname"){
            if (value.length < 2){
                error = "name must be at least 2"
            }
        }
        if (name == "lastname"){
            if (value.length < 2){
                error = "name must be at least 2"
            }
        }
        if (name == "email"){
            if (value.length < 5){
                error = "email must be at least 5"
            }
        }
        dispatch({
            type:name,
            payload:value,
            error:error
        });
    }

    return (
        <div>
            {JSON.stringify(state)}
            <div>
                <label>
                    <span>First name:</span>
                    <input
                        name="firstname"
                        value={state.firstname.value}
                        onChange={handleChange}
                    />
                    {state.firstname.error !== null && (
                        <p style={{color: 'red'}}>{state.firstname.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Last name:</span>
                    <input
                        name="lastname"
                        value={state.lastname.value}
                        onChange={handleChange}
                    />
                    {state.lastname.error !== null && (
                        <p style={{color: 'red'}}>{state.lastname.error}</p>
                    )}
                </label>
            </div>
            <div>
                <label>
                    <span>Email:</span>
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                    />
                    {state.email.error !== null && (
                        <p style={{color: 'red'}}>{state.email.error}</p>
                    )}
                </label>
            </div>
        </div>
    );
}