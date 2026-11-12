const express = require('express');

const todoRouters = express.Router();

todoRouters.get('/',(request,response) => {
    response.send({ message:'hello'});
});


module.exports =todoRouters;