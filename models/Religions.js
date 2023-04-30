//Sequelize module for model class, datatypes and init
const {Model, DataTypes} = require('sequelize');

//get connection to use Sequelize
const sequelize = require('../config/sequelize');

class Religion extends Model {}

Religion.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  {
    religion_name: DataTypes.STRING,
    allowNull: false,
  },
  {
    sequelize,
    timestamp: true,
    freezeTableName: true,
    modelName: 'religion'
  }
);

module.exports = Religion;