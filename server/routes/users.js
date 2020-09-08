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
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'user-images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })

// post requests
router.post("/register", multer({ storage: storage }).single("image"), controller.registerUser)
router.post("/login", controller.userSignIn)


// get requests
router.get("/profile", verify, controller.getUserProfile)
router.get("/all-users", verify, controller.getAllUsers)

 
module.exports = router;
