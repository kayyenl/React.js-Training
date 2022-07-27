import React, { Component } from 'react';

class Forms extends Component {
    constructor() {
        super()
        this.state = {
            firstName : "",
            lastName: ""
        }
    }

    updateInput(event) {
        this.setState({
            [event.target.name] : event.target.value
        })
        console.log(event.target.name)
        console.log(event.target.value)
    }

    render() {
        return (
            <form>
                <input type="text" value={this.state.firstName} placeholder='firstname' name='firstName' onChange={(event) => this.updateInput(event)}/>
                <br />
                <input type="text" value={this.state.lastName} placeholder='lastname' name='lastName' onChange={(event) => this.updateInput(event)}/>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        );
    }
}

export default Forms;
