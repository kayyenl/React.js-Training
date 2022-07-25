import React, { Component } from 'react';

class Conditional extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        if (this.props.isLoading === true) {
            return (
                <div>
                    <h1>Loading...</h1>
                </div>
            );
        }
        return (
            <h1>Success</h1>
        )
    }
}

export default Conditional;
