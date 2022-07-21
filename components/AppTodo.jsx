import React from 'react';
import TodoItem from './TodoItem';
import todosData from './todosData';

const AppTodo = () => {
    const todoList = todosData.map(elem => {
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
            {todoList}
        </div>
    );
}

export default AppTodo;
