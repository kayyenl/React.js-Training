import React from 'react';
import Joke from './Joke';
import jokesData from './jokesData';

const JokeApp = () => {
    const jokeComponents = jokesData.map(elem => {
         return <Joke key = {elem.id} contents = {{
            question: elem.question,
            punchline: elem.punchline,
    }}/>})
    return (
        <div>
           {jokeComponents}
        </div>
    );
}

export default JokeApp;
