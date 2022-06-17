const db = require("./index");
const {  DataTypes, Sequelize, NOW } = require("sequelize");

const Author = db.define(
  "authors",
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


Author.sync({ alter: true });

module.exports = Author