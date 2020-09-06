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
const { verify } = require('jsonwebtoken');


// post requests
router.post("/register", controller.registerUser)
router.post("/login", controller.userSignIn)


// get requests
router.get("/profile", verify, controller.getUserProfile)

module.exports = router;
