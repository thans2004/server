// import express
const express =require('express');
// const { listen } = require('node:quic');

//create an express application
const app = express();

app.get('/',(request,response) => {
    response.send({ message:'hello world!'});
});

module.exports = app;