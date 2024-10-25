import { config } from "dotenv";

config();

export default {
    host: process.env.HOST || "mysql-ti8n.railway.internal",
    database: process.env.DATABASE || "ine",
    user: process.env.USER || "root",
    password: process.env.PASSWORD || "STlwtgMmIMhPNCeBtWEjKjqxcPzEwmwb",
    port:process.env.PORTDB || 3307
};