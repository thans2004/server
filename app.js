// import express
const express =require('express');
const todoRouters = require('./routes/TodoRoutes');

// const { listen } = require('node:quic');

//create an express application
const app = express();

app.use('/todos',todoRouters);


module.exports = app;