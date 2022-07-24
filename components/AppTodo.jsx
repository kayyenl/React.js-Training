import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class AppTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // handleChange(id) {
    //     this.setState(prevState => {
    //         let todosNew = todosData
    //         let prevBool = !prevState.todos[id - 1].completed
    //         todosNew[id - 1].completed = prevBool
    //         console.log(prevState.todos[id - 1].completed)
    //         return {
    //             todos: todosNew
    //         }
    //     })
    // }

    handleChange(id) {
        this.setState(prevState => {
            const newTodo = prevState.todos.map(elem => {
                if (elem.id === id) {
                    console.log(elem.id)
                    elem.completed = !elem.completed 
                }
                return elem
            })
            return {
                todos: newTodo
            }
        })
    }

    render() {
        const todoItems = this.state.todos.map(elem => {
            return <TodoItem 
                key = {elem.id}
                info = {elem}
                handleChange = {this.handleChange} /> 
        })
        const styles = {
            color: "green",
            paddingLeft: 24,
            paddingTop: 24,
            fontWeight: 800,
            fontSize: 24,
        }
        return (
            <div style = {styles}>
                {todoItems} 
            </div>
        );
    }
}

export default AppTodo;
