const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const{ JWT_SECRET} =require('../Utils/config');

const isAuthenticated =(req,res,next) =>{
try{
              // get the token in the req cookies
   const token = req.cookies.token;
                 
   if(!token){
   return res.status(401).json({message:'user not logged in'})
                         }
               // verify the token
   const decoded = jwt.verify(token,JWT_SECRET);
                         
               // get the  user id from the docoder token
   const userId = decoded.userId;
   //attach th euserIs to the requewst object for futher use
   req.userId = userId;

//    call the next middleware or eoute handler
   next();
                                     
}catch(error){
    return res.status(500).json({message:'error in authenticating user..',error:error.message});
   }
}
  
   const allowedRoles =(roles)=>{
      return (req,res,next)=>{

      }
   }

module.exports ={
    isAuthenticated,
    allowedRoles
}