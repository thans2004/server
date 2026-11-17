const { json } = require('body-parser');
const jwt = require('jsonwebtoken');
const{ JWT_SECRET} =require('../Utils/config');
const User =require('../models/user');

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

     //   call the next middleware or eoute handler
   next();
                                     
}catch(error){
    return res.status(500).json({message:'error in authenticating user..',error:error.message});
   }
}
  
   const allowedRoles =(roles)=>{
      return async (req,res,next)=>{
         // get the user id from he requesrt object
         const userId =req.userId;
         
         // check if the userId is present

         if(!userId){
            return res.status(401).json({message:'user not logged in'});
         }
         // get the user from the databses
         const user =  await User.findById(userId);
         if(!user){
            return res.status(404).json({message:'user not found'});
         }
         // chack if the user's role is in the allowed roles
         if(!roles.includes(user.role)){
            return res.status(403).json({message:'user not authorized to access this route'});
         }
         // call the next middleware or route handler
         next();
      }
   }
module.exports ={
    isAuthenticated,
    allowedRoles
}