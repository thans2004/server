// import express
const express =require('express');
const todoRouter = require('./routes/TodoRoutes');


// const { listen } = require('node:quic');

//create an express application
const app = express();

// parse the requst body
app.use(express.json());

app.use('/todos', todoRouter);

module.exports = app;