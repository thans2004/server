// setup in the fs  writing for log to the  file 
const fs = require('fs');

const logger = async (request,response,next)=>{
    //LOG THE INCOMING PROCESSING REQUEST TO THE CONSOLE

//  console.log('requser recived:',new Date().toISOString());
//  console.log('requset method:' ,request.method);
//  console.log('requset url:' ,request.url);
//  console.log('requset body:' ,request.body);
//  console.log('requset headers:' ,request.headers);
//  console.log('coolies:' ,request.cookies);
//  console.log('request params:',request.params);
//  console.log('-----------------------------------------------------');


 //write to the a log file
   const logData = `Request received at :${new Date().toISOString()}\n
   Request method :${request.method}\n
   Request.URL${request.originalUrl}\n
   Request body:${JSON.stringify(request.body)}\n
   Request params:${JSON.stringify(request.params)}\n
   Request headers:${JSON.stringify(request.headers)}\n
   Cookies:${JSON.stringify(request.cookies)}
   \n--------------------------------------\n`;
  // get the current date without time for the log file name
     const currentDate =new Date().toISOString().split ('T')[0];
        fs.appendFile('./logs/request_logs_' + currentDate + '.log', logData,
            (err)=>{
                if(err){
                    console.error('Error writing log to file',err);
                    //return error response if the log writng failes
                    return response.status(500).json({error:'Error on writing log to file...'});     
                }
            });
// deside wether  to continue processing the request or not        
next();
}
module.exports = logger;