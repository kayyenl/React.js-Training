import React, { Component } from 'react';

class TravelForm extends Component {
    constructor() {
        super()
        this.state = {
            firstname: "",
            lastname: "",
            age: "",
            gender: "",
            
        }
    }

    handleClick(event) {
        const {name, value} = event.target
        this.setState({
            [name] : value
        })
        console.log(name)
        console.log(value)
    }

    render() {
        return (
            <main>
                <form>
                    First name: <input type="text" name='firstname' value={this.state.firstname} onChange={(event) => this.handleClick(event)} /> 
                    <br />
                    Last name: <input type="text" name='lastname' value={this.state.lastname} onChange={(event) => this.handleClick(event)}/>
                    <br />
                    Age: <input type="number" name='age' value={this.state.age} onChange={(event) => this.handleClick(event)}/>
                    <br />
                    Male<input type="radio" name='gender' value={"male"} checked={this.state.gender === "male"} onChange={(event) => this.handleClick(event)} />
                    Female<input type="radio" name='gender' value={"female"} checked={this.state.gender === "female"} onChange={(event) => this.handleClick(event)}/>
                </form>
            </main>
        );
    }
}

export default TravelForm;
