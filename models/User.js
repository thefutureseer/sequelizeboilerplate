//require model and datatypes from sequelize
const { Model, DataTypes } = require('sequelize');

//bring in sequelize instance running and ready
const sequelize = require('../config/sequelize');

//make a model
class User extends Model {}

//instantiate model
User.init(
//bcrypt 

//{instances}

  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true
    }
  },
  //  {hooks},
  {
    sequelize,
    modelName: 'User',
    timestamps: false // disable timestamp fields
  }
);

//export
module.exports = User;