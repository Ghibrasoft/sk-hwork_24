import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../features/todoSlice';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
    const todos = useSelector(selectTodos);


    return (
        <div className="flex flex-col justify-center gap-3 mt-10 text-xl">
            {todos.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
