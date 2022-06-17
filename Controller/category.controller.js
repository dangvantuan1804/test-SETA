const categoryService = require('../Service/category.service')

const categoryController = {
    create: async (req,res,next)=>{
        try{
            const name = req.body.name;
            let data= await categoryService.create(name);
            res.status(200).json({
                status: 'Success',
                code: null,
                message: "Success",
                data: data
              });
        }catch(err){
            return res.status(400).json({
                status: 'Error',
                code: err.code,
                message: err.message,
                data: null,
              });
        }
    },
    findOne: async (req,res,next)=>{
        try{
            const id = req.params.id;
            let data= await categoryService.findOne(id);
            res.status(200).json({
                status: 'Success',
                code: null,
                message: "Success",
                data: data
              });
        }catch(err){
            return res.status(400).json({
                status: 'Error',
                code: err.code,
                message: err.message,
                data: null,
              });
        }
    },
    findAll: async (req,res,next)=>{
        try{
            let data= await categoryService.findAll();
            res.status(200).json({
                status: 'Success',
                code: null,
                message: "Success",
                data: data
              });
        }catch(err){
            return res.status(400).json({
                status: 'Error',
                code: err.code,
                message: err.message,
                data: null,
              });
        }
    },
    update: async (req,res,next)=>{
        try{
            const name = req.body.name;
            const id = req.params.id;
            let data= await categoryService.update(id, name);
            res.status(200).json({
                status: 'Success',
                code: null,
                message: "Success",
                data: data
              });
        }catch(err){
            return res.status(400).json({
                status: 'Error',
                code: err.code,
                message: err.message,
                data: null,
              });
        }
    },
    delete: async (req,res,next)=>{
        try{
            const id = req.params.id;
            let data= await categoryService.delete(id);
            res.status(200).json({
                status: 'Success',
                code: null,
                message: "Success",
                data: data
              });
        }catch(err){
            return res.status(400).json({
                status: 'Error',
                code: err.code,
                message: err.message,
                data: null,
              });
        }
    }
}

module.exports = categoryController;
