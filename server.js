//import the http libary
const http = require('node:http');

// create the server

const server = http.createServer((request,response)=>{
console.log('requset received...');
console.log(request.method,request.url);

response.writeHead(200,{
    'content-type':'application/json'})
//prepare a response
 response.end(JSON.stringify({ message:'hello world!'}));
});

// start the server

server.listen(3001,'localhost',() => {
    console.log('server is running at http://localhost:3001');
});