const connection = require("../config/db.config")

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Asset = sequelize.define('Asset', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false
  },
  code: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  marca: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  purchase_date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});






const findAllProduct = async () => {
    const rows = await connection.query('SELECT * FROM  asset a').spread((rows) => rows)

    return rows


}

module.exports = Asset;