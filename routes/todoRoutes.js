const express = require('express');
const { getAllTodos, getTodoByID, createTodo,updateTodo,deleteTodo} = require('../controllers/todoControllers');
const { isAuthenticated } = require('../middlewares/auth');
const todoRouter = express.Router();

// protected routes
// make sure the user is authenticated before ant todo routes
todoRouter.use(isAuthenticated); 

todoRouter.get('/', getAllTodos);
todoRouter.get('/:id', getTodoByID);
todoRouter.post('/', createTodo);
todoRouter.put('/:id', updateTodo);
todoRouter.delete('/:id',deleteTodo);
// todoRouter.all();

module.exports =todoRouter;








