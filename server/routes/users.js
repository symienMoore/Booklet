/********** routes ***********/
/*
    kept seperate for orginizational
    purposes, in an attempt to keep 
    backend files as structured as
    possible.

    -symi
*/

var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.controller");



router.post("/register", controller.registerUser)
router.post("/login", controller.userSignIn)

module.exports = router;
