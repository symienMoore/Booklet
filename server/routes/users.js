var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.controller");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/register", controller.registerUser)
router.post("/login", controller.userSignIn)

module.exports = router;
