var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.controller");


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/register", controller.test)

module.exports = router;
