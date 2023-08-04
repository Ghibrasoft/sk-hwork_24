import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { AnyAction } from "redux";

interface Todo {
  id: number;
  title?: string;
  completed: boolean;
}

interface TodosState {
  todos: Todo[];
}

const initialState: TodosState = {
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.unshift(action.payload);
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTodos, addTodo, toggleTodo, deleteTodo } = todosSlice.actions;

export const fetchTodos =
  (): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await axios.get<Todo[]>(
        "https://jsonplaceholder.typicode.com/todos"
      );
      dispatch(setTodos(response.data));
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

export const addTodoAsync =
  (todo: Todo): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const response = await axios.post<Todo>(
        "https://jsonplaceholder.typicode.com/todos",
        todo
      );
      dispatch(addTodo(response.data));
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

export const toggleTodoAsync =
  (id: number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch, getState) => {
    const state = getState();
    const todo = state.todos.todos.find((todo) => todo.id === id);

    if (!todo) {
      return;
    }

    try {
      const response = await axios.put<Todo>(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { ...todo, completed: !todo.completed }
      );
      dispatch(toggleTodo(response.data.id));
    } catch (error) {
      console.error("Error toggling todo:", error);
    }
  };

export const deleteTodoAsync =
  (id: number): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      dispatch(deleteTodo(id));
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

export const selectTodos = (state: RootState) => state.todos;
export default todosSlice.reducer;
