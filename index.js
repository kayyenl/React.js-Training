import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Content from './components/Content';
import Footer from "./components/Footer"
import Apps from "./components/App"
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Apps />
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

