var userService = {};
var dbConn = require('./../inc/db_connection');
var dbQuery = require('./../inc/db_queries');

userService.postUserLogin = function(req, res) {
    dbConn.getDbConnection(dbQuery.postUserLogin, req, res);
};

userService.deleteUser = function(req, res) {
    dbConn.getDbConnection(dbQuery.deleteUser, req, res);
}
module.exports = userService;