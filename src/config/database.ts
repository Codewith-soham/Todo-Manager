// @ts-expect-error pg does not provide declarations in this project.
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
});

pool.query("SELECT NOW()")
    .then((result: pg.QueryResult) => {
        console.log("Database connected");
        console.log("Database time:", result.rows[0]);
    })
    .catch((error: unknown) => {
        console.error("Database connection failed");
        console.error(error);
    });