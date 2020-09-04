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
const multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })




router.get('/book-test', verify, controller.bookTest);
router.post('/add-book', verify, multer({ storage: storage }).single("image"), controller.createBook);
router.get('/all-books', verify, controller.getAllBooks);
router.get('/:id', verify, controller.getBookById);
module.exports = router;