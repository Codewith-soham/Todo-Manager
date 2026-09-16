export type ToDoStatus = "pending" | " in_progress" | "done"

export type ToDoPriority = "high" | "low" | "medium"

export interface Todo{
    id: number;
    title: string;
    description: string | null;
    status: ToDoStatus;
    priority: ToDoPriority
    createdAt: Date;
    updatedAt: Date;
}

export interface createTodoInput {
    title: string;
    description: string | null;
    status?: ToDoStatus;
    priority?: ToDoPriority;
}


