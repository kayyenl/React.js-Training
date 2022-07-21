import React from 'react';

//https://reactjs.org/docs/events.html#supported-events

function consoleLog() {
    console.log("I was clicked!")
}

const Event = () => {
    const styles = {
        padding: "32px"
    }
    return (
        <div style = {styles}>
            <img src='https://www.fillmurray.com/300/400' onMouseOver={consoleLog}></img>
            <br />
            <br />
            <button onMouseOver={consoleLog}>Click me!</button>
        </div>
    );
}

export default Event;
