import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, selectTodos } from '../features/todoSlice';
import TodoItem from './TodoItem';
import { AppDispatch } from '../store';

const TodoList: React.FC = () => {
    const todos = useSelector(selectTodos);
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    console.log(todos.todos.map((todo) => todo.title))
    return (
        <div className="w-full grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mt-10 text-xl">
            {todos.todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};

export default TodoList;
