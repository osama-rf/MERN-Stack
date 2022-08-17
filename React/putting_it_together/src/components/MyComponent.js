import React, {Component} from "react";

class MyComponent extends Component{

    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }
    incAge = () => {
        this.setState({age: this.state.age +1})
    }
    render() {
        const {firstName, lastName} = this.props;
        const {age} = this.state;
        const {hairColor} = this.props;
        return (
            <div>
                <fieldset>
                    <h1>{firstName}, {lastName}</h1>
                    <p>Age: {age}</p>
                    <p>Hair Color: {hairColor}</p>

                    <button onClick={ this.incAge}>
                        Birthday Button for
                    </button>
                </fieldset>
            </div>
        );
    }
}

export default MyComponent;