import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

class AppTodo extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData,
        }
    }

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
