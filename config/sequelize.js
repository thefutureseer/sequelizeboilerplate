require('dotenv').config();
const {Sequelize} = require('sequelize');

// const env = process.env.NODE_ENV || "development";

// const config = require(__dirname + '/../config/environments.json')[env]

const sequelize = new Sequelize(
  process.env.database, 
  process.env.user, 
  process.env.password, 
  {
    host: '127.0.0.1',
    dialect: 'mysql',
    logging: false, // disable logging
  }

)

module.exports = sequelize;