const express = require('express');
const { getAllTodos, getTodoByID, createTodo,updateTodo} = require('../controllers/todoControllers');
const { deleteTodo } = require('../controllers/todoControllers');
// const { createTodo } = require('../controllers/todoControllers');
// const { updateTodo } = require('../controllers/todoControllers');

const todoRouter = express.Router();

todoRouter.get('/',  getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id',deleteTodo);

module.exports =todoRouter;








