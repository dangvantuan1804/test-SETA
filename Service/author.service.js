const Author = require('../Model/author.model');
const db = require('../Model/index')
const Book = require('../Model/book.model')

const authorService = {
    create: async(name)=>{
        //Kiểm tra dữ liệu nhập vào có trống hay không
        if (isEmpty(name) ) {
            let err = {
            code: 'INVALID_INPUT',
            message: 'Input data is invalid',
            };
            throw err;
        }
        let data = await Author.create({name: name})
        return data
    },
    findOne: async(id)=>{
        // Kiểm tra author có tồn tại hay không
        let check = await Author.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        let data = await Author.findOne({id: id})
        return data
    },
    findAll: async()=>{
        let data = await Author.findAll()
        return data
    },
    update: async(id, name)=>{
        // Kiểm tra author có tồn tại hay không
        let check = await Author.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        await Author.update({name: name},{
            where:{
                id: id
            }
        })
        let data = await Author.findOne({id: id})
        return data
    },
    delete: async(id)=>{
        // Kiểm tra author có tồn tại hay không
        let check = await Author.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        await db.transaction(async function (transaction) {
            await Author.destroy({ where: { id: id } ,transaction})
            await Book.destroy({ where: { authorId: id } ,transaction})
            
        });
        return true
    },
    
}
//Kiểm tra chuỗi nhập vào có rỗng hay không
const isEmpty = function (value) {
    if (!value || 0 === value.length) {
      return true;
    }else 
        return false
  };
  
module.exports = authorService