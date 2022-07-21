import React from 'react';

class State3 extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
    }

    increaseCount() {
        this.state.count += 1
    }

    handleClick() {
        console.log("okayu")
    }

    render() {
        return (
            <div style={{padding : "32px"}}>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Increase it!</button>
            </div>
            )
    }
}

export default State3;
