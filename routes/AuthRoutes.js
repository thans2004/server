// import express
const express = require('express');
const authController = require('../controllers/authControllers');
const { isAuthenticated } = require('../middlewares/auth');

//create a router
const authRouter = express.Router();

// match the router
// public routes
authRouter.post('/register',authController.registerUser)
authRouter.post('/login',authController.loginUSer)

// protected routes
authRouter.post('/me',isAuthenticated,authController.me)
authRouter.post('/logout',isAuthenticated,authController.logoutUser)

// export the router
module.exports =authRouter;