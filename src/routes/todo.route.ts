import { FastifyInstance } from "fastify";
import { createTodo, deleteTodo, getAllTodos, getTodoById } from  "../controller/todo.controller.js";

export const todoRoutes = async(app: FastifyInstance) => {
    app.post("/createTodo", createTodo)
    app.get("/todos", getAllTodos)
    app.get("/todos/:id", getTodoById)
    app.delete("/deleteTodo/:id", deleteTodo)
}
