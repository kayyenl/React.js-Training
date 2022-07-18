import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyIntro />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// 5. REACT DOM AND JSX PRACTICE
// import React from 'react';
// import ReactDOM from'react-dom'

// ReactDOM.render(
//   <ul>
//     <li>hello</li>
//     <li>hello2</li>
//     <li>hello3</li>
//   </ul>, document.getElementById('root'))
//in a function. you cannot return more than one element!

// 7. Functional Component Practice 
//import React from 'react';
//import ReactDOM from 'react-dom';

function MyIntro() {
  return (
    <div>
      <h1>Lee Kay Yen</h1>
      <p> I am a student going on exchange to University of Tokyo in 1.5 months time! Below are my top 3 places to go in Tokyo.</p>
      <ul>
        <li>Family Mart</li>
        <li>Akihabara</li>
        <li>Run-down malls</li>
      </ul>   
    </div>
  )
}