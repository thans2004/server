const express = require('express');

const todoRouter = express.Router();

todoRouter.get('/',(request,response) => {
    response.send({ message:'hello'});
});


module.exports =todoRouter;




//