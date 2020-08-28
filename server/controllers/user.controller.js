var express = require('express');

exports.test = (req, res) => {
    console.log("test")
    res.send("this is a test")
}