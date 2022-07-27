import React from 'react'

function FormComponent(props) {
    return (
        <main>
            <form>
                First name: <input type="text" placeholder='First Name' name='firstname' value={props.data.firstname} onChange={(event) => props.handleClick(event)} /> 
                <br />
                Last name: <input type="text" placeholder='Last Name' name='lastname' value={props.data.lastname} onChange={(event) => props.handleClick(event)}/>
                <br />
                Age: <input type="number" name='age' placeholder='Age' value={props.data.age} onChange={(event) => props.handleClick(event)}/>
                <br />
                <label>
                Male<input type="radio" name='gender' value={"Male"} checked={props.data.gender === "Male"} onChange={(event) => props.handleClick(event)} />
                </label>
                <label>
                Female<input type="radio" name='gender' value={"Female"} checked={props.data.gender === "Female"} onChange={(event) => props.handleClick(event)}/>
                </label>
                <br />
                <label>Select where to go!  </label>
                <select name="location" value={props.data.location} onChange={(event) => props.handleClick(event)}>
                    <option value="">--------</option>
                    <option value="Tokyo">Tokyo</option>
                    <option value="Kyoto">Kyoto</option>
                    <option value="Fukuoka">Fukuoka</option>
                </select>
                <br /> Dietary plans:
                <br />
                <input type="checkbox" name="beef" checked={props.data.beef} onChange={(event) => props.handleClick(event)} /> Beef  <br />
                <input type="checkbox" name="chicken" checked={props.data.chicken} onChange={(event) => props.handleClick(event)} /> Chicken <br />
                <input type="checkbox" name="plantbased" checked={props.data.plantbased} onChange={(event) => props.handleClick(event)} /> Plant-based
            </form>
            <hr />
            <h2>Entered Information</h2>
            <p>Your name: {props.data.firstname} {props.data.lastname}</p>
            <p>Your age: {props.data.age}</p>
            <p>Your gender: {props.data.gender}</p>
            <p>Your destination: {props.data.location}</p>
            <p>Your diet plans: <br />
                Beef? <b>{props.data.beef ? "Yes" : "No"}</b> <br />
                Chicken? <b>{props.data.chicken ? "Yes" : "No"}</b> <br />
                Plant-Based? <b>{props.data.plantbased ? "Yes" : "No"}</b> <br />
            </p>
        </main>
    );
}

export default FormComponent