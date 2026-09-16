import { FastifyReply, FastifyRequest } from "fastify";
import { createTodoInput } from "../types/todo.types.js"
import * as todoService from "../service/todo.service.js"

export const createTodo = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const todoData = request.body as createTodoInput;

    const todo = await todoService.createTodo(todoData)

    return reply.status(201).send({
        success: true,
        data: todo,
        message: "todo created sucessfully"
    });
}

export const getAllTodos = async(
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const todos = await todoService.getAllTodos()

    return reply.status(200).send({
        success: true ,
        data: todos,
        message: "Todos fetched successfully"
    })
}

export const getTodoById = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { id } = request.params as {id: string }

    const todo = await todoService.getTodoById(Number (id))

    if(!todo){
        return reply.status(404).send({
            success: false,
            message: "Todo not found"
        })
    }

    return reply.status(200).send({
        success: true,
        data: todo,
        message: "Todo fetched successfully"
    })
}

export const deleteTodo = async (
    request: FastifyRequest,
    reply: FastifyReply
) => {
    const { id } = request.params as { id: String }

    const todo = await todoService.deleteTodo(Number (id))

    if(!todo){
        return reply.status(404).send({
            success: false,
            message: "Todo not found"
        })
    }

    return reply.status(200).send({
        success: true,
        data: todo,
        message: "Todo fetched successfully"
    }
    )
}