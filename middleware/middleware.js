const jwt =  require('jsonwebtoken')
const User =  require("../model/User")

const middleware = async (req,res,next)=>{
    const bearerToken = req.headers.authorization;

    if(!bearerToken){
        return res.status(401).json({error:"Authorization token missing"})
    }

try{
 
    const token = bearerToken.split(" ");
    const finalToken = token[1]
    
    const verifyDetails = await jwt.verify(finalToken,"blackwidow243")
    const id = verifyDetails.id;
    const user = await User.findById(id)

    if(!user){
        return res.status(404).json({error: "User not found"})
    }
    user.password = undefined
    req.user = user;
    next()
}catch(error){

    return res.status(401).json({error: "Invalid or expired token"});
    
}
 
  }

  module.exports = {middleware};