const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Employee = sequelize.define('employee', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cuit: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  team_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  join_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
});

module.exports = Employee;