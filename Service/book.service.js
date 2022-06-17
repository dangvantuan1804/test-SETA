const Book = require('../Model/book.model');
const Category = require("../Model/category.model")
const Author = require('../Model/author.model')

const bookService = {
    create: async(newBook)=>{
        //Kiểm tra dữ liệu nhập vào có trống hay không
        if (isEmpty(newBook.name) || isEmpty(newBook.categoryId) || isEmpty(newBook.authorId)) {
            let err = {
            code: 'INVALID_INPUT',
            message: 'Input data is invalid',
            };
            throw err;
        }
        let checkCategory = await Category.findOne({ where: { id: newBook.categoryId } });
        if (checkCategory === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found category`,
            };
            throw err;
        }
        let checkAuthor = await Author.findOne({ where: { id: newBook.authorId } });
        if (checkAuthor === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found auhthor`,
            };
            throw err;
        }
        let data = await Book.create(newBook)
        return data
    },
    findOne: async(id)=>{
        // Kiểm tra book có tồn tại hay không
        let check = await Book.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        let data = await Book.findOne({id: id})
        return data
    },
    findAll: async(query)=>{
        let data= [];
        if(isEmpty(query.author) && isEmpty(query.category)){
            data = await Book.findAll()
        }
        if(!isEmpty(query.author)){
            data = await Book.findAll({
                include: [{
                    model: Author,
                    where: {name: query.author},
                    required: true,
                   }]
            })
        }
        if(!isEmpty(query.category)){
            data = await Book.findAll({
                include: [{
                    model: Category,
                    where: {name: query.category},
                    required: true,
                   }]
            })
        }
        return data
    },
    update: async(id, book)=>{
        // Kiểm tra book có tồn tại hay không
        let check = await Book.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        if(!isEmpty(book.authorId)){
            let checkAuthor = await Author.findOne({ where: { id: book.authorId } });
            if (checkAuthor === null) {
                let err = {
                code: 'NOT_FOUND',
                message: `Can't found auhthor`,
                };
                throw err;
            }
        }
        if(!isEmpty(book.categoryId)){
            let checkCategory = await Category.findOne({ where: { id: book.categoryId } });
            if (checkCategory === null) {
                let err = {
                code: 'NOT_FOUND',
                message: `Can't found category`,
                };
                throw err;
            }
        }
        await Book.update(book,{
            where:{
                id: id
            }
        })
        let data = await Book.findOne({id: id})
        return data
    },
    delete: async(id)=>{
        // Kiểm tra Book có tồn tại hay không
        let check = await Book.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        let data = await Book.destroy({ where: { id: id } })
        return data
    },
    
}
//Kiểm tra chuỗi nhập vào có rỗng hay không
const isEmpty = function (value) {
    if (!value || 0 === value.length) {
      return true;
    }else 
        return false
  };
  
module.exports = bookService