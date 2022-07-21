import React from 'react';

class State2 extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn : false,
        }
    }

    logString() {
        if (this.state.isLoggedIn) {
            return "IN"
        } return "OUT"
    }

    render() {
        return (
            <div style = {{paddingLeft: "32px"}}>
                <h1>
                    You are currently logged {this.logString()}
                </h1>
            </div>
        )
    }
}

export default State2;
