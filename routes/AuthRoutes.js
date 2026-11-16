// import express
const express = require('express');
const authController = require('../controllers/authControllers');

//create a router
const authRouter = express.Router();

// match the router

authRouter.post('/register',authController.registerUser)
authRouter.post('/login',authController.loginUSer)

// export the router
module.exports =authRouter;