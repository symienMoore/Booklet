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
var controller = require('../controllers/book.controller');
var verify = require('../config/verify');

router.get('/book-test', verify, controller.bookTest);
router.post('/add-book', verify, creatBook )

module.exports = router;