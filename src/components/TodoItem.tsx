import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todoSlice";
import { BsXLg } from "react-icons/bs";


interface TodoItemProps {
    todo: {
        id: number;
        todo: string;
        completed: boolean;
    }
}
const TodoItem = ({ todo }: TodoItemProps) => {
    const dispatch = useDispatch();

    return (
        <div className="text-white flex items-center justify-between">
            <div className="w-full flex items-center justify-between px-4 py-2 border border-slate-500 rounded hover:border-slate-300 transition ease-in-out">
                <div className="flex items-center gap-1">
                    <input
                        id={`${todo.id}`}
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => { dispatch(toggleTodo(todo.id)) }}
                        className="cursor-pointer peer w-5 h-5 text-indigo-500 bg-gray-100 border-gray-300 rounded"
                    />
                    <label
                        htmlFor={`${todo.id}`}
                        className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
                    >
                        {todo.todo}
                    </label>
                </div>

                <button
                    onClick={() => { dispatch(deleteTodo(todo.id)) }}
                    className="hover:text-red-500 transition-colors"
                >
                    <BsXLg size={20} />
                </button>
            </div>
        </div>
    )
}

export default TodoItem