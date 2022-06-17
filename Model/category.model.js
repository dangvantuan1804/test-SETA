const db = require("./index");
const {  DataTypes, Sequelize, NOW } = require("sequelize");

const Category = db.define(
  "categorys",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false
    } 
  },
  {
    timestamps: false,
    underscored: true,
  }
);


Category.sync({ alter: true });

module.exports = Category