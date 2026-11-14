const errorHandler = (req,res,next)=>{
    // if reach  here means no route matched the request 
    
    res.status(404).json({error:'Route not found...'});

}
module.exports=errorHandler;