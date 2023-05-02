const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

class Religion extends Model {}

Religion.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    religion_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    modelName: 'religion'
  }
);

module.exports = Religion;