// import express
const express =require('express');
const todoRouter = require('./routes/TodoRoutes');


// const { listen } = require('node:quic');

//create an express application
const app = express();

app.use('/todos', todoRouter);

module.exports = app;