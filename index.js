import React from 'react';
import ReactDOM from 'react-dom/client';
import Truthy from './components/Truthy';
import App2 from './components/App2';
import State4 from './components/State4'
import AppTodo from './components/AppTodo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppTodo />
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

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
  
  
  // class Header extends React.Component {
    //   timeString() {
      //     const date = new Date()
//     const hours = date.getHours()
//     if (hours > 18) {
//       return "Good night!"
//     } return "Good morning!"
//   }

//   render() {
//     return (
  //       <div>
//         <h1>
//           {this.timeString()}
//         </h1>
//       </div>
//     )
//   }
// }

// class Greeting extends React.Component {
  //   render() {
    //     return (
      //       <p>
//         Welcome, {this.props.username}!
//       </p>
//     )
//   }
// }

// class App extends React.Component {
  //   render() {
//     return (
//       <div>
//         <Greeting username="sir or madam"/>
//         <Header />
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor() {
//      super()
//      this.state = {
//       answer: "yes.",
//      }
//   }

//   render() {
//     return (
//       <div style={{paddingLeft: "32px"}}>
//         <h1>Is state important to know?</h1>
//         <h1>{this.state.answer}</h1>
//       </div>
//     )
//   }
// }