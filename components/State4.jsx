import React, { Component } from 'react';

class State4 extends Component {
    constructor() {
        super()
        this.state = {
            isLogged : false
        }
        this.displayString = this.displayString.bind(this)
    }

    displayString(bool) {
        return bool ? "Log In" : "Log out"
    }

    toggleLogged() {
        this.setState(prevState => {
            return {
                isLogged : !prevState.isLogged
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick = {() => this.toggleLogged()}>{this.displayString(this.state.isLogged)}</button>
                <p>You are currently {this.displayString(!this.state.isLogged)}</p>
            </div>
        );
    }
}

export default State4;
