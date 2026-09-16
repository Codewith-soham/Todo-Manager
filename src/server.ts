console.log("server.ts is being executed");

import Fastify from "fastify"
import "./config/database.js"
import { todoRoutes } from "./routes/todo.route.js";


const app = Fastify({
    logger: true //uses in built logging for requests or event encounters it uses Pino internally
})

app.get("/", async() => {
    return {
        message: "Todo api is running"
    }
})

const start = async () => {
    try {
        await app.register(todoRoutes) //register - add plugins/modules loads the group of routes present in todoRoutes

        await app.listen({
            port: 3000,
            host: "localhost",
        });

        console.log("Todo API started on http://localhost:3000");
    } catch (error) {
        app.log.error(error);
        process.exit(1);
    }
};

start()