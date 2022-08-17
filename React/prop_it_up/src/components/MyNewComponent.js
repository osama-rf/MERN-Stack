import React, {Component} from "react";

class MyNewComponent extends Component {
    render() {
        const { firstName, lastName, age, hairColor} = this.props;
        return(
            <div>
                <h1>{firstName} {lastName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {hairColor}</p>
            </div>
    );
    }
}

export default MyNewComponent;