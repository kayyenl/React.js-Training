import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTodo from "./components/AppTodo"
import App from "./components/App"
import ContactCard from './components/ContactCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContactCard 
      name = "Mr. Whiskerson" 
      imgUrl = "https://placekitten.com/300/200" 
      phone = "(212) 555-1234"
      email = "mr-whiskaz@capnap.meow"/>
    <ContactCard 
      name = "Fluffykins" 
      imgUrl = "https://placekitten.com/400/400" 
      phone = "(212) 555-2345"
      email = "fluff@me.com"/>
    <ContactCard 
      name = "Destroyer" 
      imgUrl = "https://placekitten.com/400/300" 
      phone = "(212) 555-3456"
      email = "ofworlds@yahoo.meow"/>
    <ContactCard 
      name = "Felix" 
      imgUrl = "https://placekitten.com/400/350" 
      phone = "(212) 555-4567"
      email = "thecat@hotmail.meow"/>
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

