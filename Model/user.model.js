const db = require("./index");
const {  DataTypes, Sequelize, NOW } = require("sequelize");

const User = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    // Vì không cần tạo user nên em sẽ lưu mật khẩu ở dạng bthg không mã hóa
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },  
  },
  {
    timestamps: false,
    underscored: true,
  }
);


User.sync({ alter: true });

module.exports = User