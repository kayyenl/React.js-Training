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
    
    const condStyles = {
        textDecoration: "line-through"
    }

    const noneStyles = {
        textDecoration: "none"
    }

    function styleDecider(bool) {
        return bool ? {noneStyles} : {condStyles}
    }
    return (
        <div style={styles}>
             <input type="checkbox" onChange={() => props.handleChange(props.info.id)} checked={props.info.completed} /> 
             <span style={() => styleDecider(props.info.completed)}>{props.info.text}</span> <br />
        </div>
    );
}


export default TodoItem;
