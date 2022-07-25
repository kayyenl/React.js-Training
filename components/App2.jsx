import React, { Component } from 'react';
import Conditional from './Conditional';

class App2 extends Component {

    constructor() {
        super()
        this.state = {
            isLoading : true // this state is maintained while the API call is being done to show loading.
        }
    }

    componentDidMount() {
        setTimeout( () => {
            this.setState({
                isLoading: false
            })
        }, 1500)
    }

    render() {
        return (
            <div>
                <Conditional isLoading = {this.state.isLoading}/> 
            </div>
        );
    }
}

export default App2;
