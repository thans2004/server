const app = require("./app");
const mongoose = require('mongoose');

// connect to databses
mongoose
.connect('mongodb+srv://thansappan_db_user:B8VwbO4WenuWVUWD@cluster0.9rdjbvq.mongodb.net/')
.then(() =>{
    console.log('connected to databases')
})
.catch(error =>{
    console.log('error in connecting to databases')
})
// start the server
app.listen(3001,'localhost',()=>{
    console.log('server is running at http://localhost:3001');
})