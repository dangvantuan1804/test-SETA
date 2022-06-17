const userService =require('../Service/user.Service');

const userController = {
    login: async (req,res,next)=>{
        try{
            const userName = req.body.userName;
            const password = req.body.password
            let data= await userService.login(userName,password);
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

module.exports = userController;
