import React, { Component } from 'react';

class Truthy extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages : []
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && 
                    <h1>You have {this.state.unreadMessages.length} messages!</h1>
                }
            </div>
        );
    }
}

export default Truthy;
