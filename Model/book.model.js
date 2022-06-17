const db = require("./index");
const {  DataTypes, Deferrable } = require("sequelize");
const Category = require('./category.model')
const Author = require("./author.model")

const Book = db.define(
  "books",
  {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        },
        name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        },
        categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
            model: Author,
            key: 'id',
            deferrable: Deferrable.INITIALLY_IMMEDIATE
        }
    },
  },
  {
    timestamps: false,
    underscored: true,
  }
);

Category.hasMany(Book, { foreignKey: 'category_id',allowNull:false });
Book.belongsTo(Category,{allowNull:false});

Author.hasMany(Book, { foreignKey: 'author_id',allowNull:false });
Book.belongsTo(Author,{allowNull:false});

Book.sync({ alter: true });

module.exports = Book