import React from 'react';

class State3 extends React.Component {
    constructor() {
        super()
        this.state = {
            count : 0
        }
        this.handleClick = this.handleClick.bind(this) 
    }

    handleClick() {
        this.setState(prevState => { 
            return { 
                count: prevState.count + 1 // we are returning a whole object!
            }
        })
    }

    render() {
        return (
            <div style={{padding : "32px"}}>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.handleClick()}>Increase it!</button>
            </div>
            )
    }
}

export default State3;
