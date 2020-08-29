var User = require('../models/User.model');
var jwt = require('jsonwebtoken');
var verify = require('../config/verify');

exports.registerUser = (req, res, next) => {
    User.create(req.body).then((User) => {
         return res.send(User._id);
    });
}

exports.userSignIn = async function(req, res, next) {
    if(req.body.email && req.body.password){
        await User.authenticate(req.body.email, req.body.password, (err, user) => {
          if(err || !user){
            var err = new Error('wrong email or password');
            err.status = 401;
            res.send({message: 'no user!'});
            return next(err)
          } else if(user){
            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN);
            res.header('authtoken', token).send({token});
            // res.send({token});
            console.log(token);
            return; 
          }
        });
      }else{
        var err = new Error('email and password are required');
        err.status = 401;
        return res.send({error: "email and password are required!"});
      }
}

exports.getUserProfile = async (req, res) => { 
  user = req.user.id;
  await User.findById({_id: user}).then(async (user) => {
    await res.send(user)
    console.log(user)
  })
}
