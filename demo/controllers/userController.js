  var userService = require('../services/userService');
  var userController = {};

  // login
  // POST: http://localhost:3000/users/
  userController.postUserLogin = function(req, res) {
      console.log("user Controller");
      var userName = req.body.user_name;
      var userPassword = req.body.user_password;
      var userEmail = req.body.user_email;
      if (userName == null || userName == '' || userPassword == null || userPassword == '' || userEmail == null || userEmail == '') {
          res.json({
              'success': false,
              'msg': 'Bad Input: Missing login data.'
          });
      } else {
          userService.postUserLogin(req, res);
      }
  };

  userController.deleteUser = function(req, res) {
      var userId = req.params.userId;
      if (userId == null || userId == '') {
          res.json({
              'success': false,
              'msg': 'Bad Input: Missing User Delete data.'
          });
      } else {
          userService.deleteUser(req, res);
      }
  };

  module.exports = userController;