const app = require("./app");
const mongoose = require('mongoose');
const { MONGODB_URL, PORT, HOST } = require("./Utils/config");


// connect to databses
mongoose
.connect(MONGODB_URL)
.then(() =>{    
    console.log('connected to databases')

    // start the server
app.listen(PORT , HOST,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});

})
.catch(error =>{
    console.log('error in connecting to databases')
})
