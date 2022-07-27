import React, { Component } from 'react';

class TravelForm extends Component {
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
        console.log(name)
        console.log(value)
    }

    render() {
        return (
            <main>
                <form>
                    First name: <input type="text" placeholder='First Name' name='firstname' value={this.state.firstname} onChange={(event) => this.handleClick(event)} /> 
                    <br />
                    Last name: <input type="text" placeholder='Last Name' name='lastname' value={this.state.lastname} onChange={(event) => this.handleClick(event)}/>
                    <br />
                    Age: <input type="number" name='age' placeholder='Age' value={this.state.age} onChange={(event) => this.handleClick(event)}/>
                    <br />
                    <label>
                    Male<input type="radio" name='gender' value={"Male"} checked={this.state.gender === "Male"} onChange={(event) => this.handleClick(event)} />
                    </label>
                    <label>
                    Female<input type="radio" name='gender' value={"Female"} checked={this.state.gender === "Female"} onChange={(event) => this.handleClick(event)}/>
                    </label>
                    <br />
                    <label>Select where to go!  </label>
                    <select name="location" value={this.state.location} onChange={(event) => this.handleClick(event)}>
                        <option value="">--------</option>
                        <option value="Tokyo">Tokyo</option>
                        <option value="Kyoto">Kyoto</option>
                        <option value="Fukuoka">Fukuoka</option>
                    </select>
                    <br /> Dietary plans:
                    <br />
                    <input type="checkbox" name="beef" checked={this.state.beef} onChange={(event) => this.handleClick(event)} /> Beef  <br />
                    <input type="checkbox" name="chicken" checked={this.state.chicken} onChange={(event) => this.handleClick(event)} /> Chicken <br />
                    <input type="checkbox" name="plantbased" checked={this.state.plantbased} onChange={(event) => this.handleClick(event)} /> Plant-based
                </form>
                <hr />
                <h2>Entered Information</h2>
                <p>Your name: {this.state.firstname} {this.state.lastname}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your diet plans: <br />
                    Beef? <b>{this.state.beef ? "Yes" : "No"}</b> <br />
                    Chicken? <b>{this.state.chicken ? "Yes" : "No"}</b> <br />
                    Plant-Based? <b>{this.state.plantbased ? "Yes" : "No"}</b> <br />
                </p>
            </main>
        );
    }
}

export default TravelForm;
