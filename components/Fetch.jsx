import React, { Component } from 'react';

class Fetch extends Component {
    constructor() {
        super()
        this.state = {}
    }

    async componentDidMount() {
        const apiCall = await fetch("https://swapi.dev/api/people/1")
        const callJson = apiCall.json()
        console.log(callJson)
        
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Fetch;
