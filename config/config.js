var dotenv = require('dotenv').config();

module.exports = {
    "development": {
        database: process.env.DB_DATABASE,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    test: {
        "username": "root",
        "password": null,
        "database": "got_db",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    {

    }









}