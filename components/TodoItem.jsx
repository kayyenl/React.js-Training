import { getSuggestedQuery } from '@testing-library/react';
import React from 'react';

function consoleLogger() {
    console.log("coming up!")
}

const TodoItem = (props) => {
    const styles = {
        textAlign: "center",
        maxWidth: "500px",
        border: "1px solid black",
        padding: "32px 8px",
        margin: "0 auto",
    }
    function testFunction() {
        return styles
    }

    const strikeStyles = {
        textDecoration: "line-through",
        color: "#cdcdcd",
        fontStyle: "italic"
    }

    const noneStyles = {}

    function styleDecider(bool) {
        return bool ? strikeStyles : noneStyles
    }
    return (
        <div style={testFunction()}>
             <input type="checkbox" onChange={() => props.handleChange(props.info.id)} checked={props.info.completed} /> 
             <span style={styleDecider(props.info.completed)}>{props.info.text}</span> <br />
        </div>
    );
}


export default TodoItem;
