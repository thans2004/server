// import express
const express =require('express');
const todoRouter   = require('./routes/TodoRoutes');
const bodyParser   = require('body-parser');
const logger       = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const authRouter   = require('./routes/AuthRoutes');
const cookieparser = require('cookie-parser');

// const { listen } = require('node:quic');
//create an express application

const app = express(); 

//onSuccess->matching rotes
// onFailure =>return an error response
// parse the requst body
// app.use(express.json());
// parser in using the body-parser libary

app.use(bodyParser.json());

// parser the cookies
app.use(cookieparser());

//request process begins or recieved request
//log the incoming requests
app.use(logger);

// then send the request to the macting rputes
app.use('/todos', todoRouter);
app.use('/auth',authRouter);

// error handling middlware
app.use(errorHandler);

module.exports = app;