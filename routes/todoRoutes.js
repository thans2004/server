const express = require('express');
const { getAllTodos, getTodoByID, createTodo,updateTodo,deleteTodo} = require('../controllers/todoControllers');
const { isAuthenticated, allowedRoles } = require('../middlewares/auth');
const todoRouter = express.Router();

// protected routes
// make sure the user is authenticated before ant todo routes
todoRouter.use(isAuthenticated); 

todoRouter.get('/', allowedRoles(['admin','user']),getAllTodos);
todoRouter.get('/:id',allowedRoles(['admin','user']), getTodoByID);
todoRouter.post('/',allowedRoles(['admin','user']), createTodo);
todoRouter.put('/:id',allowedRoles(['admin','user']), updateTodo);
todoRouter.delete('/:id',allowedRoles(['admin']),deleteTodo);
// todoRouter.all();

module.exports =todoRouter;








