const mysql = require('mysql2/promise');
require('dotenv').config();
const dbName = process.env.database;

mysql.createConnection({
    host: "127.0.0.1",
    port: "3306",
    user: process.env.user,
    password : process.env.password
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Database create or successfully checked");
        process.exit(0);
    })
});

module.exports = mysql;