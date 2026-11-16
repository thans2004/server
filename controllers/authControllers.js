const user = require('../models/user');
const User =require('../models/user');
const bcrypt =  require ('bcrypt');
const jwt =require('jsonwebtoken');
const { JWT_SECRET, NODE_ENV } = require('../Utils/config');

const authController ={

registerUser:async(req,res)=>{
        try{
            // get the uesr details from the request body
            const {name,email,password} = req.body;

           // encrypt the password
           const encryptedPassword = await bcrypt.hash(password,10);

           
          
           //modwel??  
                //  create a new user
                const newUser = new User({
                    name,
                    email,
                    password:encryptedPassword
                });

                // check if a user with the same email already exists
                const existingUser =await User.find({email});

               if(existingUser.length>0){
                return res.status(500).json({message:'user already exsitis'});
               }

                // save the user to the database
               const savedUser= await newUser.save();

               const user =savedUser.toObject();
               delete user.password;
               delete user.__v;
               

            res.status(201).json({message:'registation succesfuly',user:user});

        }catch(error){
            res.status(500).json({message:'Error in registering user...',error:error.message})
            
       }

},
loginUSer:async (req,res) =>{
    try{
        // perform authentication
        // get the email and password in request body
        const{email,password}= req.body;
        // check in user exists in the email in our system
        const User = await user.findOne({email});

        if(!User){
            // of no such in tha email user null or fales
            // return th error meassage
            return res.status(500).json({message:'user does not exists'})
        }
        //  if reach here its means user exists
        // check if the password matches
        const doesPasswordMatch = await bcrypt.compare(password,User.password);

        // password checking response
        if(!doesPasswordMatch){
            // if the password not match return in the error message
            return res.status(500).json({message:'password incurected'})
        }

        // generate a token
        const token = jwt.sign({ userId:User._id},JWT_SECRET,{expiresIn: '1h'});

        // store the token as httponly cookie is response
        res.cookie('token',token,{
            httpOnly:true,
            secure:NODE_ENV ==='production', // set the devalapment
            sameSite:'strict',  // adjust based on your needs
            maxAge:3600000   // expiers time 1 hour

        });
        res.status(200).json({massage:'login successfuly',});

    }catch(error){
        res.status(500).json({message:'login faild',error:error.massage});
       }
},
me:async(req,res)=>{
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
        

        // get the user details from the databases
        const user1 = await user.findById(userId).select('-password -__v');
        
        if(!user1){
            return res.status(404).json({message:'user not found'})
        }
        res.status(200).json({user1});

    }catch(error){
        res.status(500).json({message:'error fecting  user details',error:error.massage})

    }
},
logoutUser:async(req,res)=>{
try{
// clear the cookie
res.clearCookie('token',{
            httpOnly:true,
            secure:NODE_ENV ==='production', // set the devalapment
            sameSite:'strict',  // adjust based on your needs
            maxAge:3600000   // expiers time 1 hour
   });
   res.status(200).json({message:'logout successful'});
}catch(error){
    res.status(500).json({message:'error logging out user ',error:error.message})
}
}
}
module.exports=authController;