import React from 'react';
import TodoItem from './TodoItem';

const AppTodo = () => {
    const styles = {
        color: "red",
        paddingLeft: 24,
        paddingTop: 24,
        fontWeight: 800,
        fontSize: 24
    }
    return (
        <div style = {styles}>
            <TodoItem />
            <TodoItem />
            <TodoItem />
            <TodoItem />
        </div>
    );
}

export default AppTodo;
