var User = require('../models/User');
var jwt = require('jsonwebtoken');
var verify = require('../config/verify');

exports.registerUser = (req, res, next) => {
  try {
    User.create(req.body).then((User) => {
      return res.send(User._id);
 });
  } catch (error) {
    res.send(error)
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
    await User.findById({_id: user}).then(async (user) => {
      await res.send(user)
      console.log(user)
    })
  } catch (error) {
    data = {err: error.message, status: 500}
    res.send(data)
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

