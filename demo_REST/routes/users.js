var express = require('express');
var userRouter = express.Router();

var dbConn = require('./../inc/db_connection');
var dbQuery = require('./../inc/db_queries');

// GET: http://localhost:3000/users/
userRouter.get('/', function(req, res) {
    dbConn.getDbConnection(dbQuery.getAllUsers, req, res);
});

// register
// POST: http://localhost:3000/users/register/
userRouter.post('/register/', function(req, res) {
    var userName = req.body.user_name;
    var userPassword = req.body.user_password;
    var userEmail = req.body.user_email;
    if (userName == null || userName == '' || userPassword == null || userPassword == '' || userEmail == null || userEmail == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing login data.'
        });
    } else {
        dbConn.getDbConnection(dbQuery.postUserRegister, req, res);
    }
});

// login
// POST: http://localhost:3000/users/login/
userRouter.post('/login/', function(req, res) {
    var userName = req.body.user_name;
    var userPassword = req.body.user_password;
    if (userName == null || userName == '' || userPassword == null || userPassword == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing login data.'
        });
    } else {
        dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
    }
});

// update (any field)
// PUT: http://localhost:3000/users/
userRouter.put('/:user_id', function(req, res) {
    var userId = req.params.user_id;
    var type = req.body.type;
    var value = req.body.value;
    console.log(type);
    console.log(value);
    if (userId == null || userId == '' || value == null || value == '' || type == null || type == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing login data.'
        });
    } else {
        dbConn.getDbConnection(dbQuery.postUserUpdate, req, res);
    }
});

// update email
// PUT: http://localhost:3000/users/
userRouter.put('/email', function(req, res) {
    var userName = req.body.user_name;
    var userEmail = req.body.user_email;
    if (userName == null || userName == '' || userEmail == null || userEmail == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing Email or userName data.'
        });
    } else {
        dbConn.getDbConnection(dbQuery.postUserEmailUpdate, req, res);
    }
});

// delete
// DELETE: http://localhost:3000/users/{user_id}
userRouter.delete('/:user_id', function(req, res) {
    var userId = req.params.user_id;

    if (userId == null || userId == '') {
        res.json({
            'success': false,
            'msg': 'Bad Input: Missing login data.'
        });
    } else {
        dbConn.getDbConnection(dbQuery.deleteUser, req, res);
    }
});

module.exports = userRouter;