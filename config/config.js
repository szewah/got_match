var dotenv = require('dotenv').config();

module.exports = {
    development: {
        database: "got_db",
        username: "root",
        password: null,
        // database: process.env.DB_DATABASE,
        // username: process.env.DB_USER,
        // password: process.env.DB_PASS,
        host: "127.0.0.1",
        dialect: "mysql"
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        use_env_variable: "JAWSDB_URL",
        dialect: "mysql"
    }

};