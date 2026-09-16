import {
    Todo,
    createTodoInput,
}from "../types/todo.types.js"

import * as todoRepository from "../repository/todo.repository.js"

export const createTodo = async(
    todo: createTodoInput
): Promise<Todo> => {
    return await todoRepository.createTodo(todo);
}

export const getAllTodos = async (): Promise<Todo[]> => {
    return todoRepository.getAllTodos();
}

export const getTodoById = async(id: number): Promise<Todo | null > => {
    return todoRepository.getTodoById(id)
}