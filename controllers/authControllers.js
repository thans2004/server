const User =require('../models/user');

const authController ={

    registerUser:async(req,res)=>{
        try{
            // get the uesr details from the request body
            const {name,email,password} = req.body;
            //modwel??  
                //  create a new user
                const newUser = new User({
                    name,
                    email,
                    password
                });
                // save the user to the database
               const savedUser= await newUser.save();

            res.status(201).json({message:'registation succesfuly',user:savedUser})

        }catch(error){
            res.status(500).json({message:'Error in registering user...',error:error.message})
       }

}
}

module.exports=authController;