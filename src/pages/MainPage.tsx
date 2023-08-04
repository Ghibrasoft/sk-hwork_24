import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const MainPage = () => {
    return (
        <section className="flex justify-center bg-slate-800 h-screen">
            <div className="flex flex-col">
                <h1 className="text-white text-center text-5xl font-bold">Todo App</h1>
                <TodoForm />
                <TodoList />
            </div>
        </section>
    )
}

export default MainPage