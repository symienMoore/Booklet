var User = require('../models/User');
var Book = require('../models/Book');
var jwt = require('jsonwebtoken');
var verify = require('../config/verify');

exports.registerUser = async  (req, res) => {
  try {
    const url = req.protocol + '://' + req.get("host");
    await User.create({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      imagePath:  url + "/user-images/" + req.file.filename
    })
    res.send("user added!")
  } catch (error) {
    res.send(error)
    console.log(error)
  }
    
}

exports.userSignIn = async function(req, res) {
    if(req.body.email && req.body.password){
        await User.authenticate(req.body.email, req.body.password, (err, user) => {
          if(err || !user){
            res.status(400).send({message: 'no user!'});
          } else if (user) {
            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN);
            res.header('authtoken', token).send({token});
          }
      });
    } else {
      console.log("email and password are required")
      res.status(400).send({error: "email and password are required!"});
    }
}

exports.getUserProfile = async (req, res) => {
  try {
    user = req.user.id;
    await User.findOne({_id: user}).then(async (user) => {
      await res.send(user)
      console.log(user)
    })
  } catch (error) {
    data = {err: error.message, status: 500}
    res.send(data)
    console.log(data)
  }   
}


exports.getUserById = async (req, res) => {
  try {
    await User.findById({ _id: req.user.id }).then((user) => {
      console.log(user)
      res.send(user)
    })
  } catch (err) {
    data = {
      msg: "could not find user",
      status: 400,
      error: err
    }
     console.log(data)
  }
}

exports.getAllUsers = async (req, res) => {
  try {
    await User.find().then((users) => {
      res.send(users)
    })
  } catch (error) {
    res.send(error)
  }
}

exports.getBookByUser = async (req, res) => {
  try {
     const books = await Book.find({ user: req.user.id })
      res.send(books)
  } catch (err) {
      res.send(err)
  }
}

