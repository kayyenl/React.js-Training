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
        this.setState = this.setState.bind(this)
    }

    handleChange(id) {
        this.setState(prevState => {
            let todosNew = todosData
            todosNew[id - 1].completed = !prevState[id - 1].completed
            return {
                todos: todosNew
            }
    })}

    render() {
        const todoItems = this.state.todos.map(elem => {
            return <TodoItem 
                key = {elem.id}
                info = {elem} /> 
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
