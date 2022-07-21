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
        margin: "0 auto"
    }
    return (
        <div style={styles}>
             <input  type="checkbox" onChange={consoleLogger} checked={props.info.completed} /> {props.info.text} <br />
        </div>
    );
}


export default TodoItem;
