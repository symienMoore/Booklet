var User = require('../models/User');
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
            res.send({message: 'no user!'});
          } else if(user){
            const token = jwt.sign({_id: user._id}, process.env.SECRET_TOKEN);
            res.header('authtoken', token).send({token});
            return; 
          }
        });
      }else{
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
