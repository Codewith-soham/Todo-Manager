import { FastifyInstance } from "fastify";
import { createTodo, getAllTodos, getTodoById } from  "../controller/todo.controller.js";

export const todoRoutes = async(app: FastifyInstance) => {
    app.post("/createTodo", createTodo)
    app.get("/todos", getAllTodos)
    app.get("/todos/:id", getTodoById)
}
