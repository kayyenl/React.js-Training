import React, { Component } from 'react';

class Conditional extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h3>Navbar</h3>
                {this.props.isLoading ? <h1>Loading...</h1> : <h1>Success!</h1>}
                <h3>Bottombar</h3>
            </div>
        )
    }
}

export default Conditional;
