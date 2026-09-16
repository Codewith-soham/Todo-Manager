import { pool } from "../config/database.js";
import {
    Todo,
    createTodoInput,
}from "../types/todo.types.js"

export const createTodo = async (
    todo: createTodoInput
): Promise<Todo> => {
    const result = await pool.query(
        `INSERT INTO todos (title, description, status, priority)
        values ($1, $2, $3, $4)
        returning *; 
        `, //returning in a proper block
        [
            todo.title,
            todo.description ?? null,
            todo.status ?? "pending",
            todo.priority ?? "medium"
        ]
    );

    return result.rows[0] //return the first row as we want one todo list
}

export const getAllTodos = async (): Promise <Todo[]> => {  //todo[] will return all array
    const result = await pool.query(
        `
            select * 
            from todos 
            order by created_at DESC;
        `
    );
    
    return result.rows;
}

export const getTodoById = async (id: number): Promise<Todo | null> => {
    const result = await pool.query(
        `
        select *
        from todos
        where id = $1
        `,
        [id]
    )

    return result.rows[0] ?? null
}

export const deleteTodo = async(id: number): Promise<Todo> => {
    const result = await pool.query(
        `
            delete from todos
            where id = $1
            returning *;   
        `,
        [id]
    )

    return result.rows[0] ?? null;
}