import React from 'react';

class State extends React.Component {

    constructor() {
        super()
        this.state = {
            name : "Yenny",
            age : 20,
        }
    }

    render() {
        return (
            <div style={{paddingLeft : "32px"}}>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age} years old</h3>
            </div>
        )
    }
}


export default State;
