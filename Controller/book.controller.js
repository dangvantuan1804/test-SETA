const bookService =require('../Service/book.service');

const bookController = {
    create: async (req,res,next)=>{
        try{
            const newBook = req.body;
            let data= await bookService.create(newBook);
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
            let data= await bookService.findOne(id);
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
            let query = req.query
            let data= await bookService.findAll(query);
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
            const book = req.body;
            const id = req.params.id;
            let data= await bookService.update(id, book);
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
            let data= await bookService.delete(id);
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

module.exports = bookController;
