const User = require('../Model/user.model');
const jwt = require ('jsonwebtoken');

const userService = {
    login: async(userName, password)=>{
        //Kiểm tra dữ liệu nhập vào có trống hay không
        if (isEmpty(userName) || isEmpty(password)) {
            let err = {
            code: 'INVALID_INPUT',
            message: 'Input data is invalid',
            };
            throw err;
        }
        // Kiểm tra tài khoản có tồn tại hay không, nếu không thì in ra lỗi
        let checkUser = await User.findOne({ where: { userName: userName } });
        if (checkUser === null) {
            let err = {
            code: 'NOT_FOUND',
            message: `Can't found `,
            };
            throw err;
        }
        if(checkUser.password !== password){
            let err = {
                code: 'INCORRECT_PASS',
                message: `Incorrect pass word`,
                };
                throw err;
        }
        let data =  jwt.sign({ id : checkUser.id, userName : checkUser.userName},process.env.ACCESS_TOKEN_SECRET,{expiresIn: '1d'});
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
  
module.exports = userService