const express = require('express');
const userRoutes = express.Router();
const checkAuthentication = require('../middlewares/checkAuthentication')

//@Controllers
const {createUser,getUsers, login} = require('../controllers/userController');


userRoutes.post('/users',createUser)
userRoutes.get('/users',checkAuthentication,getUsers)
userRoutes.post('/users/login',login)


module.exports=userRoutes