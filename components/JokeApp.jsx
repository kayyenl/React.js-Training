import React from 'react';
import Joke from './Joke';

const JokeApp = () => {
    return (
        <div>
            <Joke 
            contents = {{
                question: "what is the difference between a fly and a bird?",
                punchline: "a bird can fly but a fly can't bird.",
            }}/>
            <Joke 
            contents = {{
                question: "what did the fish say when he swam into a wall?",
                punchline: "Dam.",
            }}/>
            <Joke 
            contents = {{
                question: "what do you call a fish with no eyes?",
                punchline: "a fsh.",
            }}/>
            <Joke 
            contents = {{
                question: "",
                punchline: "derp.",
            }}/>
            <Joke 
            contents = {{
                question: "",
                punchline: "we do not serve beer, says the bartender.",
            }}/>
        </div>
    );
}

export default JokeApp;
