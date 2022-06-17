const authorService =require('../Service/author.service');

const authorController = {
    create: async (req,res,next)=>{
        try{
            const name = req.body.name;
            let data= await authorService.create(name);
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
            let data= await authorService.findOne(id);
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
            let data= await authorService.findAll();
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
            let data= await authorService.update(id, name);
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
            let data= await authorService.delete(id);
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

module.exports = authorController;
