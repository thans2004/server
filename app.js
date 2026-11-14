// import express
const express =require('express');
const todoRouter = require('./routes/TodoRoutes');
const bodyParser = require('body-parser');


// const { listen } = require('node:quic');

//create an express application
const app = express(); 

//onSuccess->matching rotes
// onFailure =>return an error response
// parse the requst body
// app.use(express.json());

// parser in using the body-parser libary
app.use(bodyParser.json());

// then send the request to the macting rputes
app.use('/todos', todoRouter);

module.exports = app;