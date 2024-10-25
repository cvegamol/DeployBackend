import mysql from "promise-mysql";
import config from "../routes/config";

const connection = mysql.createConnection({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password,
    port:3007
});

const getConnection = () => {
    return connection;
};

export default getConnection;
