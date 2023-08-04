import TodoForm from '../components/TodoForm'
import TodoList from '../components/TodoList'

const MainPage = () => {
    return (
        <section className="flex justify-center h-screen w-full">
            <div className="flex flex-col items-center container">
                <h1 className="text-center text-5xl font-bold">Todo App</h1>
                <TodoForm />
                <TodoList />
            </div>
        </section>
    )
}

export default MainPage