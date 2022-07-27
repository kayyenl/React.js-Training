import React, { Component } from 'react';
import FormComponent from './FormComponent'

class FormContainer extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            gender: "",
            location: "",
            beef: false,
            chicken: false,
            plantbased: false 
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event) {
        const {name, value, type, checked} = event.target
        if (type !== "checkbox") {
            this.setState({
                [name] : value
            })
        }
        else {
            this.setState({[name] : checked})
        }
    }

    render() {
        return (<FormComponent 
            handleClick = {this.handleClick}
            data = {this.state}
        />)
    }
}

export default FormContainer;