import React, { Component } from 'react';

class Fetch extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }

    async componentDidMount() {
        this.setState({loading: true})
        const apiCall = await fetch("https://swapi.dev/api/people/1")
        const callJson = await apiCall.json()
        console.log(callJson)
        this.setState({
            name: callJson.name,
            height: callJson.height,
            loading: false
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.loading ? "loading..." : this.state.name}</h1>
                <p>height: {this.state.loading ? "loading..." : this.state.height + "cm"}</p>
            </div>
        );
    }
}

export default Fetch;
