var express = require('express');
var userRouter = express.Router();
var userController = require('../controllers/userController');


// login
// POST: http://localhost:3000/users/
userRouter.post('/', userController.postUserLogin);

userRouter.delete('/:userId', userController.deleteUser)

module.exports = userRouter;