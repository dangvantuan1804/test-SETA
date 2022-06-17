const User =require("../Model/user.model")
const jwt =require('jsonwebtoken')

const auth = async (req,res,next) =>{
  try{
    const bearerToken = req.headers['authorization']
    const token = bearerToken.split(' ')[1]
    if(!token) return res.status(401).json({
            status: 'Error',
            code: 'NOT_FOUND',
            message: 'Can not found access token',
            data: null,
          });
    let verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    if(!verified) return res.status(401).json({
                status: 'Error',
                code: 'NOT_FOUND',
                message: 'Can not found access token',
                data: null,
              });
    req.user=verified;
    next()
  }catch(err){
    return res.status(403).json({
            status: 'Error',
            code: 'UNAUTHORIZED',
            message: 'You must login to continue',
            data: null,
          });
  }
}

module.exports =auth