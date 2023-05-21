import React, { createContext } from "react";
import { TodoContextType } from "./TodoContextType";
import { Todo } from "../models/Todo";

export const TodoContext = createContext<TodoContextType>({
    todos: [
        { id: 1, title: 'Ir ao supermercado', done: true },
        { id: 2, title: 'Ir a academia', done: false }
    ],
    addTodo: () => { },
    removeTodo: () => { },
    toggle: () => { },
});

const TodoProvider = (props: any) => {

    const addTodo = (title: string) => { }
    const removeTodo = (todo: Todo) => { }
    const toggle = {}

    return (
        <TodoContext.Provider value={ }>
            {props.children}
        </TodoContext.Provider>
    );

}

export default TodoProvider;