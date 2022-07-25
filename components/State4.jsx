import React, { Component } from 'react';

class State4 extends Component {
    constructor() {
        super()
        this.state = {
            isLogged : false
        }
        this.toggleLogged = this.toggleLogged.bind(this)
    }

    displayString(bool) {
        return bool ? "Log In" : "Log out"
    }

    displayStatus(bool) {
        return bool ? "Logged In" : "Logged out"
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
                <p>You are currently {this.displayStatus(!this.state.isLogged)}</p>
            </div>
        );
    }
}

export default State4;
