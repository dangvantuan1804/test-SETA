const Category = require('../Model/category.model');
const db = require('../Model/index')
const Book = require('../Model/book.model')

const categoryService = {
    create: async(name)=>{
        //Kiểm tra dữ liệu nhập vào có trống hay không
        if (isEmpty(name) ) {
            let err = {
            code: 'INVALID_INPUT',
            message: 'Input data is invalid',
            };
            throw err;
        }
        let data = await Category.create({name: name})
        return data
    },
    findOne: async(id)=>{
        // Kiểm tra catrgory có tồn tại hay không
        let check = await Category.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        let data = await Category.findOne({id: id})
        return data
    },
    findAll: async()=>{
        let data = await Category.findAll()
        return data
    },
    update: async(id, name)=>{
        // Kiểm tra catrgory có tồn tại hay không
        let check = await Category.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        await Category.update({name: name},{
            where:{
                id: id
            }
        })
        let data = await Category.findOne({id: id})
        return data
    },
    delete: async(id)=>{
        // Kiểm tra catrgory có tồn tại hay không
        let check = await Category.findOne({ where: { id: id } });
        if (check === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found`,
            };
            throw err;
        }
        await db.transaction(async function (transaction) {
            await Category.destroy({ where: { id: id },transaction })
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
  
module.exports = categoryService