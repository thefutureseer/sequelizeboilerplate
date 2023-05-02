require('dotenv').config();

module.exports = {
  "development": {
    "user": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": "localhost",
    "dialect": "mysql" 
  },
  "test": {
    "user": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": "localhost",
    "dialect": "mysql" 
  },
  "production": {
    "user": process.env.user,
    "password": process.env.password,
    "database": process.env.database,
    "host": "127.0.0.1",
    "dialect": "mysql" 
  }
}