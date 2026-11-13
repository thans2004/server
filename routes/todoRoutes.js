const express = require('express');
const { getAlTodos } = require('../controllers/todoControllers');

const todoRouter = express.Router();

todoRouter.get('/',getAlTodos);


module.exports =todoRouter;




//