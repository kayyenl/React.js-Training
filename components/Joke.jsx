import React from 'react';

const Joke = (props) => {
    const styles = {
        fontWeight : "bold",
    }
    // let newstring = ""
    // if (props.contents.question != "") {
    //     const holder = props.contents.question;
    //     newstring = "Question: "  + holder
    // }
    return (
        <div className="joke">
            <div className="question" style = {{display: props.contents.question ? "block": "none"}}>Question: {props.contents.question}</div>
            <div className="punchline" style = {styles}>{props.contents.punchline}</div>
            <br />
            <hr />
        </div>
    );
}

export default Joke;
